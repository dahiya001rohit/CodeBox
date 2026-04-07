const express = require('express');
const { checkDockerConnection } = require('../services/docker');
const redis = require('../services/redis');
const { LANGUAGES } = require('../utils/constants');

const router = express.Router();

router.get('/health', async (req, res) => {
  let dockerOk = false;
  let redisOk = false;

  try {
    await checkDockerConnection();
    dockerOk = true;

    await redis.ping();
    redisOk = true;

    res.json({
      status: 'ok',
      docker: true,
      redis: true,
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    res.status(503).json({
      status: 'error',
      docker: dockerOk,
      redis: redisOk,
      error: err.message,
    });
  }
});

router.get('/languages', (req, res) => {
  const languages = Object.values(LANGUAGES).map((lang) => ({
    id: lang.id,
    name: lang.name,
    monacoLanguage: lang.monacoLanguage,
    defaultCode: lang.defaultCode,
  }));

  res.json(languages);
});

module.exports = router;
