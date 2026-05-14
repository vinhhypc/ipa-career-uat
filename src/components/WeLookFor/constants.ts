import searchHeroTextureImg from '@/assets/we-look-for/search-hero-texture.png';
import sectionStarSvg from '@/assets/we-look-for/section-star.svg';
import arrowRightSvg from '@/assets/we-look-for/arrow-right.svg';
import programsStarSvg from '@/assets/we-look-for/programs-star.svg';
import programsLineSvg from '@/assets/we-look-for/programs-line.svg';
import timeline1Svg from '@/assets/we-look-for/timeline-1.svg';
import timeline2Svg from '@/assets/we-look-for/timeline-2.svg';
import timeline3Svg from '@/assets/we-look-for/timeline-3.svg';
import ctaArrowSvg from '@/assets/we-look-for/cta-arrow.svg';
import processClickSvg from '@/assets/we-look-for/process-click.svg';
import processFilterSvg from '@/assets/we-look-for/process-filter.svg';
import processChecklistSvg from '@/assets/we-look-for/process-checklist.svg';
import processInterviewSvg from '@/assets/we-look-for/process-interview.svg';
import processBriefcaseSvg from '@/assets/we-look-for/process-briefcase.svg';
import pathwayTab1Svg from '@/assets/we-look-for/pathway-tab-1.svg';
import pathwayTab2Svg from '@/assets/we-look-for/pathway-tab-2.svg';
import pathwayTab3Png from '@/assets/we-look-for/pathway-tab-3.png';
import pathwayQuoteIconPng from '@/assets/we-look-for/pathway-quote-icon.png';

export const ASSETS = {
  searchHeroTexture: searchHeroTextureImg.src,
  sectionStar: sectionStarSvg.src,
  arrowRight: arrowRightSvg.src,
  programsStar: programsStarSvg.src,
  programsLine: programsLineSvg.src,
  timeline1: timeline1Svg.src,
  timeline2: timeline2Svg.src,
  timeline3: timeline3Svg.src,
  ctaArrow: ctaArrowSvg.src,
  processClick: processClickSvg.src,
  processFilter: processFilterSvg.src,
  processChecklist: processChecklistSvg.src,
  processInterview: processInterviewSvg.src,
  processBriefcase: processBriefcaseSvg.src,
  pathwayTab1: pathwayTab1Svg.src,
  pathwayTab2: pathwayTab2Svg.src,
  pathwayTab3: pathwayTab3Png.src,
  pathwayQuoteIcon: pathwayQuoteIconPng.src,
} as const;

export const PATHWAY_TAB_ICONS = [
  { src: ASSETS.pathwayTab1, overflow: false },
  { src: ASSETS.pathwayTab2, overflow: true },
  { src: ASSETS.pathwayTab3, overflow: false },
] as const;

export const FEATURED_JOBS = [
  {
    id: 'digital-ba-001',
    tag: 'Chuyển đổi số',
    title: 'Chuyên viên phân tích nghiệp vụ (Digital BA)',
    location: 'Hà Nội',
    type: 'Fulltime',
    bordered: true,
    hotSize: 'sm' as const,
  },
  {
    id: 'sde-002',
    tag: 'Chuyển đổi số',
    title: 'Kỹ sư phát triển phần mềm (Software Development Engineer)',
    location: 'Hà Nội',
    type: 'Fulltime',
    bordered: false,
    hotSize: 'sm' as const,
  },
  {
    id: 'it-qm-003',
    tag: 'Chuyển đổi số',
    title: 'Chuyên viên cao cấp IT Quality Management',
    location: 'Hà Nội',
    type: 'Fulltime',
    bordered: false,
    hotSize: 'sm' as const,
  },
  {
    id: 'csa-004',
    tag: 'Tiêu dùng xanh',
    title: 'Chuyên Viên Tư Vấn Khách Hàng (CSA)',
    location: 'Hà Nội',
    type: 'Fulltime',
    bordered: false,
    hotSize: 'lg' as const,
  },
];

