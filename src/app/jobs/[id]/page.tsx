import JobDetail from '@/components/JobDetail';

export default async function JobDetailPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  return <JobDetail id={id} />;
}
