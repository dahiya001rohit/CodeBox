export default function NotFoundStatusBar() {
  return (
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
  );
}
