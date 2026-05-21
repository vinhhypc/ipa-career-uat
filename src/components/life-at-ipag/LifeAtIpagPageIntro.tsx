'use client';

import { motion } from 'motion/react';

import LifeAtIpagTabs, { type LifeAtIpagTabKey } from '@/components/life-at-ipag/LifeAtIpagTabs';

export type LifeAtIpagPageIntroProps = {
  activeKey: LifeAtIpagTabKey;
  mobileTitle: string;
  desktopTitle: string;
  onTabChange?: (key: LifeAtIpagTabKey) => void;
};

export default function LifeAtIpagPageIntro({
  activeKey,
  mobileTitle,
  desktopTitle,
  onTabChange,
}: LifeAtIpagPageIntroProps) {
  return (
    <section className="relative overflow-hidden px-4 py-10 md:px-12 md:pb-14 lg:px-20 lg:pb-10 ">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[340px] opacity-60" />
      <div className="section-content relative">
        <motion.div
          className="flex flex-col items-center gap-5 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <h1 className="text-3xl font-bold uppercase tracking-[1px] text-[#292929] text-center md:text-4xl md:leading-[48px]">
            <span className="md:hidden">{mobileTitle}</span>
            <span className="hidden md:inline">{desktopTitle}</span>
          </h1>
          <div className="flex items-center justify-center gap-4">
            <span className="h-[1.5px] w-24 bg-[#002B5B]" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="24"
              viewBox="0 0 21 24"
              fill="none"
            >
              <path
                d="M10.4535 0C10.4535 0 10.0371 8.33346 0 11.933C0 11.933 8.21662 13.5586 10.4535 24C10.4535 24 11.5653 14.5768 21 11.933C21 11.933 12.0614 9.80275 10.4535 0Z"
                fill="#002B5B"
              />
            </svg>

            <span className="h-[1.5px] w-24 bg-[#002B5B]" />
          </div>
        </motion.div>
        <LifeAtIpagTabs activeKey={activeKey} onChange={onTabChange} />
      </div>
    </section>
  );
}
