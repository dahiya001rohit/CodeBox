require('dotenv').config();

const Redis = require('ioredis');

const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT, 10),
  password: process.env.REDIS_PASSWORD || undefined,
});

redis.on('ready', () => {
  console.log('✓ Redis connected');
});

redis.on('error', (err) => {
  console.error('✗ Redis error: ' + err.message);
});

module.exports = redis;
