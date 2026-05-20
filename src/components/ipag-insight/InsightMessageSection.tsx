'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';

import { useTypewriter, type TypewriterSegment } from '@/lib/useTypewriter';
import {
  FADE_LEFT_VARIANTS,
  FADE_RIGHT_VARIANTS,
  FADE_UP_VARIANTS,
  REVEAL_VIEWPORT,
  STAGGER_PARENT,
} from '@/components/home/home-motion';

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
      className="section-padding max-md:py-8"
      style={{
        backgroundImage:
          'linear-gradient(188.82deg, rgb(255, 255, 255) 22.814%, rgb(255, 242, 223) 102.79%)',
      }}
    >
      <motion.div
        className="section-content flex flex-col items-center gap-8 md:gap-[52px] md:py-5"
        variants={STAGGER_PARENT}
        initial="hidden"
        whileInView="show"
        viewport={{ ...REVEAL_VIEWPORT, amount: 0.25 }}
      >
        <motion.h2
          variants={FADE_UP_VARIANTS}
          className="text-center text-[20px] font-extrabold uppercase leading-8 tracking-[1px] text-[#292929] md:text-[40px] md:leading-[60px]"
        >
          Thông điệp từ ipag
        </motion.h2>

        <motion.div
          variants={FADE_UP_VARIANTS}
          className="relative flex w-full flex-col gap-8 rounded-[32px] md:gap-10 lg:flex-row lg:items-center lg:gap-[68px] lg:p-0"
        >
          <motion.div
            variants={FADE_LEFT_VARIANTS}
            className="relative flex shrink-0 justify-center px-4 pt-8 lg:px-0 lg:pt-0"
          >
            <div className="relative mx-auto w-full max-w-[320px] pb-4 sm:max-w-[360px] md:max-w-[390px] lg:mx-0 lg:mr-[-72px] lg:max-w-[460px] xl:mr-[-110px] xl:max-w-[560px] 2xl:mr-[-132px] 2xl:max-w-[620px]">
              <div
                className="absolute bottom-4 left-[-20px] top-[-22px] w-[84px] rounded-t-[20px] sm:left-[-24px] sm:w-[92px] md:left-[-28px] md:w-[100px] lg:left-[-30px] lg:top-[-24px] lg:w-[96px] xl:left-[-38px] xl:top-[-28px] xl:w-[122px] 2xl:left-[-44px] 2xl:top-[-32px] 2xl:w-[138px]"
                style={{
                  backgroundImage:
                    'linear-gradient(180deg, rgb(255, 218, 177) 0%, rgb(236, 131, 70) 100%)',
                }}
                aria-hidden
              />
              <div
                className="absolute bottom-4 right-[-16px] h-[100px] w-[80px] rounded-tl-[26px] rounded-tr-[20px] sm:right-[-18px] sm:h-[112px] sm:w-[88px] sm:rounded-tr-[22px] md:right-[-22px] md:h-[120px] md:w-[96px] md:rounded-tr-[24px] lg:right-[-30px] lg:h-[122px] lg:w-[88px] lg:rounded-tl-[32px] lg:rounded-tr-[26px] xl:right-[-40px] xl:h-[150px] xl:w-[114px] xl:rounded-tl-[38px] xl:rounded-tr-[30px] 2xl:right-[-48px] 2xl:h-[172px] 2xl:w-[128px] 2xl:rounded-tl-[42px] 2xl:rounded-tr-[34px]"
                style={{
                  backgroundImage:
                    'linear-gradient(180deg, rgb(0, 117, 210) 0%, rgb(0, 43, 91) 100%)',
                }}
                aria-hidden
              />
              <div className="relative z-10 aspect-[382/388] w-full overflow-hidden rounded-tl-[32px] rounded-tr-[56px] bg-[#f3eadf] sm:rounded-tr-[64px] lg:rounded-tl-[36px] lg:rounded-tr-[82px] xl:rounded-tr-[98px] 2xl:rounded-tr-[110px]">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
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
                  className="relative z-1 h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={FADE_RIGHT_VARIANTS}
            className="relative flex min-w-0 flex-1 flex-col gap-4 px-4 pb-10 pt-6 md:px-6 md:pb-12 lg:gap-7 lg:px-8 lg:py-6"
          >
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
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
