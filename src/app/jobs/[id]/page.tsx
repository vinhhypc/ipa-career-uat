import JobDetail from '@/components/JobDetail';

export default async function JobDetailPage({ params }: { params: { id: string } }) {
  return <JobDetail id={params.id} />;
}
