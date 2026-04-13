'use client';

import Link from 'next/link';
import {
  ChevronDown,
  MapPin,
  Search,
} from 'lucide-react';

import Breadcrumbs from '@/components/Breadcrumbs';

import searchHeroTextureImg from '@/assets/we-look-for/search-hero-texture.png';

const ASSETS = {
  searchHeroTexture: searchHeroTextureImg.src,
} as const;

type JobItem = {
  tag: string;
  title: string;
  location: string;
  experience: string;
};

const JOBS: JobItem[] = [
  { tag: 'Chuyển đổi số', title: 'Chuyên viên phân tích nghiệp vụ (Digital BA)', location: 'Hà Nội', experience: '3-5 năm' },
  { tag: 'Chuyển đổi số', title: 'Kỹ sư phát triển phần mềm (Software Development Engineer)', location: 'Hà Nội', experience: '2-3 năm' },
  { tag: 'Chuyển đổi số', title: 'Chuyên viên cao cấp IT Quality Management', location: 'Hà Nội', experience: '4-6 năm' },
  { tag: 'Chuyển đổi số', title: 'Chuyên viên tư vấn khách hàng (CSA)', location: 'Hà Nội', experience: '2 năm' },
  { tag: 'Tiêu dùng xanh', title: 'Chuyên viên tư vấn khách hàng (CSO Next Gen)', location: 'Hà Nội/Hồ Chí Minh /Thanh Hóa', experience: '1-2 năm' },
  { tag: 'Tiêu dùng xanh', title: 'Trưởng nhóm tư vấn khách hàng Dstation', location: 'Hà Nội/Hồ Chí Minh /Thanh Hóa', experience: '3 năm' },
  { tag: 'Đầu tư tài chính lâu dài', title: 'Nhân viên dịch vụ chứng khoán/môi giới chứng khoán', location: 'Toàn quốc', experience: '1 năm' },
  { tag: 'Đầu tư tài chính lâu dài', title: 'Trưởng phòng kinh doanh dịch vụ chứng khoán', location: 'Toàn quốc (Ưu tiên Hà Nội/Hồ Chí Minh)', experience: '3-5 năm' },
  { tag: 'Đầu tư tài chính lâu dài', title: 'Nhân viên dịch vụ chứng khoán/môi giới chứng khoán', location: 'Toàn quốc', experience: '1 năm' },
  { tag: 'Đầu tư tài chính lâu dài', title: 'Trưởng phòng kinh doanh dịch vụ chứng khoán', location: 'Toàn quốc (Ưu tiên Hà Nội/Hồ Chí Minh)', experience: '3-5 năm' },
];

