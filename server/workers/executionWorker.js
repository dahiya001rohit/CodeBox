const { Worker } = require('bullmq');
const redis = require('../services/redis');
const { executeCode } = require('../services/executor');
const { QUEUE_NAME } = require('../services/queue');
const { QUEUE_LIMITS } = require('../utils/constants');

function createWorker(io) {
  const worker = new Worker(
    QUEUE_NAME,
    async (job) => {
      // job.data contains { executionId, sessionId, language, code }
      await executeCode(job.data, io);
    },
    {
      connection: redis,
      concurrency: QUEUE_LIMITS.MAX_CONCURRENT,
    }
  );

  worker.on('completed', (job) => {
    console.log(`Job completed [${job.data.executionId}]`);
  });

  worker.on('failed', (job, err) => {
    console.error(`Job failed [${job?.data?.executionId}]: ${err.message}`);
  });

  worker.on('error', (err) => {
    console.error(`Worker error: ${err.message}`);
  });

  return worker;
}

module.exports = { createWorker };
