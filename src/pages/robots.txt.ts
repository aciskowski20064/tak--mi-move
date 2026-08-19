import type { APIRoute } from 'astro';
import { site, DEMO_MODE } from '~/data/site';

/**
 * robots.txt generowany, a nie statyczny — musi reagować na `DEMO_MODE`.
 *
 * W trybie demo blokujemy indeksowanie całości i nie zgłaszamy mapy strony.
 * Sam plik meta `noindex` nie wystarcza: sitemap zgłoszony w robots.txt
 * potrafi ściągnąć crawlera na adres, którego nie chcemy pokazywać.
 */
export const GET: APIRoute = ({ site: astroSite }) => {
  const origin = (astroSite ?? new URL(site.url)).origin;

  const body = DEMO_MODE
    ? [
        '# WERSJA POGLĄDOWA — indeksowanie wyłączone.',
        '# Przed wdrożeniem produkcyjnym: DEMO_MODE = false w src/data/site.ts',
        'User-agent: *',
        'Disallow: /',
        '',
      ].join('\n')
    : [
        'User-agent: *',
        'Allow: /',
        '',
        `Sitemap: ${origin}/sitemap-index.xml`,
        '',
      ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
