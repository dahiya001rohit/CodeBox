export default function NotFoundNav() {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-6 h-16 z-50 bg-[#131313]/80 backdrop-blur-md font-['JetBrains_Mono'] tracking-tighter">
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold tracking-tighter text-[#f5761a]">
          &gt;_ CodeBox
        </span>
      </div>
      <button className="bg-transparent border border-[#1E1E1E] text-[#666666] px-4 py-2 font-bold hover:bg-white/5 duration-100 transition-all">
        Back to Home
      </button>
    </nav>
  );
}
