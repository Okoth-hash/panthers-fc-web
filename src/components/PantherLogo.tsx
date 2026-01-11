"use client"
import React from "react";

export default function PantherLogo({ className }: { className?: string }) {
  return (
    <div className={`relative ${className} flex items-center`}>
      <img 
        src="/logo.png" 
        alt="Panthers FC Official Logo" 
        className="h-full w-auto object-contain"
        onError={(e) => {
            console.error("Logo not found in public folder");
        }}
      />
    </div>
  );
}
