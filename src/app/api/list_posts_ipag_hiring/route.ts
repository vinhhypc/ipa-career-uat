const API_BASE_URL = process.env.API_BASE_URL || 'https://bizrule-uat.ipas.com.vn';

export async function GET() {
  const response = await fetch(`${API_BASE_URL}/public/matches/list_posts_ipag_hiring`);

  const data = await response.json();

  return Response.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();

  const response = await fetch(`${API_BASE_URL}/public/matches/list_posts_ipag_hiring`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return Response.json(data);
}
