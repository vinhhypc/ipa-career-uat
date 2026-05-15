import type { Metadata } from 'next';

import { getJobById } from '@/data/jobs';
import { createPageMetadata } from '@/lib/seo';
import JobDetail from '@/components/JobDetail/index';

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const job = getJobById(params.id);

  if (!job) {
    return createPageMetadata({
      title: 'Chi tiết vị trí',
      description: 'Thông tin chi tiết vị trí tuyển dụng tại IPAG.',
      pathname: `/jobs/${params.id}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: job.title,
    description: `${job.tag} · ${job.location} · Kinh nghiệm ${job.experience}`,
    pathname: `/jobs/${job.id}`,
  });
}

export default async function JobDetailPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  return <JobDetail id={id} />;
}
