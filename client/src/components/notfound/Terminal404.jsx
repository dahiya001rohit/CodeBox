export default function Terminal404() {
  return (
    <div className="w-full max-w-[560px] bg-[#0e0e0e] overflow-hidden border border-[#584237]/15">
      {/* Terminal header */}
      <div className="bg-[#1c1b1b] px-4 py-2 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF4444]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFB68E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#22C55E]"></div>
        </div>
        <div className="text-[11px] text-[#666666] font-['JetBrains_Mono']">
          codebox — bash — 80x24
        </div>
        <div className="w-12"></div>
      </div>

      {/* Terminal body */}
      <div className="p-7 font-['JetBrains_Mono'] leading-relaxed">
        <div className="mb-2 text-[#666666] flex gap-2">
          <span className="text-[#f5761a]">$</span>
          <span>node server.js --find-route /this-page</span>
        </div>
        <div className="mb-4 text-[#ffb4ab]">Error: Route not found</div>
        <div className="mb-6">
          <div className="text-[28px] font-bold text-[#e5e2e1] leading-tight">
            Process exited
          </div>
          <div className="text-[28px] font-bold text-[#e5e2e1] leading-tight">
            with code 404.
          </div>
        </div>
        <div className="mb-8 text-[#666666]">
          // The page you&apos;re looking for doesn&apos;t exist.
        </div>
        <div className="flex items-center gap-1">
          <span className="text-[#f5761a]">$</span>
          <div className="w-2.5 h-5 bg-[#f5761a] cursor-blink"></div>
        </div>
      </div>
    </div>
  );
}
