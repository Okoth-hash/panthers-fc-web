"use client"
import React from "react";
import PantherLogo from "../components/PantherLogo";
import ClubNews from "../components/ClubNews";
import LiveTicker from "../components/LiveTicker";

export default function LandingPage() {
  return (
    <main className="bg-black min-h-screen text-white font-sans selection:bg-[#d4af37]">
      <nav className="p-6 flex justify-between items-center border-b border-white/10">
        <div className="flex items-center gap-3">
          <PantherLogo className="w-10 h-10" />
          <span className="font-black uppercase tracking-tighter text-xl italic">Panthers FC</span>
        </div>
      </nav>

      <section className="py-24 px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-black uppercase italic leading-none mb-8 tracking-tighter">
          JOIN THE <br /> <span className="text-[#d4af37]">HUNT.</span>
        </h1>
        <p className="max-w-xl mx-auto text-gray-400 text-sm mb-12">
          Experience the evolution of football management with Panthers FC.
        </p>
      </section>

      <ClubNews />
      <div className="h-20"></div>
      <LiveTicker />
    </main>
  );
}
