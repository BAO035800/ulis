"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { LANGUAGES } from "@/lib/languages";

export default function Hero() {
  const { theme, setLanguage, language } = useLanguage();

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-28"
      style={{
        background: `radial-gradient(circle at top right, ${theme.accentSoft} 0%, transparent 55%), linear-gradient(180deg, #ffffff 0%, #fafafa 100%)`,
      }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-24 -left-24 h-96 w-96 rounded-full opacity-40 blur-3xl"
          style={{ background: theme.accentSoft }}
        />
        <div
          className="absolute bottom-0 right-0 h-72 w-72 rounded-full opacity-30 blur-3xl"
          style={{ background: theme.accent }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-ink)] shadow-sm"
          >
            <span>{theme.flag}</span>
            Cá nhân hoá theo {theme.name}
          </motion.span>

          <motion.h1
            key={`title-${language}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mt-5 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]"
          >
            Trạm Dừng{" "}
            <span className="text-[var(--accent)]">Hướng Nghiệp</span>
            <br />
            <span className="text-slate-600 text-2xl font-medium sm:text-3xl">
              Nơi bắt đầu hành trình sự nghiệp của bạn.
            </span>
          </motion.h1>

          <motion.p
            key={`slogan-${language}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.45 }}
            className="mt-5 inline-flex items-center gap-3 rounded-full bg-[var(--accent-soft)] px-4 py-2 text-sm font-semibold text-[var(--accent-ink)]"
          >
            “Hiểu mình – Chọn đúng – Đi xa.”
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.45 }}
            className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg"
          >
            Cung cấp bộ công cụ <strong>“dẫn đường” từng bước</strong>, giúp bạn
            thấu hiểu bản thân, vạch ra lộ trình học tập và kết nối với cơ hội
            nghề nghiệp thực tế cho dân chuyên ngữ.
          </motion.p>

          <motion.p
            key={`tagline-${language}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm text-slate-500"
          >
            <span className="font-semibold text-slate-700">{theme.heroTagline}</span>{" "}
            <span className="block text-xs uppercase tracking-wider text-[var(--accent)]">
              {theme.heroHighlight}
            </span>
          </motion.p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#mbti"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--accent)]/25 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Khám phá bản thân ngay
              <span aria-hidden>→</span>
            </a>
            <a
              href="#career-map"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Xem bản đồ nghề nghiệp
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Đổi chuyên ngành:
            </span>
            {LANGUAGES.map((l) => {
              const active = l.key === language;
              return (
                <button
                  key={l.key}
                  type="button"
                  onClick={() => setLanguage(l.key)}
                  className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium transition ${
                    active
                      ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-400"
                  }`}
                >
                  <span>{l.flag}</span>
                  {l.short}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          key={`art-${language}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div
            className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-xl backdrop-blur"
            style={{ boxShadow: `0 30px 60px -25px ${theme.accent}55` }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent-soft)] text-lg">
                  {theme.flag}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Hồ sơ cá nhân hoá
                  </p>
                  <p className="text-sm font-semibold text-slate-800">
                    {theme.name}
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-[var(--accent-soft)] px-2 py-1 text-[10px] font-semibold text-[var(--accent-ink)]">
                LIVE
              </span>
            </div>

            <div className="mt-5 space-y-3">
              {[
                { label: "MBTI", value: "Sắp khám phá" },
                { label: "Mốc hiện tại", value: "Đang khảo sát" },
                {
                  label: "Mục tiêu nghề",
                  value: theme.heroHighlight.split(" · ")[1] ?? "—",
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {row.label}
                  </span>
                  <span className="text-sm font-medium text-slate-800">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-ink)] p-4 text-white">
              <p className="text-xs uppercase tracking-wider opacity-80">
                Gợi ý bước tiếp theo
              </p>
              <p className="mt-1 text-sm font-semibold">
                Làm bài MBTI 5 phút → mở khoá lộ trình {theme.short}.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
