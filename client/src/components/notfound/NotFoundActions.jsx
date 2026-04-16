import { useNavigate } from 'react-router-dom';

export default function NotFoundActions() {
  const navigate = useNavigate();

  return (
    <>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 'clamp(64px, 12vw, 120px)',
        fontWeight: 800,
        color: '#1E1E1E',
        lineHeight: 1,
        letterSpacing: '-0.04em',
        marginBottom: '16px',
      }}>
        404
      </div>

      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '15px',
        color: '#666666',
        marginBottom: '32px',
        textAlign: 'center',
      }}>
        This page doesn't exist.
      </p>

      <div style={{ display: 'flex', gap: '12px' }}>
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '0 24px',
            height: '40px',
            backgroundColor: '#F5761A',
            color: '#0A0A0A',
            border: 'none',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.04em',
            cursor: 'pointer',
            borderRadius: '4px',
          }}
          onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.1)'}
          onMouseLeave={e => e.currentTarget.style.filter = 'none'}
        >
          ← Home
        </button>
        <button
          onClick={() => navigate('/editor')}
          style={{
            padding: '0 24px',
            height: '40px',
            backgroundColor: 'transparent',
            color: '#F2F0EC',
            border: '1px solid #282828',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.04em',
            cursor: 'pointer',
            borderRadius: '4px',
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#161616'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          Open Editor →
        </button>
      </div>
    </>
  );
}
