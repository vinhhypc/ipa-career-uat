export const IPAG_CORE = [
  {
    key: 'i',
    letter: 'I',
    en: 'Integration',
    vi: 'Năng lực tích hợp',
    tagline: 'Cộng hưởng nguồn lực - khuếch đại giá trị',
    imageSrc: '/life-at-ipag/cay-nen-xay-nep/figma/core-integration.png',
    body: 'Người IPAG có tư duy hệ thống, biết kết nối Con người, Công nghệ và Chuỗi giá trị để tạo ra sức mạnh cộng hưởng.',
  },
  {
    key: 'p',
    letter: 'P',
    en: 'Partnership',
    vi: 'Tư duy đối tác',
    tagline: 'Cùng đồng hành - Cùng kiến tạo giá trị với đối tác',
    imageSrc: '/life-at-ipag/cay-nen-xay-nep/figma/core-partnership.png',
    body: 'Người IPAG là người đồng hành, cùng hiện diện, cùng thực thi và cùng kiến tạo giá trị với đối tác.',
  },
  {
    key: 'a',
    letter: 'A',
    en: 'Accountable',
    vi: 'Dám chịu trách nhiệm',
    tagline: 'Tư duy toàn trình - Chịu trách nhiệm cho đầu ra',
    imageSrc: '/life-at-ipag/cay-nen-xay-nep/figma/core-accountable.png',
    body: 'Người IPAG trực tiếp hành động, đo lường bằng kết quả thực chất và chịu trách nhiệm đến cùng cho những gì mình tạo ra.',
  },
  {
    key: 'g',
    letter: 'G',
    en: 'Greatness',
    vi: 'Kiến tạo giá trị bền vững',
    tagline: 'Kiên định với việc kiến tạo giá trị bền vững',
    imageSrc: '/life-at-ipag/cay-nen-xay-nep/figma/core-greatness.png',
    body: 'Người IPAG nghĩ dài hạn, không thỏa hiệp với giá trị ngắn hạn và kiên định xây dựng những điều có ý nghĩa bền lâu.',
  },
] as const;

export type CoreValue = (typeof IPAG_CORE)[number];
export type CoreValueKey = CoreValue['key'];

export type HabitTone = 'warm' | 'blue';

export const HABITS: {
  title: string;
  icon: string;
  tone: HabitTone;
}[] = [
  {
    title: 'Phản hồi kịp thời - Tiến bộ liên tục.',
    icon: '/life-at-ipag/cay-nen-xay-nep/figma/testimonials.svg',
    tone: 'warm',
  },
  {
    title: 'Mentor và Buddie đồng hành cùng nhân sự mới',
    icon: '/life-at-ipag/cay-nen-xay-nep/figma/handshake.svg',
    tone: 'blue',
  },
  {
    title: 'Mỗi dự án là một bài học trưởng thành',
    icon: '/life-at-ipag/cay-nen-xay-nep/figma/tablet.svg',
    tone: 'warm',
  },
  {
    title: 'Ai cũng có quyền ĐƯỢC HỎI - ĐƯỢC TRẢ LỜI.',
    icon: '/life-at-ipag/cay-nen-xay-nep/figma/loupe.svg',
    tone: 'blue',
  },
  {
    title: 'Tái kết nối với mục tiêu tổ chức',
    icon: '/life-at-ipag/cay-nen-xay-nep/figma/connection.svg',
    tone: 'warm',
  },
  {
    title: 'Vinh danh bằng câu chuyện',
    icon: '/life-at-ipag/cay-nen-xay-nep/figma/medal.svg',
    tone: 'blue',
  },
];

export const CULTURE_TESTIMONIALS = [
  {
    quote:
      'Mình cũng đã gắn bó cùng tổ chức gần 1 thập kỷ rồi. Nét văn hóa mình thấy ấn tượng và có tính "đặc thù" nhất của IPAG là văn hóa trải phẳng. Ở đây ai cũng có cơ hội và quyền lợi được làm chủ sự ngiệp cũng như trao đổi trực tiếp với lãnh đạo cấp cao. Chỉ cần bạn có sự dũng cảm dám bứt phá, chẳng có gì là không thể cả.',
    name: 'Bùi Phương Linh',
    department: 'Bộ phận Nhân sự EPIC',
    imageSrc: '/life-at-ipag/cay-nen-xay-nep/figma/journey-testimonial-1.png',
    imageClassName: 'object-cover object-[38%_22%]',
  },
  {
    quote:
      'Mình gia nhập chưa lâu, nhưng IPAG đã mang cho mình nhiều trải nghiệm văn hóa thực sự "woao". Tuần đầu tiên đã được học cách thưởng trà, pha trà, rèn luyện sự định tâm qua mỗi chén trà. Chúng mình còn được Trà chuyện vòng tròn và "phá băng" cảm xúc cùng nhau nữa. Thực sự mình thấy bản thân hội nhập được với tổ chức nhanh hơn rất nhiều qua các hoạt động như thế',
    name: 'Bùi Lê Kiều Anh',
    department: 'Bộ phận Kinh doanh AnVie',
    imageSrc: '/life-at-ipag/cay-nen-xay-nep/figma/journey-testimonial-2.png',
    imageClassName: 'object-cover object-[62%_28%]',
  },
  {
    quote:
      'Nếu nói một điều mình ấn tượng nhất thì chắc là việc không có teambuilding - thay vào đó là hoạt động gắn kết. Ở đây mọi người rất coi trọng việc gắn kết với nhau và gắn kết với tổ chức. Chúng mình có các deep talk, các hoạt động để "chạm" sâu đến tầng cảm xúc của nhau hơn, không chỉ đơn thuần là một hoạt động vui chơi giải trí.',
    name: 'Nguyễn Anh Tuấn',
    department: 'Bộ phận Công nghệ IPAS',
    imageSrc: '/life-at-ipag/cay-nen-xay-nep/figma/journey-testimonial-3.png',
    imageClassName: 'object-cover object-center',
  },
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
