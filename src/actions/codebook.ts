'use server';

type CodebookItem = {
  code: string;
  name: string;
  description?: string;
  children?: unknown[];
};

export type CodebookResponse = {
  content: CodebookItem[];
  totalElements?: number;
  totalPages?: number;
};

export async function getCodebookQuery(params: {
  subDomainCode: string;
  page?: string;
  size?: string;
}): Promise<CodebookResponse> {
  const baseUrl = process.env.DMS_GATEWAY_BASE_URL;
  if (!baseUrl) {
    return { content: [] };
  }

  const upstreamUrl = new URL('/pms-api/public/codebook/query', baseUrl);
  upstreamUrl.searchParams.set('page', params.page ?? '1');
  upstreamUrl.searchParams.set('size', params.size ?? '2000');
  upstreamUrl.searchParams.set('subDomainCode', params.subDomainCode);

  const response = await fetch(upstreamUrl.toString(), { cache: 'no-store' });
  if (!response.ok) {
    throw new Error(`Codebook request failed: ${response.status}`);
  }

  return (await response.json()) as CodebookResponse;
}

