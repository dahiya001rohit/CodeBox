export default function LandingFooter() {
  return (
    <footer className="w-full border-t border-outline bg-background mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-6 md:mb-0">
          <span
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}
            className="text-sm font-bold tracking-widest uppercase"
          >
            &gt;_ CodeBox Terminal
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-dimmed)' }}
            className="text-xs uppercase tracking-widest"
          >
            Built by Rohit
          </span>
          <a
            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
            className="hover:text-primary transition-colors text-sm"
            href="#"
          >
            &gt;_
          </a>
        </div>
      </div>
      <div className="text-center pb-8">
        <p
          style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
          className="text-[10px] uppercase tracking-[0.2em]"
        >
          © 2024 CodeBox Terminal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
