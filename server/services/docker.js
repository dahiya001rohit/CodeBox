require('dotenv').config();

const Dockerode = require('dockerode');

const docker = new Dockerode({ socketPath: '/var/run/docker.sock' });

async function checkDockerConnection() {
  try {
    await docker.ping();
    return true;
  } catch {
    throw new Error('Docker daemon unreachable');
  }
}

module.exports = docker;
module.exports.checkDockerConnection = checkDockerConnection;
