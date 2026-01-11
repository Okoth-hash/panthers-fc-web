"use client"
import React from "react";

export default function ScoutingMap({ onClose }: { onClose: () => void }) {
  const pins = [
    { city: "London", top: "35%", left: "45%", players: 3 },
    { city: "Rio", top: "75%", left: "30%", players: 5 },
    { city: "Nairobi", top: "60%", left: "55%", players: 2 },
    { city: "Tokyo", top: "45%", left: "85%", players: 4 }
  ];

  return (
    <div className="fixed inset-0 z-[500] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-zinc-900 border-2 border-sky-500/30 rounded-[3rem] p-8 relative overflow-hidden shadow-2xl">
        
        <div className="flex justify-between items-center mb-8 relative z-10">
          <h2 className="text-3xl font-black italic text-sky-400 uppercase tracking-tighter">Global Talent Tracker</h2>
          <button onClick={onClose} className="bg-white/10 hover:bg-red-600 px-6 py-2 rounded-full text-[10px] font-bold uppercase transition-all">Close [X]</button>
        </div>

        <div className="relative aspect-video bg-zinc-950 rounded-2xl border border-white/5 overflow-hidden">
          {/* MAP GRID FIX */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" 
               style={{ backgroundImage: "radial-gradient(#334155 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
          
          {/* DIGITAL PINS */}
          {pins.map((pin) => (
            <div key={pin.city} className="absolute group" style={{ top: pin.top, left: pin.left }}>
              <div className="w-4 h-4 bg-sky-500 rounded-full animate-ping absolute" />
              <div className="w-4 h-4 bg-sky-400 rounded-full relative shadow-[0_0_15px_#38bdf8]" />
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black border border-sky-500 p-2 rounded text-[8px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all z-20">
                <p className="font-bold text-sky-400 uppercase">{pin.city}</p>
                <p className="text-white">{pin.players} Active Targets</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-around text-[10px] font-mono text-gray-500 uppercase tracking-widest">
          <p>Satellite: P-SAT 09</p>
          <p className="text-sky-500 animate-pulse font-bold"> Scanning Global Markets...</p>
          <p>Signal: Encrypted</p>
        </div>
      </div>
    </div>
  );
}
