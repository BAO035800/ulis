"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Reveal from "./Reveal";

const TESTIMONIALS = [
  {
    name: "Phạm Khánh Linh",
    role: "Cựu SV trường đại học ngoại ngữ",
    avatarSeed: "linh-pham-portrait",
    quote:
      "Trước mình chỉ nghĩ học tiếng Nhật là đi dạy hoặc dịch. Career Map của Trạm Dừng cho mình thấy nghề Comtor — vừa hợp tính cách, vừa trả lương trong hệ IT.",
  },
  {
    name: "Trần Minh Quang",
    role: "Cựu SV trường đại học ngoại ngữ",
    avatarSeed: "quang-tran-portrait",
    quote:
      "Lộ trình theo HSK cực rõ ràng. Mỗi mốc mình đều biết cần học thêm Incoterms, đàm phán… để không bị mắc kẹt ở mảng dịch thuật.",
  },
  {
    name: "Nguyễn Hà My",
    role: "SV năm 3 · Ngôn ngữ Anh · ULIS",
    avatarSeed: "my-nguyen-portrait",
    quote:
      "MBTI + roadmap giúp mình ngừng so sánh với bạn bè. Mình hiểu mình nên đầu tư Localization thay vì cố ép bản thân làm phiên dịch cabin.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            Phản hồi từ cộng đồng
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Họ đã “CHỌN ĐÚNG - ĐI XA” nhờ Trạm Dừng
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, idx) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: idx * 0.08, duration: 0.45 }}
              whileHover={{ y: -4 }}
              className="relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/60 p-6 transition hover:shadow-md"
            >
              <Quote
                className="absolute -right-2 -top-2 h-16 w-16 text-[var(--accent)]/10"
                strokeWidth={1.5}
              />

              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
                ))}
              </div>
              <blockquote className="relative text-sm leading-7 text-slate-700">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 border-t border-slate-200 pt-4">
                <span className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-[var(--accent-soft)]">
                  <Image
                    src={`https://picsum.photos/seed/${t.avatarSeed}/120/120`}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                    unoptimized
                  />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
