"use client";

import { motion } from "framer-motion";

const FEATURES = [
  {
    icon: "📖",
    title: "Từ điển nghề nghiệp đặc thù",
    desc: "Trung tâm dữ liệu thu nhỏ — thông tin chính thống về ngành học, lộ trình thăng tiến, mức lương và cơ hội việc làm cho từng khối ngôn ngữ (Anh, Hàn, Trung, Nhật, Đức, Pháp, Nga, Ả Rập…).",
    bullets: [
      "Hồ sơ ngành học chuẩn",
      "Mức lương theo level",
      "Bản đồ cơ hội việc làm",
    ],
  },
  {
    icon: "🗺️",
    title: "Lộ trình & Checklist",
    desc: "Xác lập mục tiêu và lập kế hoạch chi tiết theo từng học kỳ trong suốt 4 năm học, đi kèm checklist thực tế về kỹ năng và chứng chỉ cần trau dồi.",
    bullets: [
      "Plan theo học kỳ × 4 năm",
      "Checklist chứng chỉ",
      "Theo dõi tiến độ",
    ],
  },
  {
    icon: "🔓",
    title: "Lộ trình “Mở khoá” theo Khung năng lực",
    desc: "Dành cho sinh viên đã có nền tảng. Thiết kế theo Khung năng lực (A1–C2 / N5–N1 / TOPIK 1–6 / HSK 1–6) thay vì theo thời gian. Bạn đang ở đâu, sẽ được đề xuất bước kế tiếp.",
    bullets: [
      "3 mốc: Sơ – Trung – Cao",
      "Linguistic + Professional + Strategy",
      "Cập nhật theo điểm số thực tế",
    ],
    highlight: true,
  },
  {
    icon: "🧠",
    title: "Trắc nghiệm MBTI hướng nghiệp",
    desc: "Phiên bản MBTI rút gọn dành riêng cho sinh viên ngôn ngữ. Kết quả sẽ map trực tiếp vào nhóm nghề phù hợp trong sơ đồ Career Mapping.",
    bullets: ["~5 phút", "Kết nối với Career Map", "Lưu hồ sơ cá nhân"],
  },
];

export default function CoreFeatures() {
  return (
    <section id="features" className="relative bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            Phần 3 · Tính năng cốt lõi
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Bộ công cụ “dẫn đường” từng bước
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Bốn tính năng được thiết kế dành riêng cho sinh viên chuyên ngữ — từ
            khám phá bản thân, định hướng ngành, đến lộ trình kỹ năng cụ thể.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {FEATURES.map((f, idx) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: idx * 0.06 }}
              className={`relative flex h-full flex-col gap-4 rounded-2xl border p-6 transition hover:-translate-y-1 hover:shadow-lg ${
                f.highlight
                  ? "border-[var(--accent)]/40 bg-[var(--accent-soft)]/40"
                  : "border-slate-200 bg-white"
              }`}
            >
              {f.highlight && (
                <span className="absolute -top-2 right-4 rounded-full bg-[var(--accent)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow">
                  Mới
                </span>
              )}
              <span className="text-3xl">{f.icon}</span>
              <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="text-sm leading-6 text-slate-600">{f.desc}</p>
              <ul className="mt-auto space-y-1.5">
                {f.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 text-xs font-medium text-slate-700"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
