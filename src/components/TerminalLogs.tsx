"use client"
import React, { useEffect, useState, useRef } from "react";

export default function TerminalLogs() {
  const [logs, setLogs] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const addLog = (message: string) => {
    const time = new Date().toLocaleTimeString();
    setLogs((prev) => [...prev, `[${time}] ${message}`].slice(-8)); // Keeps last 8 logs
  };

  useEffect(() => {
    addLog("PantherOS Kernel v4.2 Initialized");
    addLog("Establishing encrypted uplink...");
    addLog("Server Status: Online");

    // Simulate random system activity
    const interval = setInterval(() => {
      const events = [
        "Scanning network traffic...",
        "Syncing personnel database...",
        "Health check: All systems optimal",
        "Encrypted backup created",
        "Satellite link stabilized"
      ];
      addLog(events[Math.floor(Math.random() * events.length)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black border border-green-900/50 p-4 rounded-2xl mt-6 font-mono text-[10px] shadow-[0_0_20px_rgba(34,197,94,0.1)]">
      <div className="flex items-center gap-2 mb-2 border-b border-green-900/30 pb-2">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        <span className="text-green-500 font-bold uppercase tracking-tighter text-[8px]">Live System Logs</span>
      </div>
      <div className="space-y-1 h-32 overflow-hidden flex flex-col justify-end">
        {logs.map((log, i) => (
          <p key={i} className="text-green-400/80 leading-tight">
            <span className="text-green-600 font-black mr-2">{">"}</span> {log}
          </p>
        ))}
      </div>
    </div>
  );
}
