'use client';

import Link from 'next/link';
import { Check, ChevronDown } from 'lucide-react';
import { useState } from 'react';

import { PATHWAYS } from './constants';
import PathwayNumberRibbon from './PathwayNumberRibbon';

export default function PathwaysSection() {
  const [openPathwayIndex, setOpenPathwayIndex] = useState<number | null>(null);

  return (
    <section className="section-padding max-md:!py-11 bg-gradient-to-b from-[#fef6eb] to-white to-[72%] md:!py-20">
      <div className="section-content flex flex-col gap-8 md:gap-[52px]">
        <div className="flex w-full flex-col items-center">
          <h2 className="text-center text-[20px] font-bold uppercase leading-[32px] tracking-[1px] text-[#292929] md:text-[40px] md:font-extrabold md:leading-[60px]">
            7 PATHWAYS
          </h2>
        </div>

        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-x-5 md:gap-y-6">
          {PATHWAYS.map((p, i) => {
            const isBlue = p.variant === 'blue';
            const isActive = i === openPathwayIndex;
            return (
              <div
                key={p.n}
                className="relative overflow-visible rounded-[28px] md:rounded-[32px]"
              >
                <PathwayNumberRibbon n={p.n} />
                <div className="overflow-hidden rounded-[28px] bg-white shadow-[0px_4px_15px_0px_rgba(0,0,0,0.12)] md:rounded-[32px]">
                  <button
                    type="button"
                    onClick={() => setOpenPathwayIndex((prev) => (prev === i ? null : i))}
                    aria-expanded={isActive}
                    aria-controls={`pathway-panel-${p.n}`}
                    className={`flex w-full items-end gap-2 px-4 py-5 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fbc17b]/70 md:px-7 md:py-8 ${
                      isBlue
                        ? 'bg-gradient-to-br from-[#3192e3] to-[#01386f] text-white'
                        : 'bg-gradient-to-br from-[#ffe4c4] to-[#fbbf76] text-[#292929]'
                    }`}
                  >
                    <div className="flex min-w-0 flex-1 flex-col gap-2 md:gap-2">
                      <p className="text-[16px] font-bold leading-[24px] md:text-[24px] md:leading-[32px]">
                        {p.title}
                      </p>
                      <div
                        className={`text-[14px] font-medium leading-[20px] md:text-[18px] md:leading-[26px] ${
                          isBlue ? 'text-white' : 'text-[#474747]'
                        }`}
                      >
                        {p.description}
                      </div>
                    </div>
                    <div
                      className={`relative z-20 flex size-6 shrink-0 items-center justify-center rounded-full border p-1 md:size-7 ${
                        isBlue ? 'border-white bg-[#06427c]' : 'border-[#707070] bg-[#fff1df]'
                      }`}
                      aria-hidden
                    >
                      <ChevronDown
                        className={`size-5 transition-transform md:size-7 ${
                          isActive ? 'rotate-180' : ''
                        } ${isBlue ? 'text-white' : 'text-[#474747]'}`}
                        strokeWidth={2}
                      />
                    </div>
                  </button>

                  <div
                    id={`pathway-panel-${p.n}`}
                    className={`overflow-hidden bg-white transition-[max-height,opacity,transform] duration-300 ease-out motion-reduce:transition-none ${
                      isActive
                        ? 'max-h-[520px] opacity-100 translate-y-0'
                        : 'max-h-0 opacity-0 -translate-y-1'
                    }`}
                  >
                    <div className="flex flex-col gap-3 px-4 pt-4 md:px-7 md:pt-4">
                      <p className="text-[14px] font-bold leading-[22px] text-[#474747] md:text-[16px] md:leading-[26px]">
                        KEY WORK
                      </p>
                      <ul className="space-y-2">
                        {p.keyWork.map((line) => (
                          <li
                            key={line}
                            className="flex gap-2 text-[14px] leading-[20px] text-[#474747] md:text-[16px] md:leading-[22px]"
                          >
                            <Check
                              className="mt-0.5 size-5 shrink-0 text-[#00377c]"
                              strokeWidth={2}
                              aria-hidden
                            />
                            <span className="min-w-0 flex-1">{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mx-4 mt-4 h-px bg-black/10 md:mx-7" aria-hidden />

                    <p className="px-4 pb-5 pt-4 text-[14px] font-normal leading-[22px] text-[#474747] md:px-7 md:pb-8">
                      <span className="font-semibold italic">Phù hợp:</span>{' '}
                      <span className="italic">{p.fit}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          <div
            className="flex w-full flex-col items-center gap-4 rounded-[28px] px-7 py-5 shadow-[0px_4px_15px_0px_rgba(0,0,0,0.15)] md:rounded-[32px] md:gap-4 md:px-7 md:py-5"
            style={{
              backgroundImage: 'linear-gradient(-84.74deg, #3192e3 18.66%, #01386f 101.28%)',
            }}
          >
            <p className="w-full text-center text-[16px] font-bold uppercase leading-[22px] tracking-[0.5px] text-white md:text-[24px] md:leading-[32px]">
              Bạn đã sẵn sàng?
            </p>
            <Link
              href="/we-look-for"
              className="flex h-9 w-full items-center justify-center rounded-full bg-gradient-to-br from-white to-[#fff1e1] px-3 py-2.5 text-[14px] font-bold leading-[1.4] text-[#070707] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] md:h-10 md:w-[220px] md:text-[16px]"
            >
              <span className="md:hidden">NỘP HỒ SƠ NGAY</span>
              <span className="hidden md:inline">Nộp hồ sơ ngay</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
