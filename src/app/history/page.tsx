"use client"
import React from "react";
import PantherLogo from "../../components/PantherLogo";

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <nav className="flex items-center gap-4 mb-12">
        <PantherLogo className="w-16 h-16" />
        <h1 className="text-4xl font-black italic uppercase">Club History</h1>
      </nav>
      <div className="max-w-3xl">
        <p className="text-[#d4af37] font-bold mb-4 uppercase tracking-widest text-xs">Established 2026</p>
        <p className="text-xl leading-relaxed text-gray-300">
          Panthers FC was founded with a single mission: to redefine football management through 
          intelligence and elite performance.
        </p>
      </div>
    </div>
  );
}
