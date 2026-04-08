export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #1E1E1E',
      backgroundColor: '#0A0A0A',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '40px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '13px',
            fontWeight: 700,
            color: '#F5761A',
          }}>
            &gt;_
          </span>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '12px',
            fontWeight: 700,
            color: '#3A3A3A',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}>
            CodeBox
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            color: '#3A3A3A',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}>
            Built by Rohit
          </span>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            color: '#3A3A3A',
            letterSpacing: '0.05em',
          }}>
            © 2025
          </span>
        </div>
      </div>
    </footer>
  );
}
