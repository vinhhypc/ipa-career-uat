'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

import {
  FADE_LEFT_VARIANTS,
  SCALE_IN_VARIANTS,
} from '@/components/home/home-motion';

export default function HeroSection() {
  return (
    <section
      className="section-padding relative overflow-hidden bg-cover bg-center bg-no-repeat max-md:py-10! md:py-20!"
      style={{ backgroundImage: `url(/executive-serve/banner.png)` }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-55"
        style={{
          background:
            'radial-gradient(80% 120% at 90% 40%, rgba(10,119,204,0.10), transparent 60%), radial-gradient(70% 140% at 10% 60%, rgba(20,81,148,0.15), rgba(1,32,69,0.50))',
        }}
      />
      <div className="section-content relative z-10 flex items-center gap-5 md:gap-9">
        <motion.div
          className="min-w-0 flex-1 text-center md:text-left"
          variants={FADE_LEFT_VARIANTS}
          initial="hidden"
          animate="show"
        >
          <h1 className="text-xl font-extrabold uppercase leading-[32px] tracking-[0.8px] text-white md:text-4xl md:leading-[60px] md:tracking-[2px]">
            Beyond your legacy.
            <br />
            Let&apos;s co-build the <span className="text-[#fbc17b]">extraordinary</span>
          </h1>
          <div className="mt-5 md:mt-6 flex justify-center md:justify-start">
            <div className="h-px w-[120px] bg-[#fbc17b] md:w-[147px]" />
          </div>

          <p className="mt-5 max-w-[883px] text-xs font-medium leading-[21px] text-white md:mt-6 md:text-xl md:font-normal md:leading-[33px] md:tracking-[0.2px]">
            Tại IPAG, bạn được trao quyền tự chủ tối ưu để hoạch định chiến lược, quản lý ngân
            sách và dẫn dắt đội ngũ.
            <br />
            Đây là lộ trình dành cho những nhà lãnh đạo tương lai muốn kiến tạo giá trị thực chất.
            <br />
            Chúng tôi tìm kiếm đối tác đồng hành, không phải nhân sự thực thi đơn thuần.
          </p>
        </motion.div>

        <motion.div
          className="hidden shrink-0 md:block"
          variants={SCALE_IN_VARIANTS}
          initial="hidden"
          animate="show"
        >
          <Image
            src="/executive-serve/hero-graphic.png"
            alt=""
            width={400}
            height={400}
            className="size-[320px] lg:size-[400px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
