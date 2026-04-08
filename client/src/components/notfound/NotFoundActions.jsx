export default function NotFoundActions() {
  return (
    <div className="flex gap-4 mt-10">
      <button className="bg-[#f5761a] text-[#532200] px-8 py-3 font-['JetBrains_Mono'] font-bold flex items-center gap-2 hover:scale-95 transition-all">
        → Go Home
      </button>
      <button className="border border-[#584237]/40 text-[#ffb68e] px-8 py-3 font-['JetBrains_Mono'] font-bold hover:bg-[#1c1b1b] transition-all">
        Open Editor
      </button>
    </div>
  );
}
