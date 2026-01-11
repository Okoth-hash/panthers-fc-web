"use client"
import React, { useState, useEffect } from 'react';
import PantherLogo from '../../components/PantherLogo';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();
  const [isLocked, setIsLocked] = useState(false);
  const [systemTime, setSystemTime] = useState("");

  // Update clock and sync with security cookie on mount
  useEffect(() => {
    setSystemTime(new Date().toLocaleTimeString());
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

  const handleLogout = () => {
    // Terminate session by expiring the cookie
    document.cookie = "staff_access=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    router.push('/');
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
          <section className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-between shadow-2xl">
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

          {/* DEPARTMENT SUMMARIES & NAV */}
          <section className="lg:col-span-2 space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
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
            </div>

            {/* ACTION LINKS */}
            <div className="grid md:grid-cols-2 gap-4">
              <a href="/admin/complaints" className="bg-neutral-800/50 p-6 rounded-2xl text-center text-xs font-bold uppercase hover:border-[#d4af37] border border-transparent transition-all group">
                <span className="block text-[#d4af37] mb-1 group-hover:scale-110 transition-transform">Intelligence Feed</span>
                View Feedback & Credentials
              </a>
              <div className="grid grid-cols-2 gap-4">
                <a href="/technical" className="bg-neutral-900/50 border border-neutral-800 p-4 rounded-xl text-center text-[10px] font-black uppercase hover:bg-neutral-800 transition-all flex items-center justify-center">Technical</a>
                <a href="/medical" className="bg-neutral-900/50 border border-neutral-800 p-4 rounded-xl text-center text-[10px] font-black uppercase hover:bg-neutral-800 transition-all flex items-center justify-center">Medical</a>
                <a href="/" className="col-span-2 bg-[#d4af37] text-black p-4 rounded-xl text-center text-xs font-black uppercase hover:bg-white transition-all">Return to Public Site</a>
              </div>
            </div>
          </section>
        </div>

        {/* LOGOUT FOOTER */}
        <footer className="mt-12 flex justify-end border-t border-neutral-800 pt-8">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-500 hover:text-red-600 transition-colors text-[10px] font-black uppercase tracking-[0.2em]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Terminate Session
          </button>
        </footer>
      </div>
    </div>
  );
}