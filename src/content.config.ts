import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
// `z` z 'astro:content' jest w Astro 7 wycofane — oficjalny następca to 'astro/zod'.
import { z } from 'astro/zod';

/**
 * Kolekcje treści. Wszystko, co nie jest potwierdzone przez klientkę,
 * jest polem opcjonalnym — brak danych oznacza pominiętą sekcję,
 * nigdy wypełniacz (brief §0 pkt 3, §50).
 *
 * `draft: true` trzyma wpis poza buildem produkcyjnym.
 */

const studioEnum = z.enum(['gdansk', 'pruszcz-gdanski']);

const faqItem = z.object({
  question: z.string(),
  answer: z.string(),
});

/**
 * Piktogram bloku. Zamknięta lista, bo `FactIcon` rysuje znaki sam,
 * bez biblioteki — nazwa spoza tej listy nie narysowałaby niczego,
 * a build przeszedłby bez słowa.
 */
const ikonaBloku = z.enum([
  'pin',
  'door',
  'locker',
  'move',
  'phone',
  'mail',
  'sun',
  'clock',
  'card',
  'heart',
  'chat',
  'calendar',
  'users',
  'check',
]);

/**
 * JEDNA SEKCJA NA PODSTRONIE ZAJĘĆ.
 *
 * Do 03.09.2026 każda forma ruchu miała ten sam, ZAMKNIĘTY zestaw czterech
 * bloków: „Czego się spodziewać", „Dla kogo", „Efekty", „Jak się przygotować".
 * Wynikało to z materiałów, jakie wtedy były: odpowiedzi 40–47 opisywały
 * wszystkie zajęcia łącznie, więc jeden szablon dla pięciu kategorii nie
 * gubił niczego, czego byśmy nie mieli.
 *
 * Najnowsze teksty klientki mają RÓŻNY kształt — jedna kategoria dostaje
 * dwa akapity prozy, inna wyliczankę korzyści, jeszcze inna blok o sprzęcie,
 * którego pozostałe nie potrzebują. Wtłaczanie tego z powrotem w cztery
 * stałe pola oznaczałoby albo redagowanie jej treści pod nasz szablon,
 * albo puste bloki. Dlatego zestaw sekcji jest teraz częścią DANYCH
 * kategorii, a nie szablonu strony.
 *
 * Kolejność sekcji na stronie = kolejność w tablicy.
 *
 * Treść bierze się z jednego z czterech źródeł, wzajemnie się nie wykluczają
 * poza tym, że co najmniej jedno musi być podane:
 *
 *   fromBody   treść to ciało pliku Markdown (formatowanie, akapity, pogrubienia).
 *              Najwyżej JEDNA sekcja w kategorii może je wziąć — ciało pliku
 *              jest jedno i wstawione dwa razy byłoby powtórzeniem.
 *   text       akapit albo kilka akapitów rozdzielonych pustym wierszem.
 *   items      wyliczanka; każda pozycja stoi sama, bez numeracji.
 *   pairs      wiersze „potrzeba → polecane zajęcia" (moduł rekomendacji,
 *              wymaga `variant: 'pairs'` — patrz niżej).
 *
 * WPROWADZENIE POD TYTUŁEM bierze się z ciała pliku Markdown wtedy i tylko
 * wtedy, gdy ŻADNA sekcja nie sięga po nie przez `fromBody`. Ciało jest
 * jedno, więc albo jest wstępem, albo treścią jednej z sekcji — nigdy obiema
 * rzeczami naraz.
 *
 * Pominięcie całej tablicy `sections` zostawia kategorię na dotychczasowym
 * układzie czterech bloków — pliki bez nowych tekstów od klientki nie
 * wymagają więc żadnej zmiany.
 */
