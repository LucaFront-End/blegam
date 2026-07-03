// api/sitemap-salas.js
// Vercel Serverless Function — Dynamic Salas Landings Sitemap (Type: Salas)
import { createClient, OAuthStrategy } from '@wix/sdk';
import { items } from '@wix/data';

const SITE_URL = 'https://www.blegam.com';

const wixClient = createClient({
  modules: { items },
  auth: OAuthStrategy({
    clientId: '04379a33-416c-45cb-8d77-71afbf63fa6f',
    siteId: 'e91b7a1a-bc15-47f9-ab29-a8091cf74982'
  })
});

export default async function handler(req, res) {
  try {
    const results = await wixClient.items.query('LandingDeSalasDeJuiciosOrales').limit(1000).find();
    const today = new Date().toISOString().split('T')[0];

    const urls = (results.items || [])
      .filter(item => item.slug)
      .map(item => {
        const loc = `${SITE_URL}/ciudades/${item.slug}`;
        return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
      })
      .join('');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    res.status(200).send(xml);
  } catch (err) {
    console.error('Error generating salas landings sitemap:', err);
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`;
    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(xml);
  }
}
