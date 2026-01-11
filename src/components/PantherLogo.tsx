import React from "react";

export default function PantherLogo({ className }: { className?: string }) {
  return (
    <div className={`relative ${className} flex items-center`}>
      <img 
        src="/logo.png" 
        alt="Panthers FC Official Logo" 
        className="h-full w-auto object-contain"
        onError={(e) => {
            // This makes the text visible if the image still fails
            console.error("Logo not found in public folder");
        }}
      />
    </div>
  );
}
