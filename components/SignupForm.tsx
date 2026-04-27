"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Loader2,
  PartyPopper,
  Send,
  ShieldCheck,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { LANGUAGES } from "@/lib/languages";
import Flag from "./Flag";

type Status = "idle" | "submitting" | "success" | "error";

export default function SignupForm() {
  const { language, setLanguage, theme } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
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

  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, language }),
      });
      const data: { ok?: boolean; error?: string } = await res.json();
      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrorMsg(data.error ?? "Có lỗi xảy ra. Vui lòng thử lại.");
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Không kết nối được tới máy chủ. Vui lòng thử lại.");
    }
  };

  const reset = () => {
    setStatus("idle");
    setErrorMsg(null);
    setForm({ name: "", email: "", year: "Năm 1", interests: [] });
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
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 opacity-90" />
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
          {status === "success" ? (
            <div className="py-8 text-center">
              <PartyPopper className="mx-auto h-10 w-10 text-[var(--accent)]" />
              <h3 className="mt-3 text-xl font-semibold text-slate-900">
                Cảm ơn {form.name || "bạn"}!
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Tài liệu cá nhân hoá cho {theme.name} sẽ được gửi đến{" "}
                <strong>{form.email}</strong> trong 24h.
              </p>
              <button
                type="button"
                onClick={reset}
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
                    <div className="mt-1 flex h-[42px] items-center rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900">
                      <Flag
                        countryCode={theme.countryCode}
                        size="sm"
                        alt={theme.name}
                      />
                      <span className="ml-2 truncate font-medium">
                        {theme.name}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Đổi ngôn ngữ
                  </label>
                  <div className="mt-2 flex flex-wrap gap-1.5">
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
                          <Flag
                            countryCode={l.countryCode}
                            size="xs"
                            alt={l.name}
                          />
                          {l.short}
                        </button>
                      );
                    })}
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

                {status === "error" && errorMsg && (
                  <p className="rounded-lg bg-rose-50 px-3 py-2 text-xs font-medium text-rose-700">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--accent)] py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--accent)]/30 transition hover:opacity-95 disabled:opacity-70"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Đang gửi…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Gửi đăng ký · Nhận tài liệu ngay
                    </>
                  )}
                </button>
                <p className="flex items-center justify-center gap-1 text-center text-[11px] text-slate-400">
                  <ShieldCheck className="h-3 w-3" /> Bằng cách đăng ký, bạn đồng
                  ý với chính sách bảo mật của Trạm Dừng Hướng Nghiệp.
                </p>
              </div>
            </>
          )}
        </motion.form>
      </div>
    </section>
  );
}
