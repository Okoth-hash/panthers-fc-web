"use client"
import React from "react";
import PantherLogo from "../components/PantherLogo";
import ClubNews from "../components/ClubNews";
import LiveTicker from "../components/LiveTicker";

export default function LandingPage() {
  return (
    <main className="bg-black min-h-screen text-white font-sans selection:bg-[#d4af37] selection:text-black">
      {/* HERO SECTION */}
      <nav className="p-6 flex justify-between items-center border-b border-white/10">
        <div className="flex items-center gap-3">
          <PantherLogo className="w-10 h-10" />
          <span className="font-black uppercase tracking-tighter text-xl italic">Panthers FC</span>
        </div>
        <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-widest">
          <a href="/history" className="hover:text-[#d4af37] transition-colors">History</a>
          <a href="/contact" className="hover:text-[#d4af37] transition-colors">Contact</a>
          <a href="/login" className="text-[#d4af37] border border-[#d4af37] px-4 py-1 rounded-full hover:bg-[#d4af37] hover:text-black transition-all">Staff Login</a>
        </div>
      </nav>

      <section className="py-24 px-6 text-center">
        <h2 className="text-[#d4af37] text-xs font-mono tracking-[0.5em] uppercase mb-4">Established 2026</h2>
        <h1 className="text-6xl md:text-8xl font-black uppercase italic leading-none mb-8 tracking-tighter">
          JOIN THE <br /> <span className="text-[#d4af37]">HUNT.</span>
        </h1>
        <p className="max-w-xl mx-auto text-gray-400 text-sm md:text-base leading-relaxed mb-12">
          From the heart of the pitch to the digital frontier. Experience the evolution of 
          football management and tactical excellence with Panthers FC.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a href="/contact" className="bg-white text-black px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-[#d4af37] transition-all">
            Join the Academy
          </a>
          <a href="/history" className="bg-neutral-900 border border-neutral-800 text-white px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:border-[#d4af37] transition-all">
            Our Legacy
          </a>
        </div>
      </section>

      {/* CLUB NEWS SECTION */}
      <ClubNews />

      {/* SPACER FOR TICKER */}
      <div className="h-20"></div>

      {/* LIVE STATS TICKER */}
      <LiveTicker />
    </main>
  );
}
