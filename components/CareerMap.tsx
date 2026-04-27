"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Banknote, Brain, Lightbulb, MousePointerClick } from "lucide-react";
import { CAREERS, SALARY_MAX, type Career } from "@/lib/careers";
import { useLanguage } from "@/context/LanguageContext";
import Flag from "./Flag";

// SVG canvas: 1000 x 640. Coords are in viewBox units.
const HUB = { x: 500, y: 320 };

const POSITIONS: Record<string, { x: number; y: number }> = {
  // Traditional (left side)
  translator: { x: 130, y: 110 },
  interpreter: { x: 60, y: 320 },
  lecturer: { x: 130, y: 530 },
  // Hybrid (right side)
  comtor: { x: 760, y: 70 },
  sourcing: { x: 920, y: 215 },
  coordinator: { x: 920, y: 425 },
  localization: { x: 760, y: 570 },
};

function curvePath(
  from: { x: number; y: number },
  to: { x: number; y: number },
) {
  // Smooth quadratic curve with control point shifted toward x-axis center.
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;
  const dx = to.x - from.x;
  const ctrlOffset = Math.sign(dx) * 60;
  return `M ${from.x} ${from.y} Q ${mx + ctrlOffset} ${my} ${to.x} ${to.y}`;
}

function MindmapNode({
  career,
  active,
  onActivate,
}: {
  career: Career;
  active: boolean;
  onActivate: (id: string | null) => void;
}) {
  const Icon = career.Icon;
  const pos = POSITIONS[career.id];
  const isHybrid = career.group === "hybrid";

  return (
    <motion.button
      type="button"
      onMouseEnter={() => onActivate(career.id)}
      onFocus={() => onActivate(career.id)}
      onMouseLeave={() => onActivate(null)}
      onBlur={() => onActivate(null)}
      onClick={() => onActivate(career.id)}
      animate={{ scale: active ? 1.06 : 1 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl border bg-white px-3 py-2 text-left shadow-sm transition focus:outline-none ${
        active
          ? "border-[var(--accent)] shadow-lg"
          : "border-slate-200 hover:border-slate-400"
      }`}
      style={{
        left: `${(pos.x / 1000) * 100}%`,
        top: `${(pos.y / 640) * 100}%`,
        minWidth: 168,
      }}
    >
      <div className="flex items-center gap-2.5">
        <span
          className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl transition ${
            active
              ? "bg-[var(--accent)] text-white"
              : isHybrid
                ? "bg-[var(--accent-soft)] text-[var(--accent-ink)]"
                : "bg-slate-100 text-slate-600"
          }`}
        >
          <Icon className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[13px] font-semibold leading-tight text-slate-900">
            {career.title}
          </p>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            {isHybrid ? "Giao thoa" : "Truyền thống"}
          </p>
        </div>
      </div>
    </motion.button>
  );
}

function DetailPanel({ career }: { career: Career | null }) {
  return (
    <AnimatePresence mode="wait">
      {career ? (
        <motion.div
          key={career.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
          className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-3"
        >
          <div>
            <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              <Banknote className="h-3.5 w-3.5" /> Lương
            </p>
            <p className="mt-1.5 text-sm font-semibold text-slate-900">
              <span className="text-lg">{career.salaryRange.low}</span>
              <span className="text-slate-500"> – </span>
              <span className="text-lg">{career.salaryRange.high}</span>
              <span className="ml-1 text-xs font-medium text-slate-500">
                triệu/tháng
              </span>
            </p>
            {/* Salary range bar */}
            <div className="mt-2.5">
              <div className="relative h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{
                    width: `${(career.salaryRange.high / SALARY_MAX) * 100}%`,
                    opacity: 1,
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[var(--accent-soft)] to-[var(--accent)]"
                  style={{
                    marginLeft: `${(career.salaryRange.low / SALARY_MAX) * 100}%`,
                    width: `${((career.salaryRange.high - career.salaryRange.low) / SALARY_MAX) * 100}%`,
                  }}
                />
              </div>
              <div className="mt-1 flex justify-between text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                <span>0</span>
                <span>{Math.round(SALARY_MAX / 2)}tr</span>
                <span>{SALARY_MAX}tr+</span>
              </div>
            </div>
            <p className="mt-1.5 text-[10px] leading-snug text-slate-500">
              {career.salary}
            </p>
          </div>
          <div>
            <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              <Brain className="h-3.5 w-3.5" /> Kỹ năng bắt buộc
            </p>
            <ul className="mt-1.5 space-y-1">
              {career.skills.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-1.5 text-xs text-slate-700"
                >
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--accent)]" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-[var(--accent-soft)]/60 p-3">
            <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-ink)]">
              <Lightbulb className="h-3.5 w-3.5" /> Insight
            </p>
            <p className="mt-1.5 text-xs leading-5 text-[var(--accent-ink)]">
              {career.insight}
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="empty"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex items-center justify-center gap-2 rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-6 text-sm text-slate-500"
        >
          <MousePointerClick className="h-4 w-4 text-slate-400" />
          Hover hoặc tap vào một nghề trong sơ đồ để xem mức lương và kỹ năng.
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function CareerMap() {
  const { theme } = useLanguage();
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = activeId ? CAREERS.find((c) => c.id === activeId) ?? null : null;

  return (
    <section id="career-map" className="relative bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Hệ sinh thái nghề nghiệp đặc thù cho dân chuyên ngữ
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Đập tan định kiến{" "}
            <em>“học ngôn ngữ ra chỉ làm giáo viên hoặc phiên dịch”</em>. Hover
            vào từng nhánh để xem mức lương và bộ kỹ năng bổ trợ bắt buộc.
          </p>

          <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-200 px-2.5 py-1 text-slate-700">
              <span className="h-2 w-2 rounded-full bg-slate-500" />
              Truyền thống
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-[var(--accent-ink)]">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              Giao thoa (ngoại ngữ + kỹ năng cứng)
            </span>
          </div>
        </div>

        {/* DESKTOP MINDMAP */}
        <div className="mt-12 hidden lg:block">
          <div className="relative aspect-[1000/640] w-full">
            {/* SVG connectors */}
            <svg
              viewBox="0 0 1000 640"
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="none"
              aria-hidden
            >
              <defs>
                <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={theme.accent} stopOpacity="0.18" />
                  <stop offset="100%" stopColor={theme.accent} stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx={HUB.x} cy={HUB.y} r="220" fill="url(#hubGlow)" />
              {CAREERS.map((c) => {
                const pos = POSITIONS[c.id];
                const isActive = c.id === activeId;
                return (
                  <path
                    key={c.id}
                    d={curvePath(HUB, pos)}
                    stroke={theme.accent}
                    strokeWidth={isActive ? 2.5 : 1.5}
                    strokeOpacity={isActive ? 0.9 : 0.32}
                    strokeLinecap="round"
                    strokeDasharray={
                      c.group === "traditional" ? "6 6" : "0"
                    }
                    fill="none"
                  />
                );
              })}
            </svg>

            {/* HUB */}
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${(HUB.x / 1000) * 100}%`, top: `${(HUB.y / 640) * 100}%` }}
            >
              <div
                className="flex h-32 w-32 flex-col items-center justify-center rounded-full text-center text-white shadow-xl"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${theme.accent}, ${theme.accentInk})`,
                }}
              >
                <Flag
                  countryCode={theme.countryCode}
                  size="lg"
                  alt={theme.name}
                  className="ring-2 ring-white/40"
                />
                <p className="mt-2 text-xs font-bold uppercase tracking-wider">
                  Sinh viên
                </p>
                <p className="text-[10px] font-semibold opacity-90">
                  {theme.name}
                </p>
              </div>
            </div>

            {/* NODES */}
            {CAREERS.map((c) => (
              <MindmapNode
                key={c.id}
                career={c}
                active={c.id === activeId}
                onActivate={setActiveId}
              />
            ))}
          </div>

          {/* DETAIL PANEL */}
          <div className="mt-6">
            <DetailPanel career={active} />
          </div>
        </div>

        {/* MOBILE FALLBACK */}
        <div className="mt-12 grid gap-4 lg:hidden">
          {[
            { group: "traditional" as const, label: "Truyền thống" },
            { group: "hybrid" as const, label: "Giao thoa · Ngoại ngữ + Kỹ năng cứng" },
          ].map((g) => (
            <div key={g.group}>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                {g.label}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {CAREERS.filter((c) => c.group === g.group).map((c) => {
                  const Icon = c.Icon;
                  return (
                    <div
                      key={c.id}
                      className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent-ink)]">
                          <Icon className="h-4 w-4" />
                        </span>
                        <h3 className="text-sm font-semibold text-slate-900">
                          {c.title}
                        </h3>
                      </div>
                      <dl className="mt-3 space-y-2 text-xs">
                        <div>
                          <dt className="font-semibold uppercase tracking-wider text-[var(--accent)]">
                            Lương
                          </dt>
                          <dd className="mt-0.5 text-slate-700">{c.salary}</dd>
                        </div>
                        <div>
                          <dt className="font-semibold uppercase tracking-wider text-[var(--accent)]">
                            Kỹ năng
                          </dt>
                          <dd className="mt-0.5 flex flex-wrap gap-1">
                            {c.skills.map((s) => (
                              <span
                                key={s}
                                className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] text-slate-700"
                              >
                                {s}
                              </span>
                            ))}
                          </dd>
                        </div>
                        <div className="rounded-lg bg-[var(--accent-soft)]/60 p-2 text-[var(--accent-ink)]">
                          {c.insight}
                        </div>
                      </dl>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
