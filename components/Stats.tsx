"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { Globe2, Brain, Briefcase, Target, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const STATS: Stat[] = [
  { value: 8, label: "Ngôn ngữ chuyên ngành", Icon: Globe2 },
  { value: 16, label: "Nhóm tính cách MBTI", Icon: Brain },
  { value: 7, label: "Nhóm nghề nghiệp", Icon: Briefcase },
  { value: 24, label: "Mốc năng lực ngôn ngữ", Icon: Target },
];

function CountUp({ to, suffix }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toString());

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    });
    return controls.stop;
  }, [inView, mv, to]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Stats() {
  const { theme } = useLanguage();

  return (
    <section
      className="relative overflow-hidden border-y border-slate-200 bg-white py-12 sm:py-14"
      aria-label="Số liệu nổi bật"
    >
      {/* Live pulse */}
      <div className="mx-auto mb-8 flex max-w-6xl items-center justify-center px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <Sparkles className="h-3 w-3" />
          {Math.floor(15 + Math.random() * 30)} sinh viên đang khám phá MBTI hôm nay
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {STATS.map(({ Icon, ...s }, idx) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
            className="group relative flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <span
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-white transition group-hover:scale-110"
              style={{ background: theme.accent }}
            >
              <Icon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="text-3xl font-extrabold leading-none text-slate-900 sm:text-4xl">
                <CountUp to={s.value} suffix={s.suffix} />
                <span className="text-[var(--accent)]">+</span>
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">
                {s.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
