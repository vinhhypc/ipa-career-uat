'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { useTypewriter, type TypewriterSegment } from '@/lib/useTypewriter';

import Breadcrumbs from '@/components/Breadcrumbs';
import {
  CARD_REVEAL_VARIANTS,
  FADE_UP_VARIANTS,
  REVEAL_VIEWPORT,
  STAGGER_PARENT,
} from '@/components/home/home-motion';

const HERO_IMAGE_OVERLAY =
  'linear-gradient(108.2deg, rgba(33, 57, 77, 0.17) 3.66%, rgba(5, 27, 44, 0.765) 37.65%, rgba(9, 30, 49, 0.765) 64.76%, rgba(23, 43, 67, 0.377) 81.26%, rgba(145, 167, 199, 0) 102.09%)';

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

export default function IpagInsight() {
  return (
    <div className="bg-white">
      <div className="border-b border-black/5 bg-white pt-[88px] lg:pt-[104px]">
        <div className="section-padding py-5!">
          <div className="section-content">
            <Breadcrumbs
              tone="surface"
              items={[{ label: 'Trang chủ', href: '/' }, { label: 'IPAG Insight' }]}
            />
          </div>
        </div>
      </div>

      <section
        className="relative flex min-h-[520px] flex-col justify-center overflow-hidden bg-[#0a192f] bg-cover bg-center bg-no-repeat md:min-h-[636px]"
        style={{ backgroundImage: 'url(/home/hero-background.jpg)' }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: HERO_IMAGE_OVERLAY }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 md:hidden"
          style={{
            background:
              'linear-gradient(180deg, rgba(5, 27, 44, 0.55) 0%, rgba(9, 30, 49, 0.22) 45%, transparent 78%)',
          }}
        />

        <motion.div
          className="section-content relative z-10 flex flex-col items-center gap-6 px-5 py-14 text-center md:gap-6 md:px-12 md:py-20 lg:px-20"
          variants={STAGGER_PARENT}
          initial="hidden"
          whileInView="show"
          viewport={{ ...REVEAL_VIEWPORT, amount: 0.25 }}
        >
          <motion.p
            variants={FADE_UP_VARIANTS}
            className="w-full max-w-[812px] text-[12px] font-medium uppercase leading-[22px] text-white md:text-[16px] md:leading-[32px]"
          >
            IPAG GROUP - CAPABILITY BANK
          </motion.p>
          <motion.div
            variants={FADE_UP_VARIANTS}
            className="flex max-w-[900px] flex-col items-center text-[0px] uppercase tracking-[2px] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          >
            <p className="text-[24px] md:text-[52px]">
              <span className="font-bold leading-[40px] text-[#fbc17b] md:leading-[70px]">
                Ngân hàng Năng lực
                <br aria-hidden />
              </span>
              <span className="font-normal leading-[40px] text-white md:leading-[70px]">
                đầu tiên tại Việt Nam
              </span>
            </p>
          </motion.div>
          <motion.p
            variants={FADE_UP_VARIANTS}
            className="w-full max-w-[1302px] text-pretty text-[14px] font-medium leading-[22px] text-white md:text-[18px] md:leading-[32px] md:tracking-[0.18px]"
          >
            Khởi đầu từ năm 1998, IPA Group không ngừng nâng tầm để trở thành Tập đoàn đầu tư vận
            hành theo mô hình Ngân hàng Năng lực - Capability Bank.
          </motion.p>
          <motion.p
            variants={FADE_UP_VARIANTS}
            className="w-full max-w-[1302px] text-pretty text-[14px] font-medium leading-[22px] text-white md:text-[18px] md:leading-[32px] md:tracking-[0.18px]"
          >
            Mô hình của chúng tôi tập trung tháo gỡ 3 điểm nghẽn cốt lõi của doanh nghiệp: Con người
            – Công nghệ – Chuỗi giá trị.
          </motion.p>
          <motion.p
            variants={FADE_UP_VARIANTS}
            className="w-full max-w-[1302px] text-pretty text-[14px] font-medium leading-[22px] text-white md:mt-4 md:text-[18px] md:leading-[32px] md:tracking-[0.18px]"
          >
            Gia nhập IPAG là bước vào một môi trường làm nghề chuyên sâu. Dưới sự dẫn dắt của 3 trụ
            cột chiến lược: IPA Solution - IPA Living - IPA Management, mỗi cộng sự đều được trao
            không gian để bứt phá năng lực, bảo vệ những di sản quý báu và cùng kiến tạo những giá
            trị dài hạn.
          </motion.p>
        </motion.div>
      </section>

      <section className="section-padding relative overflow-hidden bg-gradient-to-b from-[#fef6eb] to-white md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(ellipse 80% 50% at 70% 20%, #fff 0%, transparent 55%), radial-gradient(ellipse 60% 40% at 20% 80%, #fff 0%, transparent 50%)`,
          }}
        />

        <div className="section-content relative flex flex-col gap-8 md:gap-[52px]">
          <motion.div
            className="flex w-full flex-col items-center gap-2 text-center"
            variants={FADE_UP_VARIANTS}
            initial="hidden"
            whileInView="show"
            viewport={{ ...REVEAL_VIEWPORT, margin: '0px 0px -12% 0px' }}
          >
            <p className="w-full max-w-[812px] text-[14px] font-normal leading-[22px] text-[#707070] md:leading-[32px]">
              OUR PURPOSE
            </p>
            <h2 className="text-[20px] font-extrabold uppercase leading-[26px] tracking-[1px] text-[#292929] md:text-[40px] md:leading-[60px]">
              Kiến tạo di sản bền vững
            </h2>
          </motion.div>

          <motion.div
            className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-5"
            variants={STAGGER_PARENT}
            initial="hidden"
            whileInView="show"
            viewport={{ ...REVEAL_VIEWPORT, margin: '0px 0px -12% 0px' }}
          >
            <motion.article
              variants={CARD_REVEAL_VARIANTS}
              className="flex flex-col overflow-hidden rounded-[32px] bg-white shadow-[0px_4px_16px_rgba(7,7,7,0.12),0px_14px_36px_rgba(0,43,91,0.1)] ring-1 ring-black/4"
            >
              <div className="relative h-[200px] w-full shrink-0 overflow-hidden sm:h-[220px] md:h-[260px] lg:h-[280px]">
                <Image
                  src="/ipag-insight/about.jpg"
                  alt=""
                  fill
                  className="object-cover object-bottom"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-1 flex-col px-6 pt-6 md:px-7">
                <div className="flex flex-col gap-3 pb-5">
                  <h3 className="text-left text-[24px] font-bold leading-8 text-[#070707]">
                    Tầm nhìn
                  </h3>
                  <p className="text-left text-[16px] font-normal leading-[22px] text-[#474747]">
                    Trở thành Ngân hàng Năng lực (Capability Bank) - Nơi hội tụ các nguồn lực để
                    khai phóng tiềm năng con người và doanh nghiệp, kiến tạo những câu chuyện thành
                    công đột phá và tạo ra giá trị bền vững cho xã hội.
                  </p>
                </div>

                <div className="h-8 shrink-0" aria-hidden />
              </div>
            </motion.article>

            <motion.article
              variants={CARD_REVEAL_VARIANTS}
              className="flex flex-col overflow-hidden rounded-[32px] bg-white shadow-[0px_4px_16px_rgba(7,7,7,0.12),0px_14px_36px_rgba(0,43,91,0.1)] ring-1 ring-black/4"
            >
              <div className="relative h-[200px] w-full shrink-0 overflow-hidden sm:h-[220px] md:h-[260px] lg:h-[280px]">
                <Image
                  src="/ipag-insight/mission-card.jpg"
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-1 flex-col px-6 pt-6 md:px-7">
                <div className="flex flex-col gap-3 pb-5">
                  <h3 className="text-left text-[24px] font-bold leading-8 text-[#070707]">
                    Sứ mệnh
                  </h3>
                  <p className="text-left text-[16px] font-normal leading-[22px] text-[#474747]">
                    Vận hành mô hình Ngân hàng Năng lực, kết nối cộng sinh Con người - Công nghệ -
                    Chuỗi giá trị để dẫn vốn hiệu quả và phụng sự cuộc sống trọn vẹn.
                  </p>
                </div>

                <div className="h-8 shrink-0" aria-hidden />
              </div>
            </motion.article>
          </motion.div>
        </div>
      </section>

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

          <div className="relative flex w-full flex-col gap-8 rounded-[32px] shadow-[0px_4px_6px_rgba(0,0,0,0.15)] md:gap-10 lg:flex-row lg:items-center lg:gap-[68px] lg:p-0">
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
                  <div className="h-px w-[60px] shrink-0 bg-[#002b5b]/45" aria-hidden />
                  <div className="flex shrink-0 flex-col gap-1 text-center leading-[1.4]">
                    <p className="text-[16px] font-bold uppercase text-[#002b5b] md:text-[18px] lg:text-[20px]">
                      Phạm minh hương
                    </p>
                    <p className="text-[14px] font-normal text-[#474747] md:text-[15px] lg:text-[16px]">
                      Thành viên sáng lập IPAG
                    </p>
                  </div>
                  <div className="h-px w-[60px] shrink-0 bg-[#002b5b]/45" aria-hidden />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden py-7 md:py-20"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(170,231,255,0.15) 0%, rgba(0,116,162,0.15) 134.87%)',
        }}
      >
        <Image
          src="/home/epic-abstract-left.svg"
          alt=""
          width={566}
          height={308}
          className="pointer-events-none absolute bottom-0 left-0 hidden h-[308px] w-[566px] select-none lg:block"
        />
        <Image
          src="/home/epic-abstract-right.svg"
          alt=""
          width={566}
          height={308}
          className="pointer-events-none absolute bottom-0 right-0 hidden h-[308px] w-[566px] select-none lg:block"
        />

        <div className="section-content px-5 md:px-0">
          <div className="mx-auto flex max-w-[920px] flex-col items-center gap-4 text-center md:gap-0">
            <div className="flex flex-col gap-1">
              <h2 className="text-[16px] font-bold leading-6 tracking-[0.16px] text-[#002b5b] uppercase md:text-[40px] md:leading-[60px] md:tracking-[0.4px]">
                Khám phá hệ sinh thái IPA LIVING
              </h2>
              <p className="text-[14px] font-medium leading-5 tracking-[0.14px] text-[#474747] md:mt-2 md:text-[20px] md:leading-7 md:tracking-[0.2px]">
                Tìm hiểu thêm về tầm nhìn, sứ mệnh và các lĩnh vực hoạt động của tập đoàn IPA.
              </p>
            </div>
            <Link
              href="https://www.ipa.com.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-[208px] max-w-full items-center justify-center gap-2 rounded-full px-3 text-[14px] leading-[1.4] font-bold text-white shadow-[0_4px_8px_rgba(0,0,0,0.15)] transition hover:brightness-95 md:mt-6 md:h-12 md:w-full md:max-w-[276px] md:text-[18px]"
              style={{
                background:
                  'linear-gradient(76.71deg, rgb(1, 58, 114) 3.48%, rgb(12, 113, 199) 83.47%)',
              }}
            >
              TÌM HIỂU THÊM
              <ArrowRight className="size-5 md:size-6" strokeWidth={2.2} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
