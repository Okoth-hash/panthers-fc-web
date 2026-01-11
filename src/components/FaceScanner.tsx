"use client"
import React, { useEffect, useRef, useState } from "react";

export default function FaceScanner({ onComplete }: { onComplete: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [status, setStatus] = useState("Initializing Camera...");

  useEffect(() => {
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setStatus("Scanning Face...");
          // Simulate scanning time
          setTimeout(() => {
            setStatus("Biometrics Confirmed");
            setTimeout(() => {
              stream.getTracks().forEach(track => track.stop());
              onComplete();
            }, 1500);
          }, 4000);
        }
      } catch (err) {
        setStatus("Camera Access Denied");
        setTimeout(onComplete, 2000); // Bypass if no camera found
      }
    }
    startCamera();
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-[200] flex flex-col items-center justify-center font-mono">
      <div className="relative w-80 h-80 border-2 border-[#d4af37]/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.2)]">
        <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover grayscale brightness-125" />
        
        {/* SCANNING OVERLAY */}
        <div className="absolute inset-0 border-[40px] border-black/40" />
        <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400 shadow-[0_0_15px_#22d3ee] animate-scan" />
        <div className="absolute inset-0 bg-[url(\"https://www.transparenttextures.com/patterns/carbon-fibre.png\")] opacity-20" />
        
        {/* HUD CORNERS */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#d4af37]" />
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#d4af37]" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#d4af37]" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#d4af37]" />
      </div>

      <div className="mt-10 text-center">
        <p className="text-cyan-400 text-xs font-black uppercase tracking-[0.4em] mb-2">{status}</p>
        <div className="flex gap-1 justify-center">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-1 h-3 bg-[#d4af37]/20 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { top: 0%; }
          100% { top: 100%; }
        }
        .animate-scan { animation: scan 2.5s linear infinite; }
      `}</style>
    </div>
  );
}
