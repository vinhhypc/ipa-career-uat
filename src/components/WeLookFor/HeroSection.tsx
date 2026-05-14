'use client';

import { ChevronDown, Search } from 'lucide-react';

import { ASSETS } from './constants';

export default function HeroSection() {
  return (
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
              <p className="w-full text-[12px] font-normal leading-5 tracking-[0.12px] text-[#707070] lg:text-[14px] lg:leading-8 lg:tracking-[0.14px]">
                CƠ HỘI NGHỀ NGHIỆP - BA CON ĐƯỜNG KIẾN TẠO GIÁ TRỊ
              </p>
              <div className="flex w-full flex-col gap-2 lg:gap-5">
                <h1 className="text-[24px] font-bold uppercase leading-[38px] tracking-[1px] text-[#292929] lg:text-[52px] lg:leading-[68px]">
                  CÙNG IPAG KIẾN TẠO SỰ NGHIỆP
                </h1>
                <p className="text-[14px] font-normal leading-[22px] text-[#474747] lg:mx-auto lg:max-w-[1086px] lg:text-[18px] lg:leading-7 lg:tracking-[0.18px]">
                  Tại IPAG, chúng tôi không tìm kiếm những người chỉ làm tròn vai. Chúng tôi tìm
                  kiếm những cộng sự cùng kiến tạo di sản — dù bạn đang ở bước khởi đầu hay đỉnh
                  cao sự nghiệp.
                </p>
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
  );
}
