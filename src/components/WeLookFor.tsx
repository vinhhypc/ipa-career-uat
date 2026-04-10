'use client';

import Link from 'next/link';
import { ChevronDown, MapPin, Search } from 'lucide-react';
import { useState } from 'react';

import Breadcrumbs from '@/components/Breadcrumbs';

import searchHeroTextureImg from '@/assets/we-look-for/search-hero-texture.png';
import sectionStarSvg from '@/assets/we-look-for/section-star.svg';
import arrowRightSvg from '@/assets/we-look-for/arrow-right.svg';
import programsStarSvg from '@/assets/we-look-for/programs-star.svg';
import programsLineSvg from '@/assets/we-look-for/programs-line.svg';
import togaHatImg from '@/assets/we-look-for/toga-hat.png';
import timeline1Svg from '@/assets/we-look-for/timeline-1.svg';
import timeline2Svg from '@/assets/we-look-for/timeline-2.svg';
import timeline3Svg from '@/assets/we-look-for/timeline-3.svg';
import ctaArrowSvg from '@/assets/we-look-for/cta-arrow.svg';
import processClickSvg from '@/assets/we-look-for/process-click.svg';
import processFilterSvg from '@/assets/we-look-for/process-filter.svg';
import processChecklistSvg from '@/assets/we-look-for/process-checklist.svg';
import processInterviewSvg from '@/assets/we-look-for/process-interview.svg';
import processBriefcaseSvg from '@/assets/we-look-for/process-briefcase.svg';

const ASSETS = {
  searchHeroTexture: searchHeroTextureImg.src,
  sectionStar: sectionStarSvg.src,
  arrowRight: arrowRightSvg.src,
  programsStar: programsStarSvg.src,
  programsLine: programsLineSvg.src,
  togaHat: togaHatImg.src,
  timeline1: timeline1Svg.src,
  timeline2: timeline2Svg.src,
  timeline3: timeline3Svg.src,
  ctaArrow: ctaArrowSvg.src,
  processClick: processClickSvg.src,
  processFilter: processFilterSvg.src,
  processChecklist: processChecklistSvg.src,
  processInterview: processInterviewSvg.src,
  processBriefcase: processBriefcaseSvg.src,
} as const;

const FEATURED_JOBS = [
  {
    tag: 'Chuyển đổi số',
    title: 'Chuyên viên phân tích nghiệp vụ (Digital BA)',
    location: 'Hà Nội',
    type: 'Fulltime',
    bordered: true,
    hotSize: 'sm' as const,
  },
  {
    tag: 'Chuyển đổi số',
    title: 'Kỹ sư phát triển phần mềm (Software Development Engineer)',
    location: 'Hà Nội',
    type: 'Fulltime',
    bordered: false,
    hotSize: 'sm' as const,
  },
  {
    tag: 'Chuyển đổi số',
    title: 'Chuyên viên cao cấp IT Quality Management',
    location: 'Hà Nội',
    type: 'Fulltime',
    bordered: false,
    hotSize: 'sm' as const,
  },
  {
    tag: 'Tiêu dùng xanh',
    title: 'Chuyên Viên Tư Vấn Khách Hàng (CSA)',
    location: 'Hà Nội',
    type: 'Fulltime',
    bordered: false,
    hotSize: 'lg' as const,
  },
];

