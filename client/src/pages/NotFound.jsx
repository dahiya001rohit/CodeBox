import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{
      height: '100%',
      backgroundColor: '#0A0A0A',
      color: '#F2F0EC',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Minimal nav */}
      <header style={{
        height: '52px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 24px',
        borderBottom: '1px solid #1E1E1E',
        backgroundColor: '#131313',
      }}>
        <button
          onClick={() => navigate('/')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '14px',
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
      </header>

      {/* Main content */}
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}>
        {/* Terminal block */}
        <div style={{
          width: '100%',
          maxWidth: '560px',
          backgroundColor: '#111111',
          border: '1px solid #1E1E1E',
          borderRadius: '4px',
          overflow: 'hidden',
          marginBottom: '32px',
        }}>
          {/* Terminal title bar */}
          <div style={{
            height: '36px',
            backgroundColor: '#161616',
            borderBottom: '1px solid #1E1E1E',
            display: 'flex',
            alignItems: 'center',
            padding: '0 16px',
            gap: '8px',
          }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FF5555' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#F5761A', opacity: 0.5 }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#4ADE80', opacity: 0.3 }} />
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              color: '#444444',
              marginLeft: '8px',
            }}>
              bash — codebox
            </span>
          </div>

          {/* Terminal output */}
          <div style={{
            padding: '24px',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '13px',
            lineHeight: 1.8,
          }}>
            <div style={{ color: '#3A3A3A' }}>$ cd /page/not/found</div>
            <div style={{ color: '#FF5555', marginTop: '4px' }}>
              bash: /page/not/found: No such file or directory
            </div>
            <div style={{ color: '#3A3A3A', marginTop: '8px' }}>$ echo $?</div>
            <div style={{ color: '#4ADE80', marginTop: '4px' }}>404</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px', marginTop: '8px' }}>
              <span style={{ color: '#F5761A' }}>$</span>
              <span style={{ color: '#F2F0EC', marginLeft: '6px' }}></span>
              <span className="cursor-blink" />
            </div>
          </div>
        </div>

        {/* Big 404 */}
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
      </main>

      {/* Status bar */}
      <footer style={{
        height: '26px',
        backgroundColor: '#0F0F0F',
        borderTop: '1px solid #1E1E1E',
        display: 'flex',
        alignItems: 'center',
        padding: '0 16px',
      }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '11px',
          color: '#3A3A3A',
        }}>
          exit code: 404
        </span>
      </footer>
    </div>
  );
}
