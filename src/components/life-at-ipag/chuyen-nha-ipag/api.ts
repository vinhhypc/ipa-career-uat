import type {
  ApiPost,
  ApiResponse,
  FetchPostsParams,
  FetchPostsResult,
} from '@/components/life-at-ipag/chuyen-nha-ipag/types';
import {
  CATEGORY_CODE_MAP,
  CATEGORY_LABEL_MAP,
} from '@/components/life-at-ipag/chuyen-nha-ipag/constants';
import type {
  ChuyenNhaIpagCategoryKey,
  ChuyenNhaIpagPost,
} from '@/components/life-at-ipag/ChuyenNhaIpagData';

const API_BASE_URL = process.env.API_BASE_URL || 'https://bizrule-uat.ipas.com.vn';

function formatDate(timestamp: number | undefined): string {
  if (!timestamp) return '';
  const date = new Date(timestamp);
  return date
    .toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
    .replace(/\//g, '/');
}

export function mapApiPostToChuyenNhaIpagPost(apiPost: ApiPost): ChuyenNhaIpagPost {
  const categoryCode = apiPost.cms_subCategory?.code || '';
  const categoryKey =
    (CATEGORY_CODE_MAP[categoryCode] as Exclude<ChuyenNhaIpagCategoryKey, 'all'>) ||
    'hoat-dong-su-kien';
  const categoryLabel = CATEGORY_LABEL_MAP[categoryCode] || apiPost.cms_subCategory?.name || '';
  const publishDate = apiPost.cms_contentInfo?.fields?.cms_publishDate?.value;
  const authorName = apiPost.cms_contentInfo?.fields?.cms_createdBy || 'IPAG Team';
  const thumbUrl = apiPost.cms_contentInfo?.fields?.cms_thumbImg?.linkFileUrl || '';
  const description = apiPost.cms_contentInfo?.fields?.cms_description || '';

  return {
    id: apiPost.id,
    slug: apiPost.slug || apiPost.id,
    title: apiPost.name || '',
    excerpt: description,
    categoryKey,
    categoryLabel,
    dateList: publishDate ? formatDate(publishDate) : formatDate(apiPost.created),
    dateDetail: publishDate ? formatDate(publishDate) : formatDate(apiPost.modified),
    authorName,
    authorMeta: 'Chuyện nhà IPAG',
    coverImageSrc: thumbUrl,
    heroImageSrc: thumbUrl,
    breadcrumbLabel: apiPost.name || '',
    body: [],
    relatedSlugs: [],
  };
}

export async function fetchPostsService(params: FetchPostsParams): Promise<FetchPostsResult> {
  if (typeof window !== 'undefined') {
    throw new Error('fetchPostsService can only be called on the server');
  }

  const { page, category, pageSize = 6 } = params;

  const categoryCode =
    category === 'all'
      ? null
      : Object.entries(CATEGORY_CODE_MAP).find(([, k]) => k === category)?.[0];

  const body: { code?: string; language: string; page: number; size: number } = {
    language: 'VIETNAMESE',
    page,
    size: pageSize,
  };

  if (categoryCode) {
    body.code = categoryCode;
  }

  const response = await fetch(`${API_BASE_URL}/public/matches/list_posts_ipag_hiring`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  const data: ApiResponse = await response.json();

  return {
    posts: data.content ?? [],
    totalPages: data.totalPages || 1,
    totalElements: data.totalElements || 0,
  };
}
