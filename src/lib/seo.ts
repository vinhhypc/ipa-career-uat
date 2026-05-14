import type { Metadata } from 'next';

export const SITE_NAME = 'IPAG Career';
export const SITE_DESCRIPTION = 'IPAG Career — Khai phóng năng lực, kiến tạo giá trị bền vững';

export function getMetadataBase(): URL {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) return new URL(raw);
  return new URL('http://localhost:3000');
}

type PageMetadataInput = {
  title: string;
  description?: string;
  pathname: string;
  openGraphType?: 'website' | 'article';
  images?: string[];
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  pathname,
  openGraphType = 'website',
  images,
  noIndex,
}: PageMetadataInput): Metadata {
  const resolvedDescription = description ?? SITE_DESCRIPTION;

  return {
    title,
    description: resolvedDescription,
    alternates: { canonical: pathname },
    openGraph: {
      title,
      description: resolvedDescription,
      url: pathname,
      siteName: SITE_NAME,
      locale: 'vi_VN',
      type: openGraphType,
      images: images?.length ? images : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: resolvedDescription,
      images: images?.length ? images : undefined,
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}
