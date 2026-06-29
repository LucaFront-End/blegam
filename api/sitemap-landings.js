// api/sitemap-landings.js
// Vercel Serverless Function — Dynamic Landings Sitemap for Blegam Corp (loaded from landings.json)

import { readFileSync } from 'fs';
import { join } from 'path';

const SITE_URL = 'https://www.blegam.com';

export default function handler(req, res) {
  try {
    const filePath = join(process.cwd(), 'src', 'data', 'landings.json');
    const fileContent = readFileSync(filePath, 'utf8');
    const landings = JSON.parse(fileContent);

    const today = new Date().toISOString().split('T')[0];

    const urls = (landings || []).map(l => {
      if (!l.slug) return '';
      const loc = `${SITE_URL}/ciudades/${l.slug}`;
      return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    }).filter(Boolean).join('');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    res.status(200).send(xml);
  } catch (err) {
    console.error('Error generating landings sitemap:', err);
    
    // Return empty sitemap in case of error
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`;
    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(xml);
  }
}
