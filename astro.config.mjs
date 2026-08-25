// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { rehypeSieroty } from './src/lib/typografia';

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
  /*
   * Reguły typograficzne dla treści z plików markdown: opisy zajęć,
   * odpowiedzi FAQ i opinie. Teksty z `src/data/copy/` przechodzą przez
   * `typo()` w miejscu renderowania — to ta sama funkcja reguł, żeby obie
   * połowy serwisu łamały wiersze tak samo.
   *
   * Wymaga pakietu `@astrojs/markdown-remark`: Astro 7 renderuje markdown
   * domyślnie przez Sätteri, a `rehypePlugins` działa na starym potoku
   * unified. Zainstalowany świadomie 25.08.2026, po tym jak klientka
   * wskazała sieroty w opiniach i w FAQ — czyli dokładnie w treściach,
   * do których `typo()` nie sięga. Zgodność renderowania sprawdzona
   * porównaniem wygenerowanego HTML-u przed podmianą i po niej.
   */
  markdown: { rehypePlugins: [rehypeSieroty] },
  build: { inlineStylesheets: 'auto' },
  image: { responsiveStyles: true },
});
