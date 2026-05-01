"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Compass,
  GraduationCap,
  Sprout,
  Target,
  Check,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";

type Profile = {
  Icon: LucideIcon;
  title: string;
  desc: string;
  photoSeed: string;
  photo?: string;
};

const PROFILES: Profile[] = [
  {
    Icon: Sprout,
    title: "Tân sinh viên ngoại ngữ",
    desc: "Năm 1 – 2, đang mông lung tìm hướng đi phù hợp với tính cách và năng lực thật của mình.",
    photoSeed: "ulis-fresher-spring",
    photo: "/1.jpeg",
  },
  {
    Icon: Target,
    title: "Sinh viên đã có nền tảng",
    desc: "Năm 3 – 4 hoặc đã có chứng chỉ, cần lộ trình kỹ năng nghề & lộ trình thi chứng chỉ chuyên sâu.",
    photoSeed: "ulis-junior-study",
    photo: "/2.jpeg",
  },
  {
    Icon: Compass,
    title: "Sinh viên muốn rẽ ngang",
    desc: "Học ngôn ngữ nhưng quan tâm đến IT Comtor, Sourcing, Project Coordinator, Localization…",
    photoSeed: "ulis-pivot-tech",
    photo: "/3.jpeg",
  },
  {
    Icon: GraduationCap,
    title: "Sinh viên năm cuối / mới ra trường",
    desc: "Cần định vị bản thân, hoàn thiện hồ sơ song ngữ và chuẩn bị phỏng vấn doanh nghiệp.",
    photoSeed: "ulis-senior-graduation",
    photo: "/4.jpeg",
  },
];

export default function TargetAudience() {
  return (
    <section className="relative bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
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
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {PROFILES.map(({ Icon, ...p }, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: idx * 0.08, duration: 0.45 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-[var(--accent)] hover:shadow-lg"
              >
                <div className="relative h-36 overflow-hidden bg-slate-100">
                  <Image
                    src={p.photo ?? `https://picsum.photos/seed/${p.photoSeed}/640/360`}
                    alt=""
                    width={640}
                    height={360}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, var(--accent) 0%, transparent 60%, var(--accent-ink) 100%)`,
                      opacity: 0.55,
                      mixBlendMode: "multiply",
                    }}
                  />
                  <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/95 text-[var(--accent-ink)] shadow-sm backdrop-blur">
                    <Icon className="h-4 w-4" />
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold text-slate-900 group-hover:text-[var(--accent)]">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-600">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
