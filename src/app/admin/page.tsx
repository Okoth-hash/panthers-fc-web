"use client"
import React, { useState } from 'react';

export default function AdminPage() {
  const [isFired, setIsFired] = useState(false);

  const toggleLockdown = () => {
    const newState = !isFired;
    setIsFired(newState);
    document.cookie = `isStaffFired=${newState}; path=/`;
  };

  return (
    <div className="min-h-screen bg-black text-white p-10 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-black mb-6">HQ SECURITY CONTROL</h1>
      <button 
        onClick={toggleLockdown}
        className={`px-12 py-6 rounded-xl font-black text-xl transition-all ${isFired ? 'bg-green-600' : 'bg-red-600'}`}
      >
        {isFired ? 'RESTORE ALL ACCESS' : 'TRIGGER LOCKDOWN'}
      </button>
      <p className="mt-4 text-gray-500 text-sm italic">
        Status: {isFired ? 'OFFICES LOCKED' : 'SYSTEMS OPERATIONAL'}
      </p>
    </div>
  );
}