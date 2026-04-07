const { LANGUAGES } = require('./constants');

// nanoid v5 is ESM-only — dynamic import is required in a CommonJS context
async function generateExecutionId() {
  const { nanoid } = await import('nanoid');
  return nanoid(12);
}

// Returns duration as a fixed 2-decimal string, e.g. "0.34s" or "1.20s"
function formatDuration(ms) {
  return (ms / 1000).toFixed(2) + 's';
}

function isValidLanguage(language) {
  return Object.prototype.hasOwnProperty.call(LANGUAGES, language);
}

module.exports = { generateExecutionId, formatDuration, isValidLanguage };
