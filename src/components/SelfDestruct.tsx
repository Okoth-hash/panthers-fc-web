"use client"
import React, { useState, useEffect } from "react";

export default function SelfDestruct({ onConfirm, onCancel }: { onConfirm: () => void, onCancel: () => void }) {
  const [count, setCount] = useState(5);

  useEffect(() => {
    // AI Warning Voice
    const speech = new SpeechSynthesisUtterance("Warning. Data purge initiated. Five seconds to total deletion.");
    speech.pitch = 0.5;
    speech.rate = 0.8;
    window.speechSynthesis.speak(speech);

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onConfirm();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [onConfirm]);

  return (
    <div className="fixed inset-0 z-[300] bg-red-600 flex flex-col items-center justify-center animate-pulse">
      <div className="bg-black p-12 rounded-[50px] border-8 border-white flex flex-col items-center shadow-[0_0_100px_rgba(255,255,255,0.5)]">
        <h1 className="text-white text-9xl font-black italic mb-4">{count}</h1>
        <h2 className="text-red-600 text-4xl font-black uppercase tracking-tighter mb-8">Data Purge Active</h2>
        
        <button 
          onClick={(e) => {
            window.speechSynthesis.cancel();
            onCancel();
          }}
          className="bg-white text-black text-2xl font-black px-12 py-6 rounded-full hover:scale-110 transition-all uppercase italic"
        >
           ABORT MISSION
        </button>
      </div>
      <div className="mt-10 text-white font-mono text-xs uppercase tracking-[1em] animate-bounce">
        Wiping Panther Intelligence Servers...
      </div>
    </div>
  );
}
