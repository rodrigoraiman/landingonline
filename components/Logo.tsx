export default function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Japanese-style tree - trunk */}
      <path
        d="M25 20 Q23 25 23 30 L23 45 L27 45 L27 30 Q27 25 25 20 Z"
        fill="currentColor"
        className="text-amber-800 dark:text-amber-700"
      />
      
      {/* Foliage layers - bottom layer */}
      <ellipse
        cx="25"
        cy="28"
        rx="10"
        ry="6"
        fill="currentColor"
        className="text-green-600 dark:text-green-500"
      />
      
      {/* Foliage layers - middle layer */}
      <ellipse
        cx="25"
        cy="22"
        rx="12"
        ry="7"
        fill="currentColor"
        className="text-green-500 dark:text-green-400"
      />
      
      {/* Foliage layers - top layer */}
      <ellipse
        cx="25"
        cy="15"
        rx="9"
        ry="6"
        fill="currentColor"
        className="text-green-600 dark:text-green-500"
      />
      
      {/* Accent branches */}
      <path
        d="M25 18 Q18 20 15 22"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-green-700 dark:text-green-600"
        strokeLinecap="round"
      />
      <path
        d="M25 18 Q32 20 35 22"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-green-700 dark:text-green-600"
        strokeLinecap="round"
      />
      
      {/* Text "Terre Paysage" */}
      <text
        x="45"
        y="32"
        fontFamily="Arial, sans-serif"
        fontSize="20"
        fontWeight="bold"
        fill="currentColor"
        className="text-green-600 dark:text-green-400"
      >
        Terre Paysage
      </text>
    </svg>
  );
}
