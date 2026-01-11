"use client"
import React from "react";
import PantherLogo from "../components/PantherLogo";
import ClubNews from "../components/ClubNews";
import LiveTicker from "../components/LiveTicker";

export default function LandingPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <nav className="p-8 flex justify-between items-center border-b-2 border-white/10 bg-black/90 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <PantherLogo className="w-20 h-20" />
          <span className="text-4xl font-black italic uppercase tracking-tighter">Panthers FC</span>
        </div>
        
        {/* ULTRA VISIBLE BUTTON */}
        <a href="/login" className="bg-[#d4af37] text-black font-black text-xl px-12 py-5 rounded-full border-4 border-white shadow-[0_0_40px_rgba(212,175,55,0.6)] hover:scale-110 transition-all uppercase italic">
          Staff Portal
        </a>
      </nav>

      <section className="py-40 text-center">
        <h1 className="text-[12rem] font-black italic uppercase leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#d4af37] to-[#8a6d1d] drop-shadow-2xl">
          THE HUNT.
        </h1>
      </section>

      <div className="px-12"><ClubNews /></div>
      <div className="h-32"></div>
      <LiveTicker />
    </main>
  );
}
