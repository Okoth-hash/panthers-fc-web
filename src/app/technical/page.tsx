import PantherLogo from '../../components/PantherLogo';

export default function TechnicalPage() {
  const formation = [
    { position: "ST", player: "Marcus Stone", status: "In Form" },
    { position: "LW", player: "David 'Flash' Okoth", status: "Active" },
    { position: "RW", player: "Julian Rossi", status: "Active" },
    { position: "CM", player: "Elena Swift", status: "Captain" },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center border-b border-[#d4af37]/30 pb-6 mb-10">
          <div className="flex items-center gap-4">
            <PantherLogo className="w-12 h-12" />
            <h1 className="text-2xl font-black uppercase tracking-tighter">Technical Command</h1>
          </div>
          <span className="bg-[#d4af37] text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            Level 4 Access
          </span>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* TACTICAL BOARD */}
          <section className="lg:col-span-2 bg-neutral-900 border border-neutral-800 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <PantherLogo className="w-64 h-64" />
            </div>
            
            <h2 className="text-xl font-bold uppercase mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#d4af37] rounded-full"></span>
              Starting Lineup (4-3-3)
            </h2>

            <div className="grid gap-4">
              {formation.map((slot, idx) => (
                <div key={idx} className="flex items-center justify-between bg-black/50 p-4 rounded-xl border border-white/5 hover:border-[#d4af37]/50 transition-all cursor-default">
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 flex items-center justify-center bg-neutral-800 rounded-lg font-mono font-bold text-[#d4af37]">
                      {slot.position}
                    </span>
                    <p className="font-bold">{slot.player}</p>
                  </div>
                  <span className="text-[10px] uppercase font-mono text-gray-500 italic">{slot.status}</span>
                </div>
              ))}
            </div>
          </section>

          {/* SCOUTING FEED */}
          <aside className="space-y-6">
            <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6">
              <h3 className="font-black uppercase text-sm mb-4 text-[#d4af37]">Live Scouting Feed</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-green-500 pl-4 py-1">
                  <p className="text-xs font-bold text-white">Target A-14</p>
                  <p className="text-[10px] text-gray-500">High technical ability. Recommendation: SIGN.</p>
                </div>
                <div className="border-l-2 border-yellow-500 pl-4 py-1">
                  <p className="text-xs font-bold text-white">Target B-09</p>
                  <p className="text-[10px] text-gray-500">Fast, but inconsistent. Monitoring status.</p>
                </div>
              </div>
            </div>

            <a href="/" className="block w-full text-center py-4 bg-white text-black font-black uppercase text-xs tracking-widest rounded-xl hover:bg-[#d4af37] transition-all">
              Return to HQ
            </a>
          </aside>
        </div>
      </div>
    </div>
  );
}