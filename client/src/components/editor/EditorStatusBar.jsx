export default function EditorStatusBar() {
  return (
    <footer className="fixed bottom-0 w-full h-[26px] border-t border-[#1E1E1E] bg-[#0F0F0F] flex justify-between items-center px-4">
      {/* Left: connection + execution status */}
      <div className="flex items-center h-full">
        <div className="flex items-center gap-2">
          <span className="w-[6px] h-[6px] rounded-full bg-secondary"></span>
          <span className="font-['JetBrains_Mono'] text-[11px] text-[#5A5A5A]">Connected</span>
        </div>
        <div className="h-3 w-px bg-[#1E1E1E] mx-4"></div>
        <div className="font-['JetBrains_Mono'] text-[11px] text-secondary flex items-center gap-1.5">
          ● Completed in 0.34s
        </div>
      </div>

      {/* Right: language, shortcut hints, memory */}
      <div className="flex items-center h-full">
        <div className="text-[#3A3A3A] px-3 h-full flex items-center font-['JetBrains_Mono'] text-[11px]">
          Python 3.11
        </div>
        <div className="h-3 w-px bg-[#1E1E1E]"></div>
        <div className="text-[#3A3A3A] px-3 h-full flex items-center font-['JetBrains_Mono'] text-[11px]">
          Ctrl+Enter to run
        </div>
        <div className="h-3 w-px bg-[#1E1E1E]"></div>
        <div className="text-[#3A3A3A] px-3 h-full flex items-center font-['JetBrains_Mono'] text-[11px]">
          Memory: 12MB / 50MB
        </div>
      </div>
    </footer>
  );
}
