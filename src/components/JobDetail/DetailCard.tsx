import type { ReactNode } from 'react';

type DetailCardProps = {
  title: string;
  children: ReactNode;
};

export default function DetailCard({ title, children }: DetailCardProps) {
  return (
    <section className="rounded-[20px] bg-white px-4 py-5 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)] lg:rounded-[28px] lg:px-8 lg:py-7 2xl:rounded-[32px] 2xl:px-10 2xl:py-8">
      <div className="mb-4 border-b border-black/10 pb-3 lg:mb-5 lg:pb-4">
        <h2 className="text-xl leading-[30px] font-extrabold tracking-[0.5px] text-[#292929] lg:text-xl lg:leading-[34px] 2xl:text-2xl 2xl:leading-[38px]">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
