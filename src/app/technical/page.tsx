export default function TechnicalDashboard() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white p-10 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="flex justify-between items-center border-b border-[#d4af37] pb-6 mb-10">
          <div>
            <h1 className="text-3xl font-black tracking-tighter uppercase">Technical Database</h1>
            <p className="text-gray-400 text-sm italic">Confidential Panthers FC Strategy</p>
          </div>
          <div className="bg-[#d4af37] text-black px-4 py-1 font-bold text-xs rounded">
            LEVEL 4 CLEARANCE
          </div>
        </header>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-black p-8 rounded-xl border border-neutral-800">
            <h2 className="text-[#d4af37] font-bold uppercase tracking-widest text-xs mb-4">Tactics</h2>
            <p className="text-4xl font-mono text-white">4 - 3 - 3</p>
          </div>
          
          <div className="bg-black p-8 rounded-xl border border-neutral-800">
            <h2 className="text-[#d4af37] font-bold uppercase tracking-widest text-xs mb-4">Scouting</h2>
            <p className="text-2xl font-bold">Target: Central Midfielder</p>
          </div>
        </div>
      </div>
    </div>
  );
}