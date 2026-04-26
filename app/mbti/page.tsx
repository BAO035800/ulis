"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Check,
  RefreshCw,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import {
  QUESTIONS,
  MBTI_TYPES,
  computeType,
  type Letter,
} from "@/lib/mbti";
import { CAREERS } from "@/lib/careers";

type Phase = "intro" | "test" | "result";

export default function MbtiPage() {
  const { theme } = useLanguage();
  const [phase, setPhase] = useState<Phase>("intro");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Letter>>({});

  const total = QUESTIONS.length;
  const current = QUESTIONS[step];
  const progress = (step / total) * 100;

  const result = useMemo(() => {
    if (phase !== "result") return null;
    const type = computeType(answers);
    const meta = MBTI_TYPES[type] ?? MBTI_TYPES.INTJ;
    const careers = meta.careers
      .map((id) => CAREERS.find((c) => c.id === id))
      .filter((x): x is (typeof CAREERS)[number] => Boolean(x));
    return { type, meta, careers };
  }, [phase, answers]);

  const choose = (value: Letter) => {
    const next = { ...answers, [current.id]: value };
    setAnswers(next);
    if (step + 1 < total) {
      setStep(step + 1);
    } else {
      setPhase("result");
    }
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
    setPhase("intro");
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background: `radial-gradient(circle at top, ${theme.accentSoft} 0%, transparent 60%), #ffffff`,
      }}
    >
      <header className="border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Về Trạm Dừng
          </Link>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent-ink)]">
            <Brain className="h-3.5 w-3.5" />
            MBTI · {theme.name}
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        <AnimatePresence mode="wait">
          {phase === "intro" && (
            <motion.section
              key="intro"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-ink)]">
                <Sparkles className="h-6 w-6" />
              </span>
              <h1 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
                Khám phá nhóm tính cách & nghề phù hợp với bạn
              </h1>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Bài MBTI rút gọn dành riêng cho sinh viên ngôn ngữ — gồm{" "}
                <strong>{total} câu hỏi</strong>, mất khoảng <strong>5 phút</strong>.
                Kết quả sẽ map trực tiếp vào sơ đồ nghề nghiệp trong Trạm Dừng.
              </p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  ["4 trục", "E/I · S/N · T/F · J/P"],
                  ["16 kiểu", "Phân tích cá nhân hoá"],
                  ["Map tới nghề", "Theo Career Map"],
                ].map(([k, v]) => (
                  <li
                    key={k}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                      {k}
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-700">
                      {v}
                    </p>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => setPhase("test")}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--accent)]/25 hover:opacity-95"
              >
                Bắt đầu bài test
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="mt-3 text-xs text-slate-400">
                Không lưu trữ thông tin cá nhân. Kết quả chỉ hiện trên trình duyệt
                của bạn.
              </p>
            </motion.section>
          )}

          {phase === "test" && current && (
            <motion.section
              key={`q-${current.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10"
            >
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                <span>
                  Câu {step + 1} / {total}
                </span>
                <span>Trục {current.axis}</span>
              </div>

              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  className="h-full rounded-full bg-[var(--accent)]"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              <h2 className="mt-6 text-xl font-semibold leading-snug text-slate-900 sm:text-2xl">
                {current.text}
              </h2>

              <div className="mt-6 grid gap-3">
                {current.options.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => choose(opt.value)}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:shadow-md"
                  >
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-slate-200 text-sm font-bold text-slate-500 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white">
                      {opt.value}
                    </span>
                    <span className="text-sm leading-6 text-slate-800">
                      {opt.label}
                    </span>
                  </button>
                ))}
              </div>

              {step > 0 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-800"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Câu trước
                </button>
              )}
            </motion.section>
          )}

          {phase === "result" && result && (
            <motion.section
              key="result"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="space-y-6"
            >
              <div
                className="overflow-hidden rounded-3xl p-8 text-white shadow-xl sm:p-10"
                style={{
                  background: `linear-gradient(135deg, ${theme.accentInk} 0%, ${theme.accent} 100%)`,
                }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-80">
                  Kết quả MBTI của bạn
                </p>
                <h1 className="mt-2 text-5xl font-extrabold tracking-tight sm:text-6xl">
                  {result.type}
                </h1>
                <p className="mt-2 text-xl font-semibold opacity-95">
                  {result.meta.nickname}
                </p>
                <p className="mt-4 max-w-2xl text-base leading-7 opacity-90">
                  {result.meta.summary}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {result.meta.strengths.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur"
                    >
                      <Check className="h-3 w-3" /> {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-lg font-semibold text-slate-900">
                  Nghề phù hợp với bạn
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Lấy từ Career Map của Trạm Dừng — sắp xếp theo độ phù hợp.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {result.careers.map(({ Icon, ...c }, idx) => (
                    <div
                      key={c.id}
                      className="flex h-full flex-col gap-2 rounded-2xl border border-slate-100 bg-slate-50/70 p-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent-ink)]">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-bold text-[var(--accent)]">
                          #{idx + 1}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        {c.title}
                      </h3>
                      <p className="text-xs leading-5 text-slate-600">
                        {c.salary}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-[var(--accent-soft)]/60 px-5 py-3">
                  <p className="text-sm font-medium text-[var(--accent-ink)]">
                    Muốn nhận lộ trình chi tiết theo {theme.name}?
                  </p>
                  <Link
                    href="/#signup"
                    className="rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-semibold text-white shadow hover:opacity-90"
                  >
                    Đăng ký nhận tài liệu
                  </Link>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <RefreshCw className="h-4 w-4" />
                  Làm lại bài test
                </button>
                <Link
                  href="/#career-map"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Xem toàn bộ Career Map
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
