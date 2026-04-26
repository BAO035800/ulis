"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { LANGUAGES } from "@/lib/languages";

export default function OnboardingModal() {
  const { showOnboarding, setLanguage, closeOnboarding, hasChosen } =
    useLanguage();

  return (
    <AnimatePresence>
      {showOnboarding && (
        <motion.div
          key="onboarding-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ y: 24, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 16, opacity: 0, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white p-8 shadow-2xl sm:p-10"
          >
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--accent-soft)] opacity-70" />
            <div className="absolute -bottom-20 -left-12 h-56 w-56 rounded-full bg-[var(--accent-soft)] opacity-50" />

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Trạm Dừng Hướng Nghiệp
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
                Bạn đang học ngôn ngữ nào?
              </h2>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                Chọn chuyên ngành để toàn bộ nội dung – màu sắc – đề xuất bên dưới
                được cá nhân hoá theo bạn.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.key}
                    type="button"
                    onClick={() => setLanguage(lang.key)}
                    className="group flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white p-4 text-center transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:shadow-md"
                  >
                    <span className="text-3xl transition group-hover:scale-110">
                      {lang.flag}
                    </span>
                    <span className="text-sm font-medium text-slate-800">
                      {lang.name}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      {lang.short}
                    </span>
                  </button>
                ))}
              </div>

              {hasChosen && (
                <div className="mt-6 flex justify-end">
                  <button
                    type="button"
                    onClick={closeOnboarding}
                    className="text-sm font-medium text-slate-500 hover:text-slate-800"
                  >
                    Đóng
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
