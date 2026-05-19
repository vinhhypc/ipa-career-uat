'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

export default function HeroSection() {
  return (
    <section className="relative -mt-2 overflow-hidden ">
      <div className="relative h-[420px] w-full sm:h-[460px] md:h-[480px] lg:h-[640px]">
        <Image
          src="/life-at-ipag/che-do-dai-ngo/figma/hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-[70%_center] md:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <motion.h1
            className="text-2xl font-extrabold uppercase mb-4 tracking-[2px] text-white drop-shadow-md md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            Chế độ đãi ngộ
          </motion.h1>
          <motion.div
            className="relative mt-5 h-[70px] w-full max-w-[900px] md:mt-6 md:h-[84px] lg:h-[100px]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Image
              src="/life-at-ipag/che-do-dai-ngo/hero-header.png"
              alt="Trao năng lực - Nhận tương lai"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 768px) 92vw, (max-width: 1024px) 760px, 900px"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
