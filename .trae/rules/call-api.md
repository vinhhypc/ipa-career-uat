# API Rules

1. Tất cả API phải đi qua Next.js API Router để che API gốc.
2. Sử dụng `fetch` để call API.
3. API Router phải trả về nguyên response từ API gốc, không modify data.
4. Quy ước mapping path:
   - API gốc:
     `https://bizrule-uat.ipas.com.vn/public/matches/list_posts_ipag_hiring`
   - API mới:
     `/api/list_posts_ipag_hiring`

## Example

```js
// app/api/list_posts_ipag_hiring/route.js

export async function GET() {
  const response = await fetch(
    'https://bizrule-uat.ipas.com.vn/public/matches/list_posts_ipag_hiring',
  );

  const data = await response.json();

  return Response.json(data);
}
```
