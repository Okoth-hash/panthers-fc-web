"use client"
import React, { useState } from "react";
import Link from "next/link";
import SecurityShield from "../../components/SecurityShield";
import FaceScanner from "../../components/FaceScanner";
import SelfDestruct from "../../components/SelfDestruct";
import HolographicStaff from "../../components/HolographicStaff";
import ScoutingMap from "../../components/ScoutingMap";

export default function DigitalAdmin() {
  const [step, setStep] = useState("face-id");
  const [isPurging, setIsPurging] = useState(false);
  const [showHologram, setShowHologram] = useState(false);
  const [showMap, setShowMap] = useState(false);

  if (step === "face-id") return <FaceScanner onComplete={() => setStep("security")} />;
  if (step === "security") return <SecurityShield onComplete={() => setStep("dashboard")} />;
  
  return (
    <div className="min-h-screen bg-black text-white p-6 font-mono">
      {isPurging && <SelfDestruct onConfirm={() => setIsPurging(false)} onCancel={() => setIsPurging(false)} />}
      {showHologram && <HolographicStaff onClose={() => setShowHologram(false)} />}
      {showMap && <ScoutingMap onClose={() => setShowMap(false)} />}
      
      <div className="flex justify-between items-center border-b border-[#d4af37]/20 pb-6 mb-10">
        <h1 className="text-3xl font-black italic uppercase italic">Panther<span className="text-[#d4af37]">OS</span></h1>
        <span className="text-[10px] text-sky-400 font-bold uppercase animate-pulse"> Server Online (Vercel)</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {["Technical", "Medical", "Scouting", "Intelligence"].map((dept) => (
          <div key={dept} className="bg-zinc-900/40 border border-white/5 p-8 rounded-[2.5rem] hover:border-[#d4af37]/30 transition-all">
            <h2 className="text-2xl font-black uppercase mb-6 text-gray-400">{dept}</h2>
            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => setShowHologram(true)} className="bg-zinc-800 hover:bg-emerald-600 p-4 rounded-2xl text-[10px] font-black uppercase transition-all">Credentials</button>
              <button onClick={() => setIsPurging(true)} className="bg-zinc-800 hover:bg-red-700 p-4 rounded-2xl text-[10px] font-black uppercase transition-all">Delete</button>
              
              {/* SCOUTING OPENS MAP */}
              <button 
                onClick={() => dept === "Scouting" ? setShowMap(true) : null}
                className="bg-zinc-800 hover:bg-sky-600 p-4 rounded-2xl text-[10px] font-black uppercase transition-all"
              >
                {dept === "Scouting" ? "View Map" : "View Feed"}
              </button>
              
              <Link href="/admin/reply" className="bg-zinc-800 hover:bg-[#d4af37] hover:text-black p-4 rounded-2xl text-[10px] font-black uppercase text-center transition-all">Reply</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
