const queue = require('../services/queue');
const { QUEUE_NAME } = require('../services/queue');
const redis = require('../services/redis');
const { killContainer } = require('../services/containerManager');
const { LANGUAGES, QUEUE_LIMITS } = require('../utils/constants');
const { generateExecutionId } = require('../utils/helpers');

function registerSocketHandlers(io) {
  io.on('connection', async (socket) => {
    // Each client gets their own private room — output is never broadcast
    const sessionId =
      socket.handshake.auth.sessionId || (await generateExecutionId());
    socket.join(sessionId);

    // Holds a reference to the running container so kill/disconnect can stop it
    socket.data.activeContainer = null;

    // ─── execute ────────────────────────────────────────────────────────────
    socket.on('execute', async ({ language, code }) => {
      // Input validation
      if (!LANGUAGES[language]) {
        socket.emit('execution-error', { error: 'Unsupported language' });
        return;
      }

      if (!code || code.trim().length === 0) {
        socket.emit('execution-error', { error: 'No code provided' });
        return;
      }

      if (Buffer.byteLength(code, 'utf8') > 100 * 1024) {
        socket.emit('execution-error', { error: 'Code exceeds 100KB limit' });
        return;
      }

      // Reject new jobs when the queue is at capacity
      const jobCounts = await queue.getJobCounts('wait', 'active');
      const totalJobs = jobCounts.wait + jobCounts.active;
      if (totalJobs >= QUEUE_LIMITS.MAX_QUEUE_SIZE) {
        socket.emit('execution-error', { error: 'Server busy — try again later' });
        return;
      }

      const executionId = await generateExecutionId();

      await queue.add(QUEUE_NAME, {
        executionId,
        sessionId,
        language,
        code,
      });

      // Let the client know where they are in the queue
      const waitingCounts = await queue.getJobCounts('wait');
      socket.emit('queue-position', { executionId, position: waitingCounts.wait });
    });

    // ─── kill ────────────────────────────────────────────────────────────────
    socket.on('kill', async ({ executionId }) => {
      try {
        if (socket.data.activeContainer) {
          await killContainer(socket.data.activeContainer);
          socket.data.activeContainer = null;
        }
      } catch (err) {
        // Kill handlers must never propagate — log and move on
        console.error(`Kill handler error [${executionId}]: ${err.message}`);
      }
    });

    // ─── disconnect ──────────────────────────────────────────────────────────
    socket.on('disconnect', async () => {
      console.log(`Client disconnected: ${sessionId}`);
      try {
        if (socket.data.activeContainer) {
          await killContainer(socket.data.activeContainer);
          socket.data.activeContainer = null;
        }
      } catch (err) {
        // Disconnect handlers must never propagate — log and move on
        console.error(`Disconnect cleanup error [${sessionId}]: ${err.message}`);
      }
    });
  });
}

module.exports = registerSocketHandlers;
