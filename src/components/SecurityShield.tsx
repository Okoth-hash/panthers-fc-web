"use client"
import React, { useState, useEffect } from "react";

export default function SecurityShield({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 5;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center font-mono overflow-hidden">
      <div className="relative w-64 h-64 mb-12">
        <div className="absolute inset-0 border-4 border-[#d4af37]/20 rounded-full animate-pulse" />
        <div className="absolute inset-4 border-2 border-[#d4af37]/40 rounded-full animate-spin shadow-[0_0_15px_rgba(212,175,55,0.3)]" style={{animationDuration: "3s"}} />
        <div className="absolute inset-0 flex items-center justify-center text-6xl drop-shadow-[0_0_20px_#d4af37]"></div>
      </div>
      <div className="w-64 bg-zinc-900 h-1.5 rounded-full overflow-hidden border border-white/10">
        <div className="h-full bg-[#d4af37] shadow-[0_0_10px_#d4af37] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>
      <p className="mt-6 text-[#d4af37] text-[10px] font-bold tracking-[0.5em] uppercase animate-pulse">
        System Scanning... {progress}%
      </p>
    </div>
  );
}
