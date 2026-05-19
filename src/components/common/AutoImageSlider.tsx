'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';

type AutoImageSliderProps = {
  images: readonly string[];
  alt: string;
  intervalMs?: number;
  transitionMs?: number;
  sizes?: string;
  className?: string;
  imageClassName?: string;
  overlayStyle?: CSSProperties;
  overlayClassName?: string;
  showDots?: boolean;
  dotsContainerClassName?: string;
  activeDotClassName?: string;
  inactiveDotClassName?: string;
};

export default function AutoImageSlider({
  images,
  alt,
  intervalMs = 5000,
  transitionMs = 200,
  sizes,
  className,
  imageClassName,
  overlayStyle,
  overlayClassName,
  showDots = true,
  dotsContainerClassName,
  activeDotClassName = 'h-2 w-6 rounded-full bg-white transition-all duration-300 cursor-pointer',
  inactiveDotClassName = 'h-2 w-2 rounded-full bg-white/60 transition-all duration-300 cursor-pointer',
}: AutoImageSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const safeActiveIndex =
    images.length === 0 ? 0 : ((activeIndex % images.length) + images.length) % images.length;

  useEffect(() => {
    if (images.length <= 1) return;

    intervalRef.current = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, intervalMs);

    return () => {
      if (intervalRef.current === null) return;
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [images.length, intervalMs]);

  const handleSelect = (index: number) => {
    setActiveIndex(index);

    if (intervalRef.current === null) return;
    window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, intervalMs);
  };

  if (images.length === 0) return null;

  return (
    <div className={className}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={images[safeActiveIndex]}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: transitionMs / 1000, ease: 'easeOut' }}
        >
          <Image
            src={images[safeActiveIndex]}
            alt={alt}
            fill
            className={imageClassName}
            sizes={sizes}
          />
        </motion.div>
      </AnimatePresence>

      {overlayStyle ? (
        <div
          aria-hidden
          className={overlayClassName ?? 'pointer-events-none absolute inset-0'}
          style={overlayStyle}
        />
      ) : null}

      {showDots && images.length > 1 ? (
        <div className={dotsContainerClassName}>
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              aria-label={`Chuyển tới ảnh ${index + 1}`}
              onClick={() => handleSelect(index)}
              className={index === safeActiveIndex ? activeDotClassName : inactiveDotClassName}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
