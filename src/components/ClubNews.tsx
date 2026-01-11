"use client"
import React from 'react';

export default function ClubNews() {
  const newsItems = [
    {
      id: 1,
      tag: "BREAKING",
      title: "New Striker Confirmed",
      excerpt: "Panthers FC signs 22-year-old phenom from the National Academy.",
      date: "2 Hours Ago"
    },
    {
      id: 2,
      tag: "TRAINING",
      title: "Tactical Overhaul",
      excerpt: "Head Coach Okoth implements new high-press system for upcoming derby.",
      date: "Jan 10, 2026"
    },
    {
      id: 3,
      tag: "COMMUNITY",
      title: "Arena Upgrades",
      excerpt: "New floodlights and fan zone construction to begin this February.",
      date: "Jan 08, 2026"
    }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-black uppercase italic tracking-tighter text-white">Latest Dispatch</h2>
        <div className="h-[2px] flex-grow bg-neutral-800"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {newsItems.map((item) => (
          <div key={item.id} className="group bg-neutral-900/40 border border-neutral-800 p-8 rounded-3xl hover:border-[#d4af37] transition-all duration-500 cursor-pointer">
            <span className="inline-block bg-[#d4af37] text-black text-[10px] font-black px-2 py-1 rounded mb-4 tracking-widest uppercase">
              {item.tag}
            </span>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#d4af37] transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {item.excerpt}
            </p>
            <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
              {item.date}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}