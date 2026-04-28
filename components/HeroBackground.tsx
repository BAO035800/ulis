"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Compass, Plus, Sparkles, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Slot positions for floating chars; the actual characters come from the
// active language's bgChars list so the backdrop changes per language.
const SLOTS: { left: string; top: string; size: number; delay: number }[] = [
  { left: "6%", top: "16%", size: 96, delay: 0 },
  { left: "94%", top: "14%", size: 88, delay: 0.6 },
  { left: "10%", top: "72%", size: 110, delay: 1.2 },
  { left: "92%", top: "76%", size: 120, delay: 0.3 },
  { left: "84%", top: "44%", size: 76, delay: 0.9 },
  { left: "20%", top: "44%", size: 64, delay: 0.4 },
  { left: "5%", top: "88%", size: 36, delay: 1.4 },
  { left: "78%", top: "8%", size: 32, delay: 0.7 },
  { left: "62%", top: "92%", size: 30, delay: 1.0 },
];

// Small geometric accents
const SHAPES = [
  { type: "plus", left: "26%", top: "10%", delay: 0, size: 24 },
  { type: "plus", left: "76%", top: "88%", delay: 0.5, size: 28 },
  { type: "star", left: "32%", top: "78%", delay: 0.2, size: 20 },
  { type: "star", left: "70%", top: "22%", delay: 0.8, size: 18 },
  { type: "spark", left: "48%", top: "14%", delay: 1.1, size: 22 },
  { type: "spark", left: "44%", top: "82%", delay: 1.3, size: 18 },
];

export default function HeroBackground() {
  const { theme, language } = useLanguage();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Topographic / mesh gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 600px 400px at 15% 10%, var(--accent-soft) 0%, transparent 50%),
            radial-gradient(ellipse 500px 500px at 90% 90%, var(--accent-soft) 0%, transparent 60%),
            radial-gradient(ellipse 400px 300px at 50% 50%, color-mix(in srgb, var(--accent) 6%, transparent) 0%, transparent 70%)
          `,
        }}
      />

      {/* Bold dot grid */}
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        aria-hidden
      >
        <defs>
          <pattern
            id="hero-dots"
            x="0"
            y="0"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.5" fill="var(--accent)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" />
      </svg>

      {/* Concentric circle motif behind content (left side) */}
      <svg
        viewBox="0 0 600 600"
        className="absolute -left-32 top-1/2 hidden h-[500px] w-[500px] -translate-y-1/2 opacity-30 lg:block"
        aria-hidden
      >
        <g fill="none" stroke="var(--accent)" strokeWidth="1.2">
          {[60, 120, 180, 240, 300].map((r) => (
            <circle key={r} cx="300" cy="300" r={r} strokeDasharray="4 6" />
          ))}
        </g>
        {/* Compass needle */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "300px 300px" }}
        >
          <line
            x1="300"
            y1="100"
            x2="300"
            y2="500"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeOpacity="0.5"
          />
          <polygon
            points="300,80 310,110 300,100 290,110"
            fill="var(--accent)"
            opacity="0.7"
          />
        </motion.g>
      </svg>

      {/* Big route / journey path */}
      <svg
        viewBox="0 0 1200 700"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.55 }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
          d="M -50 560 Q 200 460 400 500 T 760 360 T 1100 220 T 1300 100"
          stroke="var(--accent)"
          strokeWidth="2.5"
          strokeDasharray="8 8"
          fill="none"
        />
        {/* waypoint pins along the path */}
        {[
          { cx: 200, cy: 500 },
          { cx: 540, cy: 420 },
          { cx: 880, cy: 280 },
          { cx: 1100, cy: 200 },
        ].map((p, i) => (
          <motion.g
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ delay: 1.2 + i * 0.2, duration: 0.4 }}
          >
            <circle
              cx={p.cx}
              cy={p.cy}
              r="14"
              fill="white"
              stroke="var(--accent)"
              strokeWidth="2"
            />
            <circle cx={p.cx} cy={p.cy} r="5" fill="var(--accent)" />
          </motion.g>
        ))}
      </svg>

      {/* Floating chars — sourced from the ACTIVE language so the backdrop
          changes when the user switches languages */}
      <AnimatePresence mode="popLayout">
        {SLOTS.map((slot, i) => {
          const char = theme.bgChars[i % theme.bgChars.length];
          return (
            <motion.span
              key={`${language}-${i}-${char}`}
              className="absolute select-none font-black text-[var(--accent)]"
              style={{
                left: slot.left,
                top: slot.top,
                fontSize: slot.size,
                transform: "translate(-50%, -50%)",
                lineHeight: 1,
              }}
              initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
              animate={{
                opacity: 0.1,
                scale: 1,
                rotate: 0,
                y: [0, -14, 0],
              }}
              exit={{ opacity: 0, scale: 0.6, rotate: 20 }}
              transition={{
                opacity: { duration: 0.6, delay: slot.delay * 0.4 },
                scale: { duration: 0.5, delay: slot.delay * 0.4 },
                rotate: { duration: 0.5, delay: slot.delay * 0.4 },
                y: {
                  duration: 6 + (i % 4),
                  delay: slot.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              aria-hidden
            >
              {char}
            </motion.span>
          );
        })}
      </AnimatePresence>

      {/* Small geometric accents — more visible */}
      {SHAPES.map((s, i) => {
        const Icon =
          s.type === "plus"
            ? Plus
            : s.type === "star"
              ? Star
              : s.type === "compass"
                ? Compass
                : Sparkles;
        return (
          <motion.span
            key={`shape-${i}`}
            className="absolute text-[var(--accent)]"
            style={{
              left: s.left,
              top: s.top,
              opacity: 0.35,
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              y: [0, -8, 0],
              rotate: 0,
            }}
            transition={{
              duration: 5 + (i % 3),
              delay: s.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            aria-hidden
          >
            <Icon
              style={{ width: s.size, height: s.size }}
              className={s.type === "star" ? "fill-current" : ""}
              strokeWidth={2}
            />
          </motion.span>
        );
      })}

      {/* Diagonal stripes accent in corners */}
      <svg
        className="absolute -bottom-20 -left-10 h-48 w-48 opacity-15"
        viewBox="0 0 200 200"
        aria-hidden
      >
        <defs>
          <pattern
            id="diag-stripes"
            patternUnits="userSpaceOnUse"
            width="12"
            height="12"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="12"
              stroke="var(--accent)"
              strokeWidth="3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diag-stripes)" />
      </svg>
    </div>
  );
}
