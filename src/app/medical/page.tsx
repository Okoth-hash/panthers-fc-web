export default function MedicalPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white p-10">
      <h1 className="text-3xl font-black uppercase italic border-b border-red-600 pb-4 mb-8">
        Medical Wing
      </h1>
      <div className="bg-red-900/10 border border-red-600/20 p-6 rounded-xl">
        <h3 className="text-red-500 font-bold mb-4">Injury Report</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex justify-between border-b border-white/5 pb-2">
            <span>Marcus Stone</span> <span className="text-red-500">Hamstring (2 Weeks)</span>
          </li>
          <li className="flex justify-between border-b border-white/5 pb-2">
            <span>Elena Swift</span> <span className="text-green-500">Fit for Selection</span>
          </li>
        </ul>
      </div>
      <a href="/" className="inline-block mt-10 text-xs text-gray-500 hover:text-white">← BACK</a>
    </div>
  );
}