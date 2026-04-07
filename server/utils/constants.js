const LANGUAGES = {
  node: {
    id: 'node',
    name: 'JavaScript (Node.js 20)',
    image: 'node:20-alpine',
    command: (filename) => ['node', `/sandbox/${filename}`],
    fileExtension: '.js',
    defaultCode: 'console.log("Hello, CodeBox!");',
    monacoLanguage: 'javascript',
  },
  python: {
    id: 'python',
    name: 'Python 3.11',
    image: 'python:3.11-alpine',
    command: (filename) => ['python3', `/sandbox/${filename}`],
    fileExtension: '.py',
    defaultCode: 'print("Hello, CodeBox!")',
    monacoLanguage: 'python',
  },
};

const EXECUTION_LIMITS = {
  TIMEOUT_MS: 10000,
  MEMORY_BYTES: 50 * 1024 * 1024,
  CPU_NANO: 0.5 * 1e9,
  PIDS_LIMIT: 50,
  OUTPUT_MAX_BYTES: 1 * 1024 * 1024,
  TMPFS_SIZE: '10m',
};

const QUEUE_LIMITS = {
  MAX_CONCURRENT: 5,
  MAX_QUEUE_SIZE: 50,
};

module.exports = { LANGUAGES, EXECUTION_LIMITS, QUEUE_LIMITS };
