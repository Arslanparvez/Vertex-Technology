export default function Logo({ className = '' }) {
  return (
    <svg
      viewBox="0 0 340 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Vertex Print Technologies LLC"
      style={{ width: 'auto', display: 'block' }}
    >
      <defs>
        {/* Left arm — deep navy to chrome blue */}
        <linearGradient id="gL" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#06152A" />
          <stop offset="40%"  stopColor="#0D2848" />
          <stop offset="75%"  stopColor="#1E5090" />
          <stop offset="100%" stopColor="#4880C0" />
        </linearGradient>

        {/* Left arm — chrome face highlight */}
        <linearGradient id="gLH" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#B8D4EE" stopOpacity="0.55" />
          <stop offset="60%"  stopColor="#90B8D8" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#78A0C8" stopOpacity="0.02" />
        </linearGradient>

        {/* Right arm — electric blue to cyan glass */}
        <linearGradient id="gR" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#A8DCFF" />
          <stop offset="28%"  stopColor="#50B8F5" />
          <stop offset="65%"  stopColor="#1264D6" />
          <stop offset="100%" stopColor="#0848A8" />
        </linearGradient>

        {/* Right arm — glass reflection */}
        <linearGradient id="gRH" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#C8EEFF" stopOpacity="0.50" />
          <stop offset="55%"  stopColor="#78C8FF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#48A8FF" stopOpacity="0.00" />
        </linearGradient>

        {/* Inner edge electric glow */}
        <filter id="eg" x="-100%" y="-40%" width="300%" height="180%">
          <feGaussianBlur stdDeviation="2.2" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>

        {/* Dot glow */}
        <filter id="dg" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="1.8" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ══════════════════════════
          LEFT ARM — dark navy
          Parallelogram: top x=4–26, bottom x=24–46
          Inner edge (26,4)→(46,72) forms left side of V notch
          ══════════════════════════ */}
      <polygon points="4,4 26,4 46,72 24,72" fill="url(#gL)" />
      {/* Chrome highlight — right face of left arm (faces the notch) */}
      <polygon points="19,4 26,4 46,72 39,72" fill="url(#gLH)" />

      {/* ══════════════════════════
          RIGHT ARM — electric blue
          Parallelogram: top x=66–88, bottom x=46–68
          Inner edge (66,4)→(46,72) forms right side of V notch
          ══════════════════════════ */}
      <polygon points="66,4 88,4 68,72 46,72" fill="url(#gR)" />
      {/* Glass reflection — left face of right arm (faces the notch) */}
      <polygon points="66,4 76,4 56,72 46,72" fill="url(#gRH)" />

      {/* V notch inner-edge glow lines — electric energy on both inner edges */}
      <line x1="26" y1="4"  x2="46" y2="72" stroke="#60C8FF" strokeWidth="1.1" opacity="0.60" filter="url(#eg)" />
      <line x1="66" y1="4"  x2="46" y2="72" stroke="#60C8FF" strokeWidth="1.1" opacity="0.50" filter="url(#eg)" />

      {/* ══════════════════════════
          SPARKLE DOTS — upper right
          ══════════════════════════ */}
      <circle cx="90"  cy="7"  r="3.0" fill="#4DB8FF" filter="url(#dg)" />
      <circle cx="97"  cy="1"  r="2.0" fill="#FFFFFF"  opacity="0.92" filter="url(#dg)" />
      <circle cx="99"  cy="15" r="2.4" fill="#60C8FF"  opacity="0.80" filter="url(#dg)" />
      <circle cx="94"  cy="23" r="1.5" fill="#A0D8FF"  opacity="0.58" />
      <circle cx="87"  cy="0"  r="1.3" fill="#FFFFFF"   opacity="0.48" />
      <circle cx="6"   cy="9"  r="1.2" fill="#4DB8FF"   opacity="0.28" />

      {/* ══════════════════════════
          LOGOTYPE
          fill="currentColor" adapts to white (dark bg) or navy (light bg)
          ══════════════════════════ */}
      <text
        x="110" y="44"
        fontFamily="'Arial Black','Arial Bold',Impact,sans-serif"
        fontSize="30" fontWeight="900"
        fill="currentColor" letterSpacing="1.5"
      >
        VERTEX
      </text>
      <text
        x="111" y="63"
        fontFamily="Arial,Helvetica,sans-serif"
        fontSize="9" fontWeight="700"
        fill="currentColor" opacity="0.52" letterSpacing="3.0"
      >
        PRINT TECHNOLOGIES LLC
      </text>
    </svg>
  );
}
