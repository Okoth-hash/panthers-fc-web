import PantherLogo from '../components/PantherLogo';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black text-[#d4af37] flex flex-col items-center justify-center p-8 text-center font-sans">
      
      <div className="mb-6 hover:scale-110 transition-transform duration-500 cursor-pointer">
        <PantherLogo className="w-32 h-32" />
      </div>

      <h1 className="text-7xl font-black text-white italic tracking-tighter mb-2">PANTHERS FC</h1>
      <p className="text-xl tracking-[0.5em] mb-12 uppercase font-light">Join The Hunt</p>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl text-left mb-20">
        <section className="bg-neutral-900/40 p-8 border-l-2 border-[#d4af37]">
          <h2 className="text-xl font-bold uppercase mb-4 text-white">Our Vision</h2>
          <p className="text-gray-400 text-sm">To be the global benchmark for elite athletic performance.</p>
        </section>
        <section className="bg-neutral-900/40 p-8 border-l-2 border-[#d4af37]">
          <h2 className="text-xl font-bold uppercase mb-4 text-white">Our Mission</h2>
          <p className="text-gray-400 text-sm">Cultivating world-class talent through innovation and integrity.</p>
        </section>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        <a href="/admin" className="px-10 py-4 border border-[#d4af37] text-[#d4af37] text-xs font-black tracking-widest hover:bg-[#d4af37] hover:text-black transition-all">
          STAFF ENTRANCE
        </a>
        <a href="/medical" className="px-10 py-4 border border-red-600 text-red-600 text-xs font-black tracking-widest hover:bg-red-600 hover:text-white transition-all">
          MEDICAL ENTRANCE
        </a>
      </div>
    </main>
  );
}