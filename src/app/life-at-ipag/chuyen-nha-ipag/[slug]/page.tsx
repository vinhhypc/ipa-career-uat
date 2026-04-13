import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ChuyenNhaIpagPostPage from '@/components/life-at-ipag/ChuyenNhaIpagPostPage';
import { getChuyenNhaIpagPostBySlug } from '@/components/life-at-ipag/ChuyenNhaIpagData';

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getChuyenNhaIpagPostBySlug(params.slug);
  if (!post) return { title: 'Bài viết | IPAG Career' };
  return {
    title: `${post.title} | IPAG Career`,
    description: post.excerpt,
  };
}

export default function ChuyenNhaIpagPostRoutePage({ params }: { params: { slug: string } }) {
  const post = getChuyenNhaIpagPostBySlug(params.slug);
  if (!post) notFound();
  return <ChuyenNhaIpagPostPage post={post} />;
}
