'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

import { FADE_LEFT_VARIANTS, SCALE_IN_VARIANTS } from '@/components/home/home-motion';

const ASSETS = {
  bannerTexture: '/specialist-track/banner-texture.png',
  heroGraphic: '/specialist-track/hero-graphic.png',
} as const;

export default function HeroSection() {
  return (
    <section
      className="section-padding relative overflow-hidden max-md:py-10! md:py-20!"
      style={{
        backgroundImage: 'linear-gradient(-49.86deg, rgb(0, 21, 45) 0.66%, rgb(6, 33, 63) 107.85%)',
      }}
    >
      {/* Texture overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.19]"
      >
        <Image
          src={ASSETS.bannerTexture}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover scale-x-[-1]"
        />
      </div>

      <div className="section-content relative z-10 flex items-center gap-5 md:gap-9">
        <motion.div
          className="min-w-0 flex-1 text-center md:text-left"
          variants={FADE_LEFT_VARIANTS}
          initial="hidden"
          animate="show"
        >
          <h1 className="text-[20px] font-extrabold uppercase leading-[32px] tracking-[0.8px] text-white md:text-[40px] md:leading-[60px] md:tracking-[2px]">
            <span className="text-[#fbc17b]">Elevate mastery</span> to excellence
          </h1>

          <div className="mt-5 flex justify-center md:mt-6 md:justify-start">
            <div className="h-px w-[120px] bg-[#fbc17b] md:w-[147px]" />
          </div>

          <p className="mt-5 max-w-[883px] text-[13px] font-normal leading-[21px] text-white md:mt-6 md:text-[20px] md:leading-[33px] md:tracking-[0.2px]">
            Tại IPAG, năng lực chuyên môn của bạn được nâng tầm nhờ sức mạnh cộng hưởng từ hệ sinh
            thái. Chúng tôi biến sự nhạy bén của bạn thành kết quả thực thi vượt trội, tạo ra những
            bước nhảy vọt thực chất cho sự nghiệp.
          </p>
        </motion.div>

        <motion.div
          className="hidden shrink-0 md:block"
          variants={SCALE_IN_VARIANTS}
          initial="hidden"
          animate="show"
        >
          <Image
            src={ASSETS.heroGraphic}
            alt=""
            width={367}
            height={367}
            priority
            sizes="(min-width: 1024px) 367px, 280px"
            className="size-[280px]  opacity-70 mix-blend-color-dodge lg:size-[367px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
