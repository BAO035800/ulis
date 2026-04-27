"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { LANGUAGES } from "@/lib/languages";
import { ROADMAPS, type Milestone } from "@/lib/roadmaps";
import RoadmapChart from "./RoadmapChart";
import Flag from "./Flag";

function DetailPanel({
  milestone,
  themeName,
  themeCountryCode,
}: {
  milestone: Milestone;
  themeName: string;
  themeCountryCode: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--accent)]">
            {themeName} · {milestone.level}
          </p>
          <h3 className="mt-1 text-xl font-bold leading-tight text-slate-900 sm:text-2xl">
            {milestone.label}
          </h3>
        </div>
        <Flag
          countryCode={themeCountryCode}
          size="lg"
          alt={themeName}
          className="flex-shrink-0"
        />
      </div>

      <div className="mt-5 grid gap-3 sm:gap-4 md:grid-cols-2">
        {milestone.competences.map((comp) => (
          <div
            key={comp.title}
            className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3 sm:p-4"
          >
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--accent-ink)]">
              {comp.title}
            </p>
            <ul className="mt-2 space-y-1.5">
              {comp.items.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-slate-700">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--accent)]" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-[var(--accent-soft)]/60 px-4 py-3 sm:mt-6 sm:px-5">
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
    </div>
  );
}

export default function Roadmap() {
  const { theme, language, setLanguage } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);

  const milestones = ROADMAPS[language];
  const active = milestones[Math.min(activeIdx, milestones.length - 1)];

  return (
    <section
      id="roadmap"
      className="relative bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:flex-wrap lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              Lộ trình mở khoá theo Khung năng lực
            </h2>
            <p className="mt-2 text-sm font-medium text-[var(--accent)] sm:text-base">
              Bạn đang ở đâu trên hành trình {theme.name}?
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              Click vào từng <strong>Mốc</strong> để xem khung năng lực ngôn ngữ
              + kỹ năng nghề nghiệp tương ứng. Đổi chuyên ngành để cập nhật ngay.
            </p>
          </div>

          {/* Language picker — horizontal scroll on mobile */}
          <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0 lg:flex-shrink-0">
            <div className="flex gap-1.5 whitespace-nowrap pb-1">
              {LANGUAGES.map((l) => (
                <button
                  key={l.key}
                  type="button"
                  onClick={() => {
                    setLanguage(l.key);
                    setActiveIdx(0);
                  }}
                  className={`inline-flex flex-shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium transition ${
                    l.key === language
                      ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-400"
                  }`}
                >
                  <Flag countryCode={l.countryCode} size="xs" alt={l.name} />
                  {l.short}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative chart */}
        <div className="mt-8">
          <RoadmapChart
            milestones={milestones}
            activeIdx={activeIdx}
            onSelect={setActiveIdx}
          />
        </div>

        {/* MOBILE: accordion — milestone + panel inline */}
        <ol className="mt-8 space-y-3 lg:hidden">
          {milestones.map((m, idx) => {
            const isActive = idx === activeIdx;
            const isLast = idx === milestones.length - 1;
            return (
              <li key={m.level} className="flex gap-3">
                {/* Connector column */}
                <div className="flex flex-col items-center">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIdx(isActive ? activeIdx : idx)
                    }
                    aria-label={`Chọn ${m.level}`}
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold transition ${
                      isActive
                        ? "bg-[var(--accent)] text-white shadow-md"
                        : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {idx + 1}
                  </button>
                  {!isLast && (
                    <div
                      className="mt-2 w-px flex-1"
                      style={{ background: theme.accent, opacity: 0.25 }}
                    />
                  )}
                </div>

                {/* Card + inline panel */}
                <div className="min-w-0 flex-1 pb-2">
                  <button
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    className={`block w-full rounded-2xl border p-3 text-left transition ${
                      isActive
                        ? "border-[var(--accent)] bg-white shadow-sm"
                        : "border-transparent bg-white/70 hover:bg-white"
                    }`}
                  >
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      {m.level}
                    </span>
                    <span className="mt-0.5 block text-sm font-semibold text-slate-800">
                      {m.label}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key={`panel-${language}-${idx}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3">
                          <DetailPanel
                            milestone={m}
                            themeName={theme.name}
                            themeCountryCode={theme.countryCode}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </li>
            );
          })}
        </ol>

        {/* DESKTOP: sidebar + panel */}
        <div className="mt-10 hidden gap-6 lg:grid lg:grid-cols-[300px_1fr]">
          <ol className="space-y-3">
            {milestones.map((m, idx) => {
              const isActive = idx === activeIdx;
              const isLast = idx === milestones.length - 1;
              return (
                <li key={m.level} className="flex gap-3">
                  {/* Connector column */}
                  <div className="flex flex-col items-center pt-3">
                    <span
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold transition ${
                        isActive
                          ? "bg-[var(--accent)] text-white shadow-md"
                          : "bg-slate-200 text-slate-600"
                      }`}
                    >
                      {idx + 1}
                    </span>
                    {!isLast && (
                      <div
                        className="mt-2 w-px flex-1"
                        style={{ background: theme.accent, opacity: 0.25 }}
                      />
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    className={`min-w-0 flex-1 rounded-2xl border p-3 text-left transition ${
                      isActive
                        ? "border-[var(--accent)] bg-white shadow-md"
                        : "border-transparent bg-white/60 hover:border-slate-200 hover:bg-white"
                    }`}
                  >
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      {m.level}
                    </span>
                    <span
                      className={`mt-0.5 block text-sm font-semibold ${
                        isActive ? "text-slate-900" : "text-slate-700"
                      }`}
                    >
                      {m.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${language}-${activeIdx}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <DetailPanel
                milestone={active}
                themeName={theme.name}
                themeCountryCode={theme.countryCode}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
