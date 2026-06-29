import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

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
    <loc>${SITE_URL}/sitemap-landings.xml</loc>
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

      if (urlPath === '/sitemap-landings.xml') {
        try {
          const filePath = path.join(process.cwd(), 'src', 'data', 'landings.json');
          const fileContent = fs.readFileSync(filePath, 'utf8');
          const landings = JSON.parse(fileContent);

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
          res.end(xml);
        } catch (err) {
          console.error('Error serving local sitemaps:', err);
          res.statusCode = 500;
          res.end('Error loading landings sitemap');
        }
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
