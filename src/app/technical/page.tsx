"use client"
import React, { useState } from 'react';
import PantherLogo from '../../components/PantherLogo';

export default function TechnicalPage() {
  // Initial player list
  const [players, setPlayers] = useState([
    { position: "ST", player: "Marcus Stone", status: "In Form" },
    { position: "LW", player: "David 'Flash' Okoth", status: "Active" },
  ]);

  const [newName, setNewName] = useState("");
  const [newPos, setNewPos] = useState("ST");

  const addPlayer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName) return;
    
    const newEntry = { position: newPos, player: newName, status: "Scouted" };
    setPlayers([...players, newEntry]);
    setNewName(""); // Clear input
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center border-b border-[#d4af37]/30 pb-6 mb-10">
          <div className="flex items-center gap-4">
            <PantherLogo className="w-12 h-12" />
            <h1 className="text-2xl font-black uppercase tracking-tighter">Technical Command</h1>
          </div>
          <a href="/" className="text-xs font-bold text-gray-500 hover:text-[#d4af37] transition-colors">EXIT TO HQ</a>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* TACTICAL BOARD - Displays current players */}
          <section className="lg:col-span-2 bg-neutral-900 border border-neutral-800 rounded-3xl p-8">
            <h2 className="text-xl font-bold uppercase mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#d4af37] rounded-full"></span>
              Active Roster
            </h2>

            <div className="grid gap-4">
              {players.map((slot, idx) => (
                <div key={idx} className="flex items-center justify-between bg-black/50 p-4 rounded-xl border border-white/5 hover:border-[#d4af37]/50 transition-all">
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 flex items-center justify-center bg-neutral-800 rounded-lg font-mono font-bold text-[#d4af37]">
                      {slot.position}
                    </span>
                    <p className="font-bold">{slot.player}</p>
                  </div>
                  <span className="text-[10px] uppercase font-mono text-green-500 font-bold">{slot.status}</span>
                </div>
              ))}
            </div>
          </section>

          {/* SCOUTING REPORT FORM - Add new players */}
          <aside className="space-y-6">
            <section className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6">
              <h3 className="font-black uppercase text-sm mb-6 text-[#d4af37]">New Scouting Report</h3>
              <form onSubmit={addPlayer} className="space-y-4">
                <div>
                  <label className="block text-[10px] uppercase text-gray-500 mb-2 font-bold tracking-widest">Player Name</label>
                  <input 
                    type="text" 
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full bg-black border border-neutral-800 p-3 rounded-lg focus:border-[#d4af37] outline-none text-sm"
                    placeholder="Enter prospect name..."
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase text-gray-500 mb-2 font-bold tracking-widest">Preferred Position</label>
                  <select 
                    value={newPos}
                    onChange={(e) => setNewPos(e.target.value)}
                    className="w-full bg-black border border-neutral-800 p-3 rounded-lg focus:border-[#d4af37] outline-none text-sm text-gray-400"
                  >
                    <option value="ST">ST - Striker</option>
                    <option value="LW">LW - Left Wing</option>
                    <option value="RW">RW - Right Wing</option>
                    <option value="CM">CM - Midfield</option>
                    <option value="CB">CB - Center Back</option>
                    <option value="GK">GK - Goalkeeper</option>
                  </select>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-white text-black py-3 rounded-lg font-black uppercase text-xs tracking-widest hover:bg-[#d4af37] transition-all"
                >
                  Confirm Scouting
                </button>
              </form>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}