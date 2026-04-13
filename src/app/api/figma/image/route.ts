import { NextRequest, NextResponse } from 'next/server';

const FIGMA_FILE_KEY = 'O2gEdQJCPCsSmtYEZ5mvVh';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const id = url.searchParams.get('id');
  const format = url.searchParams.get('format') || 'png';
  const scale = url.searchParams.get('scale') || '2';

  if (!id) {
    return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  }

  const token = process.env.FIGMA_ACCESS_TOKEN;
  if (!token) {
    return NextResponse.json({ error: 'Missing FIGMA_ACCESS_TOKEN' }, { status: 500 });
  }

  const imagesUrl = `https://api.figma.com/v1/images/${FIGMA_FILE_KEY}?ids=${encodeURIComponent(
    id,
  )}&format=${encodeURIComponent(format)}&scale=${encodeURIComponent(scale)}`;

  const imagesRes = await fetch(imagesUrl, {
    headers: {
      'X-Figma-Token': token,
    },
    cache: 'no-store',
  });

  if (!imagesRes.ok) {
    return NextResponse.json(
      { error: 'Figma images endpoint failed' },
      { status: imagesRes.status },
    );
  }

  const imagesJson = (await imagesRes.json()) as { images?: Record<string, string | null> };
  const assetUrl = imagesJson.images?.[id] || null;

  if (!assetUrl) {
    return NextResponse.json({ error: 'Image not found for id' }, { status: 404 });
  }

  const assetRes = await fetch(assetUrl, { cache: 'no-store' });
  if (!assetRes.ok) {
    return NextResponse.json({ error: 'Failed to fetch image asset' }, { status: 502 });
  }

  const contentType = assetRes.headers.get('content-type') || 'application/octet-stream';
  const bytes = await assetRes.arrayBuffer();

  return new NextResponse(bytes, {
    headers: {
      'content-type': contentType,
      'cache-control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  });
}
