const docker = require('./docker');
const { LANGUAGES, EXECUTION_LIMITS } = require('../utils/constants');

async function createContainer(language, executionId, tempFilePath) {
  const languageConfig = LANGUAGES[language];

  try {
    const container = await docker.createContainer({
      Image: languageConfig.image,
      Cmd: languageConfig.command('code' + languageConfig.fileExtension),
      WorkingDir: '/sandbox',
      User: '1000:1000',
      NetworkDisabled: true,
      HostConfig: {
        Binds: [`${tempFilePath}:/sandbox/code${languageConfig.fileExtension}:ro`],
        Memory: EXECUTION_LIMITS.MEMORY_BYTES,
        MemorySwap: EXECUTION_LIMITS.MEMORY_BYTES,
        NanoCpus: EXECUTION_LIMITS.CPU_NANO,
        PidsLimit: EXECUTION_LIMITS.PIDS_LIMIT,
        NetworkMode: 'none',
        ReadonlyRootfs: true,
        Tmpfs: { '/tmp': `rw,noexec,nosuid,size=${EXECUTION_LIMITS.TMPFS_SIZE}` },
        CapDrop: ['ALL'],
        Privileged: false,
        AutoRemove: true,
      },
    });

    return container;
  } catch (err) {
    throw new Error(`Failed to create container for execution ${executionId}: ${err.message}`);
  }
}

async function startContainer(container) {
  try {
    await container.start();
  } catch (err) {
    throw new Error(`Failed to start container: ${err.message}`);
  }
}

// Never throws — container may already be exited when kill is called
async function killContainer(container) {
  try {
    await container.kill();
    console.log('Container killed');
  } catch {
    console.log('Container already exited');
  }
}

// Never throws — AutoRemove may have already removed the container
async function removeContainer(container) {
  try {
    await container.remove({ force: true });
  } catch (err) {
    console.error(`Container removal skipped: ${err.message}`);
  }
}

module.exports = { createContainer, startContainer, killContainer, removeContainer };
