import { LANGUAGES } from '../../utils/constants';

export default function StatusBar({ isConnected, status, duration, language }) {
  const langName = LANGUAGES[language]?.name || language;

  const statusLabel = {
    idle: null,
    queued: '⏳ Queued',
    running: '● Running',
    done: duration ? `✓ Completed in ${duration}` : '✓ Done',
    error: '✗ Error',
  }[status];

  const statusColor = {
    idle: '#3A3A3A',
    queued: '#F5761A',
    running: '#4ADE80',
    done: '#4ADE80',
    error: '#FF5555',
  }[status];

  return (
    <footer style={{
      position: 'fixed',
      bottom: 0,
      width: '100%',
      height: '26px',
      backgroundColor: '#0F0F0F',
      borderTop: '1px solid #1E1E1E',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px',
      zIndex: 50,
    }}>
      {/* Left */}
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: isConnected ? '#4ADE80' : '#FF5555',
          }} />
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            color: '#5A5A5A',
          }}>
            {isConnected ? 'Connected' : 'Disconnected'}
          </span>
        </div>

        {statusLabel && (
          <>
            <div style={{ width: '1px', height: '12px', backgroundColor: '#1E1E1E', margin: '0 16px' }} />
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              color: statusColor,
            }}>
              {statusLabel}
            </span>
          </>
        )}
      </div>

      {/* Right */}
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '11px',
          color: '#3A3A3A',
          padding: '0 12px',
        }}>
          {langName}
        </span>
        <div style={{ width: '1px', height: '12px', backgroundColor: '#1E1E1E' }} />
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '11px',
          color: '#3A3A3A',
          padding: '0 12px',
        }}>
          Ctrl+Enter to run
        </span>
      </div>
    </footer>
  );
}
