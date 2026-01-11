"use client"
import React from "react";

export default function DepartmentManagement() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-black italic uppercase text-[#d4af37]">Management Hub</h1>
        <a href="/admin" className="text-xs font-bold border border-white/20 px-4 py-2 rounded uppercase">Back to Command</a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* SECTION 1: CREDENTIALS */}
        <div className="bg-zinc-900 border border-white/10 p-6 rounded-xl">
          <h3 className="text-xl font-bold uppercase mb-4 text-green-500">Staff Credentials</h3>
          <div className="space-y-4">
            <input className="w-full bg-black border border-white/10 p-3 rounded" placeholder="Staff Name..." />
            <input className="w-full bg-black border border-white/10 p-3 rounded" placeholder="Role/Level..." />
            <div className="flex gap-2">
              <button className="flex-1 bg-green-600 p-3 font-black uppercase text-xs rounded">Authorize Staff</button>
              <button className="flex-1 bg-red-900 p-3 font-black uppercase text-xs rounded">Revoke Access</button>
            </div>
          </div>
        </div>

        {/* SECTION 2: COMMENTS & REPLIES */}
        <div className="bg-zinc-900 border border-white/10 p-6 rounded-xl">
          <h3 className="text-xl font-bold uppercase mb-4 text-blue-500">Intel Feed (Comments)</h3>
          <div className="bg-black/50 p-4 rounded mb-4 border-l-4 border-[#d4af37]">
            <p className="text-sm italic">"Training kits are wearing out." - Marcus Stone</p>
            <div className="mt-3 flex gap-4">
               <button className="text-[10px] font-bold text-blue-400 uppercase">View Details</button>
               <button className="text-[10px] font-bold text-[#d4af37] uppercase">Send Reply</button>
            </div>
          </div>
          <textarea className="w-full bg-black border border-white/10 p-3 rounded h-24 mt-2" placeholder="Write a response..."></textarea>
          <button className="w-full bg-[#d4af37] text-black font-black p-3 mt-2 uppercase text-xs rounded">Broadcast Reply</button>
        </div>
      </div>
    </div>
  );
}
