"use client"
import React, { useState } from "react";
import Link from "next/link";
import SecurityShield from "../../components/SecurityShield";
import FaceScanner from "../../components/FaceScanner";
import SelfDestruct from "../../components/SelfDestruct";

export default function DigitalAdmin() {
  const [step, setStep] = useState("face-id");
  const [isPurging, setIsPurging] = useState(false);

  if (step === "face-id") return <FaceScanner onComplete={() => setStep("security")} />;
  if (step === "security") return <SecurityShield onComplete={() => setStep("dashboard")} />;
  
  return (
    <div className="min-h-screen bg-black text-white p-6 font-mono">
      {isPurging && <SelfDestruct onConfirm={() => setIsPurging(false)} onCancel={() => setIsPurging(false)} />}
      
      <div className="flex justify-between items-center border-b border-white/10 pb-6 mb-10">
        <div>
          <h1 className="text-3xl font-black italic uppercase">Panther<span className="text-[#d4af37]">OS</span></h1>
          <p className="text-[9px] text-green-500 font-bold uppercase tracking-widest"> Database Initialized (Empty)</p>
        </div>
        <div className="text-right">
           <Link href="/" className="text-[10px] bg-red-900/20 text-red-500 border border-red-500/30 px-3 py-1 rounded-full hover:bg-red-600 hover:text-white transition-all">LOGOUT</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {["Technical", "Medical", "Scouting", "Intelligence"].map((dept) => (
          <div key={dept} className="relative group bg-zinc-900/20 border border-white/5 p-8 rounded-[3rem] hover:bg-zinc-900/40 transition-all">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-black uppercase text-gray-600 group-hover:text-white transition-colors italic">{dept}</h2>
              <span className="text-[9px] bg-white/5 px-2 py-1 rounded text-gray-500 italic">0 RECORDS FOUND</span>
            </div>

            {/* EMPTY STATE VISUAL */}
            <div className="h-24 flex items-center justify-center border-2 border-dashed border-white/5 rounded-2xl mb-6">
              <p className="text-[10px] text-gray-600 uppercase tracking-widest animate-pulse font-bold">Awaiting Department Head Input...</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Link href="/admin/manage" className="bg-zinc-800/80 hover:bg-[#d4af37] hover:text-black p-4 rounded-2xl text-[10px] font-black uppercase text-center transition-all">Hire Staff</Link>
              <button onClick={() => setIsPurging(true)} className="bg-zinc-800/80 hover:bg-rose-900 p-4 rounded-2xl text-[10px] font-black uppercase transition-all">Purge Logs</button>
              <Link href="/admin/manage" className="bg-zinc-800/80 hover:bg-sky-600 p-4 rounded-2xl text-[10px] font-black uppercase text-center transition-all">Add Data</Link>
              <Link href="/admin/reply" className="bg-zinc-800/80 hover:bg-emerald-600 p-4 rounded-2xl text-[10px] font-black uppercase text-center transition-all">Broadcast</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
