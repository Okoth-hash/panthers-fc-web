"use client"
import React from "react";

export default function HolographicStaff({ onClose }: { onClose: () => void }) {
  const staff = [
    { name: "MARCUS STONE", role: "HEAD ANALYST", id: "P-882", status: "ACTIVE" },
    { name: "SARAH CHEN", role: "CHIEF MEDICAL", id: "P-441", status: "OFFSITE" },
    { name: "LEONARD VANCE", role: "TECH DIRECTOR", id: "P-109", status: "ACTIVE" },
    { name: "DIANA PRINCE", role: "SCOUTING LEAD", id: "P-667", status: "BUSY" }
  ];

  return (
    <div className="fixed inset-0 z-[400] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-[#d4af37]/5 border-2 border-[#d4af37]/30 rounded-[40px] p-8 relative overflow-hidden shadow-[0_0_80px_rgba(212,175,55,0.15)]">
        
        {/* HOLOGRAPHIC SCAN LINE */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d4af37]/10 to-transparent h-20 w-full animate-scan-slow pointer-events-none" />

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-black italic text-[#d4af37] tracking-tighter uppercase">Personnel Database</h2>
          <button onClick={onClose} className="text-white/40 hover:text-white font-mono text-xs uppercase tracking-widest">Close [X]</button>
        </div>

        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
          {staff.map((person) => (
            <div key={person.id} className="group bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-[#d4af37]/20 transition-all cursor-crosshair">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] text-[#d4af37] font-bold tracking-widest">{person.id}</p>
                  <h3 className="text-lg font-black text-white group-hover:scale-105 transition-transform origin-left">{person.name}</h3>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{person.role}</p>
                </div>
                <span className={`text-[8px] font-black px-2 py-1 rounded border ${person.status === "ACTIVE" ? "text-green-400 border-green-400/30" : "text-amber-400 border-amber-400/30"}`}>
                  {person.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-[#d4af37]/20 text-center">
          <p className="text-[9px] text-[#d4af37]/50 font-mono animate-pulse uppercase tracking-[0.3em]">Holographic Link Stable | Encryption 256-Bit</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan-slow { 0% { top: -20%; } 100% { top: 120%; } }
        .animate-scan-slow { animation: scan-slow 4s linear infinite; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #d4af37; border-radius: 10px; }
      `}</style>
    </div>
  );
}
