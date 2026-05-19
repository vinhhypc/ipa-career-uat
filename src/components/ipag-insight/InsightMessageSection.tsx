'use client';

import Image from 'next/image';
import { useReducedMotion } from 'motion/react';

import { useTypewriter, type TypewriterSegment } from '@/lib/useTypewriter';

const INSIGHT_QUOTE_SEGMENTS: TypewriterSegment[] = [
  { kind: 'text', text: 'Tại IPAG, chúng tôi không chỉ rót vốn, chúng tôi ' },
  { kind: 'text', text: 'đầu tư năng lực', className: 'font-extrabold text-[#de8f10]' },
  { kind: 'text', text: '. Chúng tôi không chỉ xây dựng ' },
  { kind: 'text', text: 'doanh nghiệp, chúng tôi ' },
  { kind: 'text', text: 'kiến tạo tầm vóc.', className: 'font-extrabold text-[#de8f10]' },
];

const INSIGHT_QUOTE_FULL_TEXT =
  'Tại IPAG, chúng tôi không chỉ rót vốn, chúng tôi đầu tư năng lực. Chúng tôi không chỉ xây dựng doanh nghiệp, chúng tôi kiến tạo tầm vóc.';

const INSIGHT_QUOTE_MARK_OPEN_CLASS =
  'pointer-events-none select-none font-serif font-normal leading-none text-[#de8f10] text-[5rem]';

function InsightQuoteTypewriter() {
  const prefersReducedMotion = useReducedMotion();
  const { content, isDone } = useTypewriter(INSIGHT_QUOTE_SEGMENTS, 34, 550);

  const renderedContent = prefersReducedMotion
    ? INSIGHT_QUOTE_SEGMENTS.map((seg, i) =>
        seg.kind === 'text' ? (
          <span key={i} className={seg.className}>
            {seg.text}
          </span>
        ) : (
          <br key={i} />
        ),
      )
    : content;

  const showCaret = !prefersReducedMotion && !isDone;
  const showClose = prefersReducedMotion || isDone;

  return (
    <div className="relative w-full">
      <span
        aria-hidden
        className={`${INSIGHT_QUOTE_MARK_OPEN_CLASS} absolute left-0 top-0 z-10 -translate-x-1 -translate-y-1 sm:-translate-x-0.5 sm:-translate-y-0.5`}
      >
        &ldquo;
      </span>
      <p
        className="text-pretty pl-10 text-[16px] font-bold leading-[1.6] text-[#474747] sm:pl-11 sm:text-[18px] md:pl-12 md:text-[22px] lg:text-[24px]"
        aria-label={INSIGHT_QUOTE_FULL_TEXT}
      >
        {renderedContent}
        {showCaret && (
          <span
            className="ml-0.5 inline-block w-[2px] translate-y-px animate-pulse bg-[#de8f10] align-baseline"
            style={{ height: '1.05em' }}
            aria-hidden
          />
        )}
        {showClose && (
          <span
            aria-hidden
            className="pointer-events-none select-none font-serif font-normal leading-[0] text-[#de8f10] text-[4rem] sm:text-[4.5rem] inline-block align-bottom relative top-[0.1em] ml-0.5"
          >
            &rdquo;
          </span>
        )}
      </p>
    </div>
  );
}

export default function InsightMessageSection() {
  return (
    <section
      className="section-padding max-md:py-11"
      style={{
        backgroundImage:
          'linear-gradient(188.82deg, rgb(255, 255, 255) 22.814%, rgb(255, 242, 223) 102.79%)',
      }}
    >
      <div className="section-content flex flex-col items-center gap-8 md:gap-[52px] md:py-5">
        <h2 className="text-center text-[20px] font-extrabold uppercase leading-8 tracking-[1px] text-[#292929] md:text-[40px] md:leading-[60px]">
          Thông điệp từ ipag
        </h2>

        <div className="relative flex w-full flex-col gap-8 rounded-[32px] md:gap-10 lg:flex-row lg:items-center lg:gap-[68px] lg:p-0">
          <div className="relative flex shrink-0 px-4 pt-8 lg:pl-0 lg:pt-0">
            <div
              className="hidden h-[502px] w-[155px] rounded-tl-[12px] rounded-tr-[32px] lg:mr-[-112px] lg:block"
              style={{
                backgroundImage:
                  'linear-gradient(172.97deg, rgb(255, 218, 177) 1.17%, rgb(236, 131, 70) 103.94%)',
              }}
              aria-hidden
            />
            <div
              className="absolute hidden h-[271px] w-[155px] rounded-tr-[32px] lg:left-[400px] lg:top-[231px] lg:block"
              style={{
                backgroundImage:
                  'linear-gradient(201.18deg, rgb(2, 100, 179) 6.27%, rgb(0, 43, 91) 95.18%)',
              }}
              aria-hidden
            />
            <div className="relative z-10 mx-auto size-[min(100%,466px)] max-h-[466px] min-h-[280px] min-w-[280px] self-end overflow-hidden rounded-tl-[32px] rounded-tr-[40px] lg:mr-[-112px] lg:mx-0 lg:rounded-tr-[100px]">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-tl-[32px] rounded-tr-[40px] lg:rounded-tr-[100px]"
                style={{
                  backgroundImage:
                    'linear-gradient(153.91deg, rgb(255, 255, 255) 24.99%, rgb(255, 238, 218) 84.93%)',
                }}
              />
              <Image
                src="/ipag-insight/pham-minh-huong.png"
                alt="Phạm Minh Hương"
                width={466}
                height={466}
                className="relative z-1 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex min-w-0 flex-1 flex-col gap-4 px-4 pb-10 pt-6 md:px-6 md:pb-12 lg:gap-7 lg:px-8 lg:py-6">
            <blockquote className="mx-auto w-full max-w-[min(100%,700px)] border-0 p-0">
              <div className="relative z-10 mx-auto max-w-[700px] px-4 pt-8 text-center tracking-[0.24px] sm:pt-10  md:pt-12">
                <InsightQuoteTypewriter />
              </div>
            </blockquote>

            <div className="relative z-10 flex flex-col items-center gap-0">
              <div className="flex w-full max-w-[min(100%,420px)] items-center justify-center gap-4">
                <div className="h-0.5 w-[60px] shrink-0 bg-[#002b5b]/45" aria-hidden />
                <div className="flex shrink-0 flex-col gap-1 text-center leading-[1.4]">
                  <p className="text-[16px] font-bold uppercase text-[#002b5b] md:text-[18px] lg:text-[20px]">
                    Phạm minh hương
                  </p>
                  <p className="text-[14px] font-normal text-[#474747] md:text-[15px] lg:text-[16px]">
                    Thành viên sáng lập IPAG
                  </p>
                </div>
                <div className="h-0.5 w-[60px] shrink-0 bg-[#002b5b]/45" aria-hidden />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
