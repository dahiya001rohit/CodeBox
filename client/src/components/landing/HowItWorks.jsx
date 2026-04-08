const steps = [
  {
    number: '01',
    title: 'Write your code',
    description: 'Open the editor, pick your language, write anything. Syntax highlighting powered by Monaco — same editor as VS Code.',
  },
  {
    number: '02',
    title: 'Hit Run',
    description: 'A fresh Docker container spins up in milliseconds. Your code runs isolated — no network, no host access.',
  },
  {
    number: '03',
    title: 'See output instantly',
    description: 'stdout streams to your terminal in real time via WebSocket. stderr in red. Execution time shown on completion.',
  },
];

export default function HowItWorks() {
  return (
    <section style={{
      borderTop: '1px solid #1E1E1E',
      borderBottom: '1px solid #1E1E1E',
      backgroundColor: '#111111',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
      }}>
        {steps.map((step, i) => (
          <div
            key={step.number}
            style={{
              padding: '48px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              borderRight: i < steps.length - 1 ? '1px solid #1E1E1E' : 'none',
            }}
          >
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '36px',
              fontWeight: 800,
              color: '#F5761A',
              lineHeight: 1,
            }}>
              {step.number}
            </span>
            <h3 style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '14px',
              fontWeight: 700,
              color: '#F2F0EC',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}>
              {step.title}
            </h3>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              color: '#666666',
              lineHeight: 1.7,
            }}>
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
