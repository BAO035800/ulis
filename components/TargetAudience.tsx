"use client";

import {
  Compass,
  GraduationCap,
  Sprout,
  Target,
  Check,
  type LucideIcon,
} from "lucide-react";

type Profile = {
  Icon: LucideIcon;
  title: string;
  desc: string;
};

const PROFILES: Profile[] = [
  {
    Icon: Sprout,
    title: "Tân sinh viên ngoại ngữ",
    desc: "Năm 1 – 2, đang mông lung tìm hướng đi phù hợp với tính cách và năng lực thật của mình.",
  },
  {
    Icon: Target,
    title: "Sinh viên đã có nền tảng",
    desc: "Năm 3 – 4 hoặc đã có chứng chỉ, cần lộ trình kỹ năng nghề & lộ trình thi chứng chỉ chuyên sâu.",
  },
  {
    Icon: Compass,
    title: "Sinh viên muốn rẽ ngang",
    desc: "Học ngôn ngữ nhưng quan tâm đến IT Comtor, Sourcing, Project Coordinator, Localization…",
  },
  {
    Icon: GraduationCap,
    title: "Sinh viên năm cuối / mới ra trường",
    desc: "Cần định vị bản thân, hoàn thiện hồ sơ song ngữ và chuẩn bị phỏng vấn doanh nghiệp.",
  },
];

export default function TargetAudience() {
  return (
    <section className="relative bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Phần 4 · Đối tượng
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Dành cho{" "}
              <span className="text-[var(--accent)]">toàn bộ sinh viên</span>{" "}
              ngành ngôn ngữ
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Dù bạn đang ở năm nhất với chiếc balô đầy bỡ ngỡ, hay năm cuối
              chuẩn bị bước vào thị trường lao động — Trạm Dừng Hướng Nghiệp đi
              cùng bạn ở mọi mốc.
            </p>

            <ul className="mt-6 space-y-2">
              {[
                "8 chuyên ngành ngôn ngữ chính",
                "Cá nhân hoá theo MBTI + khung năng lực",
                "Cập nhật theo dữ liệu thị trường thực tế",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-slate-700"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent-ink)]">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {PROFILES.map(({ Icon, ...p }) => (
              <div
                key={p.title}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:shadow-md"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent-ink)]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-3 text-base font-semibold text-slate-900">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
