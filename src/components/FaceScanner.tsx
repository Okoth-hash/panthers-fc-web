"use client"
import React, { useEffect, useRef, useState } from "react";

export default function FaceScanner({ onComplete }: { onComplete: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [status, setStatus] = useState("Initializing Biometrics...");
  const [isAlert, setIsAlert] = useState(false);

  useEffect(() => {
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setStatus("Scanning for Panther ID...");
          
          // Successful Match after 4 seconds
          setTimeout(() => {
            setStatus("Biometrics Confirmed");
            setTimeout(() => {
              stream.getTracks().forEach(track => track.stop());
              onComplete();
            }, 1000);
          }, 4000);
        }
      } catch (err) {
        // TRIGGER RED ALERT
        setIsAlert(true);
        setStatus("ACCESS DENIED: No Face Detected");
        
        // Play an alert sound if possible
        const speech = new SpeechSynthesisUtterance("Access Denied. Unauthorized user detected.");
        speech.pitch = 0.5;
        window.speechSynthesis.speak(speech);

        // Allow bypass after alert for testing
        setTimeout(onComplete, 3000);
      }
    }
    startCamera();
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[200] flex flex-col items-center justify-center font-mono transition-colors duration-500 ${isAlert ? "bg-red-950" : "bg-black"}`}>
      {isAlert && <div className="absolute inset-0 bg-red-600/20 animate-pulse pointer-events-none" />}
      
      <div className={`relative w-80 h-80 border-2 rounded-3xl overflow-hidden shadow-2xl transition-colors duration-500 ${isAlert ? "border-red-500 shadow-red-900/50" : "border-[#d4af37]/30 shadow-yellow-900/20"}`}>
        <video ref={videoRef} autoPlay playsInline className={`w-full h-full object-cover brightness-110 ${isAlert ? "grayscale sepia-[100%] hue-rotate-[-50deg]" : "grayscale"}`} />
        
        {/* SCANNING LASER */}
        {!isAlert && <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400 shadow-[0_0_15px_#22d3ee] animate-scan" />}
        {isAlert && <div className="absolute inset-0 flex items-center justify-center bg-red-900/40 text-red-200 font-black text-4xl italic uppercase animate-bounce">Threat</div>}
      </div>

      <div className="mt-10 text-center z-10">
        <p className={`text-sm font-black uppercase tracking-[0.4em] mb-2 ${isAlert ? "text-red-500 animate-pulse" : "text-cyan-400"}`}>
          {status}
        </p>
        <div className="text-[10px] text-gray-500 uppercase tracking-widest">
          Location: Unknown IP | Terminal: Panther-Core-01
        </div>
      </div>

      <style jsx>{`
        @keyframes scan { 0% { top: 0%; } 100% { top: 100%; } }
        .animate-scan { animation: scan 2s linear infinite; }
      `}</style>
    </div>
  );
}
