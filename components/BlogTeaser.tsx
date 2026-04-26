"use client";

import type { ComponentType } from "react";
import { ArrowRight, Briefcase, Code2, MailCheck } from "lucide-react";
import {
  BilingualEmailArt,
  CareerJourneyArt,
  LogicLanguageArt,
} from "./BlogIllustrations";

type Post = {
  tag: string;
  title: string;
  excerpt: string;
  readTime: string;
  Art: ComponentType;
  TagIcon: ComponentType<{ className?: string }>;
};

const POSTS: Post[] = [
  {
    tag: "Chuyện nghề",
    title:
      "Từ sinh viên chuyên ngữ đến Quản lý Vận hành tập đoàn đa quốc gia – Bí quyết là gì?",
    excerpt:
      "Hành trình 6 năm từ giảng đường khoa Anh đến vị trí Operations Manager — và những kỹ năng “không-có-trong-giáo-trình” đã thay đổi cuộc chơi.",
    readTime: "8 phút đọc",
    Art: CareerJourneyArt,
    TagIcon: Briefcase,
  },
  {
    tag: "Kỹ năng",
    title:
      "Cách rèn tư duy logic khi học ngôn ngữ — và vì sao recruiter IT săn dân chuyên ngữ",
    excerpt:
      "Học ngôn ngữ không chỉ là học từ vựng. Đây là 5 “tư duy ẩn” mà sinh viên ngữ giỏi nào cũng có — và cách biến chúng thành lợi thế nghề nghiệp.",
    readTime: "6 phút đọc",
    Art: LogicLanguageArt,
    TagIcon: Code2,
  },
  {
    tag: "Email & CV",
    title:
      "Viết email chuyên nghiệp song ngữ: 7 mẫu ai làm dân chuyên ngữ cũng nên thuộc",
    excerpt:
      "Template thực chiến: xin thực tập, follow-up phỏng vấn, gửi CV, xin gia hạn deadline… Có sẵn cấu trúc Eng/JP/KR.",
    readTime: "5 phút đọc",
    Art: BilingualEmailArt,
    TagIcon: MailCheck,
  },
];

export default function BlogTeaser() {
  return (
    <section id="blog" className="relative bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Nhật Ký Chuyện Nghề: Từ Giảng Đường Đến Công Sở
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Đã bao giờ bạn tự hỏi:{" "}
              <em>
                “Ngoài làm phiên dịch và đi dạy, sinh viên ngoại ngữ ra trường
                còn làm được gì?”
              </em>{" "}
              Chuyên mục này gỡ rối câu hỏi đó — qua câu chuyện thật từ chính
              các anh chị cựu sinh viên.
            </p>
          </div>
          <a
            href="#blog"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Xem tất cả bài viết
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {POSTS.map(({ Art, TagIcon, ...p }) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-44 overflow-hidden">
                <div className="absolute inset-0 transition duration-500 group-hover:scale-105">
                  <Art />
                </div>
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-700 shadow-sm backdrop-blur">
                  <TagIcon className="h-3 w-3 text-[var(--accent)]" />
                  {p.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="text-base font-semibold leading-snug text-slate-900 group-hover:text-[var(--accent)]">
                  {p.title}
                </h3>
                <p className="text-sm leading-6 text-slate-600">{p.excerpt}</p>
                <div className="mt-auto flex items-center justify-between pt-2 text-xs text-slate-400">
                  <span>{p.readTime}</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-[var(--accent)] opacity-0 transition group-hover:opacity-100">
                    Đọc tiếp
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
