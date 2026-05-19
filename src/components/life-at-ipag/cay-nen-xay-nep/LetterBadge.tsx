'use client';

import Image from 'next/image';

export type LetterBadgeProps = {
  letter: string;
  active: boolean;
};

export default function LetterBadge({ letter, active }: LetterBadgeProps) {
  const src =
    letter === 'I'
      ? '/life-at-ipag/cay-nen-xay-nep/figma/letter-i.svg'
      : letter === 'P'
        ? '/life-at-ipag/cay-nen-xay-nep/figma/letter-p.svg'
        : letter === 'A'
          ? '/life-at-ipag/cay-nen-xay-nep/figma/letter-a.svg'
          : letter === 'G'
            ? '/life-at-ipag/cay-nen-xay-nep/figma/letter-g.svg'
            : '';

  return (
    <div className={`relative size-[60px] shrink-0 ${active ? 'drop-shadow-md' : 'opacity-85'}`}>
      {src ? (
        <Image
          src={src}
          alt={letter}
          fill
          className={`object-contain transition-transform duration-300 ${active ? 'scale-105' : ''}`}
        />
      ) : (
        <div
          className="flex size-[60px] items-center justify-center rounded-full text-lg font-extrabold text-white shadow-sm"
          style={{
            background: active
              ? 'linear-gradient(145deg, #0c71c7 0%, #013a72 100%)'
              : 'linear-gradient(145deg, #6cb3ff 0%, #145194 100%)',
          }}
        >
          {letter}
        </div>
      )}
    </div>
  );
}
