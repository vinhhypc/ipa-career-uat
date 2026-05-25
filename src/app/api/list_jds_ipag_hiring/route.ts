const API_BASE_URL = process.env.API_BASE_URL || 'https://bizrule-uat.ipas.com.vn';

export async function GET() {
  const upstreamUrl = `${API_BASE_URL}/public/matches/list_jds_ipag_hiring`;
  return fetch(upstreamUrl, { cache: 'no-store' });
}

export async function POST(request: Request) {
  const upstreamUrl = `${API_BASE_URL}/public/matches/list_jds_ipag_hiring`;
  const contentType = request.headers.get('content-type') ?? 'application/json';
  const body = await request.text();

  return fetch(upstreamUrl, {
    method: 'POST',
    headers: {
      'Content-Type': contentType,
    },
    body,
    cache: 'no-store',
  });
}
