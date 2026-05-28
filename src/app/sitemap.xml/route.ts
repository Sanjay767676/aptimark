const siteUrl = 'https://www.aptimarksolutions.in';

const sitemapEntries = [
  { url: `${siteUrl}/`, changefreq: 'weekly', priority: '1.0' },
  { url: `${siteUrl}/services`, changefreq: 'monthly', priority: '0.8' },
  { url: `${siteUrl}/process`, changefreq: 'monthly', priority: '0.7' },
  { url: `${siteUrl}/portfolio`, changefreq: 'monthly', priority: '0.8' },
  { url: `${siteUrl}/contact`, changefreq: 'monthly', priority: '0.7' },
];

export function GET() {
  const lastModified = new Date().toISOString();
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries
  .map(
    (entry) => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}
