export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-20 pb-32 text-center">
      <p className="font-['JetBrains_Mono'] text-[12px] text-[#444444] mb-6 tracking-widest uppercase">
        // SANDBOXED CODE EXECUTION IN THE BROWSER
      </p>
      <h1 className="font-['JetBrains_Mono'] text-5xl md:text-8xl font-bold text-on-background mb-8 tracking-tighter leading-none">
        Write code.<br />Run it.
      </h1>
      <p className="font-body text-lg text-[#666666] max-w-2xl mx-auto mb-12">
        Sandboxed execution in isolated Docker containers. Real-time output. No setup.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-24">
        <button className="bg-primary text-on-primary px-8 py-4 font-['JetBrains_Mono'] font-bold text-lg hover:brightness-110 transition-all">
          Start Coding →
        </button>
      </div>
    </section>
  );
}
