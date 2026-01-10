export default function TechnicalPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white p-10">
      <h1 className="text-3xl font-black uppercase italic border-b border-[#d4af37] pb-4 mb-8">
        Technical Command
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
          <h3 className="text-[#d4af37] font-bold mb-2">Tactical Board</h3>
          <p className="text-sm text-gray-400">Formation: 4-3-3 Attack</p>
        </div>
        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
          <h3 className="text-[#d4af37] font-bold mb-2">Scouting Reports</h3>
          <p className="text-sm text-gray-400">3 New Players Identified</p>
        </div>
      </div>
      <a href="/" className="inline-block mt-10 text-xs text-gray-500 hover:text-white">← BACK</a>
    </div>
  );
}