const { Queue } = require('bullmq');
const redis = require('./redis');

const QUEUE_NAME = 'code-execution';

const queue = new Queue(QUEUE_NAME, {
  connection: redis,
});

module.exports = queue;
module.exports.QUEUE_NAME = QUEUE_NAME;
