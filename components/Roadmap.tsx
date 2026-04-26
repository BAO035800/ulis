"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { LANGUAGES } from "@/lib/languages";
import { ROADMAPS } from "@/lib/roadmaps";

export default function Roadmap() {
  const { theme, language, setLanguage } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);

  const milestones = ROADMAPS[language];
  const active = milestones[Math.min(activeIdx, milestones.length - 1)];

  return (
    <section
      id="roadmap"
      className="relative bg-gradient-to-b from-slate-50 to-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Lộ trình mở khoá theo Khung năng lực
            </h2>
            <p className="mt-2 text-base font-medium text-[var(--accent)]">
              Bạn đang ở đâu trên hành trình {theme.name}?
            </p>
            <p className="mt-3 text-base text-slate-600">
              Click vào từng <strong>Mốc</strong> để xem khung năng lực ngôn ngữ
              + kỹ năng nghề nghiệp tương ứng. Đổi chuyên ngành để cập nhật
              ngay.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {LANGUAGES.map((l) => (
              <button
                key={l.key}
                type="button"
                onClick={() => {
                  setLanguage(l.key);
                  setActiveIdx(0);
                }}
                className={`rounded-full border px-2.5 py-1 text-xs font-medium transition ${
                  l.key === language
                    ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-400"
                }`}
              >
                {l.flag} {l.short}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[280px_1fr]">
          {/* Milestone selector */}
          <div className="relative">
            <div
              className="absolute left-5 top-3 bottom-3 w-px"
              style={{ background: theme.accent, opacity: 0.25 }}
            />
            <ul className="space-y-3">
              {milestones.map((m, idx) => {
                const active = idx === activeIdx;
                return (
                  <li key={m.level}>
                    <button
                      type="button"
                      onClick={() => setActiveIdx(idx)}
                      className={`group relative flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition ${
                        active
                          ? "border-[var(--accent)] bg-white shadow-md"
                          : "border-transparent bg-white/60 hover:border-slate-200 hover:bg-white"
                      }`}
                    >
                      <span
                        className={`relative z-10 mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                          active
                            ? "bg-[var(--accent)] text-white"
                            : "bg-slate-200 text-slate-600"
                        }`}
                      >
                        {idx + 1}
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                          {m.level}
                        </span>
                        <span
                          className={`mt-0.5 block text-sm font-semibold ${
                            active ? "text-slate-900" : "text-slate-700"
                          }`}
                        >
                          {m.label}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Active panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${language}-${activeIdx}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                    {theme.name} · {active.level}
                  </p>
                  <h3 className="mt-1 text-2xl font-bold text-slate-900">
                    {active.label}
                  </h3>
                </div>
                <span className="text-3xl">{theme.flag}</span>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {active.competences.map((comp) => (
                  <div
                    key={comp.title}
                    className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-ink)]">
                      {comp.title}
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {comp.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm text-slate-700"
                        >
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--accent)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-[var(--accent-soft)]/60 px-5 py-3">
                <p className="text-sm font-medium text-[var(--accent-ink)]">
                  Sẵn sàng mở khoá checklist chi tiết cho mốc này?
                </p>
                <a
                  href="#signup"
                  className="rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-semibold text-white shadow hover:opacity-90"
                >
                  Nhận checklist
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
