import type { LucideIcon } from 'lucide-react';
import { BadgeCheck, Briefcase, GraduationCap, Globe } from 'lucide-react';

export const PATHWAYS = [
  {
    n: 1,
    variant: 'blue' as const,
    title: 'PRODUCT MANAGER',
    description: 'Từ insight của người dùng đến sản phẩm mà thị trường cần',
    keyWork: [
      'Thiết kế, launch và scale sản phẩm với impact đo được',
      'Phối hợp cross-functional: Marketing, Engineering, Analytics',
      'Học cách đưa insight thành chiến lược sản phẩm cụ thể',
    ],
    fit: 'Ngành Business/Marketing/Engineering · Tư duy phân tích · Excel, Power BI, Jira/Notion',
  },
  {
    n: 2,
    variant: 'cream' as const,
    title: 'DIGITAL TRANSFORMATION LEAD',
    description: 'Biến công nghệ thành lời thế vận hành thực sự',
    keyWork: [
      'Dẫn dắt dự án chuyển đổi số tại các đơn vị trong hệ sinh thái',
      'Kết nối công nghệ, data và con người để tạo giá trị đo được',
      'Học các frameworks: process re-engineering, automation, agile',
    ],
    fit: 'Digital platforms · Data analytics · Agile delivery · Phân tích business process',
  },
  {
    n: 3,
    variant: 'cream' as const,
    title: 'BUSINESS DEVELOPMENT MANAGER',
    description: 'Xây dựng và phát triền cơ hội kinh doanh có chiều sâu',
    keyWork: [
      'Client acquisition, partnership và commercial growth strategy',
      'Thiết kế business plan, market expansion và portfolio optimization',
      'Làm việc trực tiếp với các đơn vị trong hệ sinh thái HWG',
    ],
    fit: 'Communication & negotiation · Financial data analysis · Entrepreneurial mindset',
  },
  {
    n: 4,
    variant: 'blue' as const,
    title: 'INNOVATION PROJECT MANAGER',
    description: 'Hiện thực hóa ý tưởng mới từ khái niệm đến kết quả đo được',
    keyWork: [
      'Quản lý innovation projects, hackathons và intrapreneurship',
      'Từ ideation → prototype → pilot testing trong hệ sinh thái thật',
      'Hợp tác với startups và innovation labs trong và ngoài IPAG',
    ],
    fit: 'Creative problem-solving · Design thinking · Agile / Lean · Curious & experimental mindset',
  },
  {
    n: 5,
    variant: 'blue' as const,
    title: 'STRATEGY & OPERATIONS MANAGER',
    description: 'Chuyển mục tiêu chiến lược thành hành động vận hành cụ thể',
    keyWork: [
      'Tiếp xúc corporate strategy, performance management và operational excellence',
      'Xây dựng data-driven frameworks để tối ưu KPIs đa phòng ban',
      'Thiết kế business plans và theo dõi hiệu suất vận hành',
    ],
    fit: 'Tư duy định lượng · Organizational structures · Excel, Power BI',
  },
  {
    n: 6,
    variant: 'cream' as const,
    title: 'CUSTOMER EXPERIENCE MANAGER',
    description: 'Thiết kế hành trình khách hàng mà họ nhớ mãi',
    keyWork: [
      'Customer journeys trên cả kênh digital và trực tiếp',
      'Customer insights, behavioral analytics và service design',
      'Cải thiện NPS và loyalty cho các thương hiệu trong HWG',
    ],
    fit: 'Empathy-driven mindset · Data interpretation · CX tools / analytics dashboards',
  },
  {
    n: 7,
    variant: 'cream' as const,
    title: 'CORPORATE GOVERNANCE LEAD',
    description: 'Gìn giữ chuẩn mực để tổ chức phát triển bền vững',
    keyWork: [
      'Hỗ trợ Board of Directors và hoạt động quản trị doanh nghiệp',
      'Tuân thủ pháp lý, kiểm soát nội bộ và governance frameworks',
      'Phối hợp các dự án quản trị cross-functional trong tập đoàn',
    ],
    fit: 'Ngành Law/Business/Finance · Governance & compliance · High integrity',
  },
] satisfies ReadonlyArray<{
  n: number;
  variant: 'blue' | 'cream';
  title: string;
  description: string;
  keyWork: ReadonlyArray<string>;
  fit: string;
}>;

export const TIMELINE = [
  {
    n: '1',
    period: 'Tháng 1-12',
    title: 'Cross -functional business immersion',
    body: 'Rotation qua IPAC, IPAS, IPAM và các đơn vị HWG. Bạn không quan sát - bạn tham gia trực tiếp, sở hữu task thật, học từ senior leaders đang làm việc hàng ngày.',
  },
  {
    n: '2',
    period: 'Tháng 13-18',
    title: 'Digital leadership foundation',
    body: 'Lead real digital transformation projects với data-driven thinking và agile delivery. Bạn không chỉ execute - bạn thiết kế giải pháp và chịu trách nhiệm với kết quả.',
  },
  {
    n: '3',
    period: 'Tháng 19-24',
    title: 'Leadership acceleration',
    body: 'Strategic initiatives với mentoring cá nhân hóa. Đây là giai đoạn bạn bắt đầu hình thành phong cách lãnh đạo riêng - và nhìn thấy rõ lộ trình 3–5 năm tiếp theo.',
  },
] satisfies ReadonlyArray<{
  n: string;
  period: string;
  title: string;
  body: string;
}>;

export const QUALIFICATIONS = [
  {
    label: 'Học vấn',
    value: 'GPA ≥ 3.2/4.0',
    detail: 'Tốt nghiệp đại học uy tín trong 2 năm gần nhất',
    icon: GraduationCap,
    iconClass: 'text-[#e85d04]',
  },
  {
    label: 'Tiếng anh',
    value: 'IELTS 7.0+',
    detail: 'Hoặc tương đương TOEFL iBT 95+ / TOEIC 850+',
    icon: Globe,
    iconClass: 'text-[#01386f]',
  },
  {
    label: 'kinh nghiệm',
    value: '< 2 năm',
    detail: 'Kể cả internship và project experience',
    icon: BadgeCheck,
    iconClass: 'text-[#01386f]',
  },
  {
    label: 'lãnh đạo',
    value: 'Có năng lực dẫn dắt',
    detail: 'Tổ chức sinh viên, dự án cộng đồng - có kết quả cụ thể',
    icon: Briefcase,
    iconClass: 'text-[#e85d04]',
  },
] satisfies ReadonlyArray<{
  label: string;
  value: string;
  detail: string;
  icon: LucideIcon;
  iconClass: string;
}>;

export const SELECTION_STEPS = [
  'Nộp hồ sơ',
  'Vòng portfolio',
  'Panel interview',
  'Offer',
  'Onboarding',
] as const;
