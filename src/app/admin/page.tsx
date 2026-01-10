"use client"
import React, { useState, useEffect } from 'react';
import PantherLogo from '../../components/PantherLogo';

export default function AdminDashboard() {
  const [isLocked, setIsLocked] = useState(false);
  const [systemTime, setSystemTime] = useState(new Date().toLocaleTimeString());

  // Update clock and sync with security cookie
  useEffect(() => {
    const timer = setInterval(() => setSystemTime(new Date().toLocaleTimeString()), 1000);
    const cookieValue = document.cookie.split('; ').find(row => row.startsWith('isStaffFired='));
    if (cookieValue?.split('=')[1] === 'true') setIsLocked(true);
    return () => clearInterval(timer);
  }, []);

  const handleSecurityToggle = () => {
    const newState = !isLocked;
    setIsLocked(newState);
    document.cookie = `isStaffFired=${newState}; path=/`;
  };

  const departments = [
    { name: "Technical", status: "Active", metric: "4-3-3 Formation", color: "text-blue-400" },
    { name: "Medical", status: "Operational", metric: "2 Injuries", color: "text-red-500" },
    { name: "History", status: "Updated", metric: "3 Trophies", color: "text-[#d4af37]" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* DASHBOARD HEADER */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="flex items-center gap-4">
            <PantherLogo className="w-16 h-16 border border-[#d4af37]/20 p-2 rounded-xl" />
            <div>
              <h1 className="text-3xl font-black uppercase italic tracking-tighter">Owner Dashboard</h1>
              <p className="text-[#d4af37] text-xs font-mono tracking-widest uppercase opacity-70">Panthers FC Global HQ</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase font-bold text-gray-500 tracking-widest mb-1">System Local Time</p>
            <p className="text-2xl font-mono tabular-nums">{systemTime}</p>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* SECURITY STATUS CARD */}
          <section className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-xs font-black uppercase text-gray-500 tracking-[0.2em] mb-6">Security Protocol</h2>
              <div className={`text-4xl font-black mb-4 ${isLocked ? 'text-red-600' : 'text-green-500'}`}>
                {isLocked ? 'LOCKED' : 'ACTIVE'}
              </div>
              <p className="text-sm text-gray-400 mb-10 leading-relaxed">
                {isLocked ? 'All staff access to Technical and Medical wings is currently revoked.' : 'Staff members have full access to their respective departments.'}
              </p>
            </div>
            <button 
              onClick={handleSecurityToggle}
              className={`w-full py-4 rounded-xl font-black transition-all duration-300 ${isLocked ? 'bg-green-600 text-white hover:bg-green-500' : 'bg-red-600 text-white hover:bg-red-700 shadow-[0_0_30px_rgba(220,38,38,0.3)]'}`}
            >
              {isLocked ? 'RESTORE ACCESS' : 'TRIGGER LOCKDOWN'}
            </button>
          </section>

          {/* DEPARTMENT SUMMARIES */}
          <section className="lg:col-span-2 grid md:grid-cols-3 gap-4">
            {departments.map((dept, i) => (
              <div key={i} className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-2xl flex flex-col justify-between hover:border-[#d4af37]/30 transition-all">
                <div>
                  <h3 className="text-xs font-bold uppercase text-gray-500 mb-4">{dept.name}</h3>
                  <p className={`text-lg font-black ${dept.color}`}>{dept.metric}</p>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-[10px] font-mono text-gray-400">{dept.status}</span>
                  <div className={`w-2 h-2 rounded-full ${isLocked && (dept.name === 'Technical' || dept.name === 'Medical') ? 'bg-red-600' : 'bg-green-500'}`}></div>
                </div>
              </div>
            ))}
            
            {/* NAVIGATION LINKS */}
            <div className="md:col-span-3 mt-4 grid md:grid-cols-3 gap-4">
              <a href="/technical" className="bg-neutral-800/50 p-4 rounded-xl text-center text-xs font-bold uppercase hover:bg-neutral-700 transition-all">Go to Technical</a>
              <a href="/medical" className="bg-neutral-800/50 p-4 rounded-xl text-center text-xs font-bold uppercase hover:bg-neutral-700 transition-all">Go to Medical</a>
              <a href="/" className="bg-[#d4af37] text-black p-4 rounded-xl text-center text-xs font-bold uppercase hover:bg-white transition-all">Public Home</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}