import type { LanguageKey } from "./languages";

export type Milestone = {
  level: string;
  label: string;
  competences: { title: string; items: string[] }[];
};

export const ROADMAPS: Record<LanguageKey, Milestone[]> = {
  en: [
    {
      level: "Mốc 1",
      label: "IELTS < 5.5 – Foundation",
      competences: [
        {
          title: "Linguistic Foundation",
          items: [
            "Phonological awareness (âm vị, trọng âm)",
            "Lexical + grammatical competence cơ bản",
            "Input-heavy learning (listening / reading exposure)",
          ],
        },
      ],
    },
    {
      level: "Mốc 2",
      label: "IELTS 6.0 – 6.5 – Academic",
      competences: [
        {
          title: "Academic Literacy",
          items: [
            "Viết essay theo cấu trúc (Task Response, Coherence)",
            "Paraphrasing & summarizing",
          ],
        },
        {
          title: "Professional Skills",
          items: ["Email etiquette", "Presentation skills", "Digital literacy"],
        },
      ],
    },
    {
      level: "Mốc 3",
      label: "IELTS 7.0+ – Specialization",
      competences: [
        {
          title: "Advanced Discourse",
          items: ["Critical thinking", "Argumentation & persuasion"],
        },
        {
          title: "Specialization",
          items: [
            "Business English / Academic English",
            "Content creation / Localization",
          ],
        },
      ],
    },
  ],
  ja: [
    {
      level: "Mốc 1",
      label: "JLPT N5 – N4 (Sơ cấp)",
      competences: [
        {
          title: "Nền tảng",
          items: [
            "Từ vựng – ngữ pháp – Kanji nền tảng",
            "Tham gia CLB, giao lưu văn hoá",
            "Hình thành thói quen học tập ổn định",
          ],
        },
      ],
    },
    {
      level: "Mốc 2",
      label: "JLPT N3 (Trung cấp)",
      competences: [
        {
          title: "Phát triển ngôn ngữ",
          items: ["Word, Excel", "Viết email, thuyết trình"],
        },
        {
          title: "Bổ trợ",
          items: ["Luyện thi JLPT", "Tham gia hoạt động thực tế"],
        },
      ],
    },
    {
      level: "Mốc 3",
      label: "JLPT N2 – N1 (Cao cấp)",
      competences: [
        {
          title: "Sử dụng trong công việc",
          items: [
            "Dịch thuật, tiếng Nhật thương mại",
            "Phỏng vấn, thực tập",
            "Định hướng nghề nghiệp (IT Comtor, Sales JP…)",
          ],
        },
      ],
    },
  ],
  ko: [
    {
      level: "Mốc 1",
      label: "Chưa có TOPIK / TOPIK cấp thấp",
      competences: [
        {
          title: "Nền tảng",
          items: [
            "Phương pháp học chủ động",
            "Câu lạc bộ ngôn ngữ",
            "Giao lưu văn hoá",
          ],
        },
      ],
    },
    {
      level: "Mốc 2",
      label: "TOPIK II cấp 3 – 4",
      competences: [
        {
          title: "Kỹ năng bổ trợ",
          items: [
            "Tin học văn phòng (Word, Excel)",
            "Viết email chuyên nghiệp",
            "Thuyết trình",
          ],
        },
      ],
    },
    {
      level: "Mốc 3",
      label: "TOPIK II cấp 5 – 6",
      competences: [
        {
          title: "Thực chiến",
          items: [
            "Dịch thuật chuyên ngành",
            "Kiến thức kinh doanh",
            "Phỏng vấn xin việc",
          ],
        },
      ],
    },
  ],
  zh: [
    {
      level: "Mốc 1",
      label: "HSK 1 – 3",
      competences: [
        {
          title: "Hệ thống chữ Hán",
          items: ["Logographic system", "Pinyin & tone accuracy"],
        },
      ],
    },
    {
      level: "Mốc 2",
      label: "HSK 4 – 5",
      competences: [
        {
          title: "Functional Proficiency",
          items: [
            "Giao tiếp trong môi trường công việc",
            "Viết văn bản hành chính",
          ],
        },
        {
          title: "Professional Integration",
          items: [
            "Kiến thức thương mại quốc tế",
            "Quy trình xuất nhập khẩu",
          ],
        },
      ],
    },
    {
      level: "Mốc 3",
      label: "HSK 6 – Advanced",
      competences: [
        {
          title: "Chuyên sâu",
          items: ["Đàm phán thương mại (商务谈判)", "Dịch thuật chuyên ngành"],
        },
      ],
    },
  ],
  de: [
    {
      level: "Mốc 1",
      label: "Sơ cấp A1 – A2",
      competences: [
        {
          title: "Linguistic Competence",
          items: [
            "Verbkonjugation, Satzstruktur",
            "Từ vựng ~1500 – 2000 từ",
            "Nghe – nói trong ngữ cảnh đời sống",
          ],
        },
        {
          title: "Communicative Competence",
          items: [
            "Hội thoại cơ bản (giới thiệu, hỏi đáp)",
            "Văn hoá giao tiếp Đức (formal/informal register)",
          ],
        },
        {
          title: "Learning Strategy",
          items: ["Spaced Repetition (SRS)", "Tandem / immersion (CLB)"],
        },
      ],
    },
    {
      level: "Mốc 2",
      label: "Trung cấp B1 – B2",
      competences: [
        {
          title: "Linguistic Competence",
          items: [
            "Cấu trúc phức (Nebensatz, Konjunktiv II)",
            "Văn bản chức năng (email, báo cáo ngắn)",
          ],
        },
        {
          title: "Professional Skills",
          items: [
            "Email chuẩn doanh nghiệp Đức",
            "Präsentationstechniken",
            "Tin học văn phòng (Word, Excel)",
          ],
        },
        {
          title: "Deutsch für den Beruf",
          items: ["Thuật ngữ kinh doanh / kỹ thuật", "Tài liệu chuyên ngành mức trung bình"],
        },
      ],
    },
    {
      level: "Mốc 3",
      label: "Cao cấp C1 – C2",
      competences: [
        {
          title: "Advanced Communicative",
          items: [
            "Diễn đạt phức tạp – lập luận logic",
            "Thảo luận học thuật / chuyên môn",
          ],
        },
        {
          title: "Professional Competence",
          items: [
            "Fachübersetzung",
            "Bewerbungsgespräch",
            "Giao tiếp doanh nghiệp Đức",
          ],
        },
        {
          title: "Career Orientation",
          items: ["Dual system awareness", "Thực tập / làm việc tại Đức"],
        },
      ],
    },
  ],
  fr: [
    {
      level: "Mốc 1",
      label: "A1 – A2",
      competences: [
        {
          title: "Phonologie",
          items: ["Liaison, intonation", "Giao tiếp cơ bản"],
        },
      ],
    },
    {
      level: "Mốc 2",
      label: "B1 – B2",
      competences: [
        {
          title: "Academic & Professional",
          items: [
            "Viết luận logic (intro – développement – conclusion)",
            "Email công việc",
          ],
        },
      ],
    },
    {
      level: "Mốc 3",
      label: "C1 – C2",
      competences: [
        {
          title: "Advanced Usage",
          items: ["Phân tích văn bản học thuật", "Dịch thuật"],
        },
      ],
    },
  ],
  ru: [
    {
      level: "Mốc 1",
      label: "Sơ cấp",
      competences: [
        {
          title: "Nền tảng",
          items: ["Hệ chữ Cyrillic", "Morphology phức tạp (cases system)"],
        },
      ],
    },
    {
      level: "Mốc 2",
      label: "Trung cấp",
      competences: [
        {
          title: "Functional Competence",
          items: ["Giao tiếp chuyên ngành", "Viết học thuật cơ bản"],
        },
      ],
    },
    {
      level: "Mốc 3",
      label: "Cao cấp",
      competences: [
        {
          title: "Professional Competence",
          items: [
            "Dịch thuật kỹ thuật",
            "Làm việc trong lĩnh vực năng lượng / kỹ thuật",
          ],
        },
      ],
    },
  ],
  ar: [
    {
      level: "Mốc 1",
      label: "Sơ cấp",
      competences: [
        {
          title: "Hệ chữ viết",
          items: [
            "Abjad system",
            "Phân biệt MSA vs Dialects",
          ],
        },
      ],
    },
    {
      level: "Mốc 2",
      label: "Trung cấp",
      competences: [
        {
          title: "Textual Competence",
          items: [
            "Đọc hiểu văn bản chính trị – xã hội",
            "Phân tích diễn ngôn (discourse analysis)",
          ],
        },
      ],
    },
    {
      level: "Mốc 3",
      label: "Cao cấp",
      competences: [
        {
          title: "Professional Orientation",
          items: [
            "Ngoại giao",
            "Biên – phiên dịch cấp cao",
            "Hệ thống chính trị – văn hoá Trung Đông",
          ],
        },
      ],
    },
  ],
};