export const PATHWAYS = [
  {
    pathway: 'Pathway 01',
    name: 'MA Program',
    lines: ['Fresh - 2 năm', '24 tháng'],
    kicker: 'Pathways to Greatness · Pathway 01',
    titleAccentFirst: false,
    titleWhite: 'LỘ TRÌNH CHO',
    titleAccent: ' LÃNH ĐẠO TẬP SỰ',
    description: [
      'Chương trình đào tạo quản trị viên tập sự dành cho những tài năng trẻ xuất sắc, sẵn sàng bứt phá để trở thành những nhà,lãnh đạo tương lai của IPAG.',
    ],
    quote: `"IPAG doesn't just hire. We co-build your future"`,
    steps: [
      {
        title: 'Foundation Immersion',
        body: 'Lộ trình 24 tháng luân chuyển qua các phòng ban cốt lõi',
        icon: ASSETS.timeline1,
      },
      {
        title: 'Mentorship & Strategy',
        body: 'Được dẫn dắt trực tiếp bởi các C-level và chuyên gia đầu ngành',
        icon: ASSETS.timeline2,
      },
      {
        title: 'Impact Leadership',
        body: 'Tham gia vào các dự án chiến lược thực tế của hệ sinh thái',
        icon: ASSETS.timeline3,
      },
    ],
  },
  {
    pathway: 'Pathway 02',
    name: 'Professional Force',
    lines: ['Specialist 3-7 năm', 'Domain sâu'],
    kicker: 'Pathways to Greatness · Pathway 02',
    titleAccentFirst: true,
    titleWhite: ' CHUYÊN MÔN',
    titleAccent: 'LÀM CHỦ',
    description: [
      'Nơi những chuyên gia chuyên sâu trong từng lĩnh vực (Tài chính, Công nghệ, Nhân sự...) hội tụ để cùng xây dựng nền tảng vững chắc cho hệ sinh thái.',
    ],
    quote: `"IPAG doesn't just hire. We co-build your future"`,
    steps: [
      {
        title: 'Deep Domain Development',
        body: 'Phát triển chuyên môn sâu rộng trong môi trường đa ngành',
        icon: ASSETS.timeline1,
      },
      {
        title: 'Modern Governance Mastery',
        body: 'Làm chủ các công nghệ và quy trình quản trị hiện đại',
        icon: ASSETS.timeline2,
      },
      {
        title: 'Cross-functional Synergy',
        body: 'Cộng hưởng sức mạnh cùng các đội ngũ đa chức năng',
        icon: ASSETS.timeline3,
      },
    ],
  },
  {
    pathway: 'Pathway 03',
    name: 'Executive Serve',
    lines: ['Senior 8+ năm', 'C level path'],
    kicker: 'Pathways to Greatness · Pathway 03',
    titleAccentFirst: false,
    titleWhite: 'DẪN DẮT NHỮNG ',
    titleAccent: 'THAY ĐỔI CHIẾN LƯỢC',
    description: [
      'Dành cho những chuyên gia dày dặn kinh nghiệm, những người muốn kiến tạo giá trị thực chất và dẫn dắt sự thay đổi ở quy mô hệ thống.',
    ],
    quote: `"IPAG doesn't just hire. We co-build your future"`,
    steps: [
      {
        title: 'Deep Domain Development',
        body: 'Cơ hội nắm giữ các vị trí quản lý cấp cao và P&L ownership',
        icon: ASSETS.timeline1,
      },
      {
        title: 'Modern Governance Mastery',
        body: 'Môi trường làm việc tự chủ, khuyến khích tư duy entrepreneur',
        icon: ASSETS.timeline2,
      },
      {
        title: 'Cross-functional Synergy',
        body: 'Kiến tạo di sản thông qua các giải pháp quản trị bền vững',
        icon: ASSETS.timeline3,
      },
    ],
  },
] as const;

export const RECRUITMENT_STEPS = [
  {
    icon: ASSETS.processClick,
    title: 'Ứng tuyển',
    lines: ['Nộp hồ sơ trực tuyến qua hệ thống', 'tuyển dụng của IPAG.'],
    linesLg: ['Nộp hồ sơ trực tuyến qua', 'hệ thống tuyển dụng', 'của IPAG'],
    diamond: 'bg-[#fba741]',
    blur: 'bg-[#faa243]',
    n: '01',
  },
  {
    icon: ASSETS.processFilter,
    title: 'Lọc hồ sơ',
    lines: ['Đội ngũ Talent Acquisition sàng lọc và', 'phỏng vấn sơ loại..'],
    linesLg: ['Đội ngũ Talent Acquisition sàng lọc và phỏng vấn', 'sơ loại'],
    diamond: 'bg-[#ee8247]',
    blur: 'bg-[#ec8346]',
    n: '02',
  },
  {
    icon: ASSETS.processChecklist,
    title: 'Đánh giá bài test',
    lines: ['Đánh giá năng lực chuyên môn qua bài test', 'hoặc Case study'],
    linesLg: ['Đánh giá năng lực', 'chuyên môn qua bài test', 'hoặc Case study'],
    diamond: 'bg-[#2fceb3]',
    blur: 'bg-[#2fceb3]',
    n: '03',
  },
  {
    icon: ASSETS.processInterview,
    title: 'Phỏng vấn',
    lines: ['Phỏng vấn chuyên sâu cùng Hội đồng tuyển dụng và Ban lãnh đạo'],
    linesLg: ['Phỏng vấn chuyên sâu cùng Hội đồng tuyển dụng và Ban lãnh đạo'],
    diamond: 'bg-[#2fa1ce]',
    blur: 'bg-[#30a0cb]',
    n: '04',
  },
  {
    icon: ASSETS.processBriefcase,
    title: 'Mời nhận việc',
    lines: ['Nhận thư mời làm việc và bắt đầu hành trình kiến tạo tại IPAG'],
    linesLg: ['Nhận thư mời làm việc và bắt đầu hành trình kiến tạo tại IPAG'],
    diamond: 'bg-[#0d71c7]',
    blur: 'bg-[#0e71c7]',
    n: '05',
  },
] as const;
