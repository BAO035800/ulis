"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Compass,
  Map,
  Sparkles,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const SAMPLE_QUESTION = {
  text: "Sau ngày dài, bạn nạp lại năng lượng bằng cách...",
  options: [
    { value: "E", label: "Hangout với bạn bè" },
    { value: "I", label: "Ở một mình, đọc sách" },
  ],
};

export default function HeroScene() {
  const { theme } = useLanguage();
  const [picked, setPicked] = useState<string | null>(null);

  // Pointer-driven parallax for the layered cards
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spring = { stiffness: 150, damping: 20, mass: 0.4 };
  const sx = useSpring(px, spring);
  const sy = useSpring(py, spring);

  const layer1X = useTransform(sx, (v) => v * 14);
  const layer1Y = useTransform(sy, (v) => v * 14);
  const layer2X = useTransform(sx, (v) => v * -10);
  const layer2Y = useTransform(sy, (v) => v * -10);
  const layer3X = useTransform(sx, (v) => v * 6);
  const layer3Y = useTransform(sy, (v) => v * 6);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const nx = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const ny = (e.clientY - rect.top - rect.height / 2) / rect.height;
    px.set(nx);
    py.set(ny);
  };

  const reset = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="relative mx-auto h-[420px] w-full max-w-md sm:h-[480px]"
    >
      {/* LAYER 1 — Roadmap mini card (bottom-back) */}
      <motion.div
        style={{ x: layer1X, y: layer1Y }}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="absolute left-2 top-0 w-60 rotate-[-6deg] rounded-2xl border border-slate-200 bg-white p-4 shadow-lg sm:left-0"
      >
        <div className="flex items-center gap-2">
          <span
            className="flex h-7 w-7 items-center justify-center rounded-lg text-white"
            style={{ background: theme.accent }}
          >
            <Map className="h-3.5 w-3.5" />
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
            Lộ trình {theme.short}
          </span>
        </div>
        <div className="mt-3 space-y-1.5">
          {[
            { label: "Mốc 1 · Sơ cấp", done: true },
            { label: "Mốc 2 · Trung cấp", done: true, current: true },
            { label: "Mốc 3 · Cao cấp", done: false },
          ].map((m) => (
            <div key={m.label} className="flex items-center gap-2 text-xs">
              <span
                className={`flex h-4 w-4 items-center justify-center rounded-full text-[10px] ${
                  m.done
                    ? "bg-[var(--accent)] text-white"
                    : "border-2 border-dashed border-slate-300 text-slate-400"
                }`}
              >
                {m.done && <CheckCircle2 className="h-3 w-3" />}
              </span>
              <span
                className={`${m.current ? "font-bold text-slate-900" : "text-slate-600"}`}
              >
                {m.label}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 h-1.5 w-full rounded-full bg-slate-100">
          <div
            className="h-full rounded-full"
            style={{ background: theme.accent, width: "60%" }}
          />
        </div>
      </motion.div>

      {/* LAYER 3 — Career card (top-right back) */}
      <motion.div
        style={{ x: layer3X, y: layer3Y }}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="absolute right-0 top-6 w-56 rotate-[7deg] rounded-2xl border border-slate-200 bg-white p-4 shadow-lg"
      >
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent-ink)]">
            <Trophy className="h-3.5 w-3.5" />
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
            Top match
          </span>
        </div>
        <p className="mt-2 text-sm font-bold text-slate-900">IT Comtor</p>
        <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
          15 – 70 triệu/tháng · Ngôn ngữ + tech literacy
        </p>
        <div className="mt-3 flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className="h-1 flex-1 rounded-full"
              style={{
                background: i < 4 ? theme.accent : "#e2e8f0",
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* LAYER 2 — Mini MBTI quiz card (front-center) */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute left-1/2 top-32 w-[88%] max-w-[340px] -translate-x-1/2 rounded-3xl border border-white/60 bg-white p-5 shadow-2xl"
        style={{
          x: layer2X,
          y: layer2Y,
          boxShadow: `0 30px 60px -25px ${theme.accent}55`,
        }}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-xl text-white"
              style={{ background: theme.accent }}
            >
              <Brain className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                MBTI · Sample
              </p>
              <p className="text-sm font-bold text-slate-900">Câu 1 / 12</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            LIVE
          </span>
        </div>

        <p className="mt-4 text-sm leading-snug font-medium text-slate-800">
          {SAMPLE_QUESTION.text}
        </p>

        <div className="mt-3 grid gap-2">
          {SAMPLE_QUESTION.options.map((opt) => {
            const isPicked = picked === opt.value;
            return (
              <motion.button
                key={opt.value}
                type="button"
                onClick={() => setPicked(opt.value)}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-2.5 rounded-xl border px-3 py-2.5 text-left text-xs transition ${
                  isPicked
                    ? "border-[var(--accent)] bg-[var(--accent)] text-white shadow"
                    : picked
                      ? "border-slate-200 bg-slate-50/50 text-slate-400"
                      : "border-slate-200 bg-white text-slate-700 hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]/30"
                }`}
              >
                <span
                  className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                    isPicked
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {opt.value}
                </span>
                {opt.label}
              </motion.button>
            );
          })}
        </div>

        {picked ? (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3"
          >
            <Link
              href="/mbti"
              className="flex items-center justify-between gap-2 rounded-xl bg-gradient-to-r from-[var(--accent)] to-[var(--accent-ink)] px-3 py-2.5 text-xs font-semibold text-white"
            >
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="h-3 w-3" />
                Tiếp tục 11 câu còn lại
              </span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        ) : (
          <p className="mt-3 flex items-center gap-1 text-[10px] text-slate-400">
            <Compass className="h-3 w-3" />
            Tap thử một đáp án để mở khoá kết quả
          </p>
        )}
      </motion.div>
    </div>
  );
}
