"use client"
import React from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const departments = [
    { name: "Technical", id: "tech", color: "from-blue-600", icon: "" },
    { name: "Medical", id: "med", color: "from-red-600", icon: "" },
    { name: "General Admin", id: "adm", color: "from-amber-600", icon: "" }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 font-sans">
      <div className="border-b-4 border-[#d4af37] mb-12 pb-6">
        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter">Command Center</h1>
        <p className="text-[#d4af37] text-sm md:text-xl font-bold tracking-[0.3em]">PANTHER ELITE ACCESS</p>
      </div>

      <div className="space-y-8">
        {departments.map((dept) => (
          <div key={dept.id} className="bg-zinc-900/80 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col lg:flex-row items-center gap-6 md:gap-10">
            <div className={`bg-gradient-to-br ${dept.color} to-black w-full lg:w-72 p-6 md:p-8 rounded-2xl shadow-xl`}>
              <span className="text-4xl mb-2 block">{dept.icon}</span>
              <h2 className="text-2xl font-black uppercase italic">{dept.name}</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full">
              <Link href="/admin/manage" className="bg-emerald-600 hover:bg-emerald-400 text-white font-black py-6 md:py-8 rounded-xl uppercase text-[10px] md:text-xs text-center shadow-lg transition-all active:scale-95">
                 Credentials
              </Link>
              <Link href="/admin/manage" className="bg-rose-700 hover:bg-rose-500 text-white font-black py-6 md:py-8 rounded-xl uppercase text-[10px] md:text-xs text-center shadow-lg transition-all active:scale-95">
                 Delete
              </Link>
              <Link href="/admin/stats" className="bg-sky-600 hover:bg-sky-400 text-white font-black py-6 md:py-8 rounded-xl uppercase text-[10px] md:text-xs text-center shadow-lg transition-all active:scale-95">
                 View Feed
              </Link>
              <Link href="/admin/reply" className="bg-[#d4af37] hover:bg-white text-black font-black py-6 md:py-8 rounded-xl uppercase text-[10px] md:text-xs text-center shadow-lg transition-all active:scale-95">
                 Reply
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
