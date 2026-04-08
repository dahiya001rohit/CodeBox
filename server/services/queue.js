const { Queue } = require('bullmq');
const connection = require('./redisConnection');

const QUEUE_NAME = 'code-execution';

const queue = new Queue(QUEUE_NAME, {
  connection,
});

module.exports = queue;
module.exports.QUEUE_NAME = QUEUE_NAME;
