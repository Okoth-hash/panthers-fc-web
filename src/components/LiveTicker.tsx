"use client"
import React, { useEffect, useState } from "react";

export default function LiveTicker() {
  const [news, setNews] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("panther_staff");
    if (saved) {
      const staff = JSON.parse(saved);
      const names = staff.map((s: any) => `RECRUIT CONFIRMED: ${s.name} JOINED ${s.dept} DEPT`);
      setNews(names.length > 0 ? names : ["AWAITING NEW RECRUITS...", "SYSTEM STABLE", "ENCRYPTION ACTIVE"]);
    } else {
      setNews(["PANTHER OS INITIALIZED...", "ALL SYSTEMS GO", "NO RECRUITS IN DATABASE"]);
    }
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#d4af37] py-2 overflow-hidden border-t-2 border-black z-[600]">
      <div className="flex whitespace-nowrap animate-ticker">
        {[...news, ...news].map((item, i) => (
          <span key={i} className="text-black font-black text-[10px] uppercase italic mx-8 tracking-widest">
            {item} 
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
