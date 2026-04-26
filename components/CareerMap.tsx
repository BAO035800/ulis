"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CAREERS, type Career } from "@/lib/careers";

function CareerCard({ career }: { career: Career }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group relative h-64 [perspective:1200px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
    >
      <motion.button
        type="button"
        onClick={() => setFlipped((v) => !v)}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: "easeInOut" }}
        className="relative h-full w-full rounded-2xl text-left [transform-style:preserve-3d] focus:outline-none"
      >
        {/* FRONT */}
        <div className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition group-hover:shadow-md [backface-visibility:hidden]">
          <div>
            <span className="text-3xl">{career.emoji}</span>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">
              {career.title}
            </h3>
          </div>
          <div className="space-y-2">
            <span
              className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                career.group === "traditional"
                  ? "bg-slate-100 text-slate-600"
                  : "bg-[var(--accent-soft)] text-[var(--accent-ink)]"
              }`}
            >
              {career.group === "traditional" ? "Truyền thống" : "Giao thoa"}
            </span>
            <p className="text-xs text-slate-400">
              Hover hoặc tap để xem chi tiết →
            </p>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 flex flex-col rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-ink)] p-5 text-white shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-80">
            💰 Lương
          </p>
          <p className="mt-1 text-sm font-semibold">{career.salary}</p>

          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] opacity-80">
            🧠 Kỹ năng bắt buộc
          </p>
          <ul className="mt-1 space-y-1 text-sm">
            {career.skills.map((skill) => (
              <li key={skill} className="flex items-start gap-2">
                <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-white/70" />
                <span className="leading-snug">{skill}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto rounded-xl bg-white/10 p-2 text-[11px] leading-snug backdrop-blur">
            👉 {career.insight}
          </div>
        </div>
      </motion.button>
    </div>
  );
}

export default function CareerMap() {
  const traditional = CAREERS.filter((c) => c.group === "traditional");
  const hybrid = CAREERS.filter((c) => c.group === "hybrid");

  return (
    <section
      id="career-map"
      className="relative bg-slate-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            Phần 2 · Career Mapping
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Hệ sinh thái nghề nghiệp đặc thù cho dân chuyên ngữ
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Đập tan định kiến{" "}
            <em>“học ngôn ngữ ra chỉ làm giáo viên hoặc phiên dịch”</em>. Hover
            vào từng thẻ nghề để xem mức lương trung bình và bộ kỹ năng bổ trợ
            bắt buộc phải có.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px flex-1 bg-slate-200" />
              <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600">
                Nhóm Truyền thống
              </span>
              <span className="h-px flex-1 bg-slate-200" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {traditional.map((c) => (
                <CareerCard key={c.id} career={c} />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px flex-1 bg-[var(--accent)]/20" />
              <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--accent-ink)]">
                Nhóm Giao thoa · Ngoại ngữ + Kỹ năng cứng
              </span>
              <span className="h-px flex-1 bg-[var(--accent)]/20" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {hybrid.map((c) => (
                <CareerCard key={c.id} career={c} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
