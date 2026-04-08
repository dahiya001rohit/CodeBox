const blocks = [
  {
    icon: '>_',
    title: 'BULLMQ JOB QUEUE',
    description: 'Execution requests queue through BullMQ. Max 5 containers run concurrently — server never overloads. Queue position shown in real time.',
    borderRight: true,
    borderBottom: true,
  },
  {
    icon: '⚡',
    title: 'SECURITY SANDBOXED',
    description: 'No network access. Read-only filesystem. PID limit of 50 prevents fork bombs. Memory bombs caught by 50MB hard cap. Capabilities fully dropped.',
    borderRight: false,
    borderBottom: true,
  },
  {
    icon: '⏱',
    title: 'TIMEOUT + KILL',
    description: 'Every execution has a hard 10 second limit. Infinite loops are killed automatically. Users can force-kill any running execution instantly.',
    borderRight: true,
    borderBottom: false,
  },
  {
    icon: '≋',
    title: 'RATE LIMITED',
    description: 'Redis-based rate limiting. 30 executions per 15 minutes per IP. Prevents abuse without blocking legitimate use.',
    borderRight: false,
    borderBottom: false,
  },
];

export default function CoreInfrastructure() {
  return (
    <section style={{
      borderTop: '1px solid #1E1E1E',
      backgroundColor: '#0A0A0A',
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
            CORE INFRASTRUCTURE
          </h2>
          <div style={{ width: '32px', height: '2px', backgroundColor: '#F5761A' }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        }}>
          {blocks.map((block) => (
            <div
              key={block.title}
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                borderRight: block.borderRight ? '1px solid #1E1E1E' : 'none',
                borderBottom: block.borderBottom ? '1px solid #1E1E1E' : 'none',
              }}
            >
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '22px',
                fontWeight: 700,
                color: '#F5761A',
              }}>
                {block.icon}
              </span>
              <h4 style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px',
                fontWeight: 700,
                color: '#F2F0EC',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}>
                {block.title}
              </h4>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: '#666666',
                lineHeight: 1.7,
              }}>
                {block.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
