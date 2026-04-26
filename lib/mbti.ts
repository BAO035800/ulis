export type Axis = "EI" | "SN" | "TF" | "JP";
export type Letter = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";

export type Question = {
  id: string;
  axis: Axis;
  text: string;
  options: { label: string; value: Letter }[];
};

export const QUESTIONS: Question[] = [
  // E / I
  {
    id: "ei-1",
    axis: "EI",
    text: "Sau một ngày học/làm việc dài, bạn thường nạp lại năng lượng bằng cách nào?",
    options: [
      { label: "Đi cà phê / hang out cùng bạn bè để \"xả\"", value: "E" },
      { label: "Về phòng nghe nhạc, đọc sách, ở một mình", value: "I" },
    ],
  },
  {
    id: "ei-2",
    axis: "EI",
    text: "Trong lớp hội thoại tiếng nước ngoài, bạn là người…",
    options: [
      { label: "Hay nói nhất – sẵn sàng phát biểu kể cả khi chưa chắc", value: "E" },
      { label: "Lắng nghe trước, chuẩn bị kỹ rồi mới nói", value: "I" },
    ],
  },
  {
    id: "ei-3",
    axis: "EI",
    text: "Khi gặp người lạ ở sự kiện networking…",
    options: [
      { label: "Mình bắt chuyện trước, càng đông càng vui", value: "E" },
      { label: "Mình thấy mệt nếu phải nói chuyện liên tục với người mới", value: "I" },
    ],
  },
  // S / N
  {
    id: "sn-1",
    axis: "SN",
    text: "Khi đọc một bài báo bằng tiếng nước ngoài, bạn chú ý đến…",
    options: [
      { label: "Sự kiện cụ thể, số liệu, ai làm gì khi nào", value: "S" },
      { label: "Ý nghĩa ẩn, xu hướng tổng thể, ngụ ý phía sau", value: "N" },
    ],
  },
  {
    id: "sn-2",
    axis: "SN",
    text: "Bạn thích bài tập nào hơn?",
    options: [
      { label: "Dịch chính xác từng câu, có sẵn từ điển", value: "S" },
      { label: "Viết essay tự do, đưa ra góc nhìn riêng", value: "N" },
    ],
  },
  {
    id: "sn-3",
    axis: "SN",
    text: "Khi học một chủ đề mới, bạn thường…",
    options: [
      { label: "Học từ ví dụ thực tế, từng bước một", value: "S" },
      { label: "Tìm hiểu khái niệm tổng quát rồi mới đi vào chi tiết", value: "N" },
    ],
  },
  // T / F
  {
    id: "tf-1",
    axis: "TF",
    text: "Khi phải feedback cho bài làm của bạn cùng nhóm…",
    options: [
      { label: "Mình nói thẳng những điểm sai, dù hơi khó nghe", value: "T" },
      { label: "Mình gói lại nhẹ nhàng để không làm tổn thương cảm xúc", value: "F" },
    ],
  },
  {
    id: "tf-2",
    axis: "TF",
    text: "Khi chọn nghề, yếu tố nào quan trọng hơn?",
    options: [
      { label: "Lương + cơ hội thăng tiến rõ ràng", value: "T" },
      { label: "Ý nghĩa công việc + môi trường con người", value: "F" },
    ],
  },
  {
    id: "tf-3",
    axis: "TF",
    text: "Khi giải quyết mâu thuẫn nhóm, bạn…",
    options: [
      { label: "Phân tích nguyên nhân – đưa ra giải pháp logic", value: "T" },
      { label: "Lắng nghe cảm xúc của mọi người trước đã", value: "F" },
    ],
  },
  // J / P
  {
    id: "jp-1",
    axis: "JP",
    text: "Khi có deadline, bạn thường…",
    options: [
      { label: "Lên kế hoạch sớm, chia nhỏ task, làm dần", value: "J" },
      { label: "Cảm hứng đến lúc nào làm lúc đó, miễn không trễ", value: "P" },
    ],
  },
  {
    id: "jp-2",
    axis: "JP",
    text: "Khi đi du lịch tới một nước nói ngôn ngữ bạn học…",
    options: [
      { label: "Mình có lịch trình chi tiết theo giờ", value: "J" },
      { label: "Mình thích đi tự do, cảm hứng tới đâu đi tới đó", value: "P" },
    ],
  },
  {
    id: "jp-3",
    axis: "JP",
    text: "Bàn làm việc / desktop của bạn…",
    options: [
      { label: "Gọn gàng, mọi thứ có chỗ riêng", value: "J" },
      { label: "Hơi bừa nhưng mình biết mọi thứ ở đâu", value: "P" },
    ],
  },
];