const PATHWAYS = [
  {
    pathway: 'Pathway 01',
    name: 'MA Program',
    lines: ['Fresh - 2 năm', '24 tháng'],
    kicker: 'Pathways to Greatness · Pathway 01',
    titleWhite: 'LỘ TRÌNH CHO',
    titleAccent: ' LÃNH ĐẠO TẬP SỰ',
    description: [
      'Chương trình đào tạo quản trị viên tập sự dành cho những tài năng trẻ xuất sắc,',
      'sẵn sàng bứt phá để trở thành những nhà',
      'lãnh đạo tương lai của IPAG.',
    ],
    quote: '“IPAG doesn\'t just hire. We co-build your future”',
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
    titleWhite: 'LỘ TRÌNH CHO',
    titleAccent: ' CHUYÊN GIA HIỆN TRƯỜNG',
    description: [
      'Dành cho các chuyên gia đã có kinh nghiệm, muốn phát triển sâu',
      'trong domain và đóng góp trực tiếp vào các đội dự án chiến lược',
      'của IPAG.',
    ],
    quote: '“Chúng tôi đầu tư vào chuyên môn — và trao quyền cho bạn dẫn dắt thay đổi.”',
    steps: [
      {
        title: 'Domain mastery',
        body: 'Chuyên sâu hóa năng lực trong lĩnh vực trọng yếu của hệ sinh thái',
        icon: ASSETS.timeline1,
      },
      {
        title: 'Cross-functional impact',
        body: 'Làm việc xuyên phòng ban trên các dự án lớn, đa stakeholder',
        icon: ASSETS.timeline2,
      },
      {
        title: 'Leadership track',
        body: 'Chuẩn bị cho vai trò lãnh đạo chuyên môn và chủ trì initiative',
        icon: ASSETS.timeline3,
      },
    ],
  },
  {
    pathway: 'Pathway 03',
    name: 'Executive Serve',
    lines: ['Senior 8+ năm', 'C level path'],
    kicker: 'Pathways to Greatness · Pathway 03',
    titleWhite: 'LỘ TRÌNH CHO',
    titleAccent: ' LÃNH ĐẠO CẤP CAO',
    description: [
      'Dành cho các nhà lãnh đạo kỳ cựu, cùng IPAG kiến tạo tầm nhìn',
      'dài hạn và lan tỏa ảnh hưởng tới toàn hệ sinh thái.',
    ],
    quote: '“Ở IPAG, kinh nghiệm của bạn được nhân lên qua quy mô và tốc độ tăng trưởng.”',
    steps: [
      {
        title: 'Strategic vision',
        body: 'Định hướng chiến lược và ưu tiên đầu tư ở cấp độ hệ sinh thái',
        icon: ASSETS.timeline1,
      },
      {
        title: 'Ecosystem influence',
        body: 'Đồng hành cùng Ban lãnh đạo trong các quyết định then chốt',
        icon: ASSETS.timeline2,
      },
      {
        title: 'Legacy building',
        body: 'Kiến tạo di sản tổ chức và năng lực lõi bền vững cho IPAG',
        icon: ASSETS.timeline3,
      },
    ],
  },
] as const;

const RECRUITMENT_STEPS = [
  {
    icon: ASSETS.processClick,
    title: 'Ứng tuyển',
    lines: ['Nộp hồ sơ trực tuyến qua hệ thống', 'tuyển dụng của IPAG.'],
    diamond: 'bg-[#fba741]',
    blur: 'bg-[#faa243]',
    n: '01',
  },
  {
    icon: ASSETS.processFilter,
    title: 'Lọc hồ sơ',
    lines: ['Đội ngũ Talent Acquisition sàng lọc và', 'phỏng vấn sơ loại..'],
    diamond: 'bg-[#ee8247]',
    blur: 'bg-[#ec8346]',
    n: '02',
  },
  {
    icon: ASSETS.processChecklist,
    title: 'Đánh giá bài test',
    lines: ['Đánh giá năng lực chuyên môn qua bài test', 'hoặc Case study'],
    diamond: 'bg-[#2fceb3]',
    blur: 'bg-[#2fceb3]',
    n: '03',
  },
  {
    icon: ASSETS.processInterview,
    title: 'Phỏng vấn',
    lines: ['Phỏng vấn chuyên sâu cùng Hội đồng tuyển dụng và Ban lãnh đạo'],
    diamond: 'bg-[#2fa1ce]',
    blur: 'bg-[#30a0cb]',
    n: '04',
  },
  {
    icon: ASSETS.processBriefcase,
    title: 'Mời nhận việc',
    lines: ['Nhận thư mời làm việc và bắt đầu hành trình kiến tạo tại IPAG'],
    diamond: 'bg-[#0d71c7]',
    blur: 'bg-[#0e71c7]',
    n: '05',
  },
] as const;

