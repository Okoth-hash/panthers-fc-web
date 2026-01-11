"use client"
import React from "react";

export default function AdminDashboard() {
  const departments = [
    { name: "Technical", id: "tech", color: "from-blue-600", icon: "" },
    { name: "Medical", id: "med", color: "from-red-600", icon: "" },
    { name: "General Admin", id: "adm", color: "from-amber-600", icon: "" }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-12 font-sans">
      <div className="border-b-4 border-[#d4af37] mb-12 pb-6">
        <h1 className="text-7xl font-black italic uppercase tracking-tighter">Command Center</h1>
        <p className="text-[#d4af37] text-xl font-bold tracking-[0.3em]">PANTHER ELITE ACCESS ONLY</p>
      </div>

      <div className="space-y-10">
        {departments.map((dept) => (
          <div key={dept.id} className="bg-zinc-900/50 border-2 border-white/10 rounded-3xl p-8 flex flex-col lg:flex-row items-center gap-10">
            {/* Dept Label */}
            <div className={`bg-gradient-to-br ${dept.color} to-black w-full lg:w-72 p-8 rounded-2xl shadow-xl`}>
              <span className="text-5xl mb-4 block">{dept.icon}</span>
              <h2 className="text-3xl font-black uppercase italic">{dept.name}</h2>
            </div>

            {/* THE FOUR ACTION BUTTONS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              <button className="bg-emerald-600 hover:bg-emerald-400 text-white font-black py-8 rounded-xl uppercase tracking-widest text-sm shadow-lg shadow-emerald-900/20 transition-all active:scale-95">
                 Credentials
              </button>
              <button className="bg-rose-700 hover:bg-rose-500 text-white font-black py-8 rounded-xl uppercase tracking-widest text-sm shadow-lg shadow-rose-900/20 transition-all active:scale-95">
                 Delete
              </button>
              <button className="bg-sky-600 hover:bg-sky-400 text-white font-black py-8 rounded-xl uppercase tracking-widest text-sm shadow-lg shadow-sky-900/20 transition-all active:scale-95">
                 View Feed
              </button>
              <button className="bg-[#d4af37] hover:bg-white text-black font-black py-8 rounded-xl uppercase tracking-widest text-sm shadow-lg shadow-yellow-900/20 transition-all active:scale-95">
                 Reply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
