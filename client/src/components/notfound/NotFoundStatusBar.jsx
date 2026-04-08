export default function NotFoundStatusBar() {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 flex justify-between items-center bg-[#0e0e0e] border-t border-[#f5761a]/10 h-8 font-['JetBrains_Mono'] text-[10px] uppercase">
      <div className="flex items-center h-full px-4 gap-2">
        <span className="w-2 h-2 rounded-full bg-[#ffb4ab]"></span>
        <span className="text-[#666666] text-[11px]">Process exited with code 404</span>
      </div>
      <div className="flex items-center h-full px-4">
        <span className="text-[#3A3A3A] text-[11px] font-bold">CodeBox v1.0.0</span>
      </div>
    </footer>
  );
}
