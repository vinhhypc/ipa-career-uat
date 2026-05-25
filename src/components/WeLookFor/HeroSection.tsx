'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';

import FilterSelect from '@/components/common/FilterSelect';
import { ASSETS } from './constants';

type HeroFilterOption = { label: string; value: string };
type HeroSectionProps = {
  codebookOptions: Partial<
    Record<'domain' | 'business' | 'program' | 'location', HeroFilterOption[]>
  >;
};

type HeroFilterConfig = {
  key: string;
  defaultLabel: string;
  textSize: string;
  options?: HeroFilterOption[];
  defaultOption?: HeroFilterOption;
};

export default function HeroSection({ codebookOptions }: HeroSectionProps) {
  const router = useRouter();
  const filters = useMemo<HeroFilterConfig[]>(
    () => [
      {
        key: 'domain',
        defaultLabel: 'Tất cả Domain',
        textSize: 'text-sm',
        options: codebookOptions.domain ?? [],
        defaultOption: { label: 'Tất cả Domain', value: 'all' },
      },
      {
        key: 'business',
        defaultLabel: 'Tất cả Business Line',
        textSize: 'text-base',
        options: codebookOptions.business ?? [],
        defaultOption: { label: 'Business', value: 'all' },
      },
      {
        key: 'program',
        defaultLabel: 'Tất cả Program Line',
        textSize: 'text-base',
        options: codebookOptions.program ?? [],
        defaultOption: { label: 'Program', value: 'all' },
      },
      {
        key: 'location',
        defaultLabel: 'Toàn quốc',
        textSize: 'text-base',
        options: codebookOptions.location ?? [],
        defaultOption: { label: 'Toàn quốc', value: 'all' },
      },
    ],
    [
      codebookOptions.business,
      codebookOptions.domain,
      codebookOptions.location,
      codebookOptions.program,
    ],
  );

  const [openFilter, setOpenFilter] = useState<string | null>(null);
  const [keyword, setKeyword] = useState('');
  const [selected, setSelected] = useState<Record<string, string>>(() =>
    Object.fromEntries(
      filters.map((filter) => [
        filter.key,
        filter.defaultOption?.value ?? filter.options?.[0]?.value ?? '',
      ]),
    ),
  );

  const handleSubmit = () => {
    const params = new URLSearchParams();

    const domain = selected.domain;
    if (domain && domain !== 'all') params.set('domain', domain);

    const businessLine = selected.business;
    if (businessLine && businessLine !== 'all') params.set('businessLine', businessLine);

    const program = selected.program;
    if (program && program !== 'all') params.set('program', program);

    const workAddress = selected.location;
    if (workAddress && workAddress !== 'all') params.set('workAddress', workAddress);

    const name = keyword.trim();
    if (name) params.set('name', name);

    const queryString = params.toString();
    router.push(queryString ? `/jobs?${queryString}` : '/jobs');
  };

  return (
    <section className="section-padding !pt-8 !pb-11 bg-[#faf9f7] lg:!py-20">
      <div className="section-content">
        <div className="flex flex-col items-stretch justify-center rounded-[32px]">
          <div
            className="relative flex w-full flex-col gap-6 overflow-hidden rounded-[20px] px-4 py-8 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] lg:gap-[52px] lg:rounded-[32px] lg:px-10 lg:py-[60px]"
            style={{
              backgroundImage:
                'linear-gradient(178deg, rgba(246, 252, 255, 1) 2%, rgba(184, 221, 244, 1) 100%)',
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[20px] opacity-[0.38] mix-blend-overlay lg:rounded-[32px]"
            >
              <Image
                alt=""
                src={ASSETS.searchHeroTexture}
                fill
                priority
                sizes="100vw"
                className="object-fill"
              />
            </div>

            <div className="relative flex w-full flex-col items-center gap-2 text-center lg:gap-2">
              <div className="flex w-full flex-col gap-2 lg:gap-5">
                <h1 className="text-2xl font-bold uppercase leading-[38px] tracking-[1px] text-[#292929] lg:text-4xl 2xl:text-5xl 2xl:leading-[68px]">
                  CÙNG IPAG KIẾN TẠO SỰ NGHIỆP
                </h1>
                <p className="text-sm font-normal leading-[22px] text-[#474747] md:text-base lg:mx-auto lg:max-w-[1086px] 2xl:text-lg 2xl:leading-7 2xl:tracking-[0.18px]">
                  IPAG mở cơ hội giúp bạn làm chủ sự nghiệp tại nhiều vị trí. Chúng tôi tìm kiếm
                  những cộng sự ở mọi cấp độ để cùng kiến tạo di sản.
                </p>
              </div>
            </div>

            <form
              className="relative flex w-full flex-col gap-4 lg:gap-7"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <label className="sr-only" htmlFor="job-search">
                Tìm kiếm công việc
              </label>
              <div className="flex w-full cursor-text items-center gap-2 rounded-lg border border-[rgba(7,7,7,0.18)] bg-white px-3 py-2 transition-colors duration-200 hover:border-[rgba(0,43,91,0.35)] focus-within:border-[rgba(0,43,91,0.55)] focus-within:ring-2 focus-within:ring-[#0c71c7]/20 lg:gap-2 lg:px-4 lg:py-2.5">
                <Search
                  className="size-6 shrink-0 text-[#707070] lg:size-7"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <input
                  id="job-search"
                  type="search"
                  placeholder="Tìm kiếm công việc"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="min-w-0 flex-1 bg-transparent text-sm leading-[1.4] text-[#474747] outline-none placeholder:text-[#707070] lg:text-base"
                />
              </div>

              <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 xl:flex xl:flex-row xl:gap-5">
                {filters.map((filter) => {
                  return (
                    <FilterSelect
                      key={filter.key}
                      selectKey={filter.key}
                      openKey={openFilter}
                      setOpenKey={setOpenFilter}
                      value={selected[filter.key]}
                      onChange={(nextValue) =>
                        setSelected((prev) => ({ ...prev, [filter.key]: nextValue }))
                      }
                      defaultLabel={filter.defaultLabel}
                      textSize={filter.textSize}
                      options={filter.options}
                      defaultOption={filter.defaultOption}
                    />
                  );
                })}
              </div>

              <button
                type="submit"
                className="group mx-auto flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-full px-3 py-2.5 text-sm font-bold uppercase leading-[1.4] text-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0px_12px_24px_0px_rgba(0,43,91,0.28)] active:translate-y-0 active:shadow-[0px_6px_14px_0px_rgba(0,43,91,0.22)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0c71c7]/30 lg:h-12 lg:w-[466px] lg:gap-2 lg:text-lg"
                style={{
                  backgroundImage:
                    'linear-gradient(72.72deg, rgb(1, 58, 114) 3.48%, rgb(12, 113, 199) 83.47%)',
                }}
              >
                <Search
                  className="size-6 text-white transition-transform duration-200 group-hover:scale-110 lg:size-7"
                  strokeWidth={2}
                  aria-hidden
                />
                Tìm kiếm cơ hội
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
