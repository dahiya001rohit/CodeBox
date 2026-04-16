import { useCallback, useEffect, useRef, useState } from 'react';
import { useSocket } from './useSocket';

export function useExecution() {
  const { socket, isConnected } = useSocket();
  const [status, setStatus] = useState('idle'); // idle | queued | running | done | error
  const [output, setOutput] = useState([]);     // [{ stream: 'stdout'|'stderr'|'system', data }]
  const [duration, setDuration] = useState(null);
  const [queuePosition, setQueuePosition] = useState(null);
  const executionIdRef = useRef(null);

  useEffect(() => {
    if (!socket) return;

    function onQueuePosition({ executionId, position }) {
      executionIdRef.current = executionId;
      setStatus('queued');
      setQueuePosition(position);
    }

    function onExecutionStarted({ executionId }) {
      if (executionId !== executionIdRef.current) return;
      setStatus('running');
      setQueuePosition(null);
    }

    function onOutput({ executionId, stream, data }) {
      if (executionId !== executionIdRef.current) return;
      setOutput(prev => [...prev, { stream, data }]);
    }

    function onExecutionComplete({ executionId, exitCode, duration }) {
      if (executionId !== executionIdRef.current) return;
      setStatus('done');
      setDuration(duration);
      setOutput(prev => [
        ...prev,
        { stream: 'system', data: `\nProcess exited with code ${exitCode}` },
      ]);
    }

    function onExecutionError({ error }) {
      setStatus('error');
      setOutput(prev => [...prev, { stream: 'stderr', data: `Error: ${error}` }]);
    }

    function onExecutionTimeout({ executionId }) {
      if (executionId !== executionIdRef.current) return;
      setStatus('error');
      setOutput(prev => [...prev, { stream: 'stderr', data: 'Execution timed out (10s limit)' }]);
    }

    socket.on('queue-position', onQueuePosition);
    socket.on('execution-started', onExecutionStarted);
    socket.on('output', onOutput);
    socket.on('execution-complete', onExecutionComplete);
    socket.on('execution-error', onExecutionError);
    socket.on('execution-timeout', onExecutionTimeout);

    return () => {
      socket.off('queue-position', onQueuePosition);
      socket.off('execution-started', onExecutionStarted);
      socket.off('output', onOutput);
      socket.off('execution-complete', onExecutionComplete);
      socket.off('execution-error', onExecutionError);
      socket.off('execution-timeout', onExecutionTimeout);
    };
  }, [socket]);

  const runCode = useCallback((language, code) => {
    if (!isConnected) {
      setStatus('error');
      setOutput([
        { stream: 'system', data: '// Backend unavailable — this demo requires a Docker-enabled server.' },
        { stream: 'system', data: '// Clone the repo and run locally to execute code.' },
        { stream: 'system', data: '// See README for setup instructions.' },
      ]);
      return;
    }
    if (!socket) return;
    executionIdRef.current = null;
    setOutput([]);
    setDuration(null);
    setQueuePosition(null);
    setStatus('queued');
    socket.emit('execute', { language, code });
  }, [socket, isConnected]);

  const killCode = useCallback(() => {
    if (!socket) return;
    socket.emit('kill', { executionId: executionIdRef.current });
    setStatus('idle');
  }, [socket]);

  const clearOutput = useCallback(() => {
    setOutput([]);
    setDuration(null);
    setStatus('idle');
  }, []);

  return {
    isConnected,
    status,
    output,
    duration,
    queuePosition,
    runCode,
    killCode,
    clearOutput,
  };
}
