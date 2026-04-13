'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  ChevronDown,
  GraduationCap,
  Globe,
} from 'lucide-react';

import homeBanner from '@/assets/ma-program/banner.png';
import maHeroDecor from '@/assets/ma-program/hero-decor.png';
// import maTimelineConnector from '@/assets/ma-program/timeline-connector.png';
import Breadcrumbs from '@/components/Breadcrumbs';

const PATHWAYS = [
  {
    n: 1,
    variant: 'blue' as const,
    title: 'PRODUCT MANAGER',
    description: 'Từ insight của người dùng đến sản phẩm mà thị trường cần',
  },
  {
    n: 2,
    variant: 'cream' as const,
    title: 'DIGITAL TRANSFORMATION LEAD',
    description: 'Biến công nghệ thành lời thế vận hành thực sự',
  },
  {
    n: 3,
    variant: 'cream' as const,
    title: 'BUSINESS DEVELOPMENT MANAGER',
    description: 'Xây dựng và phát triển cơ hội kinh doanh có chiều sâu',
  },
  {
    n: 4,
    variant: 'blue' as const,
    title: 'INNOVATION PROJECT MANAGER',
    description: 'Hiện thực hóa ý tưởng mới từ khái niệm đến kết quả đo được',
  },
  {
    n: 5,
    variant: 'blue' as const,
    title: 'STRATEGY & OPERATIONS MANAGER',
    description: 'Chuyển mục tiêu chiến lược thành hành động vận hành cụ thể',
  },
  {
    n: 6,
    variant: 'cream' as const,
    title: 'CUSTOMER EXPERIENCE MANAGER',
    description: 'Thiết kế hành trình khách hàng mà họ nhớ mãi',
  },
  {
    n: 7,
    variant: 'cream' as const,
    title: 'CORPORATE GOVERNANCE LEAD',
    description: 'Gìn giữ chuẩn mực để tổ chức phát triển bền vững',
  },
] satisfies ReadonlyArray<{
  n: number;
  variant: 'blue' | 'cream';
  title: string;
  description: string;
}>;

const TIMELINE = [
  {
    n: '1',
    period: 'Tháng 1-12',
    title: 'Cross -functional business immersion',
    body:
      'Rotation qua IPAC, IPAS, IPAM và các đơn vị HWG. Bạn không quan sát - bạn tham gia trực tiếp, sở hữu task thật, học từ senior leaders đang làm việc hàng ngày.',
  },
  {
    n: '2',
    period: 'Tháng 13-18',
    title: 'Digital leadership foundation',
    body:
      'Lead real digital transformation projects với data-driven thinking và agile delivery. Bạn không chỉ execute - bạn thiết kế giải pháp và chịu trách nhiệm với kết quả.',
  },
  {
    n: '3',
    period: 'Tháng 19-24',
    title: 'Leadership acceleration',
    body:
      'Strategic initiatives với mentoring cá nhân hóa. Đây là giai đoạn bạn bắt đầu hình thành phong cách lãnh đạo riêng - và nhìn thấy rõ lộ trình 3–5 năm tiếp theo.',
  },
] satisfies ReadonlyArray<{
  n: string;
  period: string;
  title: string;
  body: string;
}>;

const QUALIFICATIONS = [
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

const SELECTION_STEPS = [
  'Nộp hồ sơ',
  'Vòng portfolio',
  'Panel interview',
  'Offer',
  'Onboarding',
] as const;

function PathwayNumberRibbon({ n }: { n: number }) {
  return (
    <div
      className="pointer-events-none absolute right-0 top-0 z-10 flex h-[33px] w-12 items-start justify-center overflow-visible md:h-[45px] md:w-[65px] md:top-[-6px]"
      aria-hidden
    >
      <div
        className="flex h-[33px] w-full items-center justify-center bg-gradient-to-br from-[#ff8c42] to-[#e85d04] pb-0.5 pt-1 md:h-[45px] md:pt-1.5"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 72%, 50% 100%, 0 72%)',
        }}
      >
        <span className="font-extrabold leading-none text-[14px] text-white md:text-[20px]">{n}</span>
      </div>
    </div>
  );
}

