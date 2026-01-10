import PantherLogo from '../../components/PantherLogo';

export default function HistoryPage() {
  const trophies = [
    { year: "2023", title: "Continental Champions Cup", icon: "🏆" },
    { year: "2021", title: "National Premier League", icon: "🥇" },
    { year: "2018", title: "Elite Founders Shield", icon: "🛡️" },
  ];

  const legends = [
    { name: "Marcus 'The Claw' Stone", role: "Striker", stats: "142 Goals" },
    { name: "Elena Swift", role: "Midfielder", stats: "98 Assists" },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-10 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="flex items-center gap-6 border-b border-[#d4af37] pb-8 mb-12">
          <PantherLogo className="w-20 h-20" />
          <div>
            <h1 className="text-4xl font-black italic tracking-tighter uppercase">The Legacy</h1>
            <p className="text-[#d4af37] font-mono text-sm tracking-widest">ESTABLISHED 2015</p>
          </div>
        </header>

        {/* Trophy Room */}
        <section className="mb-20">
          <h2 className="text-xl font-bold uppercase mb-8 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#d4af37]"></span>
            Trophy Room
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {trophies.map((trophy, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl text-center hover:border-[#d4af37] transition-all">
                <div className="text-4xl mb-4">{trophy.icon}</div>
                <h3 className="font-black text-lg">{trophy.title}</h3>
                <p className="text-[#d4af37] font-mono mt-2">{trophy.year}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Hall of Fame */}
        <section>
          <h2 className="text-xl font-bold uppercase mb-8 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#d4af37]"></span>
            Hall of Fame
          </h2>
          <div className="space-y-4">
            {legends.map((legend, index) => (
              <div key={index} className="flex justify-between items-center bg-black p-6 rounded-xl border-l-4 border-[#d4af37]">
                <div>
                  <h3 className="text-xl font-black">{legend.name}</h3>
                  <p className="text-gray-500 text-sm uppercase tracking-widest">{legend.role}</p>
                </div>
                <div className="text-[#d4af37] font-mono font-bold italic">
                  {legend.stats}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-20 text-center">
          <a href="/" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors">
            ← Return to Headquarters
          </a>
        </footer>
      </div>
    </div>
  );
}