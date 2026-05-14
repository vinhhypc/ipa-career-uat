import type { MetadataRoute } from 'next';

import { getMetadataBase } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getMetadataBase().toString().replace(/\/$/, '');
  const isProd = process.env.NODE_ENV === 'production';

  return {
    rules: {
      userAgent: '*',
      allow: isProd ? '/' : undefined,
      disallow: isProd ? undefined : '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
