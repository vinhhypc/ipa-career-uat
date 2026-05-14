'use client';

import { motion } from 'motion/react';
import { RECRUITMENT_STEPS } from './constants';
import {
  CARD_REVEAL_VARIANTS,
  FADE_UP_VARIANTS,
  REVEAL_VIEWPORT,
  STAGGER_PARENT,
} from '@/components/home/home-motion';

function DiamondStep({ n, bg, blur }: { n: string; bg: string; blur: string }) {
  return (
    <div className="relative z-10 flex justify-center">
      <div className="flex size-[68px] items-center justify-center lg:size-[113px]">
        <div className="flex size-12 rotate-45 items-center justify-center rounded shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] lg:size-20">
          <div
            className={`relative flex size-12 items-center justify-center rounded lg:size-20 ${bg}`}
          >
            <div
              className={`pointer-events-none absolute inset-0 rounded opacity-30 blur-sm lg:blur-[4px] ${blur}`}
              aria-hidden
            />
            <span className="-rotate-45 font-extrabold text-[18px] leading-8 text-white lg:text-2xl lg:leading-8">
              {n}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RecruitmentSection() {
  return (
    <section className="section-padding !pb-16 bg-white lg:!py-20">
      <div className="section-content flex flex-col gap-8 lg:gap-[52px]">
        <motion.div
          className="flex w-full flex-col gap-2 text-center lg:gap-5"
          variants={STAGGER_PARENT}
          initial="hidden"
          whileInView="show"
          viewport={REVEAL_VIEWPORT}
        >
          <motion.h2
            variants={FADE_UP_VARIANTS}
            className="text-[20px] font-bold uppercase leading-8 tracking-[1px] text-[#292929] lg:text-[40px] lg:leading-[48px]"
          >
            QUY TRÌNH TUYỂN DỤNG
          </motion.h2>
          <motion.p
            variants={FADE_UP_VARIANTS}
            className="text-[14px] font-normal leading-5 text-[#474747] lg:mx-auto lg:max-w-[960px] lg:text-lg lg:leading-7"
          >
            Quy trình tuyển dụng tại IPAG được thiết kế để tìm kiếm sự cộng hưởng tối ưu giữa tài
            năng và văn hóa hệ sinh thái.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col rounded-[20px] lg:flex-row lg:items-stretch lg:gap-5"
          variants={STAGGER_PARENT}
          initial="hidden"
          whileInView="show"
          viewport={REVEAL_VIEWPORT}
        >
          {RECRUITMENT_STEPS.map((step) => (
            <motion.div
              key={step.n}
              variants={CARD_REVEAL_VARIANTS}
              className="flex flex-col pb-8 last:pb-0 lg:flex-1 lg:self-stretch lg:pb-[60px] lg:last:pb-[60px]"
            >
              <div className="relative z-0 flex flex-1 flex-col transition-transform duration-200 ease-out will-change-transform hover:z-20 hover:scale-[1.02] motion-reduce:transform-none">
                <div className="relative z-0 mb-[-32px] flex flex-1 flex-col items-center gap-4 rounded-[20px] bg-white px-5 pb-10 pt-5 shadow-[0px_4px_15px_0px_rgba(0,0,0,0.12)] lg:mb-[-60px] lg:gap-6 lg:rounded-[32px] lg:px-5 lg:pb-20 lg:pt-10">
                  <img alt="" src={step.icon} className="size-8 shrink-0 lg:size-10" />
                  <div className="flex flex-col gap-1 text-center lg:gap-2">
                    <h3 className="text-[16px] font-bold leading-6 text-[#292929] lg:text-2xl lg:leading-[34px]">
                      {step.title}
                    </h3>
                    <div className="text-[14px] font-normal leading-5 text-[#474747] lg:text-base lg:leading-6">
                      <div className="lg:hidden">
                        {step.lines.map((line, li) => (
                          <p key={li} className="mb-0">
                            {line}
                          </p>
                        ))}
                      </div>
                      <div className="hidden lg:block">
                        {step.linesLg.map((line, li) => (
                          <p key={li} className="mb-0">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <DiamondStep n={step.n} bg={step.diamond} blur={step.blur} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
