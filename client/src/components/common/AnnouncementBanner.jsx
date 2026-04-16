import { useState } from 'react';

const STORAGE_KEY = 'codebox-banner-dismissed';

export default function AnnouncementBanner() {
  const [dismissed, setDismissed] = useState(
    () => localStorage.getItem(STORAGE_KEY) === 'true'
  );

  if (dismissed) return null;

  function handleDismiss() {
    localStorage.setItem(STORAGE_KEY, 'true');
    setDismissed(true);
  }

  return (
    <div style={{
      position: 'relative',
      zIndex: 200,
      width: '100%',
      backgroundColor: '#1A1A1A',
      borderBottom: '1px solid #F5761A',
      padding: '10px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      boxSizing: 'border-box',
    }}>
      <span style={{ fontSize: '14px', color: '#F5761A', lineHeight: 1 }}>⚠</span>

      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px' }}>
        <span style={{ color: '#F5761A', fontWeight: 700 }}>DEMO NOTICE — </span>
        <span style={{ color: '#F2F0EC' }}>
          This is a static frontend demo. The execution engine requires a Docker daemon and cannot run on free hosting platforms.
        </span>
        <span style={{ color: '#666666' }}> — </span>
        <a
          href="https://github.com/dahiya001rohit/codebox"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#F5761A',
            textDecoration: 'underline',
            cursor: 'pointer',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '12px',
          }}
        >
          View full source on GitHub →
        </a>
      </span>

      <button
        onClick={handleDismiss}
        style={{
          position: 'absolute',
          right: '16px',
          background: 'transparent',
          border: 'none',
          color: '#666666',
          fontSize: '16px',
          cursor: 'pointer',
          fontFamily: "'JetBrains Mono', monospace",
          lineHeight: 1,
          padding: '0',
        }}
      >
        ✕
      </button>
    </div>
  );
}
