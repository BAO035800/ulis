import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Trạm Dừng Hướng Nghiệp · Hiểu mình – Chọn đúng – Đi xa",
  description:
    "Bộ công cụ hướng nghiệp dành riêng cho sinh viên ngành ngôn ngữ — kết hợp MBTI, khung năng lực ngôn ngữ và bản đồ nghề nghiệp thực tế.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${beVietnam.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-slate-900">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
