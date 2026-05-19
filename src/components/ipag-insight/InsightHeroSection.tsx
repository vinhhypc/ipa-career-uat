'use client';

import { motion } from 'motion/react';

import {
  FADE_UP_VARIANTS,
  REVEAL_VIEWPORT,
  STAGGER_PARENT,
} from '@/components/home/home-motion';

const HERO_IMAGE_OVERLAY =
  'linear-gradient(108.2deg, rgba(33, 57, 77, 0.28) 3.66%, rgba(5, 27, 44, 0.80) 37.65%, rgba(9, 30, 49, 0.80) 64.76%, rgba(23, 43, 67, 0.48) 81.26%, rgba(145, 167, 199, 0.10) 102.09%)';

export default function InsightHeroSection() {
  return (
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
          hành theo mô hình Ngân hàng Năng lực - Capability Bank.{' '}
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
  );
}
