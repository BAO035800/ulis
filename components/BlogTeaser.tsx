"use client";

const POSTS = [
  {
    tag: "Chuyện nghề",
    title:
      "Từ sinh viên chuyên ngữ đến Quản lý Vận hành tập đoàn đa quốc gia – Bí quyết là gì?",
    excerpt:
      "Hành trình 6 năm từ giảng đường khoa Anh đến vị trí Operations Manager — và những kỹ năng “không-có-trong-giáo-trình” đã thay đổi cuộc chơi.",
    readTime: "8 phút đọc",
    accent: "from-blue-500/15 to-indigo-500/10",
  },
  {
    tag: "Kỹ năng",
    title:
      "Cách rèn tư duy logic khi học ngôn ngữ — và vì sao recruiter IT săn dân chuyên ngữ",
    excerpt:
      "Học ngôn ngữ không chỉ là học từ vựng. Đây là 5 “tư duy ẩn” mà sinh viên ngữ giỏi nào cũng có — và cách biến chúng thành lợi thế nghề nghiệp.",
    readTime: "6 phút đọc",
    accent: "from-emerald-500/15 to-teal-500/10",
  },
  {
    tag: "Email & CV",
    title:
      "Viết email chuyên nghiệp song ngữ: 7 mẫu ai làm dân chuyên ngữ cũng nên thuộc",
    excerpt:
      "Template thực chiến: xin thực tập, follow-up phỏng vấn, gửi CV, xin gia hạn deadline… Có sẵn cấu trúc Eng/JP/KR.",
    readTime: "5 phút đọc",
    accent: "from-rose-500/15 to-orange-500/10",
  },
];

export default function BlogTeaser() {
  return (
    <section
      id="blog"
      className="relative bg-slate-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Phần 5 · Không gian phát triển mở rộng
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
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
            Xem tất cả bài viết →
          </a>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {POSTS.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className={`relative h-40 overflow-hidden bg-gradient-to-br ${p.accent}`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl opacity-40 transition group-hover:scale-110">
                    📝
                  </span>
                </div>
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-700 backdrop-blur">
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
                  <span className="font-semibold text-[var(--accent)] opacity-0 transition group-hover:opacity-100">
                    Đọc tiếp →
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
