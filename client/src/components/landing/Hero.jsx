import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section style={{
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '120px 24px 96px',
      textAlign: 'center',
    }}>
      <p style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '11px',
        color: '#444444',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        marginBottom: '24px',
      }}>
        // SANDBOXED CODE EXECUTION IN THE BROWSER
      </p>

      <h1 style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontWeight: 800,
        fontSize: 'clamp(48px, 8vw, 96px)',
        color: '#F2F0EC',
        letterSpacing: '-0.04em',
        lineHeight: 1,
        marginBottom: '28px',
      }}>
        Write code.<br />Run it.
      </h1>

      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '17px',
        color: '#666666',
        lineHeight: 1.7,
        maxWidth: '560px',
        margin: '0 auto 48px',
      }}>
        Sandboxed execution in isolated Docker containers. Real-time output streamed via WebSocket. No setup required.
      </p>

      <button
        onClick={() => navigate('/editor')}
        style={{
          padding: '0 36px',
          height: '52px',
          backgroundColor: '#F5761A',
          color: '#0A0A0A',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '14px',
          fontWeight: 700,
          letterSpacing: '0.04em',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.1)'}
        onMouseLeave={e => e.currentTarget.style.filter = 'none'}
      >
        Start Coding →
      </button>
    </section>
  );
}
