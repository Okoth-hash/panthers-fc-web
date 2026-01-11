"use client"
import React from 'react';

export default function LiveTicker() {
  const results = [
    { opponent: "Nairobi Lions", score: "2 - 0", status: "WIN", date: "Last Match" },
    { opponent: "Coastal Sharks", score: "1 - 1", status: "DRAW", date: "Jan 05" },
    { opponent: "Rift Valley United", score: "3 - 1", status: "WIN", date: "Dec 28" },
    { opponent: "City Stars", score: "0 - 0", status: "DRAW", date: "Dec 20" },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#d4af37] text-black py-2 overflow-hidden border-t-2 border-white/20 z-50">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* We repeat the array to create a seamless loop */}
        {[...results, ...results].map((match, i) => (
          <div key={i} className="flex items-center mx-8 space-x-4">
            <span className="font-black text-[10px] tracking-widest uppercase opacity-60">{match.date}</span>
            <span className="font-bold uppercase tracking-tighter">Panthers FC</span>
            <span className="bg-black text-[#d4af37] px-2 py-0.5 font-mono font-bold rounded text-xs">
              {match.score}
            </span>
            <span className="font-bold uppercase tracking-tighter">{match.opponent}</span>
            <span className={`text-[10px] font-black ${match.status === 'WIN' ? 'text-green-900' : 'text-neutral-700'}`}>
              • {match.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}