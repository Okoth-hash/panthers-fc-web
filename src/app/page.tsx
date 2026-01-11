"use client"
import React from "react";
import PantherLogo from "../components/PantherLogo";
import ClubNews from "../components/ClubNews";
import LiveTicker from "../components/LiveTicker";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <nav className="p-4 md:p-8 flex justify-between items-center border-b border-white/10 bg-black/90 sticky top-0 z-50">
        <div className="flex items-center gap-2 md:gap-4">
          <PantherLogo className="w-12 h-12 md:w-20 md:h-20" />
          <span className="text-xl md:text-4xl font-black italic uppercase tracking-tighter">Panthers FC</span>
        </div>
        
        <Link href="/login" className="bg-[#d4af37] text-black font-black text-xs md:text-xl px-4 py-2 md:px-12 md:py-5 rounded-full border-2 md:border-4 border-white shadow-[0_0_30px_rgba(212,175,55,0.5)] uppercase italic">
          Staff Portal
        </Link>
      </nav>

      <section className="py-20 md:py-40 text-center px-4">
        <h1 className="text-6xl md:text-[12rem] font-black italic uppercase leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#d4af37] to-[#8a6d1d]">
          THE HUNT.
        </h1>
      </section>

      <div className="px-4 md:px-12"><ClubNews /></div>
      <div className="h-20 md:h-32"></div>
      <LiveTicker />
    </main>
  );
}
