"use client"
import React, { useState } from "react";
import Link from "next/link";
import SecurityShield from "../../components/SecurityShield";

export default function DigitalAdmin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const depts = [
    { name: "Technical", icon: "", color: "blue" },
    { name: "Medical", icon: "", color: "red" },
    { name: "Scouting", icon: "", color: "green" },
    { name: "Intelligence", icon: "", color: "amber" }
  ];

  if (!isAuthenticated) return <SecurityShield onComplete={() => setIsAuthenticated(true)} />;

  return (
    <div className="min-h-screen bg-black text-white p-6 font-mono">
      <div className="flex justify-between items-center border-b border-[#d4af37]/30 pb-6 mb-10">
        <h1 className="text-3xl font-black italic uppercase">Panther<span className="text-[#d4af37]">OS</span></h1>
        <span className="text-[10px] text-green-500 font-bold uppercase tracking-widest animate-pulse"> System Encrypted</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {depts.map((d) => (
          <div key={d.name} className="bg-zinc-900/30 border border-white/5 p-6 rounded-2xl backdrop-blur-sm">
            <div className="flex gap-4 items-center mb-6">
              <span className="text-3xl">{d.icon}</span>
              <h2 className="text-xl font-bold uppercase">{d.name}</h2>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/admin/manage" className="bg-zinc-800 hover:bg-emerald-600 p-4 rounded-xl text-[10px] font-bold uppercase text-center transition-all">Credentials</Link>
              <Link href="/admin/manage" className="bg-zinc-800 hover:bg-rose-700 p-4 rounded-xl text-[10px] font-bold uppercase text-center transition-all">Database</Link>
              <Link href="/admin/stats" className="bg-zinc-800 hover:bg-sky-600 p-4 rounded-xl text-[10px] font-bold uppercase text-center transition-all">Live Feed</Link>
              <Link href="/admin/reply" className="bg-zinc-800 hover:bg-[#d4af37] hover:text-black p-4 rounded-xl text-[10px] font-bold uppercase text-center transition-all">Dispatch</Link>
            </div>
          </div>
        ))}
      </div>

      {/* SYSTEM LOG FOOTER */}
      <div className="bg-zinc-950 border border-[#d4af37]/20 p-4 rounded-xl">
        <h3 className="text-[10px] font-bold text-[#d4af37] mb-3 uppercase tracking-widest">Digital Activity Log</h3>
        <div className="text-[9px] space-y-1 text-gray-500 uppercase">
          <p>[11:42:01] - Security handshake successful</p>
          <p>[11:42:05] - Admin logged in from local terminal</p>
          <p className="text-[#d4af37]/60 animate-pulse">[WAITING] - Monitoring incoming encrypted data...</p>
        </div>
      </div>
    </div>
  );
}
