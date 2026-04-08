export default function EditorNav() {
  return (
    <header
      style={{ borderBottomColor: 'var(--border)', backgroundColor: '#131313' }}
      className="fixed top-0 w-full z-50 border-b flex justify-between items-center px-4 h-[52px]"
    >
      <div className="flex items-center gap-4">
        <div style={{ fontFamily: 'var(--font-mono)' }} className="text-[15px] font-bold tracking-[0.05em]">
          <span style={{ color: 'var(--accent)' }}>&gt;_</span>{' '}
          <span style={{ color: 'var(--text-primary)' }}>CODEBOX</span>
        </div>
        <div style={{ backgroundColor: 'var(--border)' }} className="h-6 w-px"></div>
        {/* Language selector */}
        <div
          style={{
            backgroundColor: '#1A1A1A',
            borderColor: 'var(--border-bright)',
            fontFamily: 'var(--font-mono)',
          }}
          className="flex items-center border px-3 h-8 gap-2 cursor-pointer hover:bg-[#222222] transition-colors"
        >
          <span style={{ color: 'var(--text-primary)' }} className="text-[13px]">
            JAVASCRIPT (NODE.JS 20)
          </span>
          <span style={{ color: 'var(--text-muted)' }} className="text-[16px]">▾</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          style={{
            color: '#5A5A5A',
            borderColor: 'var(--border-bright)',
            fontFamily: 'var(--font-mono)',
          }}
          className="bg-transparent border px-3 h-8 text-[12px] font-medium hover:bg-[#1A1A1A] hover:text-[#F2F0EC] transition-colors"
        >
          Clear
        </button>
        <button
          style={{ color: 'var(--stderr)', borderColor: 'var(--stderr)', fontFamily: 'var(--font-mono)' }}
          className="bg-transparent border px-3 h-8 text-[12px] font-medium hover:bg-[#FF5555]/5 transition-colors"
        >
          Kill
        </button>
        <button
          style={{
            backgroundColor: 'var(--accent)',
            color: 'var(--bg)',
            fontFamily: 'var(--font-mono)',
          }}
          className="px-5 h-8 text-[13px] font-bold flex items-center gap-1.5 hover:brightness-110 transition-all"
        >
          <span className="text-[18px] leading-none">▶</span>
          Run
        </button>
      </div>
    </header>
  );
}
