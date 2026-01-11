"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import SecurityShield from "../../components/SecurityShield";
import FaceScanner from "../../components/FaceScanner";
import LiveTicker from "../../components/LiveTicker";
import SystemHealth from "../../components/SystemHealth";
import TerminalLogs from "../../components/TerminalLogs";

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
    <div className="min-h-screen bg-black text-white p-6 font-mono pb-32">
      <div className="flex justify-between items-center border-b border-white/10 pb-6 mb-10">
        <h1 className="text-3xl font-black italic uppercase">Panther<span className="text-[#d4af37]">OS</span></h1>
        <div className="flex gap-4">
          <Link href="/admin/manage" className="bg-[#d4af37] text-black px-6 py-2 rounded-full font-black text-[10px] uppercase">Recruit</Link>
          <Link href="/" className="text-[10px] text-gray-500 border border-white/10 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all font-bold">EXIT</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {["Technical", "Medical", "Scouting", "Intelligence"].map((dept) => {
            const deptStaff = staffData.filter(s => s.dept === dept);
            return (
              <div key={dept} className="bg-zinc-900/30 border border-white/5 p-6 rounded-[2rem] hover:border-[#d4af37]/20 transition-all">
                <h2 className="text-lg font-black uppercase text-gray-500 mb-4 tracking-tighter italic">{dept}</h2>
                <div className="min-h-[80px] mb-4">
                  {deptStaff.length === 0 ? <p className="text-[8px] text-gray-700 uppercase">Awaiting Data...</p> : 
                    deptStaff.map((s, i) => <div key={i} className="text-[11px] font-bold border-l-2 border-[#d4af37] pl-3 mb-2">{s.name}</div>)
                  }
                </div>
                <div className="flex gap-2">
                  <Link href="/admin/manage" className="flex-1 bg-zinc-800 text-[9px] py-2 rounded-lg text-center font-bold">HIRE</Link>
                  <button onClick={() => {localStorage.removeItem("panther_staff"); window.location.reload();}} className="flex-1 bg-zinc-800 text-[9px] py-2 rounded-lg font-bold text-red-500">WIPE</button>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="lg:col-span-1">
          <SystemHealth />
          <TerminalLogs />
        </div>
      </div>

      <LiveTicker />
    </div>
  );
}
