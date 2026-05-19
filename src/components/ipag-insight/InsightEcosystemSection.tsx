'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

const MotionLink = motion(Link);

// Reuse the navbar CTA motion feel so this section keeps the same interaction language.
export default function InsightEcosystemSection() {
  const prefersReducedMotion = useReducedMotion();
  const tapTransition = { type: 'spring' as const, stiffness: 520, damping: 28 };
  const tapScaleSoft = prefersReducedMotion ? undefined : { scale: 0.94 };
  const hoverScalePill = prefersReducedMotion ? undefined : { scale: 1.05 };

  return (
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
          <MotionLink
            href="https://www.ipa.com.vn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-[208px] max-w-full items-center justify-center gap-2 rounded-full px-3 text-[14px] leading-[1.4] font-bold text-white shadow-[0_4px_8px_rgba(0,0,0,0.15)] transition hover:brightness-95 md:mt-6 md:h-12 md:w-full md:max-w-[276px] md:text-[18px]"
            style={{
              background:
                'linear-gradient(76.71deg, rgb(1, 58, 114) 3.48%, rgb(12, 113, 199) 83.47%)',
            }}
            whileHover={hoverScalePill}
            whileTap={tapScaleSoft}
            transition={tapTransition}
          >
            TÌM HIỂU THÊM
            <ArrowRight className="size-5 md:size-6" strokeWidth={2.2} />
          </MotionLink>
        </div>
      </div>
    </section>
  );
}
