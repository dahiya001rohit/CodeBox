import { useEffect, useRef } from 'react';

export default function OutputPanel({ output, status, queuePosition }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [output]);

  const isEmpty = output.length === 0;

  return (
    <div style={{
      width: '40%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#111111',
    }}>
      {/* Panel header */}
      <div style={{
        height: '36px',
        backgroundColor: '#131313',
        borderBottom: '1px solid #1E1E1E',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            fontWeight: 700,
            color: '#5A5A5A',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>
            OUTPUT
          </span>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            color: '#3A3A3A',
          }}>
            stdout + stderr
          </span>
        </div>
        {status === 'queued' && queuePosition !== null && (
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '10px',
            color: '#F5761A',
            letterSpacing: '0.06em',
          }}>
            Queue #{queuePosition}
          </span>
        )}
      </div>

      {/* Output content */}
      <div style={{
        flex: 1,
        overflow: 'auto',
        padding: '16px',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '13px',
        lineHeight: 1.8,
      }}>
        {isEmpty ? (
          <div style={{ color: '#3A3A3A' }}>
            {status === 'idle' ? '// Output will appear here' : ''}
            {status === 'queued' ? '// Waiting in queue...' : ''}
            {status === 'running' ? '// Running...' : ''}
          </div>
        ) : (
          <>
            {output.map((line, i) => (
              <div
                key={i}
                style={{
                  color: line.stream === 'stderr' ? '#FF5555'
                    : line.stream === 'system' ? '#3A3A3A'
                    : '#4ADE80',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-all',
                }}
              >
                {line.data}
              </div>
            ))}
            {status === 'running' && (
              <span className="cursor-blink" />
            )}
          </>
        )}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
