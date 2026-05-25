'use client';

import { useCallback, useState } from 'react';

import JobsHeroSection from '@/components/jobs/JobsHeroSection';
import type { FilterConfig } from '@/components/jobs/types';

type JobsHeroControllerProps = {
  filters: FilterConfig[];
  initialKeyword: string;
  initialSelected: Record<string, string>;
  onNavigate: (href: string) => void;
};

export default function JobsHeroController({
  filters,
  initialKeyword,
  initialSelected,
  onNavigate,
}: JobsHeroControllerProps) {
  const [openFilter, setOpenFilter] = useState<string | null>(null);
  const [keyword, setKeyword] = useState<string>(initialKeyword);
  const [selected, setSelected] = useState<Record<string, string>>(initialSelected);

  const handleSubmit = useCallback(() => {
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
    onNavigate(queryString ? `/jobs?${queryString}` : '/jobs');
  }, [
    keyword,
    onNavigate,
    selected.business,
    selected.domain,
    selected.location,
    selected.program,
  ]);

  return (
    <JobsHeroSection
      filters={filters}
      openFilter={openFilter}
      setOpenFilter={setOpenFilter}
      keyword={keyword}
      setKeyword={setKeyword}
      selected={selected}
      setSelected={setSelected}
      onSubmit={handleSubmit}
    />
  );
}
