"use client"
import React, { useState } from "react";
import Link from "next/link";
import SecurityShield from "../../components/SecurityShield";
import FaceScanner from "../../components/FaceScanner";

export default function DigitalAdmin() {
  const [step, setStep] = useState("face-id"); // Steps: face-id -> security -> dashboard

  const depts = [
    { name: "Technical", icon: "" },
    { name: "Medical", icon: "" },
    { name: "Scouting", icon: "" },
    { name: "Intelligence", icon: "" }
  ];

  if (step === "face-id") return <FaceScanner onComplete={() => setStep("security")} />;
  if (step === "security") return <SecurityShield onComplete={() => setStep("dashboard")} />;

  return (
    <div className="min-h-screen bg-black text-white p-6 font-mono">
      {/* ... keeping the dashboard code from before ... */}
      <div className="flex justify-between items-center border-b border-[#d4af37]/30 pb-6 mb-10">
        <h1 className="text-3xl font-black italic uppercase">Panther<span className="text-[#d4af37]">OS</span></h1>
        <span className="text-[10px] text-green-500 font-bold uppercase tracking-widest">Biometric Verified</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {depts.map((d) => (
          <div key={d.name} className="bg-zinc-900/30 border border-white/5 p-6 rounded-2xl">
            <h2 className="text-xl font-bold uppercase mb-4">{d.icon} {d.name}</h2>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/admin/manage" className="bg-zinc-800 hover:bg-emerald-600 p-4 rounded-xl text-[10px] font-bold uppercase text-center">Credentials</Link>
              <Link href="/admin/manage" className="bg-zinc-800 hover:bg-rose-700 p-4 rounded-xl text-[10px] font-bold uppercase text-center">Database</Link>
              <Link href="/admin/stats" className="bg-zinc-800 hover:bg-sky-600 p-4 rounded-xl text-[10px] font-bold uppercase text-center">Live Feed</Link>
              <Link href="/admin/reply" className="bg-zinc-800 hover:bg-[#d4af37] hover:text-black p-4 rounded-xl text-[10px] font-bold uppercase text-center">Dispatch</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
