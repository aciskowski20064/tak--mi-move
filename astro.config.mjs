// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Adres bazowy serwisu. Steruje sitemap.xml, canonicalami i — co najważniejsze
 * przy wysyłce wersji poglądowej — bezwzględnym adresem obrazka Open Graph.
 *
 * Kolejność źródeł:
 *  1. SITE_URL — ustawiane ręcznie (np. własny adres podglądu),
 *  2. adres nadany przez Vercela dla danego wdrożenia,
 *  3. domena docelowa.
 *
 * Bez punktów 1–2 link do wersji demo nie pokazałby miniatury w komunikatorze,
 * bo og:image wskazywałby na nieistniejącą jeszcze domenę.
 *
 * TODO(klientka): potwierdzić domenę docelową.
 */
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const SITE =
  process.env.SITE_URL ?? (vercelHost ? `https://${vercelHost}` : 'https://takmimove.pl');

export default defineConfig({
  site: SITE,
  integrations: [
    sitemap({
      // Strony z `noindex` nie mogą trafić do sitemapy — to sprzeczny sygnał
      // dla wyszukiwarek. Dokumenty prawne wrócą tu, gdy dostaną treść
      // i zdejmiemy z nich noindex.
      filter: (page) => !/\/polityka-(prywatnosci|cookies)\/?$/.test(page),
    }),
  ],
  build: { inlineStylesheets: 'auto' },
  image: { responsiveStyles: true },
});
