import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import LifeAtIpagBreadcrumbs from '@/components/life-at-ipag/LifeAtIpagBreadcrumbs';
import {
  CHUYEN_NHA_IPAG_CATEGORIES,
  type ChuyenNhaIpagCategoryKey,
  type ChuyenNhaIpagPost,
} from '@/components/life-at-ipag/ChuyenNhaIpagData';
import {
  fetchPostsService,
  mapApiPostToChuyenNhaIpagPost,
} from '@/components/life-at-ipag/chuyen-nha-ipag/api';

type SearchParams = Record<string, string | string[] | undefined>;

function normalizeStringParam(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) return value[0];
  return value;
}

function isCategoryKey(value: string | undefined): value is ChuyenNhaIpagCategoryKey {
  if (!value) return false;
  return CHUYEN_NHA_IPAG_CATEGORIES.some((c) => c.key === value);
}

function buildListHref(params: { category: ChuyenNhaIpagCategoryKey; page: number }) {
  const search = new URLSearchParams();
  if (params.category && params.category !== 'all') {
    search.set('category', params.category);
  }
  if (params.page && params.page > 1) {
    search.set('page', String(params.page));
  }
  const qs = search.toString();
  return qs ? `/life-at-ipag/chuyen-nha-ipag?${qs}` : '/life-at-ipag/chuyen-nha-ipag';
}

export default async function ChuyenNhaIpagListPage({
  searchParams,
}: {
  searchParams?: SearchParams;
}) {
  const pageSize = 6;

  const pageParam = normalizeStringParam(searchParams?.page);
  const categoryParam = normalizeStringParam(searchParams?.category);

  const requestedPage = Math.max(1, Number.parseInt(pageParam ?? '1', 10) || 1);
  const active: ChuyenNhaIpagCategoryKey = isCategoryKey(categoryParam) ? categoryParam : 'all';

  let resolvedPage = requestedPage;
  let result = await fetchPostsService({ page: resolvedPage, category: active, pageSize });
  if (resolvedPage > (result.totalPages || 1) && (result.totalPages || 1) > 0) {
    resolvedPage = result.totalPages || 1;
    result = await fetchPostsService({ page: resolvedPage, category: active, pageSize });
  }

  const totalPages = result.totalPages || 1;
  const totalElements = result.totalElements || 0;
  const posts: ChuyenNhaIpagPost[] = result.posts
    ? result.posts.map(mapApiPostToChuyenNhaIpagPost)
    : [];
  const hasMore = resolvedPage < totalPages;
  const showEndMessage = !hasMore && resolvedPage > 1;
  const shownCount = totalElements
    ? Math.min(resolvedPage * pageSize, totalElements)
    : posts.length;

  return (
    <div
      style={{
        background: 'linear-gradient(180deg, #fbf9f6 0%, #ffffff 62%)',
      }}
    >
      <LifeAtIpagBreadcrumbs
        items={[{ label: 'Trang chủ', href: '/' }, { label: 'Chuyện nhà IPAG' }]}
      />

      <section className="relative overflow-hidden px-4 pb-14 md:px-12 md:pb-20 lg:px-20 lg:pb-24">
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
                    <Link
                      key={c.key}
                      href={buildListHref({ category: c.key, page: 1 })}
                      className={`rounded-full border cursor-pointer px-4 py-2 text-xs font-semibold transition-all duration-200 ease-out hover:-translate-y-0.5 md:px-5 md:py-2.5 md:text-sm ${
                        isActive
                          ? 'border-[#145194] bg-white text-[#145194] shadow-[0_8px_18px_rgba(20,81,148,0.10)] hover:shadow-[0_10px_22px_rgba(20,81,148,0.14)]'
                          : 'border-[#d6dbe3] bg-white text-[#6b7280] hover:border-[#145194]/50 hover:text-[#145194] hover:shadow-[0_8px_18px_rgba(20,81,148,0.10)]'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {c.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {posts.length === 0 ? (
              <div className="mt-16 flex flex-col items-center justify-center gap-5">
                <Image
                  src="/life-at-ipag/chuyen-nha-ipag/docs.png"
                  alt=""
                  width={128}
                  height={128}
                  className="size-32 shrink-0 object-contain"
                />
                <p className="w-full text-center text-base leading-8 text-[#474747]">
                  Chưa có bài viết nào
                </p>
              </div>
            ) : (
              <>
                <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
                  {posts.map((post) => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>

                <div className="mt-10 flex flex-col items-center gap-4 md:mt-12">
                  <p className="text-sm text-[#6b7280]">
                    Hiển thị {shownCount} / {totalElements} bài viết
                  </p>

                  {hasMore ? (
                    <Link
                      href={buildListHref({ category: active, page: resolvedPage + 1 })}
                      className="inline-flex items-center justify-center rounded-full border border-[#145194] bg-white px-6 py-2.5 text-sm font-semibold text-[#145194] shadow-[0_8px_18px_rgba(20,81,148,0.10)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(20,81,148,0.14)]"
                    >
                      Xem thêm
                    </Link>
                  ) : showEndMessage ? (
                    <p className="text-sm text-[#6b7280]">Bạn đã xem hết bài viết</p>
                  ) : null}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function CenteredHeading({ title }: { title: string }) {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-extrabold uppercase tracking-[1px] text-[#292929] 2xl:text-3xl 2xl:leading-[40px]">
        {title}
      </h1>
      <div className="mt-4 flex items-center justify-center gap-4">
        <span className="h-[1.5px] w-24 bg-[#002B5B]" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="24"
          viewBox="0 0 21 24"
          fill="none"
        >
          <path
            d="M10.4535 0C10.4535 0 10.0371 8.33346 0 11.933C0 11.933 8.21662 13.5586 10.4535 24C10.4535 24 11.5653 14.5768 21 11.933C21 11.933 12.0614 9.80275 10.4535 0Z"
            fill="#002B5B"
          />
        </svg>
        <span className="h-[1.5px] w-24 bg-[#002B5B]" />
      </div>
    </div>
  );
}

function PostCard({ post }: { post: ChuyenNhaIpagPost }) {
  return (
    <article className="group overflow-hidden rounded-[18px] border border-[#edf1f5] bg-white shadow-[0_8px_22px_rgba(0,0,0,0.10)] transition duration-300 ease-out hover:scale-[1.02] hover:brightness-105 focus-within:scale-[1.02] focus-within:brightness-105">
      <div className="relative aspect-[16/9]">
        {post.coverImageSrc ? (
          <Image
            src={post.coverImageSrc}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 360px"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <span className="text-sm text-gray-400">Không có hình ảnh</span>
          </div>
        )}
      </div>

      <div className="p-4 md:p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center rounded-full bg-[#f1f5f9] px-2.5 py-1 text-xs font-semibold text-[#6b7280]">
            {post.categoryLabel}
          </span>
          <span className="text-xs font-semibold text-[#8a97a6]">{post.dateList}</span>
        </div>

        <h2 className="mt-4 line-clamp-2 text-base font-extrabold text-[#292929] 2xl:text-lg">
          {post.title}
        </h2>
        {post.excerpt && (
          <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#6b7280]">{post.excerpt}</p>
        )}

        <Link
          href={`/life-at-ipag/chuyen-nha-ipag/${encodeURIComponent(
            post.id ? `${post.slug}-${post.id}` : post.slug,
          )}`}
          className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#145194] transition duration-200 hover:text-[#0C71C7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0C71C7]/30"
        >
          Xem chi tiết <ArrowRight className="size-4" />
        </Link>

        <div className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-[#e5e7eb] to-transparent" />
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
