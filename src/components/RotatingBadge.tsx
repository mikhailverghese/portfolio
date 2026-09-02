export function RotatingBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-28 w-28 ${className}`} aria-hidden>
      <svg viewBox="0 0 100 100" className="animate-spin-slow h-full w-full">
        <defs>
          <path
            id="badge-circle"
            d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
            fill="none"
          />
        </defs>
        <text
          className="fill-fog font-mono uppercase"
          style={{ fontSize: "8.2px", letterSpacing: "0.18em" }}
        >
          <textPath href="#badge-circle">
            Open to interesting work · Open to interesting work ·
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-lg text-volt">↓</span>
    </div>
  );
}
