import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { createClient, OAuthStrategy } from '@wix/sdk'
import { items } from '@wix/data'

const wixClient = createClient({
  modules: { items },
  auth: OAuthStrategy({
    clientId: '04379a33-416c-45cb-8d77-71afbf63fa6f'
  })
})

// Custom local middleware plugin to mock Vercel sitemaps in Vite local dev server
const localSitemapsPlugin = () => ({
  name: 'local-sitemaps',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      // Normalize url to ignore query params
      const urlPath = (req.url || '').split('?')[0];
      const today = new Date().toISOString().split('T')[0];
      const SITE_URL = 'http://localhost:5173';

      if (urlPath === '/sitemap.xml') {
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE_URL}/sitemap-static.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${SITE_URL}/sitemap-ciudades.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${SITE_URL}/sitemap-salas.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>`;
        res.setHeader('Content-Type', 'application/xml');
        res.end(xml);
        return;
      }

      if (urlPath === '/sitemap-static.xml') {
        const STATIC_PAGES = [
          { loc: '/',                   priority: '1.0', changefreq: 'weekly' },
          { loc: '/nosotros',           priority: '0.8', changefreq: 'monthly' },
          { loc: '/servicios',          priority: '0.8', changefreq: 'monthly' },
          { loc: '/salas-de-oralidad',  priority: '0.9', changefreq: 'monthly' },
          { loc: '/proyectos',          priority: '0.8', changefreq: 'weekly' },
          { loc: '/contacto',           priority: '0.8', changefreq: 'monthly' },
          { loc: '/aviso-de-privacidad', priority: '0.5', changefreq: 'monthly' },
          { loc: '/zonas',              priority: '0.7', changefreq: 'weekly' },
        ];
        const urls = STATIC_PAGES.map(p => `
  <url>
    <loc>${SITE_URL}${p.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('');

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        res.setHeader('Content-Type', 'application/xml');
        res.end(xml);
        return;
      }

      const serveWixSitemap = async (collectionId) => {
        try {
          const results = await wixClient.items.query(collectionId).limit(1000).find();
          const urls = (results.items || [])
            .filter(item => item.slug)
            .map(item => `
  <url>
    <loc>${SITE_URL}/ciudades/${item.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`)
            .join('');

          const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
          res.setHeader('Content-Type', 'application/xml');
          res.end(xml);
        } catch (err) {
          console.error('Error serving local sitemaps from Wix:', err);
          res.statusCode = 500;
          res.end('Error loading landings sitemap');
        }
      };

      if (urlPath === '/sitemap-ciudades.xml' || urlPath === '/sitemap-landings.xml') {
        serveWixSitemap('LandingPrincipalCiudades');
        return;
      }

      if (urlPath === '/sitemap-salas.xml') {
        serveWixSitemap('LandingDeSalasDeJuiciosOrales');
        return;
      }

      next();
    });
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), localSitemapsPlugin()],
})
