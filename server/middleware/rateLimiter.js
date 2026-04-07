const redis = require('../services/redis');

const RATE_LIMIT_MAX = 30;
const RATE_LIMIT_WINDOW_SECONDS = 15 * 60;

async function rateLimiter(socket, next) {
  const ip = socket.handshake.address;
  const key = `rate:${ip}`;

  const count = await redis.incr(key);

  // Set the expiry window only on the first request so the TTL isn't reset on every call
  if (count === 1) {
    await redis.expire(key, RATE_LIMIT_WINDOW_SECONDS);
  }

  if (count > RATE_LIMIT_MAX) {
    return next(new Error('Rate limit exceeded — 30 executions per 15 minutes'));
  }

  next();
}

module.exports = rateLimiter;
