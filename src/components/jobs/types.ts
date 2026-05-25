export type HeroFilterOption = { label: string; value: string };

export type JobsCodebookKey = 'domain' | 'business' | 'program' | 'location';

export type JobsProps = {
  codebookOptions: Partial<Record<JobsCodebookKey, HeroFilterOption[]>>;
  initialJobsResponse?: JobsSearchResponse | null;
  initialJobsError?: string | null;
};

export type FilterConfig = {
  key: JobsCodebookKey;
  defaultLabel: string;
  textSize: string;
  options: HeroFilterOption[];
  defaultOption: HeroFilterOption;
};

export type ApiCodebook = { name?: unknown; code?: unknown };
export type ApiLong = { value?: unknown };
export type ApiJobInfoFields = {
  cms_domain?: ApiCodebook;
  cms_department?: ApiCodebook;
  cms_publishDate?: ApiLong;
  cms_workAddresses?: ApiCodebook[];
  cms_minExperience?: unknown;
  cms_experienceType?: ApiCodebook;
};
export type ApiJobInfo = { fields?: ApiJobInfoFields };
export type ApiJob = {
  id?: unknown;
  name?: unknown;
  cms_jobInfo?: ApiJobInfo;
};
export type JobsSearchResponse = {
  content?: ApiJob[];
  totalElements?: unknown;
  totalPages?: unknown;
  size?: unknown;
  number?: unknown;
};

export type NormalizedJob = {
  id: string;
  title: string;
  tag: string;
  location: string;
  experience: string;
  publishDate: string;
};
