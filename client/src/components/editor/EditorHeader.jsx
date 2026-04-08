import { useNavigate } from 'react-router-dom';
import { LANGUAGES } from '../../utils/constants';

export default function EditorHeader({
  language,
  onLanguageChange,
  status,
  onRun,
  onKill,
  onClear,
}) {
  const navigate = useNavigate();
  const langOptions = Object.values(LANGUAGES);
  const isRunning = status === 'running' || status === 'queued';

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 50,
      height: '52px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px',
      backgroundColor: '#131313',
      borderBottom: '1px solid #1E1E1E',
    }}>
      {/* Left: logo + divider + language selector */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
        <button
          onClick={() => navigate('/')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '0 12px 0 0',
          }}
        >
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '13px',
            fontWeight: 800,
            color: '#F5761A',
          }}>
            &gt;_
          </span>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '13px',
            fontWeight: 700,
            color: '#F2F0EC',
            letterSpacing: '0.06em',
          }}>
            CODEBOX
          </span>
        </button>

        <div style={{ width: '1px', height: '20px', backgroundColor: '#1E1E1E', margin: '0 12px' }} />

        {/* Language dropdown */}
        <div style={{ position: 'relative' }}>
          <select
            value={language}
            onChange={e => onLanguageChange(e.target.value)}
            style={{
              appearance: 'none',
              backgroundColor: '#1A1A1A',
              border: '1px solid #282828',
              color: '#F2F0EC',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px',
              height: '32px',
              padding: '0 32px 0 12px',
              cursor: 'pointer',
              borderRadius: '4px',
              outline: 'none',
            }}
          >
            {langOptions.map(l => (
              <option key={l.id} value={l.id}>{l.name.toUpperCase()}</option>
            ))}
          </select>
          <span style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#3A3A3A',
            fontSize: '14px',
            pointerEvents: 'none',
          }}>▾</span>
        </div>
      </div>

      {/* Right: clear, kill, run */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <button
          onClick={onClear}
          style={{
            background: 'none',
            border: '1px solid #282828',
            color: '#5A5A5A',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            fontWeight: 600,
            height: '32px',
            padding: '0 14px',
            cursor: 'pointer',
            borderRadius: '4px',
            letterSpacing: '0.04em',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = '#F2F0EC'; e.currentTarget.style.backgroundColor = '#1A1A1A'; }}
          onMouseLeave={e => { e.currentTarget.style.color = '#5A5A5A'; e.currentTarget.style.backgroundColor = 'transparent'; }}
        >
          Clear
        </button>

        {isRunning && (
          <button
            onClick={onKill}
            style={{
              background: 'none',
              border: '1px solid #FF5555',
              color: '#FF5555',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              fontWeight: 600,
              height: '32px',
              padding: '0 14px',
              cursor: 'pointer',
              borderRadius: '4px',
              letterSpacing: '0.04em',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,85,85,0.08)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            Kill
          </button>
        )}

        <button
          onClick={onRun}
          disabled={isRunning}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: isRunning ? '#8A4410' : '#F5761A',
            color: '#0A0A0A',
            border: 'none',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '12px',
            fontWeight: 700,
            height: '32px',
            padding: '0 18px',
            cursor: isRunning ? 'not-allowed' : 'pointer',
            borderRadius: '4px',
            letterSpacing: '0.04em',
            opacity: isRunning ? 0.7 : 1,
          }}
          onMouseEnter={e => { if (!isRunning) e.currentTarget.style.filter = 'brightness(1.1)'; }}
          onMouseLeave={e => { e.currentTarget.style.filter = 'none'; }}
        >
          <span style={{ fontSize: '14px', lineHeight: 1 }}>▶</span>
          {isRunning ? 'Running...' : 'Run'}
        </button>
      </div>
    </header>
  );
}
