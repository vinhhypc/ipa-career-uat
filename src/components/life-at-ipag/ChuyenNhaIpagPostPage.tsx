import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import LifeAtIpagBreadcrumbs from '@/components/life-at-ipag/LifeAtIpagBreadcrumbs';
import {
  CHUYEN_NHA_IPAG_POSTS,
  type ChuyenNhaIpagPost,
} from '@/components/life-at-ipag/ChuyenNhaIpagData';

export default function ChuyenNhaIpagPostPage({ post }: { post: ChuyenNhaIpagPost }) {
  const related = post.relatedSlugs
    .map((slug) => CHUYEN_NHA_IPAG_POSTS.find((p) => p.slug === slug) ?? null)
    .filter((p): p is ChuyenNhaIpagPost => Boolean(p));

  return (
    <div
      style={{
        background: 'linear-gradient(180deg, #fbf9f6 0%, #ffffff 66%)',
      }}
    >
      <LifeAtIpagBreadcrumbs
        items={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Chuyện nhà IPAG', href: '/life-at-ipag/chuyen-nha-ipag' },
          { label: post.breadcrumbLabel },
        ]}
      />

      <section className="relative overflow-hidden px-4 pb-16 md:px-12 md:pb-20 lg:px-20 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 opacity-35">
          <div className="absolute -right-44 top-10 h-[520px] w-[520px] rounded-full bg-[#7bc1ff]/10 blur-3xl" />
        </div>

        <div className="section-content relative">
          <div className="mx-auto w-full max-w-[1115px] pt-4 md:pt-8">
            <h1 className="text-xl font-extrabold uppercase tracking-[0.5px] text-[#292929] md:text-3xl md:leading-[36px]">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center gap-3">
              <span className="h-px w-14 bg-[#cfd6df] md:w-20" aria-hidden />
              <span className="size-1.5 rotate-45 bg-[#145194]" aria-hidden />
              <span className="h-px w-14 bg-[#cfd6df] md:w-20" aria-hidden />
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#8a97a6]">
                <span className="font-semibold text-[#6b7280]">{post.authorName}</span>
                <span className="text-[#c1c7d0]" aria-hidden>
                  •
                </span>
                <span>{post.authorMeta}</span>
              </div>
              <div className="text-xs font-semibold text-[#8a97a6]">{post.dateDetail}</div>
            </div>

            <div className="mt-7 overflow-hidden rounded-[22px] border border-[#edf1f5] bg-white shadow-[0_10px_24px_rgba(0,0,0,0.10)] md:mt-10">
              <div className="relative aspect-[16/9] md:aspect-[21/9]">
                <Image
                  src={post.heroImageSrc}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1115px"
                />
              </div>
            </div>

            <div className="mt-8 space-y-5 text-sm leading-7 text-[#6b7280] md:mt-10 md:text-sm md:leading-8">
              {post.body.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-[#e5e7eb] to-transparent md:mt-14" />

            <div className="mt-10 md:mt-12">
              <h2 className="text-base font-extrabold uppercase tracking-[1px] text-[#292929] md:text-lg">
                BÀI VIẾT LIÊN QUAN
              </h2>

              <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {related.slice(0, 3).map((p) => (
                  <RelatedCard key={p.slug} post={p} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function RelatedCard({ post }: { post: ChuyenNhaIpagPost }) {
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
          <span className="inline-flex items-center rounded-full bg-[#f1f5f9] px-2.5 py-1 text-xs font-semibold text-[#6b7280]">
            {post.categoryLabel}
          </span>
          <span className="text-xs font-semibold text-[#8a97a6]">{post.dateList}</span>
        </div>

        <h3 className="mt-4 line-clamp-2 text-base font-extrabold text-[#292929] md:text-lg">
          {post.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#6b7280]">{post.excerpt}</p>

        <Link
          href={`/life-at-ipag/chuyen-nha-ipag/${encodeURIComponent(post.slug)}`}
          className="group mt-4 inline-flex items-center gap-1 text-sm font-semibold transition duration-200 hover:scale-105 text-[#145194] transition-colors duration-300 ease-out hover:text-[#0C71C7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C71C7]/30"
        >
          Xem chi tiết{' '}
          <ArrowRight className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
        </Link>

        <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-[#e5e7eb] to-transparent" />
        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-[#8a97a6]">
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
