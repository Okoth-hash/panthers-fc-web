"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import PantherLogo from '../../components/PantherLogo';

export default function StaffLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a production app, use actual database authentication
    // For now, we use the Panthers Master Key
    if (password === "PANTHER_ELITE_2026") {
      document.cookie = "staff_access=authorized; path=/; max-age=3600";
      router.push('/admin/complaints');
    } else {
      setError(true);
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 font-sans">
      <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 p-10 rounded-3xl shadow-2xl">
        <div className="flex flex-col items-center mb-8">
          <PantherLogo className="w-20 h-20 mb-4" />
          <h1 className="text-2xl font-black uppercase italic text-white">Staff Portal</h1>
          <p className="text-[#d4af37] text-[10px] font-mono tracking-widest uppercase mt-2">Authorized Personnel Only</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-[10px] font-black uppercase text-gray-500 mb-2 tracking-widest">Access Key</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              className={`w-full bg-black border ${error ? 'border-red-600' : 'border-neutral-800'} p-4 rounded-xl focus:border-[#d4af37] outline-none text-white transition-all`}
              placeholder="••••••••••••"
            />
            {error && <p className="text-red-600 text-[10px] mt-2 font-bold uppercase">Invalid Key. Access Denied.</p>}
          </div>

          <button type="submit" className="w-full bg-[#d4af37] text-black font-black py-4 rounded-xl uppercase tracking-widest hover:bg-white transition-all duration-300">
            Verify Identity
          </button>
        </form>
      </div>
    </div>
  );
}