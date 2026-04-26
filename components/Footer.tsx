"use client";

import Link from "next/link";
import { QRCodeSVG } from "qrcode.react";
import {
  ArrowRight,
  Briefcase,
  Camera,
  FileBadge,
  Mail,
  MapPin,
  MessageSquare,
  Music2,
  Phone,
  PlaySquare,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const COMMUNITY_URL = "https://tramdung.vn/community";

export default function Footer() {
  const { theme } = useLanguage();

  const socials = [
    { name: "Facebook", Icon: MessageSquare, href: "#" },
    { name: "Instagram", Icon: Camera, href: "#" },
    { name: "TikTok", Icon: Music2, href: "#" },
    { name: "YouTube", Icon: PlaySquare, href: "#" },
    { name: "LinkedIn", Icon: Briefcase, href: "#" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-200">
      {/* Final CTA strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Sẵn sàng cho bước đầu tiên?
            </p>
            <p className="mt-1 text-lg font-semibold text-white sm:text-xl">
              Làm bài MBTI 5 phút – mở khoá lộ trình {theme.name} của bạn.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/mbti"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[var(--accent)]/30 hover:opacity-95"
            >
              Làm MBTI ngay
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#signup"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white hover:border-white/60"
            >
              <FileBadge className="h-4 w-4" />
              Nhận template CV song ngữ
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span
              className="flex h-10 w-10 items-center justify-center rounded-xl text-base font-bold text-white"
              style={{ background: theme.accent }}
            >
              TD
            </span>
            <div>
              <p className="text-base font-bold text-white">
                Trạm Dừng Hướng Nghiệp
              </p>
              <p className="text-xs text-slate-400">
                Hiểu mình – Chọn đúng – Đi xa
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
            Bộ công cụ hướng nghiệp dành cho sinh viên ngành ngôn ngữ — kết hợp
            MBTI, khung năng lực ngôn ngữ và bản đồ nghề thực tế.
          </p>

          <div className="mt-5 flex items-center gap-3">
            {socials.map(({ name, Icon, href }) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-slate-300 transition hover:border-[var(--accent)] hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Khám phá
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              ["#career-map", "Bản đồ nghề"],
              ["#features", "Tính năng"],
              ["#roadmap", "Lộ trình"],
              ["#blog", "Blog Chuyện nghề"],
              ["/mbti", "Bài test MBTI"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="text-slate-300 hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Liên hệ
          </p>
          <ul className="mt-3 space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" />
              <span>
                <span className="block text-xs text-slate-500">Email</span>
                <a href="mailto:hello@tramdung.vn" className="hover:text-white">
                  hello@tramdung.vn
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" />
              <span>
                <span className="block text-xs text-slate-500">Hotline</span>
                <a href="tel:+842466668888" className="hover:text-white">
                  +84 24 6666 8888
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" />
              <span>
                <span className="block text-xs text-slate-500">Địa chỉ</span>
                <span>ULIS – ĐHQGHN, Phạm Văn Đồng, Hà Nội</span>
              </span>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Cộng đồng
          </p>
          <div className="mt-3 flex items-start gap-3 rounded-2xl bg-white/5 p-3">
            <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-lg bg-white p-1.5">
              <QRCodeSVG
                value={COMMUNITY_URL}
                size={84}
                level="M"
                bgColor="#ffffff"
                fgColor="#0f172a"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Quét QR tham gia
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Group Zalo / Facebook cho dân chuyên ngữ — chia sẻ tài liệu &
                jobs hằng tuần.
              </p>
              <a
                href={COMMUNITY_URL}
                className="mt-2 inline-flex text-[11px] font-semibold text-[var(--accent)] hover:underline"
              >
                tramdung.vn/community
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-slate-500">
          <p>© 2026 Trạm Dừng Hướng Nghiệp · Made for ULIS students.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              Chính sách bảo mật
            </a>
            <a href="#" className="hover:text-white">
              Điều khoản sử dụng
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
