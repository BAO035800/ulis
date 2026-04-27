"use client";

import { motion } from "framer-motion";

type Pose = "wave" | "point" | "idle";

type Props = {
  pose?: Pose;
  size?: number;
  className?: string;
};

/**
 * "Compy" — La bàn ngộ nghĩnh dẫn đường, sử dụng accent theme.
 */
export default function Mascot({
  pose = "idle",
  size = 120,
  className,
}: Props) {
  return (
    <motion.div
      className={className}
      style={{ width: size, height: size }}
      animate={
        pose === "wave"
          ? { rotate: [-4, 4, -4] }
          : pose === "point"
            ? { y: [0, -4, 0] }
            : { y: [0, -3, 0] }
      }
      transition={{
        duration: pose === "wave" ? 1.6 : 2.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden>
        <defs>
          <radialGradient id="mascotBody" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="var(--accent-soft)" />
            <stop offset="100%" stopColor="var(--accent)" />
          </radialGradient>
          <linearGradient id="mascotNeedle" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" />
            <stop offset="50%" stopColor="white" />
            <stop offset="50%" stopColor="var(--accent-ink)" />
            <stop offset="100%" stopColor="var(--accent-ink)" />
          </linearGradient>
        </defs>

        {/* shadow */}
        <ellipse cx="60" cy="108" rx="30" ry="4" fill="black" opacity="0.12" />

        {/* outer ring */}
        <circle
          cx="60"
          cy="58"
          r="44"
          fill="url(#mascotBody)"
          stroke="var(--accent-ink)"
          strokeWidth="3"
        />
        {/* inner face */}
        <circle cx="60" cy="58" r="34" fill="white" />

        {/* compass needle */}
        <g transform={`rotate(${pose === "point" ? -25 : 0} 60 58)`}>
          <polygon
            points="60,30 64,58 60,62 56,58"
            fill="var(--accent)"
          />
          <polygon
            points="60,86 64,58 60,54 56,58"
            fill="var(--accent-ink)"
          />
          <circle cx="60" cy="58" r="3.5" fill="white" stroke="var(--accent-ink)" strokeWidth="1.5" />
        </g>

        {/* eyes — placed on the ring rim (top) */}
        <g>
          <circle cx="48" cy="22" r="4" fill="var(--accent-ink)" />
          <circle cx="72" cy="22" r="4" fill="var(--accent-ink)" />
          <circle cx="49" cy="21" r="1.2" fill="white" />
          <circle cx="73" cy="21" r="1.2" fill="white" />
        </g>

        {/* smile */}
        <path
          d="M52 30 Q60 36 68 30"
          stroke="var(--accent-ink)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* star sparkle */}
        <g transform="translate(98 24)">
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "0 0" }}
          >
            <polygon
              points="0,-8 2,-2 8,0 2,2 0,8 -2,2 -8,0 -2,-2"
              fill="var(--accent)"
            />
          </motion.g>
        </g>
      </svg>
    </motion.div>
  );
}
