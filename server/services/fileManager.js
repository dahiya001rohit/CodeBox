const path = require('path');
const fs = require('fs/promises');
const { generateExecutionId } = require('../utils/helpers');
const { LANGUAGES } = require('../utils/constants');

const TEMP_BASE_DIR = '/tmp/codebox';

async function createTempFile(executionId, language, code) {
  const extension = LANGUAGES[language].fileExtension;
  const execDir = path.join(TEMP_BASE_DIR, executionId);
  const filePath = path.join(execDir, `code${extension}`);

  await fs.mkdir(execDir, { recursive: true });
  await fs.writeFile(filePath, code, 'utf8');

  return filePath;
}

// Never throws — safe to call from finally blocks
async function cleanupTempFile(executionId) {
  const execDir = path.join(TEMP_BASE_DIR, executionId);
  try {
    await fs.rm(execDir, { recursive: true, force: true });
  } catch (err) {
    console.error(`Failed to clean up temp dir ${execDir}: ${err.message}`);
  }
}

module.exports = { createTempFile, cleanupTempFile };
