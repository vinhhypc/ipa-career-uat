'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useTypewriter, type TypewriterSegment } from '@/lib/useTypewriter';

const ECOSYSTEM = [
  { sub: 'Con người & nếp sống', name: 'IPA Living' },
  { sub: 'Đầu tư & Quản trị doanh nghiệp', name: 'IPA Management' },
  { sub: 'Giải pháp Công nghệ', name: 'IPA Solution' },
] as const;

const HERO_TYPEWRITER_SEGMENTS: TypewriterSegment[] = [
  { kind: 'text', text: 'Tại IPAG, chúng tôi tìm kiếm những ', className: 'font-medium' },
  { kind: 'text', text: 'cộng sự', className: 'font-bold' },
  {
    kind: 'text',
    text: ' sẵn sàng dấn thân vào những thử thách - để cùng ',
    className: 'font-medium',
  },
  { kind: 'text', text: 'trưởng thành', className: 'font-bold' },
  { kind: 'text', text: ', kiến tạo ', className: 'font-medium' },
  { kind: 'text', text: 'giá trị bền vững', className: 'font-bold' },
  { kind: 'text', text: ' cho chính mình, tổ chức và cộng đồng.', className: 'font-medium' },
];

const HERO_TYPEWRITER_SPEED_MS = 10;
const HERO_TYPEWRITER_START_DELAY_MS = 300;

const HERO_OVERLAY_GRADIENT_DESKTOP =
  'linear-gradient(95deg, #0b2341 0%, #103765 48%, rgba(16,55,101,0.45) 72%, rgba(16,55,101,0.18) 100%)';

/** Mobile: đậm phía trên, nhạt dần để lộ tòa nhà ở 1/3 dưới (theo mockup). */
const HERO_OVERLAY_GRADIENT_MOBILE =
  'linear-gradient(180deg, rgba(10, 25, 47, 0.98) 0%, rgba(10, 25, 47, 0.62) 52%, rgba(10, 25, 47, 0.22) 78%, rgba(10, 25, 47, 0) 100%)';

export default function HeroSection() {
  const { content: descriptionContent, caret: descriptionCaret } = useTypewriter(
    HERO_TYPEWRITER_SEGMENTS,
    HERO_TYPEWRITER_SPEED_MS,
    HERO_TYPEWRITER_START_DELAY_MS,
  );

  return (
    <section className="section-padding relative flex min-h-0 flex-col overflow-hidden bg-[#0a192f] px-0! pb-0! pt-0! max-md:min-h-[70svh] md:block md:min-h-screen">
      <div
        aria-hidden
        className="absolute inset-0 md:inset-auto md:top-0 md:bottom-0 md:right-0 md:w-[54%]"
      >
        {/* Mobile: khung lớn hơn viewport + clip → ảnh “co” trong khung, lộ nhiều nội dung ảnh hơn; neo đáy giữ bố cục tòa nhà */}
        <div className="relative w-full md:hidden" style={{ aspectRatio: '9/16' }}>
          <Image
            src="/home/banner-mobile.png"
            alt="IPAG Career banner"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <Image
          src="/home/banner-desktop.png"
          alt="IPAG Career banner"
          fill
          priority
          className="hidden object-cover md:block"
          sizes="100vw"
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{ background: HERO_OVERLAY_GRADIENT_DESKTOP }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 md:hidden"
        style={{ background: HERO_OVERLAY_GRADIENT_MOBILE }}
      />

      <div className="relative z-10 mx-auto flex w-full max-md:min-h-0 max-md:flex-1 max-md:flex-col max-md:items-stretch max-md:justify-center max-md:py-6 max-md:pt-16 md:min-h-[706px] md:items-center md:justify-start md:px-[240px] md:pt-40">
        <div
          id="apply"
          className="scroll-mt-28 w-full px-5 text-center max-md:max-w-lg max-md:mx-auto md:max-w-[900px] md:px-0 md:pt-20 md:text-left"
        >
          <h1 className="animate-[fade-right_700ms_ease-out_both] mb-4 text-[24px] font-extrabold leading-[32px] tracking-[1px] text-white drop-shadow-md uppercase md:mb-9 md:text-[52px] md:leading-[80px] md:tracking-[2px]">
            <span className="flex flex-col gap-1.5 md:hidden">
              <span>
                <strong>Cộng sự</strong> để
              </span>
              <span>
                <strong>Trưởng thành</strong>
              </span>
              <span className="text-[#e8a04a]">
                <strong>Đồng hành</strong> để <strong>bứt phá</strong>
              </span>
            </span>
            <span className="hidden md:inline">
              <strong>Cộng sự</strong> để <strong>trưởng thành</strong>
              <br />
              <span className="text-[#fbc17b]">
                <strong>Đồng hành</strong> để <strong>bứt phá</strong>
              </span>
            </span>
          </h1>
          <p className="mb-5 text-sm leading-[22px] tracking-[0.14px] text-white max-md:mx-auto md:mb-9 md:max-w-[747px] md:text-[18px] md:leading-[33px] md:tracking-[0.18px]">
            {descriptionContent}
            {descriptionCaret}
          </p>
          <Link
            href="/jobs"
            className="inline-flex h-11 w-[min(100%,220px)] items-center justify-center gap-2 rounded-full bg-white px-4 text-sm font-bold uppercase tracking-wide text-[#2a2a2a] shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.04] hover:shadow-[0_8px_20px_rgba(0,0,0,0.18)] hover:brightness-105 active:translate-y-0 active:scale-100 active:shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:h-[52px] md:w-[276px] md:normal-case md:tracking-normal md:bg-[linear-gradient(238deg,rgb(255,255,255)_34%,rgb(255,241,225)_103%)] md:px-3 md:py-2.5 md:text-[18px] md:leading-[25.2px] md:text-[#474747] md:hover:shadow-[0_10px_24px_rgba(0,0,0,0.15)]"
          >
            Ứng tuyển ngay
            <ArrowRight className="size-4 shrink-0 md:size-6" strokeWidth={2} />
          </Link>
        </div>
      </div>

      <div className="relative z-10 mt-auto shrink-0 overflow-hidden border-t-[0.5px] border-white/44 bg-white py-3 text-black md:absolute md:bottom-0 md:left-0 md:right-0 md:mt-0 md:py-6">
        <div className="animate-[ecosystem-scroll_24s_linear_infinite] flex w-max items-stretch gap-x-25 px-4 md:gap-x-30 md:px-10">
          {[1, 2, 3, 4].flatMap((copyIdx) =>
            ECOSYSTEM.map((item) => (
              <div
                key={`eco-${copyIdx}-${item.name}`}
                className="flex shrink-0 flex-col items-start justify-center gap-0.5 leading-none"
              >
                <span className="text-sm font-bold leading-tight tracking-[0.14px] text-[#474747] md:text-base md:leading-[22px] md:tracking-[0.16px]">
                  {item.name}
                </span>
                <span className="text-[11px] font-normal leading-[14px] tracking-[0.1px] text-[#707070] md:text-xs md:leading-4 md:tracking-[0.12px]">
                  {item.sub}
                </span>
              </div>
            )),
          )}
        </div>
      </div>
    </section>
  );
}
