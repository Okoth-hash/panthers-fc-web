export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black text-[#d4af37] flex flex-col items-center justify-center p-8 text-center">
      {/* Club Logo Placeholder */}
      <div className="w-20 h-20 border-2 border-[#d4af37] rounded-full flex items-center justify-center mb-6">
        <span className="text-xl font-black">PFC</span>
      </div>

      <h1 className="text-7xl font-black text-white italic tracking-tighter mb-2">PANTHERS FC</h1>
      <p className="text-xl tracking-[0.5em] mb-12 uppercase font-light">Join The Hunt</p>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl border-t border-white/10 pt-10 text-left">
        <section>
          <h2 className="text-xl font-bold uppercase mb-4 text-[#d4af37]">Our Vision</h2>
          <p className="text-gray-400 leading-relaxed">
            To be the global benchmark for elite athletic performance and community leadership through modern innovation and discipline.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold uppercase mb-4 text-[#d4af37]">Our Mission</h2>
          <p className="text-gray-400 leading-relaxed">
            Cultivating world-class talent and high-performance management through data-driven scouting and unwavering integrity.
          </p>
        </section>
      </div>

      <div className="mt-16">
        <a href="/admin" className="px-10 py-3 border border-[#d4af37] text-[#d4af37] font-bold hover:bg-[#d4af37] hover:text-black transition-all duration-300">
          STAFF ENTRANCE
        </a>
      </div>
    </main>
  );
}