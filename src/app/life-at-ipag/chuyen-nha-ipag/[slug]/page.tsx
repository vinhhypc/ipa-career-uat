import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';

import ChuyenNhaIpagPostPage from '@/components/life-at-ipag/ChuyenNhaIpagPostPage';
import type {
  ChuyenNhaIpagCategoryKey,
  ChuyenNhaIpagPost,
} from '@/components/life-at-ipag/ChuyenNhaIpagData';
import {
  CATEGORY_CODE_MAP,
  CATEGORY_LABEL_MAP,
} from '@/components/life-at-ipag/chuyen-nha-ipag/constants';
import { createPageMetadata, getMetadataBase } from '@/lib/seo';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

type ApiPostDetailResponse = {
  title?: string;
  category?: {
    name?: string;
    code?: string;
  };
  publishDate?: number;
  url?: string;
  createdBy?: string;
  createdAt?: string;
  slug?: string;
};

function parseSlugAndId(input: string) {
  const match = input.match(/^(.*)-(\d+)(?:\.html)?$/);
  if (!match) return null;
  return { slug: match[1], id: match[2] };
}

function formatDate(timestamp?: number): string {
  if (!timestamp) return '';
  return new Date(timestamp).toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

async function fetchPostDetail(id: string): Promise<ApiPostDetailResponse | null> {
  const response = await fetch(`${getMetadataBase().origin}/api/get_post_detail_ipag_hiring`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code: id }),
    cache: 'no-store',
  });

  if (!response.ok) return null;
  return response.json();
}

async function fetchHtmlContent(url: string): Promise<string> {
  const response = await fetch(url, { cache: 'no-store' });
  if (!response.ok) return '';
  return response.text();
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const parsed = parseSlugAndId(params.slug);
  if (!parsed) {
    return createPageMetadata({
      title: 'Bài viết',
      description: 'Bài viết trong Chuyện nhà IPAG.',
      pathname: `/life-at-ipag/chuyen-nha-ipag/${params.slug}`,
      noIndex: true,
    });
  }

  const detail = await fetchPostDetail(parsed.id);
  if (!detail?.title) {
    return createPageMetadata({
      title: 'Bài viết',
      description: 'Bài viết trong Chuyện nhà IPAG.',
      pathname: `/life-at-ipag/chuyen-nha-ipag/${params.slug}`,
      noIndex: true,
    });
  }

  const resolvedSlug = detail.slug || parsed.slug;

  return createPageMetadata({
    title: detail.title,
    description: 'Bài viết trong Chuyện nhà IPAG.',
    pathname: `/life-at-ipag/chuyen-nha-ipag/${resolvedSlug}-${parsed.id}`,
    openGraphType: 'article',
  });
}

export default async function ChuyenNhaIpagPostRoutePage({ params }: { params: { slug: string } }) {
  const parsed = parseSlugAndId(params.slug);
  if (!parsed) notFound();

  const detail = await fetchPostDetail(parsed.id);
  if (!detail?.title || !detail?.url) notFound();

  const resolvedSlug = detail.slug || parsed.slug;
  if (resolvedSlug !== parsed.slug) {
    redirect(`/life-at-ipag/chuyen-nha-ipag/${resolvedSlug}-${parsed.id}`);
  }

  const htmlContent = await fetchHtmlContent(detail.url);
  const categoryCode = detail.category?.code || '';
  const categoryKey =
    (CATEGORY_CODE_MAP[categoryCode] as Exclude<ChuyenNhaIpagCategoryKey, 'all'>) ||
    'hoat-dong-su-kien';
  const categoryLabel = CATEGORY_LABEL_MAP[categoryCode] || detail.category?.name || '';
  const publishDate = detail.publishDate;

  const post: ChuyenNhaIpagPost = {
    id: parsed.id,
    slug: resolvedSlug,
    title: detail.title,
    excerpt: '',
    categoryKey,
    categoryLabel,
    dateList: formatDate(publishDate),
    dateDetail: formatDate(publishDate),
    authorName: detail.createdBy || 'IPAG Team',
    authorMeta: detail.createdAt || 'Chuyện nhà IPAG',
    coverImageSrc: '',
    heroImageSrc: '',
    breadcrumbLabel: detail.title,
    body: [],
    relatedSlugs: [],
  };

  return <ChuyenNhaIpagPostPage post={post} htmlContent={htmlContent} />;
}
