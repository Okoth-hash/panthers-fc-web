"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import SecurityShield from "../../components/SecurityShield";
import FaceScanner from "../../components/FaceScanner";
import LiveTicker from "../../components/LiveTicker";

interface StaffMember {
  name: string;
  dept: string;
}

export default function DigitalAdmin() {
  const [step, setStep] = useState("face-id");
  const [staffData, setStaffData] = useState<StaffMember[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("panther_staff");
    if (saved) setStaffData(JSON.parse(saved));
  }, []);

  if (step === "face-id") return <FaceScanner onComplete={() => setStep("security")} />;
  if (step === "security") return <SecurityShield onComplete={() => setStep("dashboard")} />;
  
  return (
    <div className="min-h-screen bg-black text-white p-6 font-mono pb-20">
      <div className="flex justify-between items-center border-b border-white/10 pb-6 mb-10">
        <h1 className="text-3xl font-black italic uppercase">Panther<span className="text-[#d4af37]">OS</span></h1>
        <Link href="/admin/manage" className="bg-[#d4af37] text-black px-6 py-2 rounded-full font-black text-[10px] uppercase">New Recruitment</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {["Technical", "Medical", "Scouting", "Intelligence"].map((dept) => {
          const deptStaff = staffData.filter(s => s.dept === dept);
          return (
            <div key={dept} className="bg-zinc-900/40 border border-white/5 p-8 rounded-[3rem]">
              <h2 className="text-xl font-black uppercase mb-6 text-gray-400">{dept}</h2>
              <div className="min-h-[100px] mb-6 space-y-2">
                {deptStaff.length === 0 ? (
                  <p className="text-[9px] text-gray-700 uppercase italic">No Active Personnel</p>
                ) : (
                  deptStaff.map((s, i) => (
                    <div key={i} className="bg-white/5 p-3 rounded-xl border border-white/10 flex justify-between">
                      <span className="text-xs font-bold uppercase">{s.name}</span>
                      <span className="text-[8px] text-green-500 uppercase font-black">Active</span>
                    </div>
                  ))
                )}
              </div>
              <div className="flex gap-2">
                <Link href="/admin/manage" className="flex-1 bg-zinc-800 p-3 rounded-xl text-[10px] text-center font-bold hover:bg-[#d4af37] hover:text-black transition-all">HIRE</Link>
                <button onClick={() => {localStorage.removeItem("panther_staff"); window.location.reload();}} className="flex-1 bg-red-950/30 text-red-500 p-3 rounded-xl text-[10px] font-bold border border-red-500/20">WIPE</button>
              </div>
            </div>
          );
        })}
      </div>
      <LiveTicker />
    </div>
  );
}
