'use client';

import { motion } from 'motion/react';

import { QUALIFICATIONS, SELECTION_STEPS } from './constants';
import MaApplyButton from './MaApplyButton';

export default function QualificationsSection() {
  return (
    <section
      className="section-padding max-md:!py-7 md:!py-20"
      style={{
        backgroundImage:
          'linear-gradient(160.3deg, rgba(170, 231, 255, 0.15) 4.3%, rgba(0, 116, 162, 0.15) 93.43%)',
      }}
    >
      <div className="section-content flex flex-col gap-8">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[minmax(0,1fr)_521px] md:gap-x-[100px] md:gap-y-0">
          <div className="flex flex-col gap-8 md:gap-[52px]">
            <motion.div
              className="flex w-full flex-col items-center gap-2 text-center md:items-start md:gap-2 md:text-left"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              <p className="w-full text-[14px] font-normal leading-[22px] text-[#707070] md:leading-[32px]">
                QUALIFICATIONS
              </p>
              <h2 className="text-[20px] font-bold uppercase leading-[26px] text-[#292929] md:text-[40px] md:leading-[1.4] md:tracking-[0.4px]">
                YÊU CẦU CHUNG
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-5 md:gap-y-10">
              {QUALIFICATIONS.map((q, i) => {
                const Icon = q.icon;
                return (
                  <motion.div
                    key={q.label}
                    className="flex flex-col gap-1 md:gap-2"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
                  >
                    <div className="flex items-center gap-2 md:gap-3">
                      <motion.div
                        className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm md:size-12 md:p-3"
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1], delay: i * 0.1 + 0.1 }}
                      >
                        <Icon
                          className={`size-[18px] md:size-6 ${q.iconClass}`}
                          strokeWidth={2}
                          aria-hidden
                        />
                      </motion.div>
                      <div className="flex flex-col gap-0.5 md:gap-1">
                        <p className="text-[10px] font-medium uppercase leading-[14px] text-[#707070] md:text-[14px] md:leading-[22px]">
                          {q.label}
                        </p>
                        <p className="text-[16px] font-bold leading-[22px] text-[#292929] md:text-[18px] md:leading-[28px]">
                          {q.value}
                        </p>
                      </div>
                    </div>
                    <div className="text-[14px] font-normal leading-[22px] text-[#474747] md:text-[16px] md:leading-[22px] md:whitespace-nowrap">
                      {q.detail}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
            >
              <MaApplyButton className="h-[52px] w-[276px] px-3 text-[18px] leading-[1.4]" />
            </motion.div>
          </div>

          <motion.div
            className="rounded-[20px] bg-white px-4 py-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] md:w-[521px] md:max-w-full md:rounded-[32px] md:px-10 md:py-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="flex flex-col gap-4 md:flex-row md:gap-7">
              <div className="flex min-w-0 flex-1 flex-col gap-4 md:gap-6">
                <motion.h3
                  className="text-[18px] font-bold leading-[24px] tracking-[0.18px] text-[#292929] md:text-[24px] md:leading-[33px] md:tracking-[0.24px]"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: 0.15 }}
                >
                  Quy trình tuyển chọn
                </motion.h3>
                <div className="relative flex flex-col gap-3">
                  <div
                    className="absolute bottom-2 left-[5px] top-2 z-0 border-l-2 border-dashed border-[#cacaca] opacity-70"
                    aria-hidden
                  />
                  {SELECTION_STEPS.map((label, i) => (
                    <motion.div
                      key={label}
                      className="relative z-[1] flex items-center gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.1 + 0.2 }}
                    >
                      <motion.div
                        className="size-3 shrink-0 rounded-full border-2 border-[#3192e3] bg-white"
                        aria-hidden
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1], delay: i * 0.1 + 0.25 }}
                      />
                      <motion.div
                        className={`flex min-w-0 flex-1 cursor-default items-center gap-2 rounded-xl border border-[rgba(123,193,255,0.6)] bg-[rgba(202,230,255,0.18)] px-[13px] py-[5px] backdrop-blur-[12px] md:w-full md:max-w-[400px] md:rounded-[20px] md:px-[17px] md:py-[9px] ${
                          i === 0 ? 'md:gap-4' : ''
                        }`}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                      >
                        <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#d9e6f2] md:size-10">
                          <span className="text-[16px] font-bold leading-[24px] text-[#002b5b]">
                            {i + 1}
                          </span>
                        </div>
                        <p className="text-[14px] font-semibold leading-7 text-[#474747] md:text-[18px] md:leading-[28px]">
                          {label}
                        </p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center md:hidden"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        >
          <MaApplyButton className="h-9 min-w-[208px] px-3 py-2.5 text-[14px] leading-[1.4]" />
        </motion.div>
      </div>
    </section>
  );
}