export default function Jobs() {

  return (
    <div className="bg-white">
      <div className="border-b border-black/5 bg-white pt-[88px] lg:pt-[104px]">
        <div className="section-padding !py-5">
          <div className="section-content">
            <Breadcrumbs
              tone="surface"
              items={[{ label: 'Professional force', href: '/' }, { label: 'Tất cả vị trí' }]}
            />
          </div>
        </div>
      </div>

      {/* 1 — Hero tìm kiếm */}
      <section className="section-padding !pt-8 !pb-11 bg-white lg:!py-20">
        <div className="section-content">
          <div className="flex flex-col items-stretch justify-center rounded-[32px]">
            <div
              className="relative flex w-full flex-col gap-6 overflow-hidden rounded-[20px] px-4 py-8 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] lg:gap-[52px] lg:rounded-[32px] lg:px-10 lg:py-[60px]"
              style={{
                backgroundImage:
                  'linear-gradient(158.46deg, rgb(246, 252, 255) 9.7%, rgb(184, 221, 244) 91.3%)',
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[20px] opacity-[0.38] mix-blend-overlay lg:rounded-[32px]"
              >
                <img
                  alt=""
                  src={ASSETS.searchHeroTexture}
                  className="absolute left-[-115%] top-0 h-full w-[290%] max-w-none object-cover lg:left-[-16.67%] lg:top-[-27.88%] lg:h-[198.79%] lg:w-[133.33%]"
                />
              </div>

              <div className="relative flex w-full flex-col items-center gap-2 text-center lg:gap-2">
                <div className="flex w-full flex-col gap-2 lg:gap-5">
                  <h1 className="text-[24px] font-bold uppercase leading-[38px] tracking-[1px] text-[#292929] lg:text-[52px] lg:leading-[68px]">
                    KHÁM PHÁ CƠ HỘI
                  </h1>
                </div>
              </div>

              <form
                className="relative flex w-full flex-col gap-4 lg:gap-7"
                onSubmit={(e) => e.preventDefault()}
              >
                <label className="sr-only" htmlFor="job-search">
                  Tìm kiếm công việc
                </label>
                <div className="flex w-full items-center gap-2 rounded-lg border border-[rgba(7,7,7,0.18)] bg-white px-3 py-2 lg:gap-2 lg:px-4 lg:py-2.5">
                  <Search
                    className="size-6 shrink-0 text-[#707070] lg:size-7"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <input
                    id="job-search"
                    type="search"
                    placeholder="Tìm kiếm công việc"
                    className="min-w-0 flex-1 bg-transparent text-[14px] leading-[1.4] text-[#474747] outline-none placeholder:text-[#707070] lg:text-base"
                  />
                </div>

                <div className="flex w-full flex-col gap-4 lg:flex-row lg:gap-5">
                  {[
                    { label: 'Tất cả Domain', value: 'all', textSize: 'text-[14px]' },
                    { label: 'Business', value: 'business', textSize: 'text-[16px]' },
                    { label: 'Program', value: 'program', textSize: 'text-[16px]' },
                    { label: 'Toàn quốc', value: 'nationwide', textSize: 'text-[16px]' },
                  ].map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      className={`flex h-10 w-full items-center justify-between rounded-lg border border-[rgba(7,7,7,0.18)] bg-white px-3 py-2.5 text-left font-medium leading-[1.4] text-[#474747] lg:min-h-12 lg:flex-1 lg:px-4 lg:py-2.5 lg:text-base ${item.textSize} lg:!text-base`}
                    >
                      <span className="truncate">{item.label}</span>
                      <ChevronDown className="size-7 shrink-0 text-[#474747]" strokeWidth={1.75} />
                    </button>
                  ))}
                </div>

                <button
                  type="submit"
                  className="mx-auto flex h-10 w-full items-center justify-center gap-2 rounded-full px-3 py-2.5 text-[14px] font-bold uppercase leading-[1.4] text-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] lg:h-12 lg:w-[466px] lg:gap-2 lg:text-lg"
                  style={{
                    backgroundImage:
                      'linear-gradient(72.72deg, rgb(1, 58, 114) 3.48%, rgb(12, 113, 199) 83.47%)',
                  }}
                >
                  <Search className="size-6 text-white lg:size-7" strokeWidth={2} aria-hidden />
                  Tìm kiếm cơ hội
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding !pt-5 !pb-11 bg-[#fcfcfc] lg:!pt-0 lg:!pb-20">
        <div className="section-content">
          <div className="flex flex-col items-start gap-6 lg:gap-10">
            <div className="flex items-center gap-2 lg:gap-3">
              <svg
                aria-hidden
                className="h-4 w-[14px] lg:h-6 lg:w-[21px]"
                viewBox="0 0 21 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6632 10.5121C11.6632 10.5121 11.6632 10.5119 11.6632 10.5118L14.2812 2.42468L12.7213 2.43067L9.95995 2.44128L9.95356 0.776077L8.36888 0.782162L8.37527 2.44736L5.69654 2.45766L4.13657 2.46365L6.81632 10.5302L0.0609073 14.0849L1.48199 14.973L3.99796 16.5454L3.1589 17.9812L4.60195 18.8831L5.44101 17.4473L7.87994 18.9714L9.30095 19.8594L11.9733 11.7904C11.9734 11.7903 11.9734 11.7901 11.9735 11.79C11.9735 11.7899 11.9735 11.7897 11.9736 11.7896L14.614 19.8765L16.0379 18.9929L18.4858 17.474L19.3199 18.9126L20.7675 18.0145L19.9334 16.5758L22.4587 15.0094L23.8826 14.1259L17.1397 10.5484L19.8474 2.51104L18.2874 2.50504L15.6087 2.49475L15.6151 0.829543L14.0304 0.823457L14.024 2.48866L11.2627 2.47804L9.70269 2.47205L12.3048 10.5589C12.3049 10.559 12.305 10.5592 12.305 10.5593C12.3051 10.5594 12.3051 10.5596 12.3052 10.5597L12.3048 10.5599C12.3048 10.56 12.3047 10.5601 12.3047 10.5603L11.6632 10.5121Z"
                  fill="#002B5B"
                />
              </svg>
              <h2 className="text-[18px] font-bold uppercase leading-[1.4] tracking-[0.18px] text-[#002b5b] lg:text-[24px] lg:tracking-[0.24px]">
                Tất cả các vị trí
              </h2>
              <span className="h-px w-[60px] bg-[#0d3f77]" />
            </div>

            <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-6">
              {JOBS.map((job, index) => (
                <article
                  key={`${job.title}-${index}`}
                  className="rounded-[20px] border border-transparent bg-white px-4 py-5 shadow-[0px_4px_15px_0px_rgba(0,0,0,0.12)] transition-colors duration-200 hover:border-[#2f8fdf] lg:rounded-[32px] lg:px-7 lg:py-8"
                >
                  <div className="flex flex-col gap-2 lg:gap-3">
                    <div className="flex items-start justify-between gap-3">
                      <span className="rounded bg-[#d9e6f2] px-2 py-1 text-[10px] font-semibold leading-[1.4] text-[#707070] lg:text-[12px]">
                        {job.tag}
                      </span>
                      <span className="hidden text-[14px] leading-[26px] text-[#707070] lg:block">30/3/2026</span>
                    </div>

                    <div className="flex flex-col gap-2">
                      <h3 className="text-[16px] font-bold leading-[22px] text-[#292929] lg:text-[18px] lg:leading-[26px]">
                        {job.title}
                      </h3>
                      <div className="min-w-0 text-[14px] leading-5 text-[#474747] lg:text-[16px] lg:leading-[26px]">
                        <div className="hidden items-center gap-2 lg:flex">
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="size-5 text-[#707070]" strokeWidth={1.6} aria-hidden />
                            {job.location}
                          </span>
                          <span className="size-1 rounded-full bg-black/25" />
                          <span>{job.experience}</span>
                        </div>
                        <span className="inline-flex items-center gap-1 lg:hidden">
                          <MapPin className="size-5 text-[#707070]" strokeWidth={1.6} aria-hidden />
                          {job.location}
                        </span>
                        <div className="mt-1 flex items-center gap-2 lg:hidden">
                          <span>{job.experience}</span>
                        </div>
                      </div>
                    </div>

                    <div className="hidden h-px w-full bg-black/10 lg:block" />
                    <Link
                      href="#"
                      className="hidden h-10 w-[155px] items-center justify-center rounded-full text-[16px] font-semibold leading-[1.4] text-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] lg:inline-flex"
                      style={{
                        backgroundImage:
                          'linear-gradient(80.96deg, rgb(1, 58, 114) 3.48%, rgb(12, 113, 199) 83.47%)',
                      }}
                    >
                      Ứng tuyển
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
