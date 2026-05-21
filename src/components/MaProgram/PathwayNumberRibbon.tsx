import Image from 'next/image';

export default function PathwayNumberRibbon({ n }: { n: number }) {
  return (
    <div
      className="pointer-events-none absolute -right-px -top-px z-10 h-[33px] w-[47px] overflow-visible md:top-[-6px] md:h-[45px] md:w-[65px]"
      aria-hidden
    >
      <Image alt="" src="/ma-program/figma/pathway-tag.svg" width={65} height={45} className="h-full w-full" />
      <span
        className="absolute font-extrabold leading-none text-sm text-white md:text-xl"
        style={{ left: '56%', top: '6.7%', transform: 'translateX(-50%)' }}
      >
        {n}
      </span>
    </div>
  );
}
