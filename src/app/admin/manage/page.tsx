"use client"
import React, { useState } from "react";
import Link from "next/link";

export default function ManagementHub() {
  return (
    <div className="min-h-screen bg-black text-white p-8 font-mono flex flex-col items-center">
      <div className="w-full max-w-2xl bg-zinc-900/50 border border-[#d4af37]/30 rounded-[40px] p-10 backdrop-blur-md">
        <h1 className="text-3xl font-black uppercase italic text-[#d4af37] mb-2">Personnel Intake</h1>
        <p className="text-[10px] text-gray-500 uppercase tracking-[0.4em] mb-10">Departmental Hiring Protocol</p>
        
        <div className="space-y-6">
          <div>
            <label className="text-[10px] text-[#d4af37] uppercase font-bold tracking-widest">Full Name</label>
            <input className="w-full bg-black border border-white/10 p-4 rounded-xl mt-2 outline-none focus:border-green-500 transition-all" placeholder="Enter Recruit Name..." />
          </div>

          <div>
            <label className="text-[10px] text-[#d4af37] uppercase font-bold tracking-widest">Target Department</label>
            <select className="w-full bg-black border border-white/10 p-4 rounded-xl mt-2 outline-none focus:border-green-500">
              <option>Technical</option>
              <option>Medical</option>
              <option>Scouting</option>
              <option>Intelligence</option>
            </select>
          </div>

          <div className="pt-6 grid grid-cols-2 gap-4">
            <button className="bg-green-600 hover:bg-green-400 text-black font-black py-4 rounded-2xl uppercase italic">Confirm Hire</button>
            <Link href="/admin" className="bg-zinc-800 text-center py-4 rounded-2xl uppercase font-bold hover:bg-zinc-700">Cancel</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
