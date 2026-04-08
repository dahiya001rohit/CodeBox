const lineNumbers = Array.from({ length: 16 }, (_, i) => i + 1);
const activeLineNumber = 13;

export default function CodeEditorPanel() {
  return (
    <section className="w-[60%] bg-[#0C0C0C] flex flex-col border-r border-outline-variant">
      <div className="flex-1 overflow-auto font-['JetBrains_Mono'] text-[14px] leading-[1.7] relative">
        {/* Line number gutter */}
        <div className="absolute left-0 top-0 w-[48px] h-full bg-[#0F0F0F] flex flex-col items-end pr-[12px] py-4 select-none border-r border-[#1E1E1E] text-[12px]">
          {lineNumbers.map((n) => (
            <span key={n} className={n === activeLineNumber ? 'text-[#F5761A]' : 'text-[#3A3A3A]'}>
              {n}
            </span>
          ))}
        </div>

        {/* Code content */}
        <div className="ml-[48px] py-4">
          <div className="text-[#3A3A3A] italic pl-4"># Fibonacci Sequence Generator</div>
          <div className="mt-1 pl-4">
            <span className="text-primary">def</span>{' '}
            <span className="text-[#C084FC]">fibonacci</span>(n):
          </div>
          <div className="ml-4 pl-4">
            <span className="text-[#F2F0EC]">a, b = </span>
            <span className="text-[#7DD3FC]">0</span>,{' '}
            <span className="text-[#7DD3FC]">1</span>
          </div>
          <div className="ml-4 pl-4">
            <span className="text-primary">while</span>{' '}
            <span className="text-[#F2F0EC]">a &lt; n:</span>
          </div>
          <div className="ml-8 pl-4">
            <span className="text-[#C084FC]">print</span>
            <span className="text-[#F2F0EC]">(a, end=</span>
            <span className="text-[#4ADE80]">' '</span>
            <span className="text-[#F2F0EC]">)</span>
          </div>
          <div className="ml-8 text-[#F2F0EC] pl-4">a, b = b, a+b</div>
          <div className="ml-4 pl-4">
            <span className="text-[#C084FC]">print</span>
            <span className="text-[#F2F0EC]">()</span>
          </div>
          <div className="mt-4 text-[#3A3A3A] italic pl-4"># Main execution</div>
          <div className="mt-1 text-[#F2F0EC] pl-4">
            <span className="text-[#C084FC]">fibonacci</span>(
            <span className="text-[#7DD3FC]">1000</span>)
          </div>
          {/* Active line with cursor */}
          <div className="mt-6 bg-[#1A1A1A] py-0.5 border-l-2 border-primary flex items-center pl-4">
            <span className="text-[#F2F0EC]">
              <span className="text-[#C084FC]">fibonacci</span>(
              <span className="text-[#7DD3FC]">2000</span>)
            </span>
            <div className="w-[2px] h-5 bg-[#F2F0EC] ml-0.5 cursor-blink"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
