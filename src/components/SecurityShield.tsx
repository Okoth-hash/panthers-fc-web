"use client"
import React, { useState, useEffect, useRef } from "react";

export default function SecurityShield({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Function to create the high-tech "Ping" sound
  const playPing = (freq: number) => {
    if (!audioContextRef.current) audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    const ctx = audioContextRef.current;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.1);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev % 20 === 0) playPing(880 + prev); // Sound pitch rises as it scans
        if (prev >= 100) {
          playPing(1320); // High note for success
          clearInterval(interval);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 1;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center font-mono">
      <div className="relative w-64 h-64 mb-12">
        <div className="absolute inset-0 border-4 border-[#d4af37]/20 rounded-full animate-pulse" />
        <div className="absolute inset-4 border-2 border-[#d4af37]/40 rounded-full animate-spin shadow-[0_0_30px_rgba(212,175,55,0.4)]" style={{animationDuration: "2s"}} />
        <div className="absolute inset-0 flex items-center justify-center text-7xl drop-shadow-[0_0_20px_#d4af37]"></div>
      </div>
      
      <div className="w-64 bg-zinc-900 h-1.5 rounded-full overflow-hidden border border-white/10">
        <div className="h-full bg-[#d4af37] shadow-[0_0_15px_#d4af37] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      <div className="mt-8 text-center">
        <p className="text-[#d4af37] text-[10px] font-bold tracking-[0.5em] uppercase animate-pulse">
          Digital Handshake: {progress}%
        </p>
        <p className="text-white/20 text-[8px] mt-2 uppercase">Audio Protocol: Active</p>
      </div>
    </div>
  );
}
