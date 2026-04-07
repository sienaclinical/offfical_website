export function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: https://www.sienaclinical.com/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
