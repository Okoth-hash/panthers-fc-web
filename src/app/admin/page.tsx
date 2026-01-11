"use client"
import React, { useState } from "react";
import Link from "next/link";
import SecurityShield from "../../components/SecurityShield";
import FaceScanner from "../../components/FaceScanner";

export default function DigitalAdmin() {
  const [step, setStep] = useState("face-id");

  if (step === "face-id") return <FaceScanner onComplete={() => setStep("security")} />;
  if (step === "security") return <SecurityShield onComplete={() => setStep("dashboard")} />;

  return (
    <div className="min-h-screen bg-black text-white p-6 font-mono">
      <div className="flex justify-between items-start border-b border-[#d4af37]/20 pb-6 mb-10">
        <div>
          <h1 className="text-3xl font-black italic uppercase tracking-tighter">Panther<span className="text-[#d4af37]">OS</span></h1>
          <div className="flex items-center gap-2 mt-1">
             <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
             <span className="text-[9px] text-green-500 font-bold uppercase tracking-[0.2em]">Biometric ID: Verified</span>
          </div>
        </div>
        <div className="bg-[#d4af37]/10 border border-[#d4af37]/30 px-4 py-2 rounded-lg text-right">
           <p className="text-[8px] text-[#d4af37] uppercase font-bold">Clearance Level</p>
           <p className="text-xs font-black text-white uppercase italic">Elite Commander</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {["Technical", "Medical", "Scouting", "Intelligence"].map((dept) => (
          <div key={dept} className="bg-zinc-900/40 border border-white/5 p-6 rounded-[2rem] hover:border-[#d4af37]/40 transition-all duration-500">
            <h2 className="text-xl font-black uppercase mb-6 tracking-tight text-gray-300">{dept}</h2>
            <div className="grid grid-cols-2 gap-3">
              <Link href="/admin/manage" className="bg-zinc-800/50 hover:bg-emerald-600 p-4 rounded-xl text-[10px] font-black uppercase text-center transition-all border border-white/5">Credentials</Link>
              <Link href="/admin/manage" className="bg-zinc-800/50 hover:bg-rose-700 p-4 rounded-xl text-[10px] font-black uppercase text-center transition-all border border-white/5">Delete</Link>
              <Link href="/admin/stats" className="bg-zinc-800/50 hover:bg-sky-600 p-4 rounded-xl text-[10px] font-black uppercase text-center transition-all border border-white/5">View</Link>
              <Link href="/admin/reply" className="bg-zinc-800/50 hover:bg-[#d4af37] hover:text-black p-4 rounded-xl text-[10px] font-black uppercase text-center transition-all border border-white/5">Reply</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
