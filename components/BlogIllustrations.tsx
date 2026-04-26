"use client";

/**
 * Decorative SVG illustrations for blog cards.
 * All shapes use currentColor / CSS vars so they tint with the active language theme.
 */

export function CareerJourneyArt() {
  return (
    <svg
      viewBox="0 0 320 160"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="careerBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent-soft)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.18" />
        </linearGradient>
      </defs>
      <rect width="320" height="160" fill="url(#careerBg)" />
      {/* skyline */}
      <g fill="var(--accent-ink)" opacity="0.18">
        <rect x="20" y="80" width="36" height="70" rx="3" />
        <rect x="62" y="60" width="44" height="90" rx="3" />
        <rect x="114" y="42" width="38" height="108" rx="3" />
        <rect x="160" y="68" width="48" height="82" rx="3" />
        <rect x="216" y="50" width="40" height="100" rx="3" />
        <rect x="262" y="74" width="42" height="76" rx="3" />
      </g>
      {/* rising bars */}
      <g fill="var(--accent)">
        <rect x="40" y="120" width="14" height="22" rx="2" opacity="0.55" />
        <rect x="80" y="106" width="14" height="36" rx="2" opacity="0.7" />
        <rect x="120" y="92" width="14" height="50" rx="2" opacity="0.85" />
        <rect x="160" y="74" width="14" height="68" rx="2" />
      </g>
      {/* arrow rising */}
      <path
        d="M40 130 L82 112 L122 96 L162 78 L210 60"
        stroke="var(--accent)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <polygon points="200,52 218,58 208,72" fill="var(--accent)" />
      {/* badge */}
      <g transform="translate(238 26)">
        <circle r="22" fill="white" stroke="var(--accent)" strokeWidth="2" />
        <text
          textAnchor="middle"
          y="6"
          fontSize="14"
          fontWeight="800"
          fill="var(--accent)"
        >
          PRO
        </text>
      </g>
    </svg>
  );
}

export function LogicLanguageArt() {
  return (
    <svg
      viewBox="0 0 320 160"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="logicBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent-soft)" stopOpacity="0.85" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.12" />
        </linearGradient>
      </defs>
      <rect width="320" height="160" fill="url(#logicBg)" />
      {/* code brackets */}
      <text
        x="40"
        y="110"
        fontSize="100"
        fontWeight="800"
        fill="var(--accent)"
        opacity="0.18"
      >
        {"{"}
      </text>
      <text
        x="240"
        y="110"
        fontSize="100"
        fontWeight="800"
        fill="var(--accent)"
        opacity="0.18"
      >
        {"}"}
      </text>
      {/* speech bubbles */}
      <g>
        <rect
          x="100"
          y="40"
          width="56"
          height="32"
          rx="8"
          fill="white"
          stroke="var(--accent)"
          strokeWidth="1.5"
        />
        <text
          x="128"
          y="61"
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill="var(--accent-ink)"
        >
          Hello
        </text>
      </g>
      <g>
        <rect
          x="170"
          y="84"
          width="60"
          height="32"
          rx="8"
          fill="var(--accent)"
        />
        <text
          x="200"
          y="105"
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill="white"
        >
          こんにちは
        </text>
      </g>
      {/* connecting node */}
      <line
        x1="156"
        y1="72"
        x2="170"
        y2="92"
        stroke="var(--accent-ink)"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
      <circle cx="160" cy="120" r="5" fill="var(--accent)" />
      <circle cx="180" cy="130" r="3" fill="var(--accent)" opacity="0.6" />
      <circle cx="142" cy="130" r="3" fill="var(--accent)" opacity="0.6" />
    </svg>
  );
}

export function BilingualEmailArt() {
  return (
    <svg
      viewBox="0 0 320 160"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="emailBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent-soft)" stopOpacity="0.95" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.18" />
        </linearGradient>
      </defs>
      <rect width="320" height="160" fill="url(#emailBg)" />

      {/* envelope */}
      <g transform="translate(80 36)">
        <rect
          width="160"
          height="100"
          rx="10"
          fill="white"
          stroke="var(--accent)"
          strokeWidth="2"
        />
        <path
          d="M0 12 L80 60 L160 12"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* lines simulating two languages stacked */}
        <rect x="20" y="68" width="60" height="6" rx="3" fill="var(--accent)" opacity="0.65" />
        <rect x="20" y="80" width="40" height="6" rx="3" fill="var(--accent)" opacity="0.45" />
        <rect x="92" y="68" width="46" height="6" rx="3" fill="var(--accent-ink)" opacity="0.6" />
        <rect x="92" y="80" width="36" height="6" rx="3" fill="var(--accent-ink)" opacity="0.4" />
      </g>

      {/* @ orbit */}
      <g transform="translate(40 40)">
        <circle r="20" fill="white" stroke="var(--accent)" strokeWidth="2" />
        <text
          textAnchor="middle"
          y="6"
          fontSize="22"
          fontWeight="800"
          fill="var(--accent)"
        >
          @
        </text>
      </g>
      <g transform="translate(264 116)">
        <circle r="14" fill="var(--accent)" />
        <text
          textAnchor="middle"
          y="5"
          fontSize="14"
          fontWeight="800"
          fill="white"
        >
          ✓
        </text>
      </g>
    </svg>
  );
}
