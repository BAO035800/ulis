export type LanguageKey =
  | "en"
  | "ja"
  | "ko"
  | "zh"
  | "de"
  | "fr"
  | "ru"
  | "ar";

export type LanguageTheme = {
  key: LanguageKey;
  name: string;
  flag: string;
  short: string;
  accent: string;
  accentSoft: string;
  accentInk: string;
  heroTagline: string;
  heroHighlight: string;
};

export const LANGUAGES: LanguageTheme[] = [
  {
    key: "en",
    name: "Tiếng Anh",
    flag: "🇬🇧",
    short: "EN",
    accent: "#1d4ed8",
    accentSoft: "#dbeafe",
    accentInk: "#0b1f5c",
    heroTagline: "Global English – Mở cánh cửa thị trường lao động quốc tế.",
    heroHighlight: "IELTS · Business English · Localization",
  },
  {
    key: "ja",
    name: "Tiếng Nhật",
    flag: "🇯🇵",
    short: "JP",
    accent: "#e11d48",
    accentSoft: "#ffe4e6",
    accentInk: "#5b0a1f",
    heroTagline: "Nihongo – Cầu nối giữa văn hoá và công nghệ Nhật Bản.",
    heroHighlight: "JLPT N3→N1 · IT Comtor · Thương mại Nhật",
  },
  {
    key: "ko",
    name: "Tiếng Hàn",
    flag: "🇰🇷",
    short: "KR",
    accent: "#7c3aed",
    accentSoft: "#ede9fe",
    accentInk: "#2e1065",
    heroTagline: "Hangugeo – Khai phá cơ hội từ làn sóng Hallyu & Hàn Quốc.",
    heroHighlight: "TOPIK 3→6 · K-Business · Localization",
  },
  {
    key: "zh",
    name: "Tiếng Trung",
    flag: "🇨🇳",
    short: "ZH",
    accent: "#dc2626",
    accentSoft: "#fee2e2",
    accentInk: "#5c0a0a",
    heroTagline: "Zhongwen – Đòn bẩy bước vào thị trường tỷ dân.",
    heroHighlight: "HSK 4→6 · Sourcing · Thương mại quốc tế",
  },
  {
    key: "de",
    name: "Tiếng Đức",
    flag: "🇩🇪",
    short: "DE",
    accent: "#0f766e",
    accentSoft: "#ccfbf1",
    accentInk: "#0a3a36",
    heroTagline: "Deutsch – Cửa ngõ vào kỹ thuật & dual system của châu Âu.",
    heroHighlight: "A1→C2 · Fachsprache · Cơ hội định cư Đức",
  },
  {
    key: "fr",
    name: "Tiếng Pháp",
    flag: "🇫🇷",
    short: "FR",
    accent: "#2563eb",
    accentSoft: "#dbeafe",
    accentInk: "#0b1f5c",
    heroTagline: "Français – Ngôn ngữ ngoại giao, văn hoá và sáng tạo.",
    heroHighlight: "DELF/DALF · Tourism · Diplomatie",
  },
  {
    key: "ru",
    name: "Tiếng Nga",
    flag: "🇷🇺",
    short: "RU",
    accent: "#0ea5e9",
    accentSoft: "#e0f2fe",
    accentInk: "#082f49",
    heroTagline: "Русский – Cơ hội trong năng lượng, kỹ thuật và Á-Âu.",
    heroHighlight: "TRKI · Kỹ thuật · Năng lượng",
  },
  {
    key: "ar",
    name: "Tiếng Ả Rập",
    flag: "🇸🇦",
    short: "AR",
    accent: "#16a34a",
    accentSoft: "#dcfce7",
    accentInk: "#052e16",
    heroTagline: "العربية – Mở lối vào thị trường Trung Đông & ngoại giao.",
    heroHighlight: "MSA · Diplomacy · Media",
  },
];

export const DEFAULT_LANGUAGE: LanguageKey = "en";

export function getLanguage(key: LanguageKey): LanguageTheme {
  return LANGUAGES.find((l) => l.key === key) ?? LANGUAGES[0];
}