function HotRibbon({ size }: { size: 'sm' | 'lg' }) {
  const wide = size === 'lg';
  return (
    <div
      className={`pointer-events-none absolute z-10 ${wide ? 'right-2 top-0 h-[45px] w-[65px]' : 'right-3 top-0 h-[33px] w-[47px]'}`}
      aria-hidden
    >
      <div
        className="flex h-full w-full items-start justify-end bg-gradient-to-br from-[#ff8c42] to-[#e85d04] pr-1 pt-1"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 72%, 50% 100%, 0 72%)',
        }}
      >
        <span
          className={`font-extrabold uppercase text-white ${wide ? 'pt-1 text-[14px] leading-[1.4]' : 'pt-0.5 text-[10px] leading-[1.4]'}`}
        >
          HOT
        </span>
      </div>
    </div>
  );
}

function DiamondStep({
  n,
  bg,
  blur,
}: {
  n: string;
  bg: string;
  blur: string;
}) {
  return (
    <div className="relative z-10 -mt-8 flex justify-center">
      <div className="flex size-[68px] items-center justify-center">
        <div className="flex rotate-45 items-center justify-center rounded shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] size-12">
          <div className={`relative flex size-12 items-center justify-center rounded ${bg}`}>
            <div
              className={`pointer-events-none absolute inset-0 rounded opacity-30 blur-sm ${blur}`}
              aria-hidden
            />
            <span className="-rotate-45 font-extrabold text-[18px] leading-8 text-white">{n}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WeLookFor() {
  const [pathwayIndex, setPathwayIndex] = useState(0);
  const pathway = PATHWAYS[pathwayIndex];

  return (
    <div className="bg-white">
      <div className="border-b border-black/5 bg-white pt-[88px] lg:pt-[104px]">
        <div className="section-padding !py-5">
          <div className="section-content">
            <Breadcrumbs
              tone="surface"
              items={[{ label: 'Trang chủ', href: '/' }, { label: 'We look for' }]}
            />
          </div>
        </div>
      </div>

      {/* 1 — Hero tìm kiếm */}
      <section className="section-padding !pt-8 !pb-11 bg-white">
        <div className="section-content">
          <div className="flex flex-col items-stretch justify-center rounded-[32px]">
            <div
              className="relative flex w-full flex-col gap-6 overflow-hidden rounded-[20px] px-4 py-8 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)]"
              style={{
                backgroundImage:
                  'linear-gradient(158.46deg, rgb(246, 252, 255) 9.7%, rgb(184, 221, 244) 91.3%)',
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[20px] opacity-[0.38] mix-blend-overlay"
              >
                <img
                  alt=""
                  src={ASSETS.searchHeroTexture}
                  className="absolute left-[-115%] top-0 h-full w-[290%] max-w-none object-cover"
                />
              </div>

              <div className="relative flex w-full flex-col items-center gap-2 text-center">
                <p className="w-full text-[12px] font-normal leading-5 tracking-[0.12px] text-[#707070]">
                  CƠ HỘI NGHỀ NGHIỆP - BA CON ĐƯỜNG
                  <br />
                  KIẾN TẠO GIÁ TRỊ
                </p>
                <div className="flex w-full flex-col gap-2">
                  <h1 className="text-[24px] font-bold uppercase leading-[38px] tracking-[1px] text-[#292929]">
                    CÙNG IPAG KIẾN TẠO SỰ NGHIỆP
                  </h1>
                  <p className="text-[14px] font-normal leading-[22px] text-[#474747]">
                    Tại IPAG, chúng tôi không tìm kiếm những người chỉ làm tròn vai. Chúng tôi tìm kiếm
                    những cộng sự cùng kiến tạo di sản — dù bạn đang ở bước khởi đầu hay đỉnh cao sự
                    nghiệp.
                  </p>
                </div>
              </div>

              <form
                className="relative flex w-full flex-col gap-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <label className="sr-only" htmlFor="job-search">
                  Tìm kiếm công việc
                </label>
                <div className="flex w-full items-center gap-2 rounded-lg border border-[rgba(7,7,7,0.18)] bg-white px-3 py-2">
                  <Search className="size-6 shrink-0 text-[#707070]" strokeWidth={1.75} aria-hidden />
                  <input
                    id="job-search"
                    type="search"
                    placeholder="Tìm kiếm công việc"
                    className="min-w-0 flex-1 bg-transparent text-[14px] leading-[1.4] text-[#474747] outline-none placeholder:text-[#707070]"
                  />
                </div>

                {[
                  { label: 'Tất cả Domain', value: 'all', textSize: 'text-[14px]' },
                  { label: 'Business', value: 'business', textSize: 'text-[16px]' },
                  { label: 'Program', value: 'program', textSize: 'text-[16px]' },
                  { label: 'Toàn quốc', value: 'nationwide', textSize: 'text-[16px]' },
                ].map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    className={`flex h-10 w-full items-center justify-between rounded-lg border border-[rgba(7,7,7,0.18)] bg-white px-3 py-2.5 text-left font-medium leading-[1.4] text-[#474747] ${item.textSize}`}
                  >
                    <span className="truncate">{item.label}</span>
                    <ChevronDown className="size-7 shrink-0 text-[#474747]" strokeWidth={1.75} />
                  </button>
                ))}

                <button
                  type="submit"
                  className="flex h-10 w-full items-center justify-center gap-2 rounded-full px-3 py-2.5 text-[14px] font-bold uppercase leading-[1.4] text-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)]"
                  style={{
                    backgroundImage:
                      'linear-gradient(72.72deg, rgb(1, 58, 114) 3.48%, rgb(12, 113, 199) 83.47%)',
                  }}
                >
                  <Search className="size-6 text-white" strokeWidth={2} aria-hidden />
                  Tìm kiếm cơ hội
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — Vị trí nổi bật */}
      <section id="featured-jobs" className="section-padding !pt-5 !pb-11 bg-[#faf9f7]">
        <div className="section-content flex flex-col gap-10">
          <div className="flex w-full items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <img alt="" src={ASSETS.sectionStar} className="h-4 w-[14px] shrink-0" />
              <h2 className="text-[18px] font-bold uppercase leading-[1.4] tracking-[0.18px] text-[#002b5b]">
                Vị trí nổi bật
              </h2>
            </div>
            <Link
              href="#featured-jobs"
              className="flex shrink-0 items-center gap-1 text-[14px] font-bold leading-[1.4] text-[#002b5b]"
            >
              Xem tất cả
              <span className="relative size-5 overflow-hidden">
                <img alt="" src={ASSETS.arrowRight} className="size-5" />
              </span>
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            {FEATURED_JOBS.map((job) => (
              <article
                key={job.title}
                className={`relative flex flex-col gap-4 rounded-[20px] bg-white px-4 py-5 shadow-[0px_4px_15px_0px_rgba(0,0,0,0.12)] ${
                  job.bordered ? 'border border-solid border-[#2f8fdf]' : ''
                }`}
              >
                <HotRibbon size={job.hotSize} />
                <div className="flex flex-col gap-2">
                  <span className="inline-flex w-fit rounded bg-[#d9e6f2] px-2 py-1 text-[10px] font-semibold leading-[1.4] text-[#707070]">
                    {job.tag}
                  </span>
                  <h3 className="text-[16px] font-bold leading-[22px] text-[#292929]">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-2 text-[14px] font-normal leading-5 text-[#474747]">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="size-5 shrink-0 text-[#474747]" strokeWidth={1.75} />
                      {job.location}
                    </span>
                    <span className="size-1 shrink-0 rounded-full bg-black/25" aria-hidden />
                    <span>{job.type}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Chương trình tuyển dụng / Về IPAG */}
      <section className="section-padding bg-gradient-to-b from-[#fef6eb] to-white to-[72%]">
        <div className="section-content flex flex-col gap-8">
          <div className="flex w-full flex-col gap-2 text-center">
            <h2 className="text-[20px] font-bold uppercase leading-8 tracking-[1px] text-[#292929]">
              Các chương trình tuyển dụng trọng điểm tại IPAG.
            </h2>
            <p className="text-[14px] font-normal leading-5 text-[#474747]">
              Các chương trình tuyển dụng trọng điểm tại IPAG.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <img alt="" src={ASSETS.programsStar} className="h-4 w-[14px] shrink-0" />
              <h3 className="text-[18px] font-bold uppercase leading-[1.4] tracking-[0.18px] text-[#002b5b]">
                Về IPAG
              </h3>
              <div className="relative h-0 w-[60px] shrink-0">
                <img alt="" src={ASSETS.programsLine} className="block h-px w-full" />
              </div>
            </div>

            <div className="flex w-full flex-col">
              <div className="flex w-full overflow-hidden rounded-t-[20px] border border-b-0 border-[rgba(7,7,7,0.13)]">
                {PATHWAYS.map((p, i) => {
                  const active = i === pathwayIndex;
                  return (
                    <button
                      key={p.pathway}
                      type="button"
                      onClick={() => setPathwayIndex(i)}
                      className={`flex min-h-[128px] min-w-0 flex-1 flex-col items-center justify-center border-r border-[rgba(7,7,7,0.13)] px-3 py-6 text-center transition-colors last:border-r-0 ${
                        active
                          ? 'border-b-[3px] border-[#fbc17b] bg-gradient-to-b from-[#0264b3] to-[#002b5b] text-white'
                          : 'bg-white text-[#474747]'
                      } ${i === 0 ? 'rounded-tl-[20px]' : ''} ${i === 2 ? 'rounded-tr-[20px]' : ''}`}
                    >
                      <span
                        className={`text-[12px] font-normal uppercase leading-4 ${active ? 'text-white' : 'text-[#474747]'}`}
                      >
                        {p.pathway}
                      </span>
                      <span
                        className={`mt-2 min-w-full text-[14px] font-bold leading-[18px] ${active ? 'text-white' : 'text-[#292929]'}`}
                      >
                        {p.name}
                      </span>
                      <div
                        className={`mt-2 flex flex-col gap-0.5 text-[10px] font-normal leading-3 ${active ? 'text-white' : 'text-[#474747]'}`}
                      >
                        <span>{p.lines[0]}</span>
                        <span>{p.lines[1]}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div
                className="w-full rounded-b-[20px]"
                style={{
                  backgroundImage:
                    'linear-gradient(13.01deg, rgb(0, 21, 45) 31.68%, rgb(0, 61, 130) 94.34%)',
                }}
              >
                <div className="flex flex-col gap-6 px-4 py-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2 uppercase text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                      <p className="text-[14px] font-medium leading-[26px] text-white">{pathway.kicker}</p>
                      <p className="text-[16px] font-extrabold leading-5">
                        <span className="text-white">{pathway.titleWhite}</span>
                        <span className="text-[#fbc17b]">{pathway.titleAccent}</span>
                      </p>
                    </div>
                    <div className="text-[14px] font-normal leading-[22px] tracking-[0.14px] text-white">
                      {pathway.description.map((line, li) => (
                        <p key={li} className="mb-0">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-xl border border-[rgba(123,193,255,0.6)] bg-[rgba(202,230,255,0.18)] px-[13px] py-[9px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.1)] backdrop-blur-[12px]">
                    <div className="relative z-10 flex flex-col gap-1 pr-4">
                      <p className="text-[10px] font-bold uppercase leading-4 tracking-[1.2px] text-[#fbc17b]">
                        Talent Acquisition Team
                      </p>
                      <p className="text-[12px] font-semibold leading-[18px] tracking-[1px] text-white">
                        {pathway.quote}
                      </p>
                    </div>
                    <div className="pointer-events-none absolute right-0 top-0 h-[76px] w-[55px] opacity-10">
                      <img alt="" src={ASSETS.togaHat} className="h-full w-full object-cover" />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex shrink-0 flex-col items-center pt-1" aria-hidden>
                      {pathway.steps.map((_, si) => (
                        <div key={si} className="flex flex-col items-center">
                          <div className="size-3 shrink-0 rounded-xl border-4 border-[#002b5b] bg-[#fbc17a] shadow-[0px_0px_20px_0px_rgba(254,179,22,0.6)]" />
                          {si < pathway.steps.length - 1 ? (
                            <div
                              className="h-14 w-0.5 shrink-0"
                              style={{
                                backgroundImage:
                                  'linear-gradient(180deg, rgba(254, 179, 22, 0.5) 0%, rgba(254, 179, 22, 0.5) 100%)',
                              }}
                            />
                          ) : null}
                        </div>
                      ))}
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col gap-4">
                      {pathway.steps.map((step) => (
                        <div
                          key={step.title}
                          className="flex items-center rounded-xl border border-[rgba(123,193,255,0.6)] bg-[rgba(202,230,255,0.15)] p-[13px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.1)] backdrop-blur-[12px]"
                        >
                          <div className="flex min-w-0 flex-1 flex-col gap-1">
                            <div className="flex items-center gap-2">
                              <img alt="" src={step.icon} className="size-5 shrink-0" />
                              <p className="text-[14px] font-bold leading-[22px] text-[#fbc17b]">{step.title}</p>
                            </div>
                            <p className="text-[14px] font-normal leading-5 text-white/90">{step.body}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    className="flex h-9 w-full items-center justify-center gap-2 rounded-full bg-white px-3 py-2.5 text-[14px] font-bold leading-[1.4] text-[#474747] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                  >
                    XEM THÊM
                    <span className="relative size-5">
                      <img alt="" src={ASSETS.ctaArrow} className="size-5" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 — Quy trình tuyển dụng */}
      <section className="section-padding !pb-16 bg-white">
        <div className="section-content flex flex-col gap-8">
          <div className="flex w-full flex-col gap-2 text-center">
            <h2 className="text-[20px] font-bold uppercase leading-8 tracking-[1px] text-[#292929]">
              QUY TRÌNH TUYỂN DỤNG
            </h2>
            <p className="text-[14px] font-normal leading-5 text-[#474747]">
              Quy trình tuyển dụng tại IPAG được thiết kế để tìm kiếm sự cộng hưởng tối ưu giữa tài năng và
              văn hóa hệ sinh thái
            </p>
          </div>

          <div className="flex flex-col rounded-[20px]">
            {RECRUITMENT_STEPS.map((step) => (
              <div key={step.n} className="flex flex-col pb-8 last:pb-0">
                <div className="relative z-0 mb-[-32px] flex flex-col items-center gap-4 rounded-[20px] bg-white px-5 pb-10 pt-5 shadow-[0px_4px_15px_0px_rgba(0,0,0,0.12)]">
                  <img alt="" src={step.icon} className="size-8 shrink-0" />
                  <div className="flex flex-col gap-1 text-center">
                    <h3 className="text-[16px] font-bold leading-6 text-[#292929]">{step.title}</h3>
                    <div className="text-[14px] font-normal leading-5 text-[#474747]">
                      {step.lines.map((line, li) => (
                        <p key={li} className="mb-0">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                <DiamondStep n={step.n} bg={step.diamond} blur={step.blur} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
