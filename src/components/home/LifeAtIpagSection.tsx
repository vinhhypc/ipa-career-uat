'use client';

import type { CSSProperties } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import AutoImageSlider from '@/components/common/AutoImageSlider';
import {
  FADE_LEFT_VARIANTS,
  REVEAL_VIEWPORT,
  SCALE_IN_VARIANTS,
} from '@/components/home/home-motion';

const LIFE_AT_IPAG_IMAGES = [
  '/home/home-anh1.jpg',
  '/home/home-anh2.JPG',
  '/home/home-anh3.JPG',
  '/home/home-anh4.JPG',
  '/home/home-anh5.JPG',
] as const;

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
      className="section-padding relative overflow-hidden lg:px-12 lg:py-12 xl:px-16 xl:py-16"
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
              <p className="text-xs font-normal uppercase leading-[20px] tracking-[0.24px] text-[#474747] md:text-sm md:leading-[24px] md:tracking-[0.28px]">
                Cuộc sống tại IPAG
              </p>
              <h2 className="text-3xl font-bold uppercase leading-[40px] tracking-[0.7px] text-[#292929] md:leading-[48px] md:tracking-[0.9px] lg:leading-[60px] lg:tracking-[1px] xl:text-4xl 2xl:text-5xl">
                Nơi mỗi ngày <br className="hidden md:block" />
                là một trải nghiệm <br className="hidden md:block" />
                đáng nhớ
              </h2>
            </div>
          </motion.div>

          <motion.div
            className="relative w-full flex-1 overflow-hidden rounded-[24px] sm:rounded-[28px] md:rounded-[32px]"
            variants={SCALE_IN_VARIANTS}
            initial="hidden"
            whileInView="show"
            viewport={REVEAL_VIEWPORT}
          >
            <div className="relative aspect-video w-full">
              <AutoImageSlider
                images={LIFE_AT_IPAG_IMAGES}
                alt="Cuộc sống tại IPAG"
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="absolute inset-0"
                imageClassName="object-cover object-center"
                overlayStyle={LIFE_AT_IPAG_IMAGE_OVERLAY_STYLE}
                dotsContainerClassName="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 md:bottom-6"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
