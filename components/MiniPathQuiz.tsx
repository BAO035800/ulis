"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Compass,
  RefreshCw,
  Sparkles,
  Wand2,
} from "lucide-react";
import { CAREERS } from "@/lib/careers";

type Trait = "tech" | "ppl" | "biz" | "lang";

type Q = {
  id: string;
  text: string;
  options: { label: string; trait: Trait }[];
};

const QUESTIONS: Q[] = [
  {
    id: "q1",
    text: "Bạn thấy mình hợp với môi trường nào?",
    options: [
      { label: "Văn phòng + công nghệ", trait: "tech" },
      { label: "Lớp học + cộng đồng", trait: "ppl" },
    ],
  },
  {
    id: "q2",
    text: "Trong dự án nhóm bạn thường là người…",
    options: [
      { label: "Đàm phán & chốt giá với khách", trait: "biz" },
      { label: "Đảm bảo bản dịch chuẩn xác", trait: "lang" },
    ],
  },
  {
    id: "q3",
    text: "Một ngày làm việc lý tưởng có…",
    options: [
      { label: "Họp với team đa quốc gia", trait: "biz" },
      { label: "Deep work một mình + tài liệu chuyên ngành", trait: "lang" },
    ],
  },
];

// Map trait combos → top 2 career IDs, ordered.
function pickCareers(traits: Trait[]): string[] {
  const counts: Record<Trait, number> = { tech: 0, ppl: 0, biz: 0, lang: 0 };
  traits.forEach((t) => counts[t]++);

  // Heuristic: pick careers based on the dominant axis
  if (counts.tech >= 1 && counts.lang >= 1)
    return ["comtor", "translator"];
  if (counts.biz >= 2) return ["sourcing", "coordinator"];
  if (counts.ppl >= 1 && counts.lang >= 1)
    return ["lecturer", "translator"];
  if (counts.ppl >= 1 && counts.biz >= 1)
    return ["coordinator", "localization"];
  if (counts.tech >= 1) return ["comtor", "localization"];
  if (counts.lang >= 2) return ["translator", "interpreter"];
  return ["localization", "lecturer"];
}

export default function MiniPathQuiz() {
  const [step, setStep] = useState(0);
  const [traits, setTraits] = useState<Trait[]>([]);

  const finished = step >= QUESTIONS.length;
  const matches = useMemo(() => {
    if (!finished) return [];
    const ids = pickCareers(traits);
    return ids
      .map((id) => CAREERS.find((c) => c.id === id))
      .filter((x): x is (typeof CAREERS)[number] => Boolean(x));
  }, [finished, traits]);

  const choose = (trait: Trait) => {
    setTraits((prev) => [...prev, trait]);
    setStep((s) => s + 1);
  };

  const reset = () => {
    setStep(0);
    setTraits([]);
  };

  const current = QUESTIONS[step];
  const progress = ((finished ? QUESTIONS.length : step) / QUESTIONS.length) * 100;

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 py-16 sm:py-20"
      aria-label="Mini quiz"
    >
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div
          className="absolute -left-20 top-10 h-72 w-72 rounded-full blur-3xl"
          style={{ background: "var(--accent-soft)" }}
        />
        <div
          className="absolute -right-20 bottom-0 h-72 w-72 rounded-full blur-3xl"
          style={{ background: "var(--accent-soft)" }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent-ink)]">
            <Wand2 className="h-3.5 w-3.5" />
            30 giây · 3 câu
          </span>
          <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
            Khám phá nhanh:{" "}
            <span className="text-[var(--accent)]">nghề nào hợp bạn nhất?</span>
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            Trả lời 3 câu để được gợi ý 2 nghề phù hợp ngay tức thì — không cần
            nhập thông tin cá nhân.
          </p>
        </div>

        {/* Progress */}
        <div className="mx-auto mt-8 max-w-md">
          <div className="flex justify-between text-[11px] font-semibold uppercase tracking-wider text-slate-500">
            <span>Câu {Math.min(step + 1, QUESTIONS.length)} / {QUESTIONS.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-200">
            <motion.div
              className="h-full rounded-full bg-[var(--accent)]"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>

        <div className="mt-8 min-h-[280px]">
          <AnimatePresence mode="wait">
            {!finished && current && (
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <p className="text-center text-lg font-semibold text-slate-900 sm:text-xl">
                  {current.text}
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {current.options.map((opt, idx) => (
                    <motion.button
                      key={opt.label}
                      type="button"
                      onClick={() => choose(opt.trait)}
                      whileTap={{ scale: 0.97 }}
                      whileHover={{ y: -3 }}
                      className="group flex h-full items-center gap-3 rounded-2xl border-2 border-slate-200 bg-white px-4 py-4 text-left text-sm font-medium text-slate-800 transition hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]/30"
                    >
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border-2 border-slate-200 text-xs font-bold text-slate-500 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="leading-snug">{opt.label}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {finished && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <p className="flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                  <Sparkles className="h-3.5 w-3.5" /> Top 2 phù hợp với bạn
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {matches.map(({ Icon, ...c }, idx) => (
                    <motion.div
                      key={c.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.12 }}
                      className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)] text-white">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-bold text-[var(--accent)]">
                          #{idx + 1}
                        </span>
                      </div>
                      <h3 className="mt-3 text-sm font-bold text-slate-900">
                        {c.title}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-slate-600">
                        {c.salaryRange.low}–{c.salaryRange.high} triệu/tháng
                      </p>
                      <p className="mt-2 text-xs leading-5 text-slate-500">
                        {c.insight}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                  <Link
                    href="/mbti"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white shadow hover:opacity-95"
                  >
                    Làm bài MBTI đầy đủ
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    <RefreshCw className="h-3.5 w-3.5" />
                    Thử lại
                  </button>
                </div>
                <p className="mt-3 flex items-center justify-center gap-1 text-[11px] text-slate-400">
                  <Compass className="h-3 w-3" />
                  Đây là gợi ý nhanh. Bài MBTI đầy đủ chính xác hơn nhiều.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
