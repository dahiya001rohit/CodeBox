const features = [
  {
    label: 'MONACO EDITOR',
    description: 'Full VS Code editor in the browser. Syntax highlighting, IntelliSense, keyboard shortcuts.',
  },
  {
    label: 'REAL-TIME OUTPUT',
    description: 'stdout and stderr stream line-by-line as code runs. No waiting for process to finish.',
  },
  {
    label: 'DOCKER ISOLATED',
    description: 'Every run gets a fresh container. No shared state. No persistence between runs.',
  },
  {
    label: 'MULTI-LANGUAGE',
    description: 'JavaScript (Node.js 20) and Python 3.11 supported today. More runtimes coming soon.',
  },
];

export default function FeatureCards() {
  return (
    <section style={{
      borderTop: '1px solid #1E1E1E',
      backgroundColor: '#111111',
      padding: '80px 0',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            fontSize: '24px',
            color: '#F2F0EC',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            marginBottom: '10px',
          }}>
            FEATURES
          </h2>
          <div style={{ width: '32px', height: '2px', backgroundColor: '#F5761A' }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1px',
          backgroundColor: '#1E1E1E',
          border: '1px solid #1E1E1E',
        }}>
          {features.map((f) => (
            <div
              key={f.label}
              style={{
                padding: '28px 24px',
                backgroundColor: '#111111',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                fontWeight: 700,
                color: '#F5761A',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
              }}>
                {f.label}
              </span>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '13px',
                color: '#666666',
                lineHeight: 1.6,
              }}>
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
