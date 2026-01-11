"use client"
import React, { useState, useEffect } from "react";

export default function SystemHealth() {
  const [metrics, setMetrics] = useState({ cpu: 12, ram: 44, signal: 98 });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        cpu: Math.floor(Math.random() * (25 - 10) + 10),
        ram: Math.floor(Math.random() * (48 - 42) + 42),
        signal: Math.floor(Math.random() * (100 - 95) + 95),
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-zinc-900/60 border border-white/10 p-6 rounded-[2.5rem] mt-8 backdrop-blur-md">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#d4af37]">Core Health Monitor</h3>
        <span className="text-[9px] text-green-500 font-bold animate-pulse">SYSTEM OPTIMAL</span>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <p className="text-[8px] text-gray-500 uppercase mb-1">CPU Load</p>
          <p className="text-xl font-black text-white">{metrics.cpu}%</p>
        </div>
        <div className="text-center">
          <p className="text-[8px] text-gray-500 uppercase mb-1">RAM Usage</p>
          <p className="text-xl font-black text-white">{metrics.ram}%</p>
        </div>
        <div className="text-center">
          <p className="text-[8px] text-gray-500 uppercase mb-1">Signal</p>
          <p className="text-xl font-black text-[#d4af37]">{metrics.signal}%</p>
        </div>
      </div>

      {/* WAVEFORM GRAPH */}
      <div className="h-16 w-full bg-black/40 rounded-xl overflow-hidden relative border border-white/5">
        <svg viewBox="0 0 200 40" className="w-full h-full">
          <path
            d="M0 20 Q 25 5, 50 20 T 100 20 T 150 20 T 200 20"
            fill="none"
            stroke="#d4af37"
            strokeWidth="2"
            className="animate-wave"
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-20px); }
        }
        .animate-wave { animation: wave 1s linear infinite; }
      `}</style>
    </div>
  );
}
