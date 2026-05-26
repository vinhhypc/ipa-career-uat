'use server';

import type { JobsSearchResponse } from '@/components/jobs/types';

const API_BASE_URL = process.env.API_BASE_URL || 'https://bizrule-uat.ipas.com.vn';

export async function listJdsIpagHiring(
  body: Record<string, unknown>,
): Promise<JobsSearchResponse> {
  const upstreamUrl = `${API_BASE_URL}/public/matches/list_jds_ipag_hiring`;

  const response = await fetch(upstreamUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Jobs request failed: ${response.status}`);
  }

  return (await response.json()) as JobsSearchResponse;
}
