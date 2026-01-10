export default function PantherLogo({ className = "w-20 h-20" }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Panther Head Silhouette */}
      <path 
        d="M20 50C20 30 40 20 60 20C80 20 90 40 90 55C90 70 75 85 55 85C35 85 20 75 20 50Z" 
        stroke="#d4af37" 
        strokeWidth="2"
      />
      {/* Ears */}
      <path d="M35 25L25 10L45 22" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" />
      <path d="M65 22L85 10L75 25" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" />
      {/* Eyes - Aggressive Slant */}
      <path d="M40 45L50 48" stroke="#d4af37" strokeWidth="3" />
      <path d="M70 45L60 48" stroke="#d4af37" strokeWidth="3" />
      {/* Nose/Snout */}
      <path d="M55 70L50 75L45 70" fill="#d4af37" />
    </svg>
  );
}