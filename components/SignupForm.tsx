"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { LANGUAGES } from "@/lib/languages";

export default function SignupForm() {
  const { language, setLanguage, theme } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    year: "Năm 1",
    interests: [] as string[],
  });

  const interests = [
    "Bài test MBTI hướng nghiệp",
    "Template CV song ngữ",
    "Lộ trình chứng chỉ",
    "Workshop chuyện nghề",
  ];

  const toggleInterest = (i: string) =>
    setForm((f) =>
      f.interests.includes(i)
        ? { ...f, interests: f.interests.filter((x) => x !== i) }
        : { ...f, interests: [...f.interests, i] },
    );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="signup"
      className="relative overflow-hidden py-20 sm:py-24"
      style={{
        background: `linear-gradient(135deg, ${theme.accentInk} 0%, ${theme.accent} 100%)`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-80">
            Đăng ký nhận tài liệu độc quyền
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
            Bắt đầu hành trình{" "}
            <span className="underline decoration-white/40 underline-offset-4">
              Hiểu mình – Chọn đúng – Đi xa
            </span>
          </h2>
          <p className="mt-4 text-base leading-7 opacity-90">
            Để lại thông tin để nhận miễn phí: <strong>bài test MBTI</strong>,{" "}
            <strong>template CV song ngữ/đa ngữ</strong> và checklist chứng chỉ
            được cá nhân hoá theo {theme.name}.
          </p>

          <ul className="mt-6 space-y-2 text-sm opacity-95">
            {[
              "Tài liệu đóng gói theo chuyên ngành",
              "Cập nhật chuyên mục Chuyện nghề hàng tuần",
              "Mời sớm vào workshop offline tại ULIS",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15 text-[11px]">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-white/95 p-6 shadow-2xl backdrop-blur sm:p-8"
        >
          {submitted ? (
            <div className="py-8 text-center">
              <span className="text-4xl">🎉</span>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">
                Cảm ơn {form.name || "bạn"}!
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Tài liệu cá nhân hoá cho {theme.name} sẽ được gửi đến{" "}
                <strong>{form.email || "email của bạn"}</strong> trong 24h.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", email: "", year: "Năm 1", interests: [] });
                }}
                className="mt-6 rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-600 hover:border-slate-500"
              >
                Đăng ký người khác
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-lg font-semibold text-slate-900">
                Form đăng ký nhận tài liệu
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Mất 30 giây · Hoàn toàn miễn phí
              </p>

              <div className="mt-5 space-y-4">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Họ và tên
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    placeholder="Nguyễn Văn A"
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-[var(--accent)]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    placeholder="ban@email.com"
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-[var(--accent)]"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                      Năm học
                    </label>
                    <select
                      value={form.year}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, year: e.target.value }))
                      }
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-[var(--accent)]"
                    >
                      {["Năm 1", "Năm 2", "Năm 3", "Năm 4", "Đã tốt nghiệp"].map(
                        (y) => (
                          <option key={y}>{y}</option>
                        ),
                      )}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                      Ngôn ngữ
                    </label>
                    <select
                      value={language}
                      onChange={(e) =>
                        setLanguage(e.target.value as typeof language)
                      }
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-[var(--accent)]"
                    >
                      {LANGUAGES.map((l) => (
                        <option key={l.key} value={l.key}>
                          {l.flag} {l.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Bạn quan tâm tài liệu nào?
                  </label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {interests.map((i) => {
                      const active = form.interests.includes(i);
                      return (
                        <button
                          key={i}
                          type="button"
                          onClick={() => toggleInterest(i)}
                          className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                            active
                              ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                              : "border-slate-200 bg-white text-slate-600 hover:border-slate-400"
                          }`}
                        >
                          {i}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full rounded-full bg-[var(--accent)] py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--accent)]/30 transition hover:opacity-95"
                >
                  Gửi đăng ký · Nhận tài liệu ngay
                </button>
                <p className="text-center text-[11px] text-slate-400">
                  Bằng cách đăng ký, bạn đồng ý với chính sách bảo mật của Trạm
                  Dừng Hướng Nghiệp.
                </p>
              </div>
            </>
          )}
        </motion.form>
      </div>
    </section>
  );
}
