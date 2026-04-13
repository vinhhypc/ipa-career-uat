'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export type LifeAtIpagStoryPanelProps = {
  title: string;
  description: string;
  ctaHref: string;
  images: {
    hero1: string;
    hero2: string;
    hero3: string;
    hero4: string;
  };
};

export default function LifeAtIpagStoryPanel({
  title,
  description,
  ctaHref,
  images,
}: LifeAtIpagStoryPanelProps) {
  return (
    <section className="px-4 pb-16 md:px-12 md:pb-20 lg:px-20 lg:pb-24 text-[#292929]">
      <div className="section-content">
        <motion.div
          className="relative overflow-hidden rounded-[28px] border border-[#e5e7eb] bg-white"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <div className="pointer-events-none absolute inset-0 opacity-35">
            <div className="absolute -right-24 -top-20 h-80 w-80 rounded-full bg-[#fbc17b]/25 blur-3xl" />
            <div className="absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-[#7bc1ff]/12 blur-3xl" />
          </div>

          <div className="relative grid gap-10 p-6 md:p-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-12">
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
            >
              <p className="text-[26px] font-extrabold uppercase tracking-[1px] text-[#292929] md:text-[32px] md:leading-[38px]">
                {title}
              </p>
              <p className="mt-4 whitespace-pre-line text-base leading-7 text-[#292929]/80 md:text-[18px] md:leading-[28px]">
                {description}
              </p>

              <Link
                href={ctaHref}
                className="mt-8 hidden items-center gap-3 rounded-[1000px] bg-[linear-gradient(88deg,#013A72_-3.48%,#0C71C7_83.47%)] px-7 py-3 text-[18px] font-bold text-white shadow-[0_4px_8px_0_rgba(0,0,0,0.15)] transition hover:brightness-95 lg:inline-flex"
              >
                TÌM HIỂU THÊM
                <ArrowRight className="size-5" />
              </Link>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-3 md:gap-4"
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
              }}
            >
              <div className="flex flex-col items-end gap-3 md:gap-4">
                <HeroImg src={images.hero1} className="w-full aspect-square md:aspect-[4/3]" />
                <HeroImg
                  src={images.hero2}
                  className="w-[86%] md:w-[83%] aspect-square md:aspect-[4/3]"
                />
              </div>
              <div className="flex flex-col items-start gap-3 md:gap-4 pt-[18px] md:pt-6">
                <HeroImg
                  src={images.hero3}
                  className="w-[86%] md:w-[83%] aspect-square md:aspect-[4/3]"
                />
                <HeroImg src={images.hero4} className="w-full aspect-square md:aspect-[4/3]" />
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center lg:hidden"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.12 }}
            >
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-3 rounded-[1000px] bg-[linear-gradient(88deg,#013A72_-3.48%,#0C71C7_83.47%)] px-7 py-3 text-[18px] font-bold text-white shadow-[0_4px_8px_0_rgba(0,0,0,0.15)] transition hover:brightness-95"
              >
                TÌM HIỂU THÊM
                <ArrowRight className="size-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HeroImg({ src, className }: { src: string; className?: string }) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl bg-white/10 ${className ?? ''}`.trim()}
      variants={{
        hidden: { opacity: 0, y: 12, scale: 0.98 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
      }}
    >
      <Image
        src={src}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
      />
    </motion.div>
  );
}
