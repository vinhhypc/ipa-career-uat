import Image from 'next/image';

import homeBanner from '@/assets/ma-program/banner.png';
import maHeroDecor from '@/assets/ma-program/hero-decor.png';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function HeroSection() {
  return (
    <>
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
            <div className="md:hidden">
              <p className="mx-auto w-full max-w-[260px] text-[24px] font-bold uppercase leading-[40px] tracking-[2px] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                <span className="text-white">24 Months </span>
                <span className="text-[#fbc17b]">The Leadership </span>
                <span className="text-white">Accelerator</span>
              </p>
            </div>
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
              Đây không chỉ là thực tập, mà là lộ trình tăng tốc 24 tháng dành cho tài năng trẻ khao
              khát khẳng định bản thân. Bạn sẽ luân chuyển qua các vị trí then chốt, trực tiếp dấn
              thân vào dự án tái cấu trúc chiến lược (TAC Journey) để tôi luyện bản lĩnh quản lý
              thực chiến.
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
    </>
  );
}
