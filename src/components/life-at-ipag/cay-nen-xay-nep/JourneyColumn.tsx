'use client';

import { useState } from 'react';

export type JourneyStep = { title: string; body: string };

export type JourneyColumnProps = {
  acronym: string;
  subtitle: string;
  steps: readonly JourneyStep[];
};

/** Renders a journey column and highlights the hovered step together with its timeline dot. */
export default function JourneyColumn({ acronym, subtitle, steps }: JourneyColumnProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="flex h-full w-full max-w-[520px] flex-col">
      <div>
        <p className="text-lg font-normal tracking-wide text-[#fbc17b] md:text-xl">{acronym}</p>
        <p className="mt-1 text-xl font-bold text-white md:text-2xl">{subtitle}</p>
      </div>
      <div className="relative mt-6 flex-1 border-l-2 border-[rgba(254,179,122,0.45)] pl-6">
        {steps.map((s, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={s.title}
              className="relative pb-5 last:pb-0"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <span
                className={`absolute -left-[32px] top-5 size-3.5 rounded-full border-[3px] transition-all duration-300 ${
                  isActive
                    ? 'scale-110 border-[#001b38] bg-[#ffd39d] shadow-[0_0_24px_rgba(254,179,122,0.9)]'
                    : 'border-[#002b5b] bg-[#fbc17a] shadow-[0_0_16px_rgba(254,179,122,0.55)]'
                }`}
              />
              <div
                className={`rounded-[18px] border px-5 py-4 backdrop-blur-md transition-all duration-300 ${
                  isActive
                    ? 'border-[rgba(251,193,123,0.95)] bg-[rgba(202,230,255,0.2)] shadow-[0_16px_36px_rgba(0,0,0,0.18)]'
                    : 'border-[rgba(123,193,255,0.55)] bg-[rgba(202,230,255,0.12)] shadow-[0_10px_26px_rgba(0,0,0,0.10)]'
                }`}
              >
                <p
                  className={`text-sm font-bold transition-colors duration-300 md:text-base ${
                    isActive ? 'text-[#ffd39d]' : 'text-[#fbc17b]'
                  }`}
                >
                  {s.title}
                </p>
                <p
                  className={`mt-2 text-sm leading-relaxed transition-colors duration-300 md:text-base ${
                    isActive ? 'text-white' : 'text-white/90'
                  }`}
                >
                  {s.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
