'use client';

import type { CSSProperties } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
  FADE_LEFT_VARIANTS,
  REVEAL_VIEWPORT,
  SCALE_IN_VARIANTS,
} from '@/components/home/home-motion';

const LIFE_AT_IPAG_CAROUSEL_DOTS = [0, 1, 2, 3] as const;

const LIFE_AT_IPAG_SECTION_STYLE: CSSProperties = {
  background: 'linear-gradient(13deg, #ffffff 68.6%, #fff2df 122.28%)',
};

const LIFE_AT_IPAG_IMAGE_OVERLAY_STYLE: CSSProperties = {
  background: 'linear-gradient(0deg, rgba(0,0,0,0.5) 14.84%, rgba(67,66,66,0) 70.71%)',
};

export default function LifeAtIpagSection() {
  return (
    <section
      id="life-at-ipag"
      className="section-padding relative overflow-hidden"
      style={LIFE_AT_IPAG_SECTION_STYLE}
    >
      <div className="section-content relative z-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-5">
          <motion.div
            className="flex w-full flex-col gap-6 lg:max-w-[467px] lg:gap-7"
            variants={FADE_LEFT_VARIANTS}
            initial="hidden"
            whileInView="show"
            viewport={REVEAL_VIEWPORT}
          >
            <Image
              src="/home/why-ipag-heading-deco.svg"
              alt=""
              width={125}
              height={24}
              className="h-6"
            />
            <div className="flex flex-col gap-2">
              <p className="text-[12px] font-normal uppercase leading-[20px] tracking-[0.24px] text-[#474747] md:text-[14px] md:leading-[24px] md:tracking-[0.28px]">
                Cuộc sống tại IPAG
              </p>
              <h2 className="text-[28px] font-bold uppercase leading-[40px] tracking-[0.7px] text-[#292929] md:text-[40px] md:leading-[60px] md:tracking-[1px]">
                Nơi mỗi ngày
                <br />
                là một trải nghiệm
                <br />
                đáng nhớ
              </h2>
            </div>
          </motion.div>

          <motion.div
            className="relative w-full flex-1 overflow-hidden rounded-[24px] md:rounded-[32px]"
            variants={SCALE_IN_VARIANTS}
            initial="hidden"
            whileInView="show"
            viewport={REVEAL_VIEWPORT}
          >
            <div className="relative aspect-video w-full">
              <Image
                src="/home/life-at-ipag-desktop.png"
                alt="Cuộc sống tại IPAG"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={LIFE_AT_IPAG_IMAGE_OVERLAY_STYLE}
              />
              <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 md:bottom-6">
                {LIFE_AT_IPAG_CAROUSEL_DOTS.map((dot) => (
                  <span
                    key={dot}
                    aria-hidden
                    className={
                      dot === 0
                        ? 'h-2 w-6 rounded-full bg-white transition-all duration-300'
                        : 'h-2 w-2 rounded-full bg-white/60 transition-all duration-300'
                    }
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
