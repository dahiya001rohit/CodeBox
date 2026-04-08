export default function TerminalMockup() {
  return (
    <div className="max-w-4xl mx-auto border border-outline bg-surface-container-lowest text-left overflow-hidden">
      {/* Terminal header with traffic lights */}
      <div className="bg-surface-container-low px-4 py-2 border-b border-outline flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-[#FF4444]"></div>
        <div className="w-3 h-3 rounded-full bg-[#FFB68E]"></div>
        <div className="w-3 h-3 rounded-full bg-[#22C55E]"></div>
        <span className="ml-4 font-['JetBrains_Mono'] text-xs text-[#666666]">
          bash — session — 80x24
        </span>
      </div>

      {/* Code content */}
      <div className="p-6 font-['JetBrains_Mono'] text-sm leading-relaxed overflow-x-auto">
        <div className="flex gap-4">
          <span className="text-[#444444] select-none">01</span>
          <code className="text-[#A68B7D]">
            <span className="text-primary">import</span> {'{ CodeBox }'}{' '}
            <span className="text-primary">from</span>{' '}
            <span className="text-secondary-container">'codebox-sdk'</span>;
          </code>
        </div>
        <div className="flex gap-4">
          <span className="text-[#444444] select-none">02</span>
          <code className="text-[#F0F0F0]">&nbsp;</code>
        </div>
        <div className="flex gap-4">
          <span className="text-[#444444] select-none">03</span>
          <code className="text-[#F0F0F0]">
            <span className="text-primary">const</span> sandbox ={' '}
            <span className="text-secondary">new</span> CodeBox({'{ '}
            <span className="text-[#FFDAD6]">runtime</span>:{' '}
            <span className="text-secondary-container">'node20'</span>
            {' })'};
          </code>
        </div>
        <div className="flex gap-4">
          <span className="text-[#444444] select-none">04</span>
          <code className="text-[#F0F0F0]">&nbsp;</code>
        </div>
        <div className="flex gap-4">
          <span className="text-[#444444] select-none">05</span>
          <code className="text-[#F0F0F0]">
            <span className="text-primary">await</span> sandbox.execute(
            <span className="text-secondary-container">
              `console.log("Hello, Terminal")`
            </span>
            );
          </code>
        </div>
        <div className="flex gap-4">
          <span className="text-[#444444] select-none">06</span>
          <code className="text-[#F0F0F0]">
            &gt; Hello, Terminal<span className="blinking-cursor"></span>
          </code>
        </div>
      </div>
    </div>
  );
}
