"use client"
import React, { useState } from 'react';

export default function AdminControl() {
  const [staff, setStaff] = useState([
    { id: 1, name: "Head of Technical", dept: "Technical", status: "Active" },
    { id: 2, name: "Chief Medical Officer", dept: "Medical", status: "Active" },
  ]);

  const toggleAccess = (id: number) => {
    setStaff(staff.map(member => {
      if (member.id === id) {
        const newStatus = member.status === 'Active' ? 'FIRED' : 'Active';
        
        // This sets the security cookie that the middleware checks
        document.cookie = `isStaffFired=${newStatus === 'FIRED' ? 'true' : 'false'}; path=/`;
        
        return { ...member, status: newStatus };
      }
      return member;
    }));
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-[#d4af37] p-10 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 border-b border-[#d4af37]/20 pb-6">
          <h1 className="text-3xl font-black text-white uppercase tracking-tight">Panthers FC: Command Center</h1>
          <p className="text-gray-500 italic text-sm">Real-time Personnel Access Management</p>
        </header>
        
        <div className="grid gap-6">
          {staff.map(member => (
            <div key={member.id} className="bg-neutral-900 p-6 rounded-lg flex justify-between items-center border border-neutral-800 shadow-xl">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1 font-bold">{member.dept} Dept</p>
                <p className="text-xl font-bold text-white tracking-tight">{member.name}</p>
                <div className="flex items-center mt-2">
                  <span className={`h-2 w-2 rounded-full mr-2 ${member.status === 'Active' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-red-600'}`}></span>
                  <p className={`text-xs font-mono font-bold ${member.status === 'Active' ? 'text-green-500' : 'text-red-600'}`}>
                    SYSTEM ACCESS: {member.status}
                  </p>
                </div>
              </div>
              
              <button 
                onClick={() => toggleAccess(member.id)}
                className={`px-6 py-2 rounded text-xs font-black tracking-widest transition-all duration-300 ${
                  member.status === 'Active' 
                  ? 'bg-red-600/10 text-red-500 border border-red-600 hover:bg-red-600 hover:text-white' 
                  : 'bg-[#d4af37] text-black hover:bg-white'
                }`}
              >
                {member.status === 'Active' ? 'FIRE STAFF' : 'RE-HIRE'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}