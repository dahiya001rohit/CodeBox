const { PassThrough } = require('stream');
const docker = require('./docker');
const { createContainer, startContainer, killContainer, removeContainer } = require('./containerManager');
const { createTempFile, cleanupTempFile } = require('./fileManager');
const { EXECUTION_LIMITS } = require('../utils/constants');
const { formatDuration } = require('../utils/helpers');

async function executeCode(job, io) {
  const { executionId, sessionId, language, code } = job;
  const startTime = Date.now();

  // Declared outside try so finally can always reach them
  let container = null;
  let timeoutId = null;

  try {
    // 1. Notify client execution is starting
    io.to(sessionId).emit('execution-started', { executionId });

    // 2. Write code to a temp file on disk
    const tempFilePath = await createTempFile(executionId, language, code);

    // 3. Create the isolated container (not started yet)
    container = await createContainer(language, executionId, tempFilePath);

    // 4. Track cumulative output size to enforce the 1MB cap
    let outputSize = 0;
    let outputTruncated = false;

    // 5. Attach to container streams BEFORE starting so no output is missed.
    //    demuxStream splits the multiplexed Docker stream into separate stdout/stderr.
    const stdoutStream = new PassThrough();
    const stderrStream = new PassThrough();

    const attachStream = await container.attach({ stream: true, stdout: true, stderr: true });
    docker.modem.demuxStream(attachStream, stdoutStream, stderrStream);

    // 6. Forward stdout chunks to the client in real time
    stdoutStream.on('data', (chunk) => {
      if (outputSize >= EXECUTION_LIMITS.OUTPUT_MAX_BYTES) {
        outputTruncated = true;
        return;
      }
      const text = chunk.toString('utf8');
      outputSize += Buffer.byteLength(text, 'utf8');
      io.to(sessionId).emit('output', { executionId, stream: 'stdout', data: text });
    });

    // 7. Forward stderr chunks to the client in real time
    stderrStream.on('data', (chunk) => {
      if (outputSize >= EXECUTION_LIMITS.OUTPUT_MAX_BYTES) {
        outputTruncated = true;
        return;
      }
      const text = chunk.toString('utf8');
      outputSize += Buffer.byteLength(text, 'utf8');
      io.to(sessionId).emit('output', { executionId, stream: 'stderr', data: text });
    });

    // 8. Start the container
    await startContainer(container);

    // 9. Hard-kill the container if it exceeds the time limit
    timeoutId = setTimeout(async () => {
      await killContainer(container);
      io.to(sessionId).emit('execution-timeout', { executionId });
    }, EXECUTION_LIMITS.TIMEOUT_MS);

    // 10. Block until the container process exits
    const [exitData] = await container.wait();
    clearTimeout(timeoutId);

    // 11. Compute final metrics
    const exitCode = exitData.StatusCode;
    const duration = formatDuration(Date.now() - startTime);

    // 12. Append a truncation notice if output was cut off
    if (outputTruncated) {
      io.to(sessionId).emit('output', {
        executionId,
        stream: 'stdout',
        data: '\n[Output truncated — exceeded 1MB limit]',
      });
    }

    // 13. Signal completion to the client
    io.to(sessionId).emit('execution-complete', { executionId, exitCode, duration });
  } catch (err) {
    console.error(`Execution error [${executionId}]: ${err.message}`);
    io.to(sessionId).emit('execution-error', { executionId, error: err.message });
  } finally {
    // 14. Always clean up — temp files and container must never leak
    if (timeoutId) clearTimeout(timeoutId);
    await cleanupTempFile(executionId);
    if (container) await removeContainer(container);
  }
}

module.exports = { executeCode };
