export default function MedicalDepartment() {
  const injuries = [
    { player: "Captain Striker", injury: "Hamstring Strain", recovery: "2 Weeks" },
    { player: "Star Midfielder", injury: "Sprained Ankle", recovery: "3 Days" },
  ];

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-10 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="flex justify-between items-center border-b border-red-600 pb-6 mb-10">
          <div>
            <h1 className="text-3xl font-black tracking-tighter uppercase">Medical Department</h1>
            <p className="text-gray-400 text-sm italic">Confidential Player Health Reports</p>
          </div>
          <div className="bg-red-600 text-white px-4 py-1 font-bold text-xs rounded animate-pulse">
            RESTRICTED ACCESS
          </div>
        </header>
        
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div className="bg-black p-6 rounded-xl border border-neutral-800">
            <h2 className="text-red-500 font-bold uppercase text-xs mb-2">Overall Squad Fitness</h2>
            <p className="text-4xl font-mono text-white">92%</p>
          </div>
          <div className="bg-black p-6 rounded-xl border border-neutral-800">
            <h2 className="text-red-500 font-bold uppercase text-xs mb-2">Available Players</h2>
            <p className="text-4xl font-mono text-white">22 / 24</p>
          </div>
          <div className="bg-black p-6 rounded-xl border border-neutral-800">
            <h2 className="text-red-500 font-bold uppercase text-xs mb-2">Next COVID Screening</h2>
            <p className="text-xl font-bold mt-2">Monday 08:00 AM</p>
          </div>
        </div>

        <div className="bg-black rounded-xl border border-neutral-800 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-neutral-800 text-red-500 text-xs uppercase font-black">
              <tr>
                <th className="p-4">Player Name</th>
                <th className="p-4">Condition</th>
                <th className="p-4">Recovery Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800">
              {injuries.map((item, index) => (
                <tr key={index} className="hover:bg-neutral-900/50 transition-colors">
                  <td className="p-4 font-bold">{item.player}</td>
                  <td className="p-4 text-gray-400">{item.injury}</td>
                  <td className="p-4 text-[#d4af37] font-mono">{item.recovery}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}