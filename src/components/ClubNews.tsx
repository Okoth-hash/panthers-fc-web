import React from "react";

const news = [
  { id: 1, tag: "BREAKING", title: "New Striker Confirmed", desc: "Panthers FC signs 22-year-old phenom from the National Academy.", date: "2 HOURS AGO", color: "#d4af37" },
  { id: 2, tag: "TRAINING", title: "Tactical Overhaul", desc: "Head Coach Okoth implements new high-press system for upcoming derby.", date: "JAN 10, 2026", color: "#ffffff" },
  { id: 3, tag: "COMMUNITY", title: "Arena Upgrades", desc: "New floodlights and fan zone construction to begin this February.", date: "JAN 08, 2026", color: "#d4af37" }
];

export default function ClubNews() {
  return (
    <div className="max-w-7xl mx-auto py-12">
      <h2 className="text-4xl font-black italic uppercase mb-12 border-l-8 border-[#d4af37] pl-4">Latest Dispatch</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {news.map((item) => (
          <div key={item.id} className="group bg-zinc-900/50 border border-white/5 p-8 hover:border-[#d4af37]/50 transition-all cursor-pointer relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[4px] bg-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-[10px] font-bold bg-[#d4af37] text-black px-2 py-1 mb-6 inline-block">{item.tag}</span>
            <h3 className="text-2xl font-black uppercase mb-4 group-hover:text-[#d4af37] transition-colors leading-tight">{item.title}</h3>
            <p className="text-gray-400 text-sm mb-6 line-clamp-2">{item.desc}</p>
            <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
