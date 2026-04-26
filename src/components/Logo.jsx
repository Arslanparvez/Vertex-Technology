/**
 * Vertex Print Technologies LLC — SVG logo component.
 * Colored icon parts are hardcoded.
 * Text uses fill="currentColor" so parent can control via CSS `color` / Tailwind text-* class.
 */
export default function Logo({ className = '' }) {
  return (
    <svg
      viewBox="0 0 295 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Vertex Print Technologies LLC"
      style={{ width: 'auto', display: 'block' }}
    >
      {/* ─────────────────────────────────────────
          LEFT ARM OF V  (dark navy, 3-D box look)
      ───────────────────────────────────────── */}

      {/* Front face — dark navy triangle */}
      <polygon
        points="3,7  25,7  41,68  25,68"
        fill="#0E2D6B"
      />
      {/* Inner highlight face — medium navy (gives depth) */}
      <polygon
        points="25,7  34,7  41,68  25,68"
        fill="#1B52A8"
      />
      {/* Top "depth" face — light navy parallelogram */}
      <polygon
        points="3,7  25,7  35,1  13,1"
        fill="#2B6CC8"
      />

      {/* ─────────────────────────────────────────
          TEAL / GREEN FLOWING CURVES
      ───────────────────────────────────────── */}
      <path
        d="M 18 62 C 28 42 46 24 67 7"
        stroke="#0EA18E"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 24 63 C 34 45 51 29 71 14"
        stroke="#17C5B0"
        strokeWidth="5.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
      <path
        d="M 29 64 C 39 47 56 33 74 21"
        stroke="#0EA18E"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.65"
      />

      {/* ─────────────────────────────────────────
          RIGHT ARM OF V  (orange / amber)
      ───────────────────────────────────────── */}
      <polygon
        points="41,68  57,7  76,7  58,68"
        fill="#E07020"
      />
      {/* Lighter orange inner strip for depth */}
      <polygon
        points="41,68  49,7  57,7  41,68"
        fill="#F09040"
      />

      {/* ─────────────────────────────────────────
          INK DROPS / SPLATTER  (upper-right)
      ───────────────────────────────────────── */}
      {/* Teal teardrop */}
      <ellipse
        cx="74" cy="10"
        rx="4" ry="6.5"
        fill="#0EA18E"
        transform="rotate(-28 74 10)"
      />
      {/* Blue circle */}
      <circle cx="82" cy="4"  r="3.5" fill="#0E2D6B" />
      {/* Orange circle */}
      <circle cx="84" cy="20" r="4"   fill="#E07020" />
      {/* Small blue dot */}
      <circle cx="78" cy="24" r="2.2" fill="#0E2D6B"  opacity="0.75" />
      {/* Small teal dot */}
      <circle cx="88" cy="13" r="1.8" fill="#17C5B0"  opacity="0.9"  />
      {/* Tiny orange dot */}
      <circle cx="88" cy="28" r="1.4" fill="#E07020"  opacity="0.65" />

      {/* ─────────────────────────────────────────
          TEXT  — fill="currentColor" adapts to
          parent's CSS color (white or navy)
      ───────────────────────────────────────── */}
      <text
        x="97"
        y="40"
        fontFamily="'Arial Black', 'Arial Bold', Impact, sans-serif"
        fontSize="27"
        fontWeight="900"
        fill="currentColor"
        letterSpacing="1.5"
      >
        VERTEX
      </text>
      <text
        x="98"
        y="61"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="9.5"
        fontWeight="700"
        fill="currentColor"
        opacity="0.6"
        letterSpacing="3"
      >
        PRINT TECHNOLOGIES LLC
      </text>
    </svg>
  );
}
