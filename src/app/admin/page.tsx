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
        
        // FIX: This line now correctly tells the "Bouncer" (Middleware) to block access
        document.cookie = `isStaffFired=${newStatus === 'FIRED' ? 'true' : 'false'}; path=/`;
        
        return { ...member, status: newStatus };
      }
      return member;
    }));
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-[#d4af37] p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-black text-white uppercase tracking-tight mb-8">Panthers FC: Command Center</h1>
        
        <div className="grid gap-6">
          {staff.map(member => (
            <div key={member.id} className="bg-neutral-900 p-6 rounded-lg flex justify-between items-center border border-neutral-800">
              <div>
                <p className="text-xl font-bold text-white">{member.name}</p>
                {/* FIX: Added missing backticks and template literal for colors */}
                <p className={`text-xs font-mono font-bold ${member.status === 'Active' ? 'text-green-500' : 'text-red-600'}`}>
                  STATUS: {member.status}
                </p>
              </div>
              
              <button 
                onClick={() => toggleAccess(member.id)}
                {/* FIX: Added missing backticks for the button styling */}
                className={`px-6 py-2 rounded text-xs font-black ${member.status === 'Active' ? 'bg-red-600 text-white' : 'bg-[#d4af37] text-black'}`}
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