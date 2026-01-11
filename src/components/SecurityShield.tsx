"use client"
import React, { useState, useEffect, useRef } from "react";

export default function SecurityShield({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const audioContextRef = useRef<AudioContext | null>(null);

  // DIGITAL VOICE SYNTHESIZER
  const speakWelcome = () => {
    const speech = new SpeechSynthesisUtterance("Welcome back, Commander. System is now online.");
    speech.pitch = 0.8; // Lower pitch for a more professional, "AI" feel
    speech.rate = 0.9;  // Slightly slower speed
    window.speechSynthesis.speak(speech);
  };

  const playPing = (freq: number) => {
    if (!audioContextRef.current) audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    const ctx = audioContextRef.current;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.05, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.1);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev % 15 === 0) playPing(600 + prev); 
        if (prev >= 100) {
          clearInterval(interval);
          speakWelcome(); // TRIGGER THE VOICE
          setTimeout(onComplete, 2500); // Wait for the voice to finish before entering
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center font-mono">
      <div className="relative w-64 h-64 mb-12">
        <div className="absolute inset-0 border-4 border-[#d4af37]/10 rounded-full animate-pulse" />
        <div className="absolute inset-4 border-2 border-[#d4af37]/40 rounded-full animate-spin shadow-[0_0_40px_rgba(212,175,55,0.3)]" style={{animationDuration: "1.5s"}} />
        <div className="absolute inset-0 flex items-center justify-center text-7xl drop-shadow-[0_0_20px_#d4af37]"></div>
      </div>
      
      <div className="w-64 bg-zinc-900 h-1.5 rounded-full overflow-hidden border border-white/5">
        <div className="h-full bg-[#d4af37] shadow-[0_0_20px_#d4af37] transition-all duration-100" style={{ width: `${progress}%` }} />
      </div>

      <div className="mt-8 text-center">
        <p className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.6em] animate-pulse">
          Biometric Scan: {progress}%
        </p>
        <div className="mt-4 flex gap-2 justify-center">
            <span className="h-1 w-4 bg-green-500 animate-bounce"></span>
            <span className="h-1 w-4 bg-green-500 animate-bounce" style={{animationDelay: "0.2s"}}></span>
            <span className="h-1 w-4 bg-green-500 animate-bounce" style={{animationDelay: "0.4s"}}></span>
        </div>
      </div>
    </div>
  );
}
