require('dotenv').config();

const Redis = require('ioredis');

// maxRetriesPerRequest: null is required by BullMQ for blocking commands (BLPOP etc.)
const redis = new Redis(process.env.REDIS_URL, {
  maxRetriesPerRequest: null,
});

redis.on('ready', () => {
  console.log('✓ Redis connected');
});

redis.on('error', (err) => {
  console.error('✗ Redis error: ' + err.message);
});

module.exports = redis;