function MaApplyButton({ className }: { className?: string }) {
  return (
    <Link
      href="/we-look-for"
      className={
        `inline-flex items-center justify-center gap-2 rounded-full font-bold text-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] transition hover:brightness-95 ${className ?? ''}`.trim()
      }
      style={{
        backgroundImage: 'linear-gradient(77.7deg, rgb(1, 58, 114) 3.48%, rgb(12, 113, 199) 83.47%)',
      }}
    >
      NỘP HỒ SƠ NGAY
      <ArrowRight className="size-5 shrink-0 text-white md:size-6" strokeWidth={2} aria-hidden />
    </Link>
  );
}

export default function MaProgram() {
  return (
    <div className="bg-white">
      <div className="border-b border-black/5 bg-white pt-[88px] lg:pt-[104px]">
        <div className="section-padding !py-5">
          <div className="section-content">
            <Breadcrumbs
              tone="surface"
              items={[{ label: 'Trang chủ', href: '/' }, { label: 'MA Program' }]}
            />
          </div>
        </div>
      </div>

      {/* 1 — Hero: mobile 753:31377 · desktop 753:29185 */}
      <section
        className="section-padding relative overflow-hidden bg-cover bg-center bg-no-repeat max-md:!py-10 md:!py-20"
        style={{ backgroundImage: `url(${homeBanner.src})` }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(100.57deg, rgba(0, 21, 45, 0.42) 6.31%, rgba(20, 81, 148, 0.30) 83.68%)',
          }}
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[#145194]/8" />

        <div className="section-content relative z-10 flex flex-col items-center gap-5 text-center md:flex-row md:items-center md:gap-5 md:text-left">
          <div className="flex min-w-0 flex-1 flex-col gap-5 md:gap-6">
            {/* Mobile title — không đổi */}
            <div className="md:hidden">
              <p className="mx-auto w-full max-w-[260px] text-[24px] font-bold uppercase leading-[40px] tracking-[2px] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                <span className="text-white">24 Months </span>
                <span className="text-[#fbc17b]">The Leadership </span>
                <span className="text-white">Accelerator</span>
              </p>
            </div>
            {/* Desktop title — Figma: 40px extrabold, leading 60px, tracking 2px */}
            <div className="hidden md:block">
              <p className="max-w-[931px] text-[40px] font-extrabold uppercase leading-[60px] tracking-[2px] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                <span className="text-white">
                  24 Months
                  <br />
                </span>
                <span className="text-[#fbc17b]">The Leadership</span>
                <span className="text-white"> </span>
                <span className="text-white">Accelerator</span>
              </p>
              <div className="mt-6 h-px w-[147px] bg-[#fbc17b]" aria-hidden />
            </div>

            <p className="w-full max-w-[883px] text-[14px] font-medium leading-[22px] text-white md:text-[20px] md:font-normal md:leading-[33px] md:tracking-[0.2px]">
              Đây không chỉ là thực tập, mà là lộ trình tăng tốc 24 tháng dành cho tài năng trẻ khao khát
              khẳng định bản thân. Bạn sẽ luân chuyển qua các vị trí then chốt, trực tiếp dấn thân vào dự án
              tái cấu trúc chiến lược (TAC Journey) để tôi luyện bản lĩnh quản lý thực chiến.
            </p>
          </div>

          <div className="relative hidden h-[441px] w-[368px] shrink-0 md:block">
            <Image
              src={maHeroDecor}
              alt=""
              fill
              className="object-cover opacity-75 mix-blend-color-dodge"
              sizes="368px"
            />
          </div>
        </div>
      </section>

      {/* 2 — Pathways: mobile 753:30810 · desktop 753:29193 */}
      <section className="section-padding max-md:!py-11 bg-gradient-to-b from-[#fef6eb] to-white to-[72%] md:!py-20">
        <div className="section-content flex flex-col gap-8 md:gap-[52px]">
          <div className="flex w-full flex-col items-center">
            <h2 className="text-center text-[20px] font-bold uppercase leading-[32px] tracking-[1px] text-[#292929] md:text-[40px] md:font-extrabold md:leading-[60px]">
              7 PATHWAYS
            </h2>
          </div>

          <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-x-5 md:gap-y-6">
            {PATHWAYS.map((p) => {
              const isBlue = p.variant === 'blue';
              return (
                <div
                  key={p.n}
                  className="relative overflow-visible rounded-[28px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.12)] md:rounded-[32px]"
                >
                  <PathwayNumberRibbon n={p.n} />
                  <div
                    className={`flex items-end gap-2 rounded-[28px] px-4 py-5 md:rounded-[32px] md:px-7 md:py-8 ${
                      isBlue
                        ? 'bg-gradient-to-br from-[#3192e3] to-[#01386f] text-white'
                        : 'bg-gradient-to-br from-[#ffe4c4] to-[#fbbf76] text-[#292929]'
                    }`}
                  >
                    <div className="flex min-w-0 flex-1 flex-col gap-2 md:gap-2">
                      <p className="text-[16px] font-bold leading-[24px] md:text-[24px] md:leading-[32px]">
                        {p.title}
                      </p>
                      <div
                        className={`text-[14px] font-medium leading-[20px] md:text-[18px] md:leading-[26px] ${
                          isBlue ? 'text-white' : 'text-[#474747]'
                        }`}
                      >
                        {p.description}
                      </div>
                    </div>
                    <div
                      className={`relative z-20 flex size-6 shrink-0 items-center justify-center rounded-full border p-1 md:size-7 ${
                        isBlue
                          ? 'border-white bg-[#06427c]'
                          : 'border-[#707070] bg-[#fff1df]'
                      }`}
                      aria-hidden
                    >
                      <ChevronDown
                        className={`size-5 md:size-7 ${isBlue ? 'text-white' : 'text-[#474747]'}`}
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                </div>
              );
            })}

            <div
              className="flex w-full flex-col items-center gap-4 rounded-[28px] px-7 py-5 shadow-[0px_4px_15px_0px_rgba(0,0,0,0.15)] md:rounded-[32px] md:gap-4 md:px-7 md:py-5"
              style={{
                backgroundImage: 'linear-gradient(-84.74deg, #3192e3 18.66%, #01386f 101.28%)',
              }}
            >
              <p className="w-full text-center text-[16px] font-bold uppercase leading-[22px] tracking-[0.5px] text-white md:text-[24px] md:leading-[32px]">
                Bạn đã sẵn sàng?
              </p>
              <Link
                href="/we-look-for"
                className="flex h-9 w-full items-center justify-center rounded-full bg-gradient-to-br from-white to-[#fff1e1] px-3 py-2.5 text-[14px] font-bold leading-[1.4] text-[#070707] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] md:h-10 md:w-[220px] md:text-[16px]"
              >
                <span className="md:hidden">NỘP HỒ SƠ NGAY</span>
                <span className="hidden md:inline">Nộp hồ sơ ngay</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — Timeline: mobile 753:30916 · desktop 753:29302 */}
      <section className="section-padding max-md:!py-11 bg-white md:!pb-14 md:!pt-20">
        <div className="section-content flex flex-col gap-8 md:gap-[52px]">
          <div className="flex w-full flex-col items-center gap-2 text-center md:gap-2">
            <p className="w-full text-[14px] font-normal leading-[22px] text-[#707070] md:leading-[32px]">
              THE JOURNEY
            </p>
            <h2 className="text-[20px] font-bold uppercase leading-[26px] text-[#292929] md:text-[40px] md:leading-[48px] md:tracking-[1px]">
              Timeline 24 tháng
            </h2>
          </div>

          <div className="relative flex flex-col gap-6 rounded-[20px] md:flex-row md:gap-5">
            {/* <div
              className="pointer-events-none absolute left-1/2 top-[30px] z-0 hidden w-[964px] max-w-[calc(100%-2rem)] -translate-x-1/2 md:block"
              aria-hidden
            >
              <Image
                src={maTimelineConnector}
                alt=""
                width={964}
                height={4}
                className="h-auto w-full opacity-90"
              />
            </div> */}

            {TIMELINE.map((item) => (
              <div
                key={item.n}
                className="relative z-[1] flex flex-col items-center gap-4 md:flex-1 md:gap-7"
              >
                <div className="relative flex size-10 items-center justify-center rounded-bl-[12px] rounded-br-[4px] rounded-tl-[4px] rounded-tr-[12px] bg-gradient-to-b from-[#3192e3] to-[#01386f] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] md:size-[60px]">
                  <span className="text-[18px] font-extrabold leading-[32px] text-white md:text-[24px]">
                    {item.n}
                  </span>
                </div>
                <div className="flex w-full flex-col items-center gap-1 text-center md:gap-1">
                  <p className="text-[14px] font-semibold leading-[1.48] tracking-[0.14px] text-[#00377c] md:text-[18px] md:tracking-[0.18px]">
                    {item.period}
                  </p>
                  <div className="flex w-full flex-col gap-2 md:gap-4">
                    <p className="text-[16px] font-bold leading-[22px] text-[#292929] md:text-[24px] md:leading-[32px]">
                      {item.title}
                    </p>
                    <div className="text-[14px] font-normal leading-[20px] text-[#474747] md:text-[16px] md:leading-[22px]">
                      {item.body}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Qualifications: mobile 753:30951 · desktop 753:29339 */}
      <section
        className="section-padding max-md:!py-7 md:!py-20"
        style={{
          backgroundImage:
            'linear-gradient(160.3deg, rgba(170, 231, 255, 0.15) 4.3%, rgba(0, 116, 162, 0.15) 93.43%)',
        }}
      >
        <div className="section-content flex flex-col gap-8">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[minmax(0,1fr)_521px] md:gap-x-[100px] md:gap-y-0">
            <div className="flex flex-col gap-8 md:gap-[52px]">
              <div className="flex w-full flex-col items-center gap-2 text-center md:items-start md:gap-2 md:text-left">
                <p className="w-full text-[14px] font-normal leading-[22px] text-[#707070] md:leading-[32px]">
                  QUALIFICATIONS
                </p>
                <h2 className="text-[20px] font-bold uppercase leading-[26px] text-[#292929] md:text-[40px] md:leading-[1.4] md:tracking-[0.4px]">
                  YÊU CẦU CHUNG
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-5 md:gap-y-10">
                {QUALIFICATIONS.map((q) => {
                  const Icon = q.icon;
                  return (
                    <div key={q.label} className="flex flex-col gap-1 md:gap-2">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm md:size-12 md:p-3">
                          <Icon
                            className={`size-[18px] md:size-6 ${q.iconClass}`}
                            strokeWidth={2}
                            aria-hidden
                          />
                        </div>
                        <div className="flex flex-col gap-0.5 md:gap-1">
                          <p className="text-[10px] font-medium uppercase leading-[14px] text-[#707070] md:text-[14px] md:leading-[22px]">
                            {q.label}
                          </p>
                          <p className="text-[16px] font-bold leading-[22px] text-[#292929] md:text-[18px] md:leading-[28px]">
                            {q.value}
                          </p>
                        </div>
                      </div>
                      <div className="text-[14px] font-normal leading-[22px] text-[#474747] md:text-[16px] md:leading-[22px] md:whitespace-nowrap">
                        {q.detail}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="hidden md:block">
                <MaApplyButton className="h-[52px] w-[276px] px-3 text-[18px] leading-[1.4]" />
              </div>
            </div>

            <div className="rounded-[20px] bg-white px-4 py-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] md:w-[521px] md:max-w-full md:rounded-[32px] md:px-10 md:py-8">
              <div className="flex flex-col gap-4 md:flex-row md:gap-7">
                <div
                  className="relative hidden w-0 shrink-0 md:block md:min-h-[320px] md:w-2 md:self-stretch"
                  aria-hidden
                >
                  <div className="absolute bottom-8 left-[5px] top-8 border-l-2 border-dashed border-[#cacaca] opacity-70" />
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-4 md:gap-6">
                  <h3 className="text-[18px] font-bold leading-[24px] tracking-[0.18px] text-[#292929] md:text-[24px] md:leading-[33px] md:tracking-[0.24px]">
                    Quy trình tuyển chọn
                  </h3>
                  <div className="flex flex-col gap-3">
                    {SELECTION_STEPS.map((label, i) => (
                      <div
                        key={label}
                        className={`flex items-center gap-2 rounded-xl border border-[rgba(123,193,255,0.6)] bg-[rgba(202,230,255,0.18)] px-[13px] py-[5px] backdrop-blur-[12px] md:w-full md:max-w-[400px] md:rounded-[20px] md:px-[17px] md:py-[9px] ${
                          i === 0 ? 'md:gap-4' : ''
                        }`}
                      >
                        <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#d9e6f2] md:size-10">
                          <span className="text-[16px] font-bold leading-[24px] text-[#002b5b]">
                            {i + 1}
                          </span>
                        </div>
                        <p className="text-[14px] font-semibold leading-7 text-[#474747] md:text-[18px] md:leading-[28px]">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:hidden">
            <MaApplyButton className="h-9 min-w-[208px] px-3 py-2.5 text-[14px] leading-[1.4]" />
          </div>
        </div>
      </section>
    </div>
  );
}

