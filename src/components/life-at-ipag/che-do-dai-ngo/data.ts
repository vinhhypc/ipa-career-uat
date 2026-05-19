export type BenefitItem = {
  title: string;
  desc: string;
  iconSrc: string;
};

export type BenefitBlock = {
  key: string;
  heading: string;
  tag: string;
  quote: string;
  imageSrc: string;
  imageAlt: string;
  reverseOnDesktop?: boolean;
  items: BenefitItem[];
};

export const BLOCKS: BenefitBlock[] = [
  {
    key: 'song-khoe',
    heading: 'SỐNG KHỎE',
    tag: 'Sống khỏe - Healthy & Well-being',
    quote:
      '"IPAG đầu tư vào sức khỏe toàn diện của bạn - nền tảng cốt lõi để kiến tạo giá trị lâu dài."',
    imageSrc: '/life-at-ipag/che-do-dai-ngo/figma/song-khoe.png',
    imageAlt: '',
    items: [
      {
        title: 'Thực phẩm sạch — Gobio Retail',
        desc: 'Ưu đãi mua sắm thực phẩm hữu cơ và xanh sạch',
        iconSrc: '/life-at-ipag/che-do-dai-ngo/figma/icons/song-khoe-gobio.svg',
      },
      {
        title: 'Trải nghiệm du lịch — CBX Travel',
        desc: 'Chương trình gắn kết, và Retreat tại địa điểm thiên nhiên',
        iconSrc: '/life-at-ipag/che-do-dai-ngo/figma/icons/song-khoe-cbx.svg',
      },
      {
        title: 'Ẩm thực — GSF F&B',
        desc: 'Ưu đãi tại chuỗi nhà hàng xanh sạch GSF',
        iconSrc: '/life-at-ipag/che-do-dai-ngo/figma/icons/song-khoe-gsf.svg',
      },
      {
        title: 'Flexible working',
        desc: 'Kết quả là thước đo — không phải số giờ ngồi tại bàn.',
        iconSrc: '/life-at-ipag/che-do-dai-ngo/figma/icons/song-khoe-flexible.svg',
      },
    ],
  },
  {
    key: 'song-giau',
    heading: 'SỐNG GIÀU',
    tag: 'Sống giàu - Financial prosperity',
    quote:
      '"IPAG đồng hành cùng bạn kiến tạo sự thịnh vượng bền vững, đạt tới tự do tài chính để toàn tâm tập trung phát triển sự nghiệp."',
    imageSrc: '/life-at-ipag/che-do-dai-ngo/figma/song-giau.png',
    imageAlt: '',
    reverseOnDesktop: true,
    items: [
      {
        title: 'Lương cạnh tranh + Profit Sharing',
        desc: 'Thu nhập cơ bản cạnh tranh với thị trường',
        iconSrc: '/life-at-ipag/che-do-dai-ngo/figma/icons/song-giau-salary.svg',
      },
      {
        title: 'Đầu tư ưu đãi',
        desc: 'Tài khoản chứng khoán ưu đãi, tư vấn đầu tư cá nhân và quyền tiếp cận sản phẩm tài chính đặc quyền từ VNDirect',
        iconSrc: '/life-at-ipag/che-do-dai-ngo/figma/icons/song-giau-invest.svg',
      },
      {
        title: 'Quản lý tài sản',
        desc: 'PAG đồng đóng góp cùng nhân viên vào quỹ hưu trí dài hạn',
        iconSrc: '/life-at-ipag/che-do-dai-ngo/figma/icons/song-giau-asset.svg',
      },
      {
        title: 'Quỹ tích sản hưu trí CBNV',
        desc: 'Phần thưởng đặc biệt vào các cột mốc 5/10/15/20 năm',
        iconSrc: '/life-at-ipag/che-do-dai-ngo/figma/icons/song-giau-retirement.svg',
      },
      {
        title: 'Tri ân thâm niên',
        desc: 'Phần thưởng đặc biệt vào các cột mốc 5/10/15/20 năm',
        iconSrc: '/life-at-ipag/che-do-dai-ngo/figma/icons/song-giau-seniority.svg',
      },
    ],
  },
  {
    key: 'song-an',
    heading: 'SỐNG AN',
    tag: 'Sống an - Holistic security',
    quote:
      '"IPAG cam kết bảo vệ bạn và những người bạn yêu thương qua dịch vụ chăm sóc sức khỏe toàn diện."',
    imageSrc: '/life-at-ipag/che-do-dai-ngo/figma/song-an.png',
    imageAlt: '',
    items: [
      {
        title: 'Bảo hiểm sức khỏe nâng cao',
        desc: 'Gói bảo hiểm toàn diện PTI Care bao gồm bản thân và người thân trực tiếp.',
        iconSrc: '/life-at-ipag/che-do-dai-ngo/figma/icons/song-an-pti.svg',
      },
      {
        title: 'PTICare Platform',
        desc: 'Đặt lịch khám, theo dõi hồ sơ sức khỏe và kết nối mạng lưới y tế ngay trên điện thoại',
        iconSrc: '/life-at-ipag/che-do-dai-ngo/figma/icons/song-an-platform.svg',
      },
      {
        title: 'Hỗ trợ khi khó khăn',
        desc: 'Partnership Mindset của IPAG không dừng lại ở giờ làm việc, mà còn đồng hành khi bạn hoặc gia đình gặp khủng hoảng.',
        iconSrc: '/life-at-ipag/che-do-dai-ngo/figma/icons/song-an-support.svg',
      },
    ],
  },
];
