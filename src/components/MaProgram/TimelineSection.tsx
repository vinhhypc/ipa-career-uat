'use client';

import { motion } from 'motion/react';

import { TIMELINE } from './constants';

export default function TimelineSection() {
  return (
    <section className="section-padding max-md:!py-11 bg-white md:!pb-14 md:!pt-20">
      <div className="section-content flex flex-col gap-8 md:gap-[52px]">
        <motion.div
          className="flex w-full flex-col items-center gap-2 text-center md:gap-2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className="w-full text-sm font-normal leading-[22px] text-[#707070] md:leading-[32px]">
            THE JOURNEY
          </p>
          <h2 className="text-xl font-bold uppercase leading-[26px] text-[#292929] md:text-4xl md:leading-[48px] md:tracking-[1px]">
            Lộ trình kiến tạo sự nghiệp
          </h2>
        </motion.div>

        <div className="relative flex flex-col gap-6 rounded-[20px] md:flex-row md:gap-5 xl:gap-10">
          {TIMELINE.map((item, i) => {
            const isLast = i === TIMELINE.length - 1;
            return (
              <motion.div
                key={item.n}
                className={`relative z-[1] flex flex-col items-center gap-4 md:flex-1 md:gap-7 ${
                  isLast
                    ? ''
                    : "md:after:absolute md:after:left-1/2 md:after:top-[30px] md:after:z-[-1] md:after:w-[calc(100%+1.25rem)] md:after:border-t-2 md:after:border-dashed md:after:border-[#7b93c7] md:after:opacity-80 md:after:content-['']"
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.15 }}
              >
                <motion.div
                  className="relative flex size-10 items-center justify-center rounded-bl-[12px] rounded-br-[4px] rounded-tl-[4px] rounded-tr-[12px] bg-linear-to-b from-[#3192e3] to-[#01386f] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] md:size-[60px]"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1], delay: i * 0.15 + 0.1 }}
                >
                  <span className="text-lg font-extrabold leading-[32px] text-white md:text-2xl">
                    {item.n}
                  </span>
                </motion.div>
                <motion.div
                  className="flex w-full flex-col items-center gap-1 text-center md:gap-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.15 + 0.22 }}
                >
                  <p className="text-sm font-semibold leading-[1.48] tracking-[0.14px] text-[#00377c] md:text-lg md:tracking-[0.18px]">
                    {item.period}
                  </p>
                  <div className="flex w-full flex-col gap-2 md:gap-4">
                    <p className="text-base font-bold leading-[22px] text-[#292929] md:text-2xl md:leading-[32px]">
                      {item.title}
                    </p>
                    <div className="text-sm font-normal leading-[20px] text-[#474747] md:text-base md:leading-[22px]">
                      {item.body}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
