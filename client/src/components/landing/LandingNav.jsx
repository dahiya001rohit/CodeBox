export default function LandingNav() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-outline bg-[#0A0A0A]/80 backdrop-blur-md flex justify-between items-center px-6 py-4">
      <div className="flex items-center gap-2">
        <span className="font-['JetBrains_Mono'] font-bold text-primary tracking-tighter text-xl">
          &gt;_ CodeBox
        </span>
      </div>
      <button className="px-5 py-2 border border-primary text-primary font-['JetBrains_Mono'] text-sm hover:bg-primary/5 transition-all active:opacity-80">
        Open Editor →
      </button>
    </nav>
  );
}
