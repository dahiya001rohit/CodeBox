require('dotenv').config();

const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

const healthRouter = require('./routes/health');
const registerSocketHandlers = require('./socket/handler');
const { createWorker } = require('./workers/executionWorker');
const { checkDockerConnection } = require('./services/docker');
const redis = require('./services/redis');
const rateLimiter = require('./middleware/rateLimiter');

const PORT = process.env.PORT || 3000;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: CLIENT_URL,
    methods: ['GET', 'POST'],
  },
});

// ─── Express middleware ──────────────────────────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── Routes ─────────────────────────────────────────────────────────────────
app.use('/api', healthRouter);

// ─── Socket.io middleware + handlers ────────────────────────────────────────
io.use(rateLimiter);
registerSocketHandlers(io);

// ─── BullMQ worker ──────────────────────────────────────────────────────────
createWorker(io);

// ─── Graceful shutdown ───────────────────────────────────────────────────────
function shutdown() {
  console.log('CodeBox server shutting down');
  server.close(() => {
    redis.disconnect();
    process.exit(0);
  });
}

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

// ─── Startup ─────────────────────────────────────────────────────────────────
async function startServer() {
  try {
    await checkDockerConnection();
    console.log('✓ Docker connected');
    // Redis logs itself via the 'ready' event in services/redis.js

    server.listen(PORT, () => {
      console.log(`✓ CodeBox server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('✗ Startup failed:', err.message);
    process.exit(1);
  }
}

startServer();
