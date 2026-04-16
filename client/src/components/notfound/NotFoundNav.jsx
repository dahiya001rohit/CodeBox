import { useNavigate } from 'react-router-dom';

export default function NotFoundNav() {
  const navigate = useNavigate();

  return (
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
  );
}
