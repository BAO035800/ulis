export type CareerGroup = "traditional" | "hybrid";

export type Career = {
  id: string;
  group: CareerGroup;
  title: string;
  emoji: string;
  salary: string;
  skills: string[];
  insight: string;
};

export const CAREERS: Career[] = [
  {
    id: "translator",
    group: "traditional",
    title: "Biên dịch viên",
    emoji: "📚",
    salary: "10 – 25 triệu/tháng (theo dự án + công ty)",
    skills: [
      "CAT tools (Trados, MemoQ)",
      "Văn phong & ngữ pháp chuẩn",
      "Domain knowledge (pháp lý / y khoa / kỹ thuật)",
    ],
    insight: "Nghề tỉ mỉ – yêu cầu độ chính xác và kiên nhẫn cao.",
  },
  {
    id: "interpreter",
    group: "traditional",
    title: "Phiên dịch Cabin",
    emoji: "🎧",
    salary: "Project-based, cao hơn biên dịch 1.5–3× (hội nghị quốc tế)",
    skills: [
      "Shadowing + note-taking",
      "Xử lý real-time (0 latency)",
      "Stress tolerance cực cao",
    ],
    insight: "High skill – high pressure – high pay.",
  },
  {
    id: "lecturer",
    group: "traditional",
    title: "Giảng viên ngoại ngữ",
    emoji: "👩‍🏫",
    salary: "15 – 40 triệu/tháng (TT vs ĐH)",
    skills: [
      "Sư phạm (pedagogy)",
      "Thiết kế giáo trình",
      "Public speaking",
    ],
    insight: "Lương tăng mạnh nếu có TESOL/CELTA hoặc dạy lớp IELTS 7.5+.",
  },
  {
    id: "comtor",
    group: "hybrid",
    title: "IT Comtor",
    emoji: "💻",
    salary: "15 – 70 triệu/tháng (theo level IT)",
    skills: [
      "Tiếng Nhật N2–N1",
      "Đọc tài liệu kỹ thuật (spec, API)",
      "Bridge communication (Dev ↔ Client)",
    ],
    insight: "Ngôn ngữ + tech literacy. Không cần code sâu, nhưng phải hiểu hệ thống.",
  },
  {
    id: "sourcing",
    group: "hybrid",
    title: "Xuất nhập khẩu / Sourcing",
    emoji: "📦",
    salary: "12 – 30 triệu/tháng",
    skills: [
      "Incoterms (FOB, CIF…)",
      "Đàm phán quốc tế",
      "Tiếng Anh thương mại",
    ],
    insight: "Business-oriented, không chỉ ngôn ngữ.",
  },
  {
    id: "coordinator",
    group: "hybrid",
    title: "Điều phối dự án quốc tế",
    emoji: "🌐",
    salary: "11.9 – 23.8 triệu/tháng (range phổ biến)",
    skills: [
      "Project management (Agile, Scrum)",
      "Giao tiếp đa quốc gia",
      "Deadline control",
    ],
    insight: "Vị trí entry → mid-level management pipeline.",
  },
  {
    id: "localization",
    group: "hybrid",
    title: "Marketing / Localization",
    emoji: "🎯",
    salary: "12 – 35 triệu/tháng",
    skills: [
      "Content + SEO",
      "Cultural adaptation",
      "Tool localization (Crowdin, Lokalise)",
    ],
    insight: "Transcreation – biến đổi nội dung cho phù hợp văn hoá, không dịch word-by-word.",
  },
];
