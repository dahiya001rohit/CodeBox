export default function Terminal404() {
  return (
    <div style={{
      width: '100%',
      maxWidth: '560px',
      backgroundColor: '#111111',
      border: '1px solid #1E1E1E',
      borderRadius: '4px',
      overflow: 'hidden',
      marginBottom: '32px',
    }}>
      {/* Title bar */}
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
  );
}