const classSection = z
  .object({
    /** Nagłówek bloku (H2). Widoczny, więc bez skrótów i bez `TODO(`. */
    label: z.string(),
    /**
     * Pominięty — blok renderuje się bez znaku. Zalecenie: w obrębie jednej
     * kategorii albo wszystkie sekcje mają piktogram, albo żadna; mieszanka
     * wygląda w siatce jak niedokończona.
     */
    icon: ikonaBloku.optional(),
    /** Akapity rozdzielane pustym wierszem, tak jak w Markdownie. */
    text: z.string().optional(),
    items: z.array(z.string()).optional(),
    /**
     * WIERSZE „potrzeba → polecane zajęcia" — używane wyłącznie z
     * `variant: 'pairs'` (patrz niżej). Dwa oddzielne pola zamiast jednego
     * stringa dzielonego programowo po myślniku: myślnik występuje też
     * WEWNĄTRZ zdań (np. w innych sekcjach), więc automatyczny podział po
     * pierwszym „ - " byłby kruchy i przypadkowo ucinałby zdania, w których
     * ten sam znak pełni inną rolę. `label` i `recommendation` są więc
     * przypisywane ręcznie przy przepisywaniu treści klientki — nie
     * wyprowadzane z jednego pola w czasie renderowania.
     */
    pairs: z
      .array(
        z.object({
          /** Potrzeba albo opis osoby — lewa/pierwsza część wiersza. */
          label: z.string(),
          /** Polecane zajęcia — prawa/druga część wiersza. */
          recommendation: z.string(),
        }),
      )
      .optional(),
    fromBody: z.boolean().default(false),
    /**
     * POSTAĆ BLOKU. Klientka prosiła o mniej ramek na podstronach — stąd
     * warianty zamiast jednej karty dla wszystkiego:
     *
     *   plain  proza bez ramki: nagłówek, włoskowata kreska i tekst. Dla
     *          dłuższych partii opisowych, które w pudełku wyglądały jak
     *          wpis w panelu, a nie jak tekst do przeczytania.
     *   card   lekka karta z obwódką — dotychczasowa postać. Zostaje dla
     *          wyliczanek: ramka oddziela dwie listy stojące obok siebie.
     *   note   spokojny blok z terakotowym paskiem po lewej, bez wypełnienia
     *          i bez obwódki. Dla treści zdrowotnej, która ma być widoczna,
     *          ale nie ma krzyczeć ani udawać ostrzeżenia.
     *   panel  to samo wydzielenie paskiem, ale NA jasnym tle marki
     *          (`--surface-soft`). Dla fragmentu, który ma się wyróżniać
     *          z toku strony mocniej niż proza, a nie jest ostrzeżeniem.
     *          Bez zaokrągleń i bez obwódki — ciężar niesie samo tło.
     *   prose-grid     akapity z pola `text` jako spokojna siatka dwóch
     *                  kolumn, rozdzielona włoskowatymi kreskami. Bez ramki,
     *                  bez znaków, bez kart — dla kilku równorzędnych
     *                  akapitów, które w jednym słupku czytały się jak jeden
     *                  długi blok. Na telefonie jedna kolumna.
     *   features       wyliczanka `items` jako rząd równych kolumn, symbol
     *                  marki nad każdą pozycją, włoskowate kreski pionowe
     *                  między nimi. Bez ramki i bez zaokrągleń. Na telefonie
     *                  jedna pod drugą, kreski poziome.
     *   audience-grid  wyliczanka `items` jako siatka 2 × 2 na jednej
     *                  wyróżnionej powierzchni, z terakotowym okręgiem przy
     *                  każdej pozycji i kreskami rozdzielającymi. Jedna
     *                  powierzchnia na całą sekcję, nie cztery karty.
     *
     * Oba powyższe są OGÓLNE — decyduje o nich wariant w danych, nie slug
     * kategorii ani brzmienie nagłówka.
     *
     *   pairs  moduł rekomendacji zbudowany z pola `pairs`: wiersze
     *          potrzeba/polecane, oddzielone włoskowatymi liniami, bez ramki
     *          wokół całości — ten sam wzorzec separatorów co lista pytań
     *          w komponencie `Faq`. NIE jest ograniczony do jednej podstrony:
     *          dowolna kategoria z listą par „kto → co" może go użyć.
     */
    variant: z
      .enum(['plain', 'card', 'note', 'panel', 'pairs', 'features', 'audience-grid', 'prose-grid'])
      .default('card'),
    /**
     * SZEROKOŚĆ w siatce dwunastu kolumn (powyżej 64rem; niżej i tak jest
     * jedna kolumna). Dwunastokolumnowy podział — a nie po prostu dwa równe
     * tory — istnieje wyłącznie po to, żeby DWIE sąsiadujące sekcje mogły
     * dzielić wiersz w innej proporcji niż pół na pół; przy zwykłej połowie
     * `auto` i `full` w zupełności by wystarczyły.
     *
     *   narrow  5 z 12 kolumn (≈42%). Dopełnienie sąsiada oznaczonego `wide` —
     *           obie wartości trzeba wpisać razem, bo 5 + 7 = 12 musi się
     *           zgadzać, żeby dwa bloki zmieściły się w jednym wierszu.
     *   auto    6 z 12 (połowa). Wartość domyślna dla `variant: card`,
     *           gdy `width` jest pominięte — dokładnie to, co robił dawny
     *           dwutorowy podział, zanim doszła siatka dwunastu kolumn.
     *   wide    7 z 12 (≈58%). Dla sekcji z wyraźnie więcej tekstu niż
     *           sąsiadująca — patrz `narrow` wyżej.
     *   full    wszystkie 12 kolumn. Wartość domyślna dla `plain`, `note`
     *           i `pairs`, gdy `width` jest pominięte.
     *
     * Pominięta, wynika z wariantu jak opisano wyżej. Wpisana jawnie, wygrywa.
     */
    width: z.enum(['narrow', 'auto', 'wide', 'full']).optional(),
  })
  .refine(
    (s) => s.fromBody || Boolean(s.text) || (s.items?.length ?? 0) > 0 || (s.pairs?.length ?? 0) > 0,
    { message: 'Sekcja zajęć bez treści — podaj `text`, `items`, `pairs` albo `fromBody: true`.' },
  )
  .refine((s) => s.variant !== 'pairs' || (s.pairs?.length ?? 0) > 0, {
    message: 'variant: "pairs" wymaga tablicy `pairs` z co najmniej jedną pozycją.',
  });

