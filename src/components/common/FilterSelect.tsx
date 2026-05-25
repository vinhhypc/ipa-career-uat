'use client';

import { ChevronDown } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { createPortal } from 'react-dom';

import { useApi } from '@/hooks/useApi';

type SelectOption = { label: string; value: string };

type CodebookItem = {
  code: string;
  name: string;
  description?: string;
  children?: unknown[];
};

type CodebookResponse = {
  content: CodebookItem[];
  totalElements?: number;
  totalPages?: number;
};

const CODEBOOK_RESPONSE_CACHE = new Map<string, CodebookResponse>();
const CODEBOOK_INFLIGHT = new Map<string, Promise<CodebookResponse>>();

type FilterSelectProps = {
  selectKey: string;
  openKey: string | null;
  setOpenKey: Dispatch<SetStateAction<string | null>>;
  value: string;
  onChange: (value: string) => void;
  defaultLabel: string;
  textSize?: string;
  options?: SelectOption[];
  subDomainCode?: string;
  defaultOption?: SelectOption;
};

function uniqueByValue(options: SelectOption[]) {
  const seen = new Set<string>();
  const result: SelectOption[] = [];
  for (const option of options) {
    if (seen.has(option.value)) continue;
    seen.add(option.value);
    result.push(option);
  }
  return result;
}

