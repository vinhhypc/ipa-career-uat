'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';

const FOUNDATION_STATS = [
  {
    label: 'SỐ CÔNG TY THÀNH VIÊN',
    value: 32,
    suffix: '+',
    desc: 'Hệ sinh thái đa lĩnh vực với nhiều cơ hội nghề nghiệp',
  },
  {
    label: 'SỐ LƯỢNG CBNV',
    value: 4500,
    suffix: '+',
    desc: 'Cộng đồng cộng sự cùng kết nối và tạo giá trị mỗi ngày.',
  },
  {
    label: 'TỔNG TÀI SẢN HỢP NHẤT (TỶ VNĐ)',
    value: 11233,
    suffix: '',
    desc: 'Nền tảng vững chắc cho sự phát triển dài hạn',
  },
] as const;

const FOUNDATION_STATS_OBSERVER_THRESHOLD = 0.35;
const FOUNDATION_COUNT_DURATION_MS = 2200;

export default function FoundationSection() {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(0);
  const numberFormatter = useMemo(() => new Intl.NumberFormat('vi-VN'), []);
  const animatedValues = useMemo(
    () => FOUNDATION_STATS.map((item) => Math.round(item.value * animationProgress)),
    [animationProgress],
  );

  useEffect(() => {
    const element = statsRef.current;
    if (!element || hasStarted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry?.isIntersecting) return;
        setHasStarted(true);
        observer.disconnect();
      },
      { threshold: FOUNDATION_STATS_OBSERVER_THRESHOLD },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const durationMs = FOUNDATION_COUNT_DURATION_MS;
    const startAt = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startAt) / durationMs, 1);
      const eased = 1 - (1 - progress) ** 5;
      setAnimationProgress(eased);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [hasStarted]);

  return (
    <section className="relative overflow-hidden bg-[#0d2748] py-4 md:py-10 xl:h-[392px] xl:py-0">
      <Image
        src="/home/foundation-bg.png"
        alt=""
        fill
        className="object-cover object-center opacity-25 saturate-105"
        sizes="100vw"
      />
      <div className="relative z-10  mx-auto w-full px-5 py-8 text-white md:px-2 lg:px-4 xl:px-6 2xl:px-10 xl:pt-[79px]">
        <h2 className="text-center text-2xl font-bold uppercase leading-[1.35] tracking-[0.8px] md:text-3xl md:leading-[44px] lg:text-3xl lg:leading-[48px] xl:text-4xl xl:leading-[60px] xl:tracking-[1px]">
          Nền tảng cho những hành trình sự nghiệp bền vững
        </h2>

        <div
          ref={statsRef}
          className="mx-auto mt-8 grid max-w-[410px] gap-8 md:mt-10 md:max-w-6xl md:grid-cols-3 xl:mt-[52px] xl:max-w-7xl xl:gap-x-8 2xl:mx-0 2xl:max-w-none"
        >
          {FOUNDATION_STATS.map((item, index) => (
            <article key={item.label} className="flex flex-col gap-2 text-center md:min-w-0">
              <p className="text-4xl font-extrabold leading-[1.15] text-[#fbc17b] tabular-nums md:text-3xl md:leading-[1.2] lg:text-4xl xl:text-4xl xl:leading-[52.8px]">
                <span className="inline-flex items-baseline justify-center whitespace-nowrap">
                  <span>{numberFormatter.format(animatedValues[index] ?? 0)}</span>
                  <span>{item.suffix}</span>
                </span>
              </p>
              <p className="text-base font-normal uppercase leading-[20px] tracking-[0.16px] text-white/85 md:text-base md:leading-[20px] xl:leading-[22.4px]">
                {item.label}
              </p>
              <p className="mx-auto max-w-[380px] text-xs leading-[20px] tracking-[0.16px] text-white/85 md:max-w-50 lg:max-w-72 xl:max-w-full md:line-clamp-2 md:text-sm md:leading-[20px] 2xl:max-w-none 2xl:line-clamp-none 2xl:text-base xl:leading-[22.4px]">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
