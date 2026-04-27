"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const NAV = [
  { label: "Career Map", href: "/#career-map" },
  { label: "Tính năng", href: "/#features" },
  { label: "Lộ trình", href: "/#roadmap" },
  { label: "Blog", href: "/#blog" },
  { label: "MBTI", href: "/mbti" },
];

export default function Header() {
  const { theme, openOnboarding } = useLanguage();
  const [open, setOpen] = useState(false);

  // Lock body scroll while drawer is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close drawer on escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-2.5">
          <Image
            src="/logo-square.png"
            alt="Trạm Dừng Hướng Nghiệp"
            width={40}
            height={40}
            priority
            className="h-10 w-10 flex-shrink-0 rounded-xl object-contain"
          />
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-bold text-slate-900">
              Trạm Dừng Hướng Nghiệp
            </span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 sm:block">
              Hiểu mình · Chọn đúng · Đi xa
            </span>
          </span>
        </Link>

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
            className="hidden rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-semibold text-white shadow hover:opacity-95 sm:inline-block"
          >
            Đăng ký
          </a>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Mở menu"
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:border-[var(--accent)] hover:text-[var(--accent)] md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-sm md:hidden"
            />
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed right-0 top-0 z-50 flex h-dvh w-[82vw] max-w-sm flex-col bg-white shadow-2xl md:hidden"
            >
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                <div className="flex items-center gap-2.5">
                  <Image
                    src="/logo-square.png"
                    alt="Trạm Dừng"
                    width={36}
                    height={36}
                    className="h-9 w-9 flex-shrink-0 rounded-xl object-contain"
                  />
                  <span className="leading-tight">
                    <span className="block text-sm font-bold text-slate-900">
                      Trạm Dừng
                    </span>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {theme.flag} {theme.name}
                    </span>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Đóng menu"
                  className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-3 py-4">
                <ul className="space-y-1">
                  {NAV.map((n) => (
                    <li key={n.href}>
                      <a
                        href={n.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-[var(--accent)]"
                      >
                        {n.label}
                        <span aria-hidden className="text-slate-400">
                          →
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 border-t border-slate-200 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setOpen(false);
                      openOnboarding();
                    }}
                    className="flex w-full items-center justify-between rounded-xl border border-slate-200 px-3 py-3 text-sm font-medium text-slate-700 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-base">{theme.flag}</span>
                      Đổi chuyên ngành
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      {theme.short}
                    </span>
                  </button>
                </div>
              </nav>

              <div className="border-t border-slate-200 p-4">
                <a
                  href="#signup"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-[var(--accent)] px-4 py-3 text-center text-sm font-semibold text-white shadow hover:opacity-95"
                >
                  Đăng ký nhận tài liệu
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
