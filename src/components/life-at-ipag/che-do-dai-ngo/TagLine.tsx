'use client';

export default function TagLine({ text }: { text: string }) {
  return (
    <div className="flex justify-start">
      <span className="inline-flex w-fit items-center rounded-[4px] bg-[#d9e6f2] px-2 py-1 text-[12px] font-semibold leading-[140%] text-[#707070]">
        {text}
      </span>
    </div>
  );
}
