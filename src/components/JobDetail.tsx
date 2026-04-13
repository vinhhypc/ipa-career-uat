import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  Check,
  Clock3,
  DollarSign,
  GraduationCap,
  LaptopMinimalCheck,
  MapPin,
  Rocket,
  Route,
  ShieldCheck,
  Star,
  TrendingUp,
  Umbrella,
  Wallet,
  Sparkles,
} from 'lucide-react';
import type { ComponentType, ReactNode } from 'react';
import Breadcrumbs from './Breadcrumbs';

type DetailSection = {
  title: string;
  items: string[];
};

type ListSection = {
  title: string;
  items: string[];
};

type RelatedJob = {
  tag: string;
  title: string;
  location: string;
  type: string;
  highlighted?: boolean;
};

const DETAIL_SECTIONS: DetailSection[] = [
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

const REQUIREMENTS: ListSection[] = [
  {
    title: 'Học vấn & Chứng chỉ',
    items: ['Đại học: CNTT, kinh tế, hệ thống thông tin', 'Chứng chỉ CBAP là lợi thế'],
  },
  {
    title: 'Kinh nghiệm',
    items: ['3-5 năm BA, ưu tiên FinTech/chuyển đổi số', 'Kinh nghiệm AI/ML, tích hợp API là lợi thế'],
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

const OPPORTUNITIES = [
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

const BENEFITS = [
  { label: 'Bảo hiểm', icon: ShieldCheck },
  { label: 'Du lịch', icon: MapPin },
  { label: 'Thưởng', icon: DollarSign },
  { label: 'Chăm sóc sức khỏe', icon: ShieldCheck },
  { label: 'Đào tạo', icon: GraduationCap },
  { label: 'Tăng lương', icon: TrendingUp },
  { label: 'Nghỉ phép', icon: Umbrella },
] as const;

const RELATED_JOBS: RelatedJob[] = [
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

function InfoCard({
  icon: Icon,
  label,
  value,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="rounded-full bg-[#d9e6f2] p-2.5">
        <Icon className="size-5 text-[#002b5b]" />
      </div>
      <div className="space-y-1">
        <p className="text-[13px] leading-[20px] text-[#474747] lg:text-[16px] lg:leading-[22px]">{label}</p>
        <p className="text-[15px] leading-[24px] font-bold text-[#292929] lg:text-[18px] lg:leading-[28px]">{value}</p>
      </div>
    </div>
  );
}

function DetailCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-[20px] bg-white px-4 py-5 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)] lg:rounded-[32px] lg:px-10 lg:py-8">
      <div className="mb-4 border-b border-black/10 pb-3 lg:mb-5 lg:pb-4">
        <h2 className="text-[20px] leading-[30px] font-extrabold tracking-[0.5px] text-[#292929] lg:text-[24px] lg:leading-[38px]">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

export default function JobDetail({ id }: { id: string }) {
  return (
    <div className="bg-white">
      <div className="border-b border-black/5 bg-white pt-[88px] lg:pt-[104px]">
        <div className="section-padding py-5!">
          <div className="section-content">
            <Breadcrumbs
              tone="surface"
              items={[{ label: 'Professional force', href: '/' }, { label: 'Chi tiết vị trí' }]}
            />
          </div>
        </div>
      </div>

      <section
        className="section-padding relative overflow-hidden py-8! lg:py-12!"
        data-job-id={id}
        style={{
          backgroundImage: 'linear-gradient(-15.98deg, rgb(255,255,255) 15.576%, rgb(254,246,235) 119.97%)',
        }}
      >
        <div className="pointer-events-none absolute -right-20 top-0 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(13,63,119,0.08)_0%,rgba(255,255,255,0)_72%)] lg:-right-28 lg:h-[520px] lg:w-[520px]" />
        <div className="section-content relative">
          <div className="mb-5 inline-flex rounded bg-[#d9e6f2] px-2 py-1 text-[10px] font-semibold leading-[1.4] text-[#707070] lg:mb-4 lg:text-[12px]">
            Chuyển đổi số
          </div>

          <h1 className="text-[28px] leading-[38px] font-bold tracking-[0.5px] text-[#292929] lg:text-[40px] lg:leading-[48px] lg:tracking-[1px]">
            Chuyên Viên Phân Tích Nghiệp Vụ (Digital BA)
          </h1>

          <div className="mt-3 flex flex-col gap-1.5 text-[14px] leading-[22px] text-[#474747] lg:mt-2 lg:flex-row lg:items-center lg:gap-4 lg:text-[16px] lg:leading-[26px]">
            <div className="flex items-center gap-1">
              <BriefcaseBusiness className="size-[18px] text-[#707070] lg:size-5" />
              <p>
                <span className="font-semibold">Đơn vị:</span> IPAS - IPAG Group
              </p>
            </div>
            <span className="hidden size-1 rounded-full bg-black/25 lg:block" />
            <div className="flex items-center gap-1">
              <MapPin className="size-[18px] text-[#707070] lg:size-5" />
              <p>
                <span className="font-semibold">Địa điểm:</span> Hà Nội (Cầu Giấy)
              </p>
            </div>
            <span className="hidden size-1 rounded-full bg-black/25 lg:block" />
            <div className="flex items-center gap-1">
              <Clock3 className="size-[18px] text-[#707070] lg:size-5" />
              <p>
                <span className="font-semibold">Hạn chót:</span> 30/04/2026
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-5 lg:mt-7 lg:grid-cols-[minmax(0,953px)_minmax(0,1fr)] lg:gap-5">
            <div className="space-y-6">
              <DetailCard title="Chi tiết vai trò & Trách nhiệm">
                <p className="text-[14px] leading-[24px] text-[#474747] lg:text-[18px] lg:leading-[28px]">
                  IPAS là trụ cột Công nghệ & Nền tảng của hệ sinh thái IPAG - dẫn dắt chuyển đổi số và xây dựng sản
                  phẩm số cho toàn hệ sinh thái: AnVie, VNDGo, PTICare.
                </p>
                <div className="mt-5 space-y-6 lg:space-y-8">
                  {DETAIL_SECTIONS.map((section, index) => (
                    <div key={section.title} className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="flex size-8 items-center justify-center rounded-full bg-[#d9e6f2] text-[14px] font-bold text-[#002b5b] lg:size-10 lg:text-[16px]">
                          {index + 1}
                        </div>
                        <h3 className="text-[16px] leading-[24px] font-bold text-[#292929] lg:text-[18px] lg:leading-[28px]">
                          {section.title}
                        </h3>
                      </div>
                      <ul className="space-y-1.5 pl-6 text-[14px] leading-[24px] text-[#474747] lg:text-[16px] lg:leading-[28px]">
                        {section.items.map((item) => (
                          <li key={item} className="list-disc">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </DetailCard>

              <DetailCard title="Yêu cầu">
                <div className="space-y-6 lg:space-y-8">
                  {REQUIREMENTS.map((section) => (
                    <div key={section.title}>
                      <h3 className="text-[16px] leading-[24px] font-bold text-[#292929] lg:text-[18px] lg:leading-[28px]">
                        {section.title}
                      </h3>
                      <ul className="mt-1.5 space-y-1 pl-0 text-[14px] leading-[24px] text-[#474747] lg:text-[16px] lg:leading-[28px]">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <Check className="mt-1 size-4 shrink-0 text-[#0d5ba8]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </DetailCard>

              <DetailCard title="Cơ hội">
                <div className="space-y-5 lg:space-y-8">
                  {OPPORTUNITIES.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex items-start gap-3">
                        <div className={`rounded-full p-3 ${item.tone}`}>
                          <Icon className="size-5 text-[#002b5b]" />
                        </div>
                        <div>
                          <h3 className="text-[16px] leading-[24px] font-bold text-[#292929] lg:text-[18px] lg:leading-[28px]">
                            {item.title}
                          </h3>
                          <p className="text-[14px] leading-[22px] text-[#474747] lg:text-[16px] lg:leading-[22px]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </DetailCard>
            </div>

            <aside className="space-y-[23px]">
              <div
                className="rounded-[20px] px-5 py-6 text-center shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)] lg:rounded-[32px] lg:px-10 lg:py-8"
                style={{
                  backgroundImage: 'linear-gradient(177.48deg, rgb(36,128,204) 5.171%, rgb(1,57,112) 107.5%)',
                }}
              >
                <h2 className="text-[22px] leading-[34px] font-extrabold tracking-[0.5px] text-white lg:text-[24px] lg:leading-[38px] lg:tracking-[1px]">
                  Bạn phù hợp với vị trí này?
                </h2>
                <button
                  type="button"
                  className="mx-auto mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-white px-3 text-[15px] leading-[21px] font-bold text-[#474747] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] lg:mt-6 lg:h-[52px] lg:w-[276px] lg:text-[18px] lg:leading-[25px]"
                >
                  ỨNG TUYỂN NGAY
                  <ArrowRight className="size-5" />
                </button>
              </div>

              <section className="rounded-[20px] bg-white px-5 py-6 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)] lg:rounded-[32px] lg:px-10 lg:py-8">
                <h2 className="text-[20px] leading-[28px] font-bold text-[#292929] lg:text-[24px] lg:leading-[28px]">Thông tin</h2>
                <div className="my-4 border-b border-black/10 lg:my-4" />

                <div className="space-y-4 lg:space-y-5">
                  <InfoCard icon={Award} label="Cấp bậc" value="Nhân viên" />
                  <InfoCard icon={Star} label="Kinh nghiệm" value="3-5 năm" />
                  <InfoCard icon={DollarSign} label="Mức lương" value="Thoả thuận" />
                  <InfoCard
                    icon={BriefcaseBusiness}
                    label="Ngành nghề"
                    value="CNTT - Phần mềm, Tài chính / Đầu tư, Chuyển đổi số"
                  />
                </div>

                <div className="my-4 border-b border-black/10 lg:my-4" />
                <h3 className="text-[16px] leading-[24px] font-bold text-[#292929] lg:text-[18px] lg:leading-[28px]">Phúc lợi</h3>
                <div className="mt-3 flex flex-wrap gap-2 lg:mt-4 lg:gap-3">
                  {BENEFITS.map((benefit) => {
                    const Icon = benefit.icon;
                    return (
                      <div
                        key={benefit.label}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-[#f0f0f0] px-2.5 py-1 text-[13px] leading-[20px] font-medium text-[#474747] lg:px-3 lg:text-[16px] lg:leading-[28px]"
                      >
                        <Icon className="size-4 lg:size-5" />
                        {benefit.label}
                      </div>
                    );
                  })}
                </div>
              </section>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#fcfcfc] py-10! lg:py-20!">
        <div className="section-content">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 lg:gap-3">
              <Sparkles className="size-4 text-[#002b5b] lg:size-6" />
              <h2 className="text-[20px] leading-[28px] font-bold uppercase text-[#002b5b] lg:text-[30px] lg:leading-[42px]">
                Việc làm bạn sẽ thích
              </h2>
              <span className="hidden h-px w-[60px] bg-[#0d3f77] lg:block" />
            </div>
            <a
              href="/jobs"
              className="inline-flex items-center gap-1 text-[14px] leading-[20px] font-bold text-[#002b5b] lg:text-[18px] lg:leading-[25px]"
            >
              Xem tất cả
              <ArrowRight className="size-4 lg:size-5" />
            </a>
          </div>

          <div className="mt-6 flex gap-3 overflow-x-auto pb-1 lg:mt-10 lg:grid lg:grid-cols-4 lg:gap-5 lg:overflow-visible lg:pb-0">
            {RELATED_JOBS.map((job) => (
              <article
                key={job.title}
                className={`min-w-[262px] rounded-[20px] bg-white px-4 py-5 shadow-[0px_4px_15px_0px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2f8fdf] hover:shadow-[0px_8px_20px_0px_rgba(47,143,223,0.2)] lg:min-w-0 lg:rounded-[32px] lg:px-7 lg:py-10 ${
                  job.highlighted
                    ? 'border border-[#2f8fdf] shadow-[0px_8px_20px_0px_rgba(47,143,223,0.2)]'
                    : 'border border-transparent'
                }`}
              >
                <div className="inline-flex rounded bg-[#d9e6f2] px-2 py-1 text-[10px] font-semibold leading-[1.4] text-[#707070] lg:text-[12px]">
                  {job.tag}
                </div>
                <h3 className="mt-2 text-[18px] leading-[26px] font-bold text-[#292929]">{job.title}</h3>
                <div className="mt-3 flex items-center gap-2 text-[14px] leading-[22px] text-[#474747] lg:text-[16px] lg:leading-[26px]">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="size-4 text-[#707070] lg:size-5" />
                    {job.location}
                  </span>
                  <span className="size-1 rounded-full bg-black/25" />
                  <span>{job.type}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}