export default function FilterSelect({
  selectKey,
  openKey,
  setOpenKey,
  value,
  onChange,
  defaultLabel,
  textSize = 'text-base',
  options,
  subDomainCode,
  defaultOption,
}: FilterSelectProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const isOpen = openKey === selectKey;
  const [query, setQuery] = useState('');
  const [menuStyle, setMenuStyle] = useState<{
    left: number;
    top: number;
    width: number;
    maxHeight: number;
  } | null>(null);

  const { data, loading, error, execute } = useApi<CodebookResponse>(
    async () => {
      if (!subDomainCode) {
        return { content: [] };
      }

      const cached = CODEBOOK_RESPONSE_CACHE.get(subDomainCode);
      if (cached) {
        return cached;
      }

      const inflight = CODEBOOK_INFLIGHT.get(subDomainCode);
      if (inflight) {
        return inflight;
      }

      const requestPromise = (async () => {
        const url = new URL('/api/codebook/query', window.location.origin);
        url.searchParams.set('page', '1');
        url.searchParams.set('size', '2000');
        url.searchParams.set('subDomainCode', subDomainCode);

        const response = await fetch(url.toString());
        if (!response.ok) {
          throw new Error(`Codebook request failed: ${response.status}`);
        }
        return (await response.json()) as CodebookResponse;
      })();

      CODEBOOK_INFLIGHT.set(subDomainCode, requestPromise);
      try {
        const result = await requestPromise;
        CODEBOOK_RESPONSE_CACHE.set(subDomainCode, result);
        return result;
      } finally {
        CODEBOOK_INFLIGHT.delete(subDomainCode);
      }
    },
    { immediate: false },
  );

  useEffect(() => {
    if (!subDomainCode) return;
    if (options?.length) return;
    execute();
  }, [execute, options, subDomainCode]);

  const derivedOptions: SelectOption[] = (() => {
    const staticOptions = options ?? [];
    const apiOptions =
      subDomainCode && data?.content?.length
        ? data.content
            .filter(
              (item) => item && typeof item.code === 'string' && typeof item.name === 'string',
            )
            .map((item) => ({ value: item.code, label: item.name }))
        : [];

    const merged = defaultOption
      ? [defaultOption, ...(subDomainCode ? apiOptions : staticOptions)]
      : subDomainCode
        ? apiOptions
        : staticOptions;
    return uniqueByValue(merged);
  })();

  const selectedLabel = derivedOptions.find((opt) => opt.value === value)?.label ?? defaultLabel;

  const close = useCallback(() => {
    setOpenKey(null);
    setQuery('');
  }, [setOpenKey]);

  const updateMenuPosition = useCallback(() => {
    const buttonEl = buttonRef.current;
    if (!buttonEl) return;

    const rect = buttonEl.getBoundingClientRect();
    const maxListHeight = 220;
    const headerHeight = 56;
    const spaceBelow = window.innerHeight - rect.bottom;

    const maxHeight = Math.max(96, Math.min(maxListHeight, spaceBelow - headerHeight - 12));

    const top = rect.bottom + 8;
    const left = Math.min(Math.max(8, rect.left), window.innerWidth - rect.width - 8);

    setMenuStyle({
      left,
      top,
      width: rect.width,
      maxHeight,
    });
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    requestAnimationFrame(() => searchInputRef.current?.focus());
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    updateMenuPosition();
    const handleScroll = () => updateMenuPosition();
    const handleResize = () => updateMenuPosition();
    window.addEventListener('scroll', handleScroll, true);
    window.addEventListener('resize', handleResize);
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      const wrapEl = wrapRef.current;
      const menuEl = menuRef.current;
      if (!wrapEl) return;
      if (wrapEl.contains(target)) return;
      if (menuEl?.contains(target)) return;
      close();
    };
    window.addEventListener('pointerdown', handlePointerDown);
    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('scroll', handleScroll, true);
      window.removeEventListener('resize', handleResize);
    };
  }, [close, isOpen, updateMenuPosition]);

  const normalizedQuery = query.trim().toLowerCase();
  const visibleOptions = normalizedQuery
    ? derivedOptions.filter((opt) => {
        const label = opt.label.toLowerCase();
        const value = opt.value.toLowerCase();
        return label.includes(normalizedQuery) || value.includes(normalizedQuery);
      })
    : derivedOptions;

  const maxVisibleOptions = 5;
  const optionRowHeight = 44;
  const desiredListHeight = Math.max(
    56,
    optionRowHeight * Math.min(visibleOptions.length || 1, maxVisibleOptions),
  );
  const listMaxHeight = menuStyle
    ? Math.min(menuStyle.maxHeight, desiredListHeight)
    : desiredListHeight;

  return (
    <div ref={wrapRef} className="relative w-full xl:flex-1">
      <button
        ref={buttonRef}
        type="button"
        className={`flex h-10 w-full cursor-pointer items-center justify-between rounded-lg border border-[rgba(7,7,7,0.18)] bg-white px-3 py-2.5 text-left font-medium leading-[1.4] text-[#474747] transition-colors duration-200 hover:border-[rgba(0,43,91,0.35)] hover:bg-white/95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0c71c7]/25 lg:min-h-12 lg:px-4 lg:py-2.5 lg:text-base ${textSize} lg:!text-base`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => {
          if (isOpen) {
            close();
            return;
          }
          setOpenKey(selectKey);
        }}
      >
        <span className="truncate">{selectedLabel}</span>
        <ChevronDown
          className={`size-7 shrink-0 text-[#474747] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          strokeWidth={1.75}
          aria-hidden
        />
      </button>

      {isOpen && menuStyle && typeof document !== 'undefined'
        ? createPortal(
            <div
              ref={menuRef}
              className="fixed z-50 overflow-hidden rounded-lg border border-[rgba(7,7,7,0.18)] bg-white shadow-[0px_12px_32px_0px_rgba(0,43,91,0.18)]"
              style={{ left: menuStyle.left, top: menuStyle.top, width: menuStyle.width }}
            >
              <div className="border-b border-[rgba(7,7,7,0.12)] p-2 lg:p-2.5">
                <label className="sr-only" htmlFor={`${selectKey}-filter`}>
                  Lọc lựa chọn
                </label>
                <input
                  ref={searchInputRef}
                  id={`${selectKey}-filter`}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Gõ để lọc..."
                  className="h-9 w-full rounded-md border border-[rgba(7,7,7,0.18)] bg-white px-3 text-sm text-[#474747] outline-none placeholder:text-[#707070] focus:border-[rgba(0,43,91,0.55)] focus:ring-2 focus:ring-[#0c71c7]/20 lg:h-10 lg:text-base"
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') {
                      e.preventDefault();
                      close();
                    }
                    if (e.key === 'Enter') {
                      e.preventDefault();
                    }
                  }}
                />
              </div>
              {loading ? (
                <div className="px-3 py-2.5 text-left text-sm leading-[1.4] text-[#707070] lg:px-4 lg:text-base">
                  Đang tải...
                </div>
              ) : error ? (
                <div className="px-3 py-2.5 text-left text-sm leading-[1.4] text-[#707070] lg:px-4 lg:text-base">
                  Không tải được dữ liệu
                </div>
              ) : (
                <div
                  role="listbox"
                  className="filter-select-scroll overflow-y-auto overscroll-contain py-1"
                  style={{ maxHeight: listMaxHeight }}
                >
                  {visibleOptions.length ? (
                    visibleOptions.map((opt) => {
                      const isSelected = opt.value === value;
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          role="option"
                          aria-selected={isSelected}
                          className={`w-full px-3 py-2.5 text-left text-sm leading-[1.4] text-[#474747] transition-colors duration-150 hover:bg-black/5 lg:px-4 lg:text-base ${
                            isSelected ? 'bg-black/5 font-semibold' : 'font-medium'
                          }`}
                          onClick={() => {
                            onChange(opt.value);
                            close();
                          }}
                        >
                          {opt.label}
                        </button>
                      );
                    })
                  ) : (
                    <div className="px-3 py-2.5 text-left text-sm leading-[1.4] text-[#707070] lg:px-4 lg:text-base">
                      Không có kết quả
                    </div>
                  )}
                </div>
              )}
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