const classes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/classes' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      /**
       * PODTYTUŁ pod nazwą zajęć — druga, potoczna nazwa formy ruchu.
       *
       * Renderuje się w nagłówku między tytułem a kreską, mniejszym pismem
       * i w kolorze tekstu akcentowanego. Pominięty — nagłówek wygląda
       * dokładnie jak dotąd, więc kategorie bez tej wartości się nie ruszają.
       */
      subtitle: z.string().optional(),
      order: z.number().default(99),
      shortDescription: z.string(),
      audience: z.array(z.string()).optional(),
      goals: z.array(z.string()).optional(),
      intensity: z.enum(['low', 'medium', 'high', 'varied']).optional(),
      level: z.string().optional(),
      duration: z.string().optional(),
      equipment: z.array(z.string()).optional(),
      /**
       * „Jak się przygotować" — jeden akapit, treść wprost od klientki
       * (25.08.2026).
       *
       * Pole istniało wcześniej jako tablica, ale nigdy nie dostało danych
       * ani nie było renderowane. Zmienione na pojedynczy tekst, bo klientka
       * podała akapit, a nie wyliczankę — rozbijanie go na punkty byłoby
       * moją redakcją jej treści.
       *
       * Cztery formy ruchu dostają ten sam tekst. Aerial yoga ma mieć własny,
       * którego w projekcie nie ma, więc jej pole zostaje puste i blok się
       * nie renderuje. Opcjonalność jest tu celowa: brak treści ma oznaczać
       * brak sekcji, nigdy wypełniacz.
       */
      preparation: z.string().optional(),
      /**
       * WPROWADZENIE W DWÓCH KOLUMNACH na szerokich ekranach.
       *
       * Dotyczy wyłącznie ciała pliku renderowanego jako wstęp pod tytułem.
       * Akapity rozkładają się na dwie kolumny, na telefonie wracają do
       * jednej w kolejności z pliku. Pominięte — wstęp stoi w jednej
       * kolumnie, jak dotąd.
       */
      introColumns: z.boolean().default(false),
      /**
       * WŁASNY ZESTAW SEKCJI tej kategorii — patrz `classSection` wyżej.
       *
       * Podany, wygrywa z układem czterech bloków w całości: pola `audience`,
       * `goals` i `preparation` przestają być wtedy renderowane przez szablon
       * i zostają w modelu jako dane (mogą być powtórzone w `items`, jeśli
       * klientka chce je zachować). To celowo jest przełącznik zero-jedynkowy,
       * a nie doklejanie sekcji do szablonu: mieszanka „cztery stałe plus
       * dwie własne" znaczyłaby, że kolejności nie da się już ustawić.
       *
       * Pominięty — układ jak dotąd.
       */
      sections: z
        .array(classSection)
        .min(1)
        .superRefine((sekcje, ctx) => {
          const zTresci = sekcje.filter((s) => s.fromBody).length;
          if (zTresci > 1) {
            ctx.addIssue({
              code: 'custom',
              message:
                'Ciało pliku Markdown może zasilić tylko jedną sekcję — tutaj ' +
                `"fromBody: true" stoi ${zTresci} razy.`,
            });
          }
        })
        .optional(),
      contraindicationsNote: z.string().optional(),
      locationSlugs: z.array(studioEnum),
      instructorSlugs: z.array(z.string()).optional(),
      fitsseyCategoryId: z.string().optional(),
      heroImage: image().optional(),
      heroImageAlt: z.string().optional(),
      faq: z.array(faqItem).optional(),
      seoTitle: z.string().optional(),
      seoDescription: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

const faq = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faq' }),
  schema: z.object({
    question: z.string(),
    order: z.number().default(99),
    scope: z.union([studioEnum, z.literal('all')]).default('all'),
    /** Odpowiedź zatwierdzona przez właścicielkę — inaczej nie renderujemy. */
    approved: z.boolean().default(false),
  }),
});

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reviews' }),
  schema: z.object({
    author: z.string(),
    source: z.enum(['google', 'facebook', 'direct']),
    sourceUrl: z.url().optional(),
    /** Opinia bez zgody i bez źródła nie idzie na stronę (brief §12.10). */
    consent: z.boolean().default(false),
    locationSlug: studioEnum.optional(),
    order: z.number().default(99),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishedAt: z.date(),
      updatedAt: z.date().optional(),
      /** Autor artykułu musi być wskazany (brief §22.3). */
      author: z.string(),
      category: z.string(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      relatedClassSlugs: z.array(z.string()).optional(),
      /** Zastrzeżenie przy treściach zdrowotnych. */
      healthDisclaimer: z.boolean().default(false),
      draft: z.boolean().default(true),
    }),
});

export const collections = { classes, faq, reviews, blog };
