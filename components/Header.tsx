"use client";

import { useLanguage } from "@/context/LanguageContext";

const NAV = [
  { label: "Career Map", href: "#career-map" },
  { label: "Tính năng", href: "#features" },
  { label: "Lộ trình", href: "#roadmap" },
  { label: "Blog", href: "#blog" },
];

export default function Header() {
  const { theme, openOnboarding } = useLanguage();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <a href="#hero" className="flex items-center gap-2.5">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-xl text-base font-bold text-white shadow-md"
            style={{ background: theme.accent }}
          >
            TD
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold text-slate-900">
              Trạm Dừng Hướng Nghiệp
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Hiểu mình · Chọn đúng · Đi xa
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-[var(--accent)]">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openOnboarding}
            className="hidden rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:border-[var(--accent)] hover:text-[var(--accent)] sm:inline-flex"
          >
            {theme.flag} {theme.short} · Đổi
          </button>
          <a
            href="#signup"
            className="rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-semibold text-white shadow hover:opacity-95"
          >
            Đăng ký
          </a>
        </div>
      </div>
    </header>
  );
}
