import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 50,
      height: '56px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      backgroundColor: 'rgba(10,10,10,0.92)',
      borderBottom: '1px solid #1E1E1E',
      backdropFilter: 'blur(8px)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 800,
          fontSize: '18px',
          color: '#F5761A',
          letterSpacing: '-0.03em',
        }}>
          &gt;_
        </span>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 700,
          fontSize: '15px',
          color: '#F2F0EC',
          letterSpacing: '0.02em',
        }}>
          CODEBOX
        </span>
      </div>

      <button
        onClick={() => navigate('/editor')}
        style={{
          padding: '0 20px',
          height: '34px',
          border: '1px solid #F5761A',
          backgroundColor: 'transparent',
          color: '#F5761A',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '12px',
          fontWeight: 700,
          letterSpacing: '0.05em',
          cursor: 'pointer',
          borderRadius: '4px',
        }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(245,118,26,0.08)'}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
      >
        Open Editor →
      </button>
    </nav>
  );
}
