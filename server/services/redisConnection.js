// Plain connection options for BullMQ (Queue + Worker).
// BullMQ creates its own internal connections from these options
// and sets maxRetriesPerRequest: null automatically.
require('dotenv').config();

const url = new URL(process.env.REDIS_URL || 'redis://127.0.0.1:6379');

module.exports = {
  host: url.hostname,
  port: parseInt(url.port, 10) || 6379,
  ...(url.password ? { password: decodeURIComponent(url.password) } : {}),
};
