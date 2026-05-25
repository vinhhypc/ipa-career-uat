const DMS_GATEWAY_BASE_URL = process.env.DMS_GATEWAY_BASE_URL;

export async function GET(request: Request) {
  if (!DMS_GATEWAY_BASE_URL) {
    return new Response('Missing env: DMS_GATEWAY_BASE_URL', { status: 500 });
  }
  const incomingUrl = new URL(request.url);

  const upstreamUrl = new URL('/pms-api/public/codebook/query', DMS_GATEWAY_BASE_URL);

  const page = incomingUrl.searchParams.get('page') ?? '1';
  const size = incomingUrl.searchParams.get('size') ?? '2000';
  const subDomainCode = incomingUrl.searchParams.get('subDomainCode');

  upstreamUrl.searchParams.set('page', page);
  upstreamUrl.searchParams.set('size', size);
  if (subDomainCode) upstreamUrl.searchParams.set('subDomainCode', subDomainCode);

  const response = await fetch(upstreamUrl.toString(), { cache: 'no-store' });
  const body = await response.text();

  const contentType = response.headers.get('content-type') ?? 'application/json; charset=utf-8';
  return new Response(body, { status: response.status, headers: { 'content-type': contentType } });
}
