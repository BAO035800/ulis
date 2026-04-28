"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Map as MapIcon, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { LANGUAGES } from "@/lib/languages";
import HeroScene from "./HeroScene";
import HeroBackground from "./HeroBackground";
import Flag from "./Flag";

export default function Hero() {
  const { theme, setLanguage, language } = useLanguage();

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Two blobs drift in opposite directions as user scrolls
  const blobAY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const blobAScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const blobBY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-28"
      style={{
        background: `radial-gradient(circle at top right, ${theme.accentSoft} 0%, transparent 55%), linear-gradient(180deg, #ffffff 0%, #fafafa 100%)`,
      }}
    >
      {/* Parallax blobs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          style={{ y: blobAY, scale: blobAScale, background: theme.accentSoft }}
          className="absolute -top-24 -left-24 h-96 w-96 rounded-full opacity-50 blur-3xl"
        />
        <motion.div
          style={{ y: blobBY, background: theme.accent }}
          className="absolute bottom-0 right-0 h-72 w-72 rounded-full opacity-30 blur-3xl"
        />
        <motion.div
          style={{ y: blobAY, background: theme.accent }}
          className="absolute right-1/3 top-40 h-40 w-40 rounded-full opacity-15 blur-3xl"
        />
      </div>

      {/* Decorative background — dot grid, route line, multilingual floating chars */}
      <HeroBackground />

      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.15fr_1fr] lg:items-center"
      >
        <div>
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-ink)] shadow-sm"
          >
            <Flag countryCode={theme.countryCode} size="xs" alt={theme.name} />
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
            <span className="text-2xl font-medium text-slate-600 sm:text-3xl">
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
            “HIỂU MÌNH - CHỌN ĐÚNG - ĐI XA”
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
            <span className="font-semibold text-slate-700">
              {theme.heroTagline}
            </span>{" "}
            <span className="block text-xs uppercase tracking-wider text-[var(--accent)]">
              {theme.heroHighlight}
            </span>
          </motion.p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/mbti"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--accent)]/25 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <Sparkles className="h-4 w-4" />
              Khám phá bản thân ngay
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#career-map"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <MapIcon className="h-4 w-4" />
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
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium transition ${
                    active
                      ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-400"
                  }`}
                >
                  <Flag countryCode={l.countryCode} size="xs" alt={l.name} />
                  {l.short}
                </button>
              );
            })}
          </div>
        </div>

        <HeroScene />
      </motion.div>
    </section>
  );
}
