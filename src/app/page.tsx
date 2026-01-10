import PantherLogo from '../components/PantherLogo';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black text-[#d4af37] flex flex-col items-center justify-center p-8 text-center font-sans">
      
      {/* BRAND IDENTITY */}
      <div className="mb-6 hover:scale-110 transition-transform duration-500 cursor-pointer">
        <PantherLogo className="w-32 h-32" />
      </div>

      <h1 className="text-7xl font-black text-white italic tracking-tighter mb-2">PANTHERS FC</h1>
      <p className="text-xl tracking-[0.5em] mb-12 uppercase font-light">Join The Hunt</p>

      {/* PUBLIC NAVIGATION */}
      <nav className="flex gap-8 mb-16 text-[10px] font-black tracking-[0.3em] uppercase border-y border-white/10 py-5">
        <a href="/about" className="hover:text-white transition-colors">About</a>
        <a href="/contact" className="hover:text-white transition-colors">Contact</a>
        <a href="/history" className="hover:text-white transition-colors">History</a>
      </nav>

      {/* STRATEGIC PILLARS */}
      <div className="grid md:grid-cols-2 gap-10 max-w-4xl text-left mb-20">
        <section className="bg-neutral-900/40 p-8 border-l-2 border-[#d4af37] backdrop-blur-sm shadow-2xl">
          <h2 className="text-xl font-bold uppercase mb-4 text-white tracking-tight">Our Vision</h2>
          <p className="text-gray-400 leading-relaxed text-sm">
            To be the global benchmark for elite athletic performance and community leadership through modern innovation.
          </p>
        </section>
        <section className="bg-neutral-900/40 p-8 border-l-2 border-[#d4af37] backdrop-blur-sm shadow-2xl">
          <h2 className="text-xl font-bold uppercase mb-4 text-white tracking-tight">Our Mission</h2>
          <p className="text-gray-400 leading-relaxed text-sm">
            Cultivating world-class talent and high-performance management through data-driven scouting and integrity.
          </p>
        </section>
      </div>

      {/* SECURE ACCESS POINTS */}
      <div className="flex flex-wrap justify-center gap-6">
        <a href="/admin" className="px-10 py-4 border border-[#d4af37] text-[#d4af37] text-xs font-black tracking-widest hover:bg-[#d4af37] hover:text-black transition-all duration-300">
          STAFF ENTRANCE
        </a>
        <a href="/medical" className="px-10 py-4 border border-red-600 text-red-600 text-xs font-black tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300">
          MEDICAL ENTRANCE
        </a>
      </div>
    </main>
  );
}