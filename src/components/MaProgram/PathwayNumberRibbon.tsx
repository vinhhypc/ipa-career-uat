export default function PathwayNumberRibbon({ n }: { n: number }) {
  return (
    <div
      className="pointer-events-none absolute right-0 top-0 z-10 flex h-[33px] w-12 items-start justify-center overflow-visible md:h-[45px] md:w-[65px] md:top-[-6px]"
      aria-hidden
    >
      <div
        className="flex h-[33px] w-full items-center justify-center bg-gradient-to-br from-[#ff8c42] to-[#e85d04] pb-0.5 pt-1 md:h-[45px] md:pt-1.5"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 72%, 50% 100%, 0 72%)',
        }}
      >
        <span className="font-extrabold leading-none text-[14px] text-white md:text-[20px]">
          {n}
        </span>
      </div>
    </div>
  );
}
