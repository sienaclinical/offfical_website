import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const SITE_URL = "https://www.sienaclinical.com";

export const GET: APIRoute = async () => {
  const courses = await getCollection("courses", ({ data }) => data.published);

  const pages = [
    "",
    "/capability",
    "/publication",
    "/team",
    "/contact",
    ...courses.map((course) => `/courses/${course.id}`),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((path) => {
    const normalizedPath = path || "/";
    return `  <url><loc>${SITE_URL}${normalizedPath}</loc></url>`;
  })
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