export type MbtiResult = {
  type: string;
  nickname: string;
  summary: string;
  strengths: string[];
  careers: string[]; // career.id refs
};

export const MBTI_TYPES: Record<string, MbtiResult> = {
  INTJ: {
    type: "INTJ",
    nickname: "Chiến lược gia ngôn ngữ",
    summary:
      "Tư duy hệ thống, độc lập, nhìn xa. Bạn rất hợp các vai trò cần phân tích sâu và xây cấu trúc dài hạn.",
    strengths: ["Tư duy hệ thống", "Tự định hướng", "Tầm nhìn dài hạn"],
    careers: ["coordinator", "comtor", "translator"],
  },
  INTP: {
    type: "INTP",
    nickname: "Nhà nghiên cứu ngôn ngữ",
    summary:
      "Yêu khái niệm, logic, sự chính xác. Bạn hợp các vai trò chuyên sâu, khám phá ngôn ngữ ở tầng cấu trúc.",
    strengths: ["Phân tích sâu", "Curiosity cao", "Logic"],
    careers: ["translator", "comtor", "lecturer"],
  },
  ENTJ: {
    type: "ENTJ",
    nickname: "Người chỉ huy đa quốc gia",
    summary:
      "Quyết đoán, định hướng kết quả, dẫn dắt nhóm tự nhiên. Bạn tỏa sáng ở vai trò quản lý liên văn hoá.",
    strengths: ["Lãnh đạo", "Định hướng KPI", "Đàm phán"],
    careers: ["coordinator", "sourcing", "localization"],
  },
  ENTP: {
    type: "ENTP",
    nickname: "Người khai phá ý tưởng",
    summary:
      "Sáng tạo, ưa thử nghiệm, giỏi kết nối. Bạn hợp các môi trường đa văn hoá, đa nhiệm.",
    strengths: ["Sáng tạo", "Networking", "Đổi mới"],
    careers: ["localization", "coordinator", "sourcing"],
  },
  INFJ: {
    type: "INFJ",
    nickname: "Người dẫn đường thầm lặng",
    summary:
      "Giàu thấu cảm, tư duy chiến lược về con người. Bạn hợp các vai trò dạy học, định hướng, mentoring.",
    strengths: ["Thấu cảm", "Định hướng giá trị", "Nhìn xa"],
    careers: ["lecturer", "translator", "coordinator"],
  },
  INFP: {
    type: "INFP",
    nickname: "Người kể chuyện đa ngôn ngữ",
    summary:
      "Sống nội tâm, giàu cảm xúc, yêu ngôn từ. Bạn tỏa sáng khi sáng tạo nội dung mang dấu ấn cá nhân.",
    strengths: ["Sáng tạo nội dung", "Đồng cảm", "Sự tinh tế"],
    careers: ["translator", "localization", "lecturer"],
  },
  ENFJ: {
    type: "ENFJ",
    nickname: "Người truyền cảm hứng song ngữ",
    summary:
      "Ấm áp, dẫn dắt nhóm bằng cảm xúc, giao tiếp xuất sắc. Bạn hợp giảng dạy hoặc quản lý cộng đồng.",
    strengths: ["Public speaking", "Mentoring", "Văn hoá"],
    careers: ["lecturer", "localization", "coordinator"],
  },
  ENFP: {
    type: "ENFP",
    nickname: "Đại sứ văn hoá",
    summary:
      "Năng lượng cao, cởi mở, đa năng. Bạn hợp các vai trò marketing, sự kiện, kết nối quốc tế.",
    strengths: ["Năng lượng", "Cởi mở", "Storytelling"],
    careers: ["localization", "interpreter", "coordinator"],
  },
  ISTJ: {
    type: "ISTJ",
    nickname: "Người gìn giữ chuẩn mực",
    summary:
      "Tỉ mỉ, có trách nhiệm, chính xác. Bạn xuất sắc ở các nghề đòi hỏi độ chuẩn cao.",
    strengths: ["Tỉ mỉ", "Trách nhiệm", "Quy trình"],
    careers: ["translator", "sourcing", "comtor"],
  },
  ISFJ: {
    type: "ISFJ",
    nickname: "Người hỗ trợ tận tâm",
    summary:
      "Chu đáo, kiên trì, hướng tới phục vụ. Bạn hợp giảng dạy, hỗ trợ học viên, dịch chuyên môn.",
    strengths: ["Tận tâm", "Kiên trì", "Đồng cảm"],
    careers: ["lecturer", "translator", "coordinator"],
  },
  ESTJ: {
    type: "ESTJ",
    nickname: "Người vận hành",
    summary:
      "Tổ chức, thực dụng, ra quyết định nhanh. Bạn hợp các vai trò vận hành xuất nhập khẩu, quản lý.",
    strengths: ["Tổ chức", "Quyết đoán", "Đàm phán"],
    careers: ["sourcing", "coordinator", "localization"],
  },
  ESFJ: {
    type: "ESFJ",
    nickname: "Cầu nối cộng đồng",
    summary:
      "Hoà đồng, giỏi giao tiếp, để ý nhu cầu người khác. Bạn hợp giảng dạy, sales, customer success quốc tế.",
    strengths: ["Giao tiếp", "Phối hợp", "Customer-centric"],
    careers: ["lecturer", "sourcing", "localization"],
  },
  ISTP: {
    type: "ISTP",
    nickname: "Người giải mã",
    summary:
      "Thực dụng, độc lập, giỏi xử lý vấn đề kỹ thuật. Bạn hợp các nghề ngôn ngữ + công nghệ.",
    strengths: ["Giải quyết vấn đề", "Độc lập", "Tech-savvy"],
    careers: ["comtor", "translator", "sourcing"],
  },
  ISFP: {
    type: "ISFP",
    nickname: "Nghệ sĩ thầm lặng",
    summary:
      "Nhạy cảm, sáng tạo, thiên về thẩm mỹ. Bạn hợp localization, content sáng tạo, biên dịch văn học.",
    strengths: ["Thẩm mỹ", "Sáng tạo", "Thấu cảm"],
    careers: ["localization", "translator", "lecturer"],
  },
  ESTP: {
    type: "ESTP",
    nickname: "Người hành động",
    summary:
      "Năng động, phản ứng nhanh, ưa môi trường áp lực. Bạn hợp phiên dịch cabin, sales quốc tế.",
    strengths: ["Phản ứng nhanh", "Áp lực cao", "Năng lượng"],
    careers: ["interpreter", "sourcing", "coordinator"],
  },
  ESFP: {
    type: "ESFP",
    nickname: "Người tỏa sáng sân khấu",
    summary:
      "Cởi mở, biểu cảm, giỏi tương tác. Bạn hợp giảng dạy, MC sự kiện song ngữ, marketing.",
    strengths: ["Biểu cảm", "Tương tác", "Năng lượng"],
    careers: ["lecturer", "localization", "interpreter"],
  },
};

export function computeType(answers: Record<string, Letter>): string {
  const counts: Record<Letter, number> = {
    E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0,
  };
  Object.values(answers).forEach((v) => {
    counts[v]++;
  });
  // Tie-breakers favor the rarer side to reduce default bias.
  const ei = counts.E === counts.I ? "I" : counts.E > counts.I ? "E" : "I";
  const sn = counts.S === counts.N ? "N" : counts.S > counts.N ? "S" : "N";
  const tf = counts.T === counts.F ? "F" : counts.T > counts.F ? "T" : "F";
  const jp = counts.J === counts.P ? "P" : counts.J > counts.P ? "J" : "P";
  return `${ei}${sn}${tf}${jp}`;
}
