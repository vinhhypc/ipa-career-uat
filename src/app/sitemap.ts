import type { MetadataRoute } from 'next';

import { CHUYEN_NHA_IPAG_POSTS } from '@/components/life-at-ipag/ChuyenNhaIpagData';
import { JOBS } from '@/data/jobs';
import { getMetadataBase } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getMetadataBase().toString().replace(/\/$/, '');
  const now = new Date();

  const staticPaths = [
    '/',
    '/we-look-for',
    '/executive-serve',
    '/ma-program',
    '/ipag-insight',
    '/jobs',
    '/life-at-ipag',
    '/life-at-ipag/cay-nen-xay-nep',
    '/life-at-ipag/che-do-dai-ngo',
    '/life-at-ipag/chuong-trinh-dao-tao',
    '/life-at-ipag/chuyen-nha-ipag',
    '/contact',
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
  }));

  const postEntries: MetadataRoute.Sitemap = CHUYEN_NHA_IPAG_POSTS.map((post) => ({
    url: `${baseUrl}/life-at-ipag/chuyen-nha-ipag/${post.slug}`,
    lastModified: now,
  }));

  const jobEntries: MetadataRoute.Sitemap = JOBS.map((job) => ({
    url: `${baseUrl}/jobs/${job.id}`,
    lastModified: now,
  }));

  return [...staticEntries, ...postEntries, ...jobEntries];
}
