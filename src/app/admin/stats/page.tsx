"use client"
import React from "react";

export default function DepartmentStats() {
  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans">
      <div className="flex justify-between items-end mb-12 border-b border-[#d4af37]/30 pb-6">
        <div>
          <h1 className="text-5xl font-black italic uppercase tracking-tighter">Live Intelligence</h1>
          <p className="text-[#d4af37] font-bold tracking-[0.3em] text-xs mt-2">REAL-TIME PANTHER METRICS</p>
        </div>
        <div className="text-right">
          <span className="text-red-500 animate-pulse font-bold"> LIVE SYSTEM FEED</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* MEDICAL DEPARTMENT STATS */}
        <div className="bg-zinc-900/50 border border-red-900/30 p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 text-4xl opacity-20"></div>
          <h2 className="text-2xl font-black uppercase mb-8 text-red-500">Medical Wing</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2 text-xs font-bold uppercase"><span>Squad Fitness</span><span>94%</span></div>
              <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-red-600 shadow-[0_0_10px_#dc2626]" style={{width: "94%"}}></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                <p className="text-gray-500 text-[10px] uppercase font-bold">In Treatment</p>
                <p className="text-3xl font-black">02</p>
              </div>
              <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                <p className="text-gray-500 text-[10px] uppercase font-bold">Match Ready</p>
                <p className="text-3xl font-black">24</p>
              </div>
            </div>
          </div>
        </div>

        {/* TECHNICAL DEPARTMENT STATS */}
        <div className="bg-zinc-900/50 border border-blue-900/30 p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 text-4xl opacity-20"></div>
          <h2 className="text-2xl font-black uppercase mb-8 text-blue-500">Technical Ops</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2 text-xs font-bold uppercase"><span>Tactical Mastery</span><span>88%</span></div>
              <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 shadow-[0_0_10px_#2563eb]" style={{width: "88%"}}></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                <p className="text-gray-500 text-[10px] uppercase font-bold">Win Rate</p>
                <p className="text-3xl font-black text-blue-400">72%</p>
              </div>
              <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                <p className="text-gray-500 text-[10px] uppercase font-bold">Avg Goals</p>
                <p className="text-3xl font-black">3.1</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="/admin" className="inline-block mt-12 text-[#d4af37] font-bold text-xs border border-[#d4af37]/30 px-6 py-2 rounded-full hover:bg-[#d4af37] hover:text-black transition-all">
         RETURN TO COMMAND
      </a>
    </div>
  );
}
