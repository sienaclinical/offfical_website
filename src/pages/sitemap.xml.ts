import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const SITE_URL = "https://www.sienaclinical.com";

interface SitemapEntry {
  path: string;
  priority: number;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  lastmod?: string;
}

export const GET: APIRoute = async () => {
  const courses = await getCollection("courses", ({ data }) => data.published);

  const today = new Date().toISOString().split("T")[0];

  const staticPages: SitemapEntry[] = [
    { path: "/", priority: 1.0, changefreq: "weekly", lastmod: today },
    { path: "/capability", priority: 0.9, changefreq: "monthly", lastmod: today },
    { path: "/publication", priority: 0.8, changefreq: "monthly", lastmod: today },
    { path: "/team", priority: 0.7, changefreq: "monthly", lastmod: today },
    { path: "/contact", priority: 0.6, changefreq: "monthly", lastmod: today },
  ];

  const coursePages: SitemapEntry[] = courses.map((course) => ({
    path: `/courses/${course.id}`,
    priority: 0.7,
    changefreq: "monthly" as const,
    lastmod: today,
  }));

  const allPages = [...staticPages, ...coursePages];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority.toFixed(1)}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
