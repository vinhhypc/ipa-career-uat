'use server';

import type { JobsSearchResponse } from '@/components/jobs/types';

const API_BASE_URL = process.env.API_BASE_URL || 'https://bizrule-uat.ipas.com.vn';
const LOG_JOBS_UPSTREAM_ERRORS =
  process.env.LOG_JOBS_UPSTREAM_ERRORS === 'true' ||
  (process.env.LOG_JOBS_UPSTREAM_ERRORS !== 'false' && process.env.NODE_ENV !== 'production');

function truncateForLog(value: string, maxLength: number): string {
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength)}…(truncated)`;
}

async function safeReadResponseText(response: Response): Promise<string | undefined> {
  try {
    const text = await response.text();
    if (!text) return undefined;
    return truncateForLog(text, 2000);
  } catch {
    return undefined;
  }
}

export async function listJdsIpagHiring(
  body: Record<string, unknown>,
): Promise<JobsSearchResponse> {
  const upstreamUrl = `${API_BASE_URL}/public/matches/list_jds_ipag_hiring`;

  try {
    const response = await fetch(upstreamUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      cache: 'no-store',
    });

    if (!response.ok) {
      const responseText = await safeReadResponseText(response);

      if (LOG_JOBS_UPSTREAM_ERRORS) {
        console.error('[listJdsIpagHiring] Upstream request failed', {
          upstreamUrl,
          status: response.status,
          statusText: response.statusText,
          bodyKeys: Object.keys(body ?? {}),
          responseText,
        });
      }

      throw new Error(`Jobs request failed: ${response.status}`);
    }

    return (await response.json()) as JobsSearchResponse;
  } catch (error) {
    if (LOG_JOBS_UPSTREAM_ERRORS) {
      console.error('[listJdsIpagHiring] Unexpected error', {
        upstreamUrl,
        bodyKeys: Object.keys(body ?? {}),
        error,
      });
    }
    throw error;
  }
}
