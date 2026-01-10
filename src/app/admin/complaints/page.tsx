"use client"
import React, { useState } from 'react';
import PantherLogo from '../../../components/PantherLogo';

export default function ComplaintsCenter() {
  // Mock Database for Credentials & Complaints
  const [staff] = useState([
    { name: "Okoth", role: "Head", dept: "Technical", access: "Level 4" },
    { name: "Dr. Aris", role: "Head", dept: "Medical", access: "Level 4" },
    { name: "Sarah", role: "Assistant", dept: "Technical", access: "Level 2" }
  ]);

  const [feedback] = useState([
    { id: 1, from: "Player", sender: "Marcus Stone", subject: "Equipment", msg: "Training kits are wearing out.", status: "Urgent" },
    { id: 2, from: "Fan", sender: "John Doe", subject: "Tickets", msg: "The checkout page is slow.", status: "Pending" }
  ]);

  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center gap-4 mb-12 border-b border-neutral-800 pb-6">
          <PantherLogo className="w-12 h-12" />
          <h1 className="text-3xl font-black uppercase italic">Intelligence Center</h1>
        </header>

        <div className="grid lg:grid-cols-3 gap-10">
          
          {/* STAFF CREDENTIALS LIST */}
          <section className="lg:col-span-1">
            <h2 className="text-[#d4af37] text-xs font-bold uppercase tracking-widest mb-6">Staff Credentials</h2>
            <div className="space-y-4">
              {staff.map((s, i) => (
                <div key={i} className="bg-neutral-900/50 p-4 rounded-xl border border-neutral-800">
                  <p className="font-bold text-sm">{s.name}</p>
                  <p className="text-[10px] text-gray-500 uppercase">{s.dept} — {s.role}</p>
                  <div className="mt-2 text-[9px] font-mono bg-black inline-block px-2 py-1 rounded text-[#d4af37]">
                    {s.access}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* COMPLAINTS & FEEDBACK */}
          <section className="lg:col-span-2">
            <h2 className="text-[#d4af37] text-xs font-bold uppercase tracking-widest mb-6">Incoming Feedback</h2>
            <div className="space-y-4">
              {feedback.map((f) => (
                <div key={f.id} className="bg-neutral-900 p-6 rounded-2xl border-l-4 border-[#d4af37] hover:bg-neutral-800 transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-[10px] font-black px-2 py-1 rounded ${f.from === 'Player' ? 'bg-blue-900 text-blue-200' : 'bg-purple-900 text-purple-200'}`}>
                      {f.from.toUpperCase()}
                    </span>
                    <span className="text-[10px] font-mono text-gray-500">{f.status}</span>
                  </div>
                  <h3 className="font-bold text-lg">{f.subject}</h3>
                  <p className="text-sm text-gray-400 mt-2 mb-4">"{f.msg}"</p>
                  <p className="text-[10px] text-gray-500">— Submitted by {f.sender}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}