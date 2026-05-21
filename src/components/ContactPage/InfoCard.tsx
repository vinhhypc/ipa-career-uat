import type { ReactNode } from 'react';

export default function InfoCard({
  icon,
  label,
  title,
  desc,
}: {
  icon: ReactNode;
  label: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="h-full rounded-[32px] bg-white px-7 py-8 shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
      <div className="flex items-start gap-5">
        <div className="shrink-0">{icon}</div>
        <div className="min-w-0">
          <p className="text-sm font-normal uppercase text-[#474747]">{label}</p>
          <p className="mt-1 break-words text-xl font-bold leading-8 text-[#002b5b]">{title}</p>
          <p className="mt-2 text-base leading-6 text-[#474747]">{desc}</p>
        </div>
      </div>
    </div>
  );
}
