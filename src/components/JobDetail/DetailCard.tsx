import type { ReactNode } from 'react';

type DetailCardProps = {
  title: string;
  children: ReactNode;
};

export default function DetailCard({ title, children }: DetailCardProps) {
  return (
    <section className="rounded-[20px] bg-white px-4 py-5 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)] lg:rounded-[32px] lg:px-10 lg:py-8">
      <div className="mb-4 border-b border-black/10 pb-3 lg:mb-5 lg:pb-4">
        <h2 className="text-[20px] leading-[30px] font-extrabold tracking-[0.5px] text-[#292929] lg:text-[24px] lg:leading-[38px]">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
