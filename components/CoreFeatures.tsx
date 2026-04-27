"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import {
  BookMarked,
  Brain,
  CheckCircle2,
  KeyRound,
  Map as MapIcon,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";

type Feature = {
  Icon: LucideIcon;
  title: string;
  desc: string;
  bullets: string[];
  highlight?: boolean;
  Preview: ComponentType;
};

function DictionaryPreview() {
  return (
    <div className="space-y-1.5">
      {[
        { code: "JP", label: "IT Comtor", val: "15-70tr" },
        { code: "EN", label: "Localization", val: "12-35tr" },
        { code: "ZH", label: "Sourcing", val: "12-30tr" },
      ].map((row) => (
        <div
          key={row.label}
          className="flex items-center gap-1.5 rounded-md bg-white/80 px-2 py-1 text-[10px]"
        >
          <span className="rounded bg-[var(--accent)] px-1 py-0.5 text-[9px] font-bold text-white">
            {row.code}
          </span>
          <span className="font-medium text-slate-700">{row.label}</span>
          <span className="ml-auto font-semibold text-[var(--accent-ink)]">
            {row.val}
          </span>
        </div>
      ))}
    </div>
  );
}

function ChecklistPreview() {
  return (
    <div className="space-y-1.5">
      {[
        { label: "TOPIK 4", done: true },
        { label: "Tin học VP", done: true },
        { label: "Email pro", done: true },
        { label: "Thuyết trình", done: false },
      ].map((row) => (
        <div
          key={row.label}
          className="flex items-center gap-2 text-[10px]"
        >
          <CheckCircle2
            className={`h-3 w-3 flex-shrink-0 ${
              row.done ? "text-[var(--accent)]" : "text-slate-300"
            }`}
          />
          <span
            className={`${row.done ? "text-slate-700 line-through opacity-70" : "font-medium text-slate-800"}`}
          >
            {row.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function MilestonePreview() {
  return (
    <div className="space-y-1.5">
      {[
        { label: "A1-A2", done: true },
        { label: "B1-B2", done: true, current: true },
        { label: "C1-C2", done: false },
      ].map((m) => (
        <div key={m.label} className="flex items-center gap-2">
          <span
            className={`flex h-4 w-4 items-center justify-center rounded-full text-[8px] font-bold ${
              m.done
                ? "bg-[var(--accent)] text-white"
                : "border border-dashed border-slate-300 text-slate-400"
            }`}
          >
            {m.done ? "✓" : ""}
          </span>
          <span
            className={`text-[10px] ${m.current ? "font-bold text-slate-900" : "text-slate-600"}`}
          >
            Mốc · {m.label}
          </span>
          {m.current && (
            <span className="rounded-full bg-[var(--accent-soft)] px-1.5 py-0.5 text-[8px] font-bold text-[var(--accent-ink)]">
              YOU
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function MbtiPreview() {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between rounded-md bg-gradient-to-r from-[var(--accent)] to-[var(--accent-ink)] px-2 py-1.5 text-white">
        <span className="text-[9px] font-semibold uppercase opacity-80">
          Result
        </span>
        <span className="text-base font-extrabold tracking-wider">INFJ</span>
      </div>
      <p className="rounded-md bg-white/80 px-2 py-1 text-[10px] text-slate-700">
        Người dẫn đường thầm lặng → match{" "}
        <strong className="text-[var(--accent-ink)]">Lecturer</strong>,{" "}
        <strong className="text-[var(--accent-ink)]">Translator</strong>
      </p>
    </div>
  );
}

const FEATURES: Feature[] = [
  {
    Icon: BookMarked,
    title: "Từ điển nghề nghiệp đặc thù",
    desc: "Dữ liệu chính thống về ngành học, lộ trình thăng tiến, mức lương cho từng khối ngôn ngữ (Anh, Hàn, Trung, Nhật, Đức, Pháp, Nga, Ả Rập…).",
    bullets: ["Hồ sơ ngành học chuẩn", "Mức lương theo level", "Bản đồ việc làm"],
    Preview: DictionaryPreview,
  },
  {
    Icon: MapIcon,
    title: "Lộ trình & Checklist",
    desc: "Xác lập mục tiêu và lập kế hoạch chi tiết theo từng học kỳ trong suốt 4 năm học, đi kèm checklist thực tế về kỹ năng và chứng chỉ.",
    bullets: ["Plan theo học kỳ × 4 năm", "Checklist chứng chỉ", "Tracking tiến độ"],
    Preview: ChecklistPreview,
  },
  {
    Icon: KeyRound,
    title: "Lộ trình “Mở khoá” theo Khung năng lực",
    desc: "Dành cho sinh viên đã có nền tảng. Theo Khung năng lực (A1–C2 / N5–N1 / TOPIK 1–6 / HSK 1–6) thay vì theo thời gian.",
    bullets: ["3 mốc: Sơ – Trung – Cao", "Linguistic + Pro + Strategy", "Cập nhật theo điểm thực tế"],
    highlight: true,
    Preview: MilestonePreview,
  },
  {
    Icon: Brain,
    title: "Trắc nghiệm MBTI hướng nghiệp",
    desc: "MBTI rút gọn dành riêng cho sinh viên ngôn ngữ. Kết quả map trực tiếp vào sơ đồ Career Mapping.",
    bullets: ["~5 phút", "Kết nối với Career Map", "Lưu hồ sơ cá nhân"],
    Preview: MbtiPreview,
  },
];

function FeatureCard({
  feature,
  delay,
}: {
  feature: Feature;
  delay: number;
}) {
  const { Icon, Preview } = feature;
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className={`group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border p-6 transition-shadow hover:shadow-xl ${
        feature.highlight
          ? "border-[var(--accent)]/40 bg-[var(--accent-soft)]/40"
          : "border-slate-200 bg-white"
      }`}
    >
      {feature.highlight && (
        <span className="absolute -top-2 right-4 inline-flex items-center gap-1 rounded-full bg-[var(--accent)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow">
          <Sparkles className="h-2.5 w-2.5" /> Mới
        </span>
      )}
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent-ink)] transition group-hover:scale-110">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
      <p className="text-sm leading-6 text-slate-600">{feature.desc}</p>
      <ul className="space-y-1.5">
        {feature.bullets.map((b) => (
          <li
            key={b}
            className="flex items-center gap-2 text-xs font-medium text-slate-700"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            {b}
          </li>
        ))}
      </ul>

      {/* Hover preview */}
      <div className="mt-auto rounded-xl border border-dashed border-slate-200 bg-gradient-to-br from-slate-50 to-white p-3">
        <p className="mb-2 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
          <Sparkles className="h-2.5 w-2.5" /> Live preview
        </p>
        <Preview />
      </div>
    </motion.article>
  );
}

export default function CoreFeatures() {
  return (
    <section id="features" className="relative bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Bộ công cụ “dẫn đường” từng bước
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Bốn tính năng được thiết kế dành riêng cho sinh viên chuyên ngữ — từ
            khám phá bản thân, định hướng ngành, đến lộ trình kỹ năng cụ thể.
            Hover từng thẻ để xem preview trực tiếp.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {FEATURES.map((f, idx) => (
            <FeatureCard key={f.title} feature={f} delay={idx * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
