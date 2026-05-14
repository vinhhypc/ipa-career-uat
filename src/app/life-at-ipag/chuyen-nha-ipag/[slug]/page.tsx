import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ChuyenNhaIpagPostPage from '@/components/life-at-ipag/ChuyenNhaIpagPostPage';
import { getChuyenNhaIpagPostBySlug } from '@/components/life-at-ipag/ChuyenNhaIpagData';
import { createPageMetadata } from '@/lib/seo';

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getChuyenNhaIpagPostBySlug(params.slug);
  if (!post) {
    return createPageMetadata({
      title: 'Bài viết',
      description: 'Bài viết trong Chuyện nhà IPAG.',
      pathname: `/life-at-ipag/chuyen-nha-ipag/${params.slug}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    pathname: `/life-at-ipag/chuyen-nha-ipag/${post.slug}`,
    openGraphType: 'article',
    images: post.heroImageSrc ? [post.heroImageSrc] : undefined,
  });
}

export default function ChuyenNhaIpagPostRoutePage({ params }: { params: { slug: string } }) {
  const post = getChuyenNhaIpagPostBySlug(params.slug);
  if (!post) notFound();
  return <ChuyenNhaIpagPostPage post={post} />;
}
