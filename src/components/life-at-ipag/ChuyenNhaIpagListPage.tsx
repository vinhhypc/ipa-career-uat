'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

import LifeAtIpagBreadcrumbs from '@/components/life-at-ipag/LifeAtIpagBreadcrumbs';
import {
  CHUYEN_NHA_IPAG_CATEGORIES,
  CHUYEN_NHA_IPAG_POSTS,
  type ChuyenNhaIpagCategoryKey,
  type ChuyenNhaIpagPost,
} from '@/components/life-at-ipag/ChuyenNhaIpagData';

export default function ChuyenNhaIpagListPage() {
  const [active, setActive] = useState<ChuyenNhaIpagCategoryKey>('all');

  const filtered = useMemo(() => {
    if (active === 'all') return CHUYEN_NHA_IPAG_POSTS;
    return CHUYEN_NHA_IPAG_POSTS.filter((p) => p.categoryKey === active);
  }, [active]);

  return (
    <div className="bg-white">
      <LifeAtIpagBreadcrumbs
        items={[{ label: 'Trang chủ', href: '/' }, { label: 'Chuyện nhà IPAG' }]}
      />

      <section
        className="relative overflow-hidden px-4 pb-14 md:px-12 md:pb-20 lg:px-20 lg:pb-24"
        style={{
          background: 'linear-gradient(180deg, #fbf9f6 0%, #ffffff 62%)',
        }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-[#7bc1ff]/10 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-[520px] w-[520px] rounded-full bg-[#fbc17b]/12 blur-3xl" />
        </div>

        <div className="section-content relative">
          <div className="mx-auto w-full max-w-[1115px]">
            <div className="pt-6 md:pt-10">
              <CenteredHeading title="CHUYỆN NHÀ IPAG" />

              <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5 md:mt-10 md:gap-3">
                {CHUYEN_NHA_IPAG_CATEGORIES.map((c) => {
                  const isActive = c.key === active;
                  return (
                    <button
                      key={c.key}
                      type="button"
                      onClick={() => setActive(c.key)}
                      className={`rounded-full border px-4 py-2 text-xs font-semibold transition md:px-5 md:py-2.5 md:text-sm ${
                        isActive
                          ? 'border-[#145194] bg-white text-[#145194] shadow-[0_8px_18px_rgba(20,81,148,0.10)]'
                          : 'border-[#d6dbe3] bg-white text-[#6b7280] hover:border-[#145194]/50 hover:text-[#145194]'
                      }`}
                    >
                      {c.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <motion.div
              className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-12 lg:grid-cols-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              {filtered.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CenteredHeading({ title }: { title: string }) {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-extrabold uppercase tracking-[1px] text-[#292929] md:text-[32px] md:leading-[40px]">
        {title}
      </h1>
      <div className="mt-4 flex items-center justify-center gap-3">
        <span className="h-px w-14 bg-[#cfd6df] md:w-20" aria-hidden />
        <span className="size-1.5 rotate-45 bg-[#145194]" aria-hidden />
        <span className="h-px w-14 bg-[#cfd6df] md:w-20" aria-hidden />
      </div>
    </div>
  );
}

function PostCard({ post }: { post: ChuyenNhaIpagPost }) {
  return (
    <article className="overflow-hidden rounded-[18px] border border-[#edf1f5] bg-white shadow-[0_8px_22px_rgba(0,0,0,0.10)]">
      <div className="relative aspect-[16/9]">
        <Image
          src={post.coverImageSrc}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 360px"
        />
      </div>

      <div className="p-4 md:p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center rounded-full bg-[#f1f5f9] px-2.5 py-1 text-[10px] font-semibold text-[#6b7280]">
            {post.categoryLabel}
          </span>
          <span className="text-[10px] font-semibold text-[#8a97a6]">{post.dateList}</span>
        </div>

        <h2 className="mt-4 line-clamp-2 text-base font-extrabold text-[#292929] md:text-lg">
          {post.title}
        </h2>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#6b7280]">{post.excerpt}</p>

        <Link
          href={`/life-at-ipag/chuyen-nha-ipag/${encodeURIComponent(post.slug)}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#145194]"
        >
          Xem chi tiết <ArrowRight className="size-4" />
        </Link>

        <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-[#e5e7eb] to-transparent" />
        <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-[#8a97a6]">
          <span className="font-semibold text-[#6b7280]">{post.authorName}</span>
          <span className="text-[#c1c7d0]" aria-hidden>
            •
          </span>
          <span>{post.authorMeta}</span>
        </div>
      </div>
    </article>
  );
}
