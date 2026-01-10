export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black text-[#d4af37] flex flex-col items-center justify-center p-8 text-center">
      <div className="w-20 h-20 border-2 border-[#d4af37] rounded-full flex items-center justify-center mb-6">
        <span className="text-xl font-black">PFC</span>
      </div>

      <h1 className="text-7xl font-black text-white italic tracking-tighter mb-2">PANTHERS FC</h1>
      <p className="text-xl tracking-[0.5em] mb-12 uppercase font-light">Join The Hunt</p>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl border-t border-white/10 pt-10 text-left">
        <section>
          <h2 className="text-xl font-bold uppercase mb-4 text-[#d4af37]">Our Vision</h2>
          <p className="text-gray-400">To be the global benchmark for elite athletic performance.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold uppercase mb-4 text-[#d4af37]">Our Mission</h2>
          <p className="text-gray-400">Cultivating world-class talent through innovation and integrity.</p>
        </section>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-6">
        <a href="/admin" className="px-8 py-3 border border-[#d4af37] text-[#d4af37] font-bold hover:bg-[#d4af37] hover:text-black transition-all">
          STAFF ENTRANCE
        </a>
        <a href="/medical" className="px-8 py-3 border border-red-600 text-red-600 font-bold hover:bg-red-600 hover:text-white transition-all">
          MEDICAL ENTRANCE
        </a>
      </div>
    </main>
  );
}