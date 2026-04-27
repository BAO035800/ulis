"use client";

const TESTIMONIALS = [
  {
    name: "Phạm Khánh Linh",
    role: "Cựu SV truờng đại học ngoại ngữ",
    avatar: "🌸",
    quote:
      "Trước mình chỉ nghĩ học tiếng Nhật là đi dạy hoặc dịch. Career Map của Trạm Dừng cho mình thấy nghề Comtor — vừa hợp tính cách, vừa trả lương trong hệ IT.",
  },
  {
    name: "Trần Minh Quang",
    role: "Cựu SV truờng đại học ngoại ngữ",
    avatar: "🐉",
    quote:
      "Lộ trình theo HSK cực rõ ràng. Mỗi mốc mình đều biết cần học thêm Incoterms, đàm phán… để không bị mắc kẹt ở mảng dịch thuật.",
  },
  {
    name: "Nguyễn Hà My",
    role: "SV năm 3 · Ngôn ngữ Anh · ULIS",
    avatar: "📚",
    quote:
      "MBTI + roadmap giúp mình ngừng so sánh với bạn bè. Mình hiểu mình nên đầu tư Localization thay vì cố ép bản thân làm phiên dịch cabin.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            Phản hồi từ cộng đồng
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Họ đã “CHỌN ĐÚNG - ĐI XA” nhờ Trạm Dừng
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50/60 p-6"
            >
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <blockquote className="text-sm leading-7 text-slate-700">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 border-t border-slate-200 pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-soft)] text-xl">
                  {t.avatar}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
