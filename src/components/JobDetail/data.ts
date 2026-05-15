import {
  DollarSign,
  GraduationCap,
  LaptopMinimalCheck,
  MapPin,
  Rocket,
  Route,
  ShieldCheck,
  TrendingUp,
  Umbrella,
  Wallet,
} from 'lucide-react';
import type { DetailSection, ListSection, RelatedJob } from './types';

export const DETAIL_SECTIONS: DetailSection[] = [
  {
    title: 'Phân tích & Tư vấn Nghiệp vụ',
    items: [
      'Phân tích hiện trạng và đề xuất cải tiến quy trình nghiệp vụ trên các nền tảng số của IPAS',
      'Xây dựng business case, đánh giá tính khả thi và tác động chuyển đổi của từng sáng kiến kỹ thuật số',
      'Tư vấn giải pháp tích hợp AI, automation vào quy trình vận hành hiện tại của hệ sinh thái IPAG',
      'Phối hợp với các đơn vị nghiệp vụ (AnVie, VNDGo, PTICare) để hiểu rõ yêu cầu thực tiễn',
    ],
  },
  {
    title: 'Thu thập & Quản lý Yêu cầu',
    items: [
      'Soạn thảo tài liệu đặc tả: BRD, FRD, User Stories, Use Cases đầy đủ và chuẩn xác',
      'Mô hình hóa quy trình nghiệp vụ bằng BPMN 2.0 và UML làm cơ sở thiết kế kỹ thuật',
      'Quản lý backlog yêu cầu, ưu tiên hóa theo giá trị kinh doanh, phối hợp với Product Owner',
    ],
  },
  {
    title: 'Phối hợp Phát triển & Kiểm thử',
    items: [
      'Làm cầu nối giữa đội nghiệp vụ và kỹ thuật trong toàn bộ vòng đời phát triển sản phẩm (SDLC)',
      'Tham gia sprint planning, refinement và review trong quy trình Agile/Scrum',
      'Soạn thảo test case nghiệp vụ và tham gia UAT để đảm bảo sản phẩm đúng yêu cầu',
    ],
  },
  {
    title: 'Phân tích Dữ liệu & Báo cáo',
    items: [
      'Khai thác và phân tích dữ liệu vận hành bằng SQL, Power BI hoặc Tableau',
      'Xây dựng và duy trì dashboard theo dõi KPI nghiệp vụ theo yêu cầu từng đơn vị',
    ],
  },
];

export const REQUIREMENTS: ListSection[] = [
  {
    title: 'Học vấn & Chứng chỉ',
    items: ['Đại học: CNTT, kinh tế, hệ thống thông tin', 'Chứng chỉ CBAP là lợi thế'],
  },
  {
    title: 'Kinh nghiệm',
    items: [
      '3-5 năm BA, ưu tiên FinTech/chuyển đổi số',
      'Kinh nghiệm AI/ML, tích hợp API là lợi thế',
    ],
  },
  {
    title: 'Kỹ năng chuyên môn',
    items: [
      'RD/FRD/User Stories chuẩn quốc tế · BPMN 2.0, UML, Lucidchart',
      'SQL trung-cao · Power BI / Tableau / Looker Studio',
      'AI tools (ChatGPT, Copilot)',
    ],
  },
  {
    title: 'Tố chất & Văn hoá IPAG',
    items: [
      'Tư duy hệ thống · Giao tiếp đa nhóm kỹ thuật-nghiệp vụ',
      'Chủ động, chi tiết, cam kết tiến độ',
      'IPAG Gene: Integration - Partnership - Accountability - Greatness',
    ],
  },
];

export const OPPORTUNITIES = [
  {
    title: 'Dự án tầm vóc',
    description: 'Chuyển đổi số quy mô lớn, ứng dụng AI thực tiễn trên hệ sinh thái IPAG đa ngành',
    icon: Rocket,
    tone: 'bg-[#d9e6f2]',
  },
  {
    title: 'Được đầu tư',
    description: 'Đào tạo BA nâng cao, chứng chỉ quốc tế và Agile/Scrum do IPAS tài trợ',
    icon: Wallet,
    tone: 'bg-[#ffeeda]',
  },
  {
    title: 'Lộ trình rõ',
    description: 'BA -> Senior BA -> Product Owner / BA Lead trong 18-24 tháng',
    icon: Route,
    tone: 'bg-[#d9e6f2]',
  },
  {
    title: 'Môi trường kỹ thuật',
    description: 'Chuyển đổi số quy mô lớn, ứng dụng AI thực tiễn trên hệ sinh thái IPAG đa ngành',
    icon: LaptopMinimalCheck,
    tone: 'bg-[#ffeeda]',
  },
] as const;

export const BENEFITS = [
  { label: 'Bảo hiểm', icon: ShieldCheck },
  { label: 'Du lịch', icon: MapPin },
  { label: 'Thưởng', icon: DollarSign },
  { label: 'Chăm sóc sức khỏe', icon: ShieldCheck },
  { label: 'Đào tạo', icon: GraduationCap },
  { label: 'Tăng lương', icon: TrendingUp },
  { label: 'Nghỉ phép', icon: Umbrella },
] as const;

export const RELATED_JOBS: RelatedJob[] = [
  {
    tag: 'Chuyển đổi số',
    title: 'Chuyên viên phân tích nghiệp vụ (Digital BA)',
    location: 'Hà Nội',
    type: 'Fulltime',
    highlighted: true,
  },
  {
    tag: 'Chuyển đổi số',
    title: 'Kỹ sư phát triển phần mềm (Software Development Engineer)',
    location: 'Hà Nội',
    type: 'Fulltime',
  },
  {
    tag: 'Chuyển đổi số',
    title: 'Chuyên viên cao cấp IT Quality Management',
    location: 'Hà Nội',
    type: 'Fulltime',
  },
  {
    tag: 'Tiêu dùng xanh',
    title: 'Chuyên Viên Tư Vấn Khách Hàng (CSA)',
    location: 'Hà Nội',
    type: 'Fulltime',
  },
];
