import type { JobsSearchResponse, NormalizedJob } from '@/components/jobs/types';

export function formatDate(value: unknown) {
  if (typeof value !== 'number') return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString('vi-VN');
}

export function normalizeApiCodebookName(value: unknown) {
  if (!value || typeof value !== 'object') return '';
  const name = (value as { name?: unknown }).name;
  return typeof name === 'string' ? name : '';
}

export function normalizeApiCodebookArrayFirstName(value: unknown) {
  if (!Array.isArray(value)) return '';
  const first = value[0];
  return normalizeApiCodebookName(first);
}

export function normalizeText(value: unknown) {
  if (typeof value === 'string') return value;
  if (typeof value === 'number' && Number.isFinite(value)) return String(value);
  return '';
}

export function normalizeId(value: unknown) {
  if (typeof value === 'string') return value;
  if (typeof value === 'number' && Number.isFinite(value)) return String(value);
  return '';
}

export function normalizeJobsResponse(jobsResponse: JobsSearchResponse | null | undefined) {
  const items = Array.isArray(jobsResponse?.content) ? (jobsResponse?.content ?? []) : [];

  return items
    .map((job) => {
      const id = normalizeId(job?.id);
      const name = normalizeText(job?.name);
      const fields = job?.cms_jobInfo?.fields;

      const domainName = normalizeApiCodebookName(fields?.cms_domain);
      const departmentName = normalizeApiCodebookName(fields?.cms_department);
      const workAddressName = normalizeApiCodebookArrayFirstName(fields?.cms_workAddresses);
      const publishDate = formatDate(fields?.cms_publishDate?.value);

      const minExperience = normalizeText(fields?.cms_minExperience);
      const experienceType = normalizeApiCodebookName(fields?.cms_experienceType);
      const experience = minExperience || experienceType;

      return {
        id,
        title: name,
        tag: domainName || departmentName,
        location: workAddressName,
        experience,
        publishDate,
      } satisfies NormalizedJob;
    })
    .filter((job) => job.id && job.title);
}
