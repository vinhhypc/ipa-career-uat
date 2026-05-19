export const IPAG_CORE = [
  {
    key: 'i',
    letter: 'I',
    en: 'Integration',
    vi: 'Năng lực tích hợp',
    body: 'Người IPAG có tư duy hệ thống, biết kết nối Con người, Công nghệ và Chuỗi giá trị để tạo ra sức mạnh cộng hưởng.',
  },
  {
    key: 'p',
    letter: 'P',
    en: 'Partnership',
    vi: 'Tư duy đối tác',
    body: 'Người IPAG là người đồng hành, cùng hiện diện, cùng thực thi và cùng kiến tạo giá trị với đối tác.',
  },
  {
    key: 'a',
    letter: 'A',
    en: 'Accountable',
    vi: 'Chuyển đổi có trách nhiệm',
    body: 'Người IPAG trực tiếp hành động, đo lường bằng kết quả thực chất và chịu trách nhiệm đến cùng cho những gì mình tạo ra.',
  },
  {
    key: 'g',
    letter: 'G',
    en: 'Greatness',
    vi: 'Kiến tạo giá trị lâu dài',
    body: 'Người IPAG nghĩ dài hạn, không thỏa hiệp với giá trị ngắn hạn và kiên định xây dựng những điều có ý nghĩa bền lâu.',
  },
] as const;

export type CoreValue = (typeof IPAG_CORE)[number];
export type CoreValueKey = CoreValue['key'];

export type HabitTone = 'warm' | 'blue';

export const HABITS: {
  title: string;
  body: string;
  icon: string;
  tone: HabitTone;
}[] = [
  {
    title: 'Thẳng thắn và\ntức thì',
    body: 'Chúng tôi không đợi đến kỳ đánh giá. Tại IPAG, feedback xảy ra ngay khi cần thiết với tinh thần xây dựng và mục đích rõ ràng: cùng nhau tiến bộ.',
    icon: '/life-at-ipag/cay-nen-xay-nep/figma/testimonials.svg',
    tone: 'warm',
  },
  {
    title: 'Đồng hành,\nkhông tự “bơi”',
    body: 'Mentor riêng biệt, Welcome kit tinh tế và lịch 1-1 sẵn sàng từ ngày đầu tiên. Bạn sẽ luôn được dẫn dắt để hòa nhập nhanh nhất với hệ sinh thái.',
    icon: '/life-at-ipag/cay-nen-xay-nep/figma/handshake.svg',
    tone: 'blue',
  },
  {
    title: 'Học từ\nthực tế',
    body: 'Sau mỗi dự án là khoảng lặng để nhìn lại. Chúng tôi không truy cứu lỗi lầm, chúng tôi đúc rút bài học để không lặp lại sai lầm cũ.',
    icon: '/life-at-ipag/cay-nen-xay-nep/figma/tablet.svg',
    tone: 'warm',
  },
  {
    title: 'Minh bạch\ntuyệt đối',
    body: 'Lãnh đạo chia sẻ trực diện về thực trạng tổ chức. Tại đây, không có câu hỏi nào là "không nên hỏi" — mọi thắc mắc đều được trân trọng.',
    icon: '/life-at-ipag/cay-nen-xay-nep/figma/loupe.svg',
    tone: 'blue',
  },
  {
    title: 'Tái kết nối\nmục đích',
    body: 'Những chuyến đi về với thiên nhiên (Yên Tử, Hòa Bình...) không phải để team-building hình thức, mà để chúng ta tái kết nối với nhau và với mục đích lớn lao.',
    icon: '/life-at-ipag/cay-nen-xay-nep/figma/connection.svg',
    tone: 'warm',
  },
  {
    title: 'Vinh danh bằng\ncâu chuyện',
    body: 'Thành công tại IPAG được ghi nhận bằng những câu chuyện truyền cảm hứng. Điều bạn làm được cộng đồng ghi nhớ và trân trọng — không chỉ dừng lại ở phần thưởng.',
    icon: '/life-at-ipag/cay-nen-xay-nep/figma/medal.svg',
    tone: 'blue',
  },
];

export const TAC_STEPS = [
  { title: 'Transform (Chuyển hóa)', body: 'Dám nhìn nhận để lột xác' },
  { title: 'Amplify (Khuếch đại)', body: 'Tập trung vào thế mạnh cốt lõi' },
  { title: 'Continuation (Tiếp nối)', body: 'Giữ gìn di sản bền vững' },
] as const;

export const CAT_STEPS = [
  { title: 'Connect', body: 'Kết nối chân thành' },
  { title: 'Add Values', body: 'Cộng hưởng giá trị' },
  { title: 'Transfer Excellence', body: 'Truyền giao sự xuất sắc' },
] as const;

export type CoreDetail = {
  image: string;
  lead: string;
  bullets: string[];
  question: string;
};

export function getCoreDetail(activeCore: CoreValue): CoreDetail {
  const base: CoreDetail = {
    image: '',
    lead: activeCore.body,
    bullets: [],
    question: '',
  };

  if (activeCore.key === 'i') {
    return {
      ...base,
      image: '/life-at-ipag/cay-nen-xay-nep/figma/integration.png',
      lead: 'Tại IPAG, chúng tôi không làm việc trong "ốc đảo". Mỗi cộng sự thực hành 3 bước kết nối:',
      bullets: [
        'Chia sẻ: Ai cần biết thông tin này?',
        'Cộng hưởng: Nguồn lực nào có thể dùng chung?',
        'Khuếch đại: Kết quả này đóng góp gì cho hệ sinh thái?',
      ],
      question: 'Đã kết nối Con người — Công nghệ — Chuỗi giá trị chưa?',
    };
  }

  return base;
}
