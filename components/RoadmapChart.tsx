"use client";

import { motion } from "framer-motion";
import type { Milestone } from "@/lib/roadmaps";

type Props = {
  milestones: Milestone[];
  activeIdx: number;
  onSelect: (idx: number) => void;
};

const POINTS: { x: number; y: number }[] = [
  { x: 80, y: 200 },
  { x: 380, y: 130 },
  { x: 700, y: 60 },
];

export default function RoadmapChart({ milestones, activeIdx, onSelect }: Props) {
  return (
    <div className="relative h-[260px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <svg
        viewBox="0 0 800 260"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="rmFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="rmLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="var(--accent-ink)" />
          </linearGradient>
        </defs>

        {/* horizontal grid lines */}
        {[60, 130, 200].map((y) => (
          <line
            key={y}
            x1="40"
            y1={y}
            x2="760"
            y2={y}
            stroke="#e2e8f0"
            strokeDasharray="3 4"
          />
        ))}

        {/* area under curve */}
        <motion.path
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          d={`M ${POINTS[0].x} 240 Q ${(POINTS[0].x + POINTS[1].x) / 2} ${POINTS[0].y - 30} ${POINTS[1].x} ${POINTS[1].y} T ${POINTS[2].x} ${POINTS[2].y} L ${POINTS[2].x} 240 Z`}
          fill="url(#rmFill)"
        />

        {/* main curve */}
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          d={`M ${POINTS[0].x} ${POINTS[0].y} Q ${(POINTS[0].x + POINTS[1].x) / 2} ${POINTS[0].y - 30} ${POINTS[1].x} ${POINTS[1].y} T ${POINTS[2].x} ${POINTS[2].y}`}
          stroke="url(#rmLine)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* milestone hotspots */}
      <div className="absolute inset-0 p-4">
        {POINTS.map((p, idx) => {
          const m = milestones[Math.min(idx, milestones.length - 1)];
          const isActive = idx === activeIdx;
          return (
            <motion.button
              key={idx}
              type="button"
              onClick={() => onSelect(idx)}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + idx * 0.18, duration: 0.4 }}
              className="absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
              style={{
                left: `${(p.x / 800) * 100}%`,
                top: `${(p.y / 260) * 100}%`,
              }}
            >
              <span className="flex flex-col items-center gap-1.5">
                <span
                  className={`relative flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold shadow-md transition-all ${
                    isActive
                      ? "scale-110 bg-[var(--accent)] text-white"
                      : "bg-white text-[var(--accent)] ring-2 ring-[var(--accent)]/30"
                  }`}
                >
                  {idx + 1}
                  {isActive && (
                    <span className="absolute h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-40" />
                  )}
                </span>
                <span
                  className={`whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider transition ${
                    isActive
                      ? "bg-[var(--accent-soft)] text-[var(--accent-ink)]"
                      : "text-slate-500"
                  }`}
                >
                  {m?.level ?? `Mốc ${idx + 1}`}
                </span>
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* axes labels */}
      <span className="absolute bottom-2 left-3 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
        Thời gian →
      </span>
      <span className="absolute left-3 top-3 rotate-180 text-[10px] font-semibold uppercase tracking-wider text-slate-400 [writing-mode:vertical-rl]">
        Năng lực →
      </span>
    </div>
  );
}
