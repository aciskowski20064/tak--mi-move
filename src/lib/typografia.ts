/**
 * Polska typografia — sieroty, myślniki i nazwa marki.
 *
 * Jedno miejsce z regułami dla obu źródeł treści: `typo()` obsługuje teksty
 * z `src/data/copy/`, a `rehypeSieroty()` te same reguły stosuje do plików
 * markdown (opisy zajęć, FAQ, opinie). Rozdzielenie ich groziłoby tym, że
 * połowa serwisu łamie wiersze inaczej niż druga.
 *
 * GDZIE TEGO NIE WOLNO UŻYWAĆ:
 *   <title>, meta description, opisy alternatywne obrazów, dane strukturalne,
 *   adresy URL, atrybuty techniczne.
 * Twarda spacja trafia stamtąd do wyników wyszukiwania i do czytników ekranu
 * jako znak, którego nikt nie chciał. Dlatego `typo()` jest wywoływane jawnie
 * w miejscu renderowania, a nie zakładane z góry na cały obiekt z treścią.
 */

/** Twarda spacja. Zapisana kodem, bo w edytorze jest nie do odróżnienia od zwykłej. */
const TWARDA = ' ';

/**
 * 1. Nazwa marki nigdy nie rozpada się między wierszami.
 *    Zgłoszone na `/pierwsza-wizyta`, gdzie tytuł łamał „Tak Mi Move" na dwie
 *    linijki. Obie pisownie, bo wersalikowa stoi w opisach i w stopce.
 */
const MARKA = /\bTAK MI MOVE\b|\bTak Mi Move\b/gu;

/**
 * 2. Myślnik nie zaczyna ANI nie kończy wiersza.
 *    Wiązanie z obu stron sprawia, że „słowo — słowo" jest jedną całością.
 *    Samo dowiązanie do lewej zostawiałoby myślnik na końcu wiersza, samo do
 *    prawej — na początku następnego. Klientka zgłosiła oba przypadki.
 */
const MYSLNIK = /[ \t]+—[ \t]+/gu;

/**
 * 3. Jednoliterowe wyrazy `a i o u w z` idą do następnego wiersza razem
 *    ze słowem, przed którym stoją.
 *
 *    Podejrzenie w lookbehind, nie w grupie zwykłej: znak poprzedzający musi
 *    zostać w strumieniu, inaczej dwa jednoliterowe wyrazy pod rząd
 *    („ciało i głowa", „x4 i x8") łapałyby się tylko za pierwszym razem —
 *    spacja przed drugim byłaby już skonsumowana przez poprzednie dopasowanie.
 */
const SIEROTY = /(?<=^|[\s(„"'])([aiouwzAIOUWZ])[ \t]+/gu;

/**
 * 4. Dwuliterowy wyraz na POCZĄTKU zdania też nie zostaje sam na końcu wiersza.
 *
 *    Zakres celowo wąski: tylko po kropce, wykrzykniku, pytajniku albo na
 *    starcie tekstu. Dwuliterowych w środku zdania świadomie nie wiążemy —
 *    przy 375 px każde dodatkowe wiązanie odbiera przeglądarce miejsce na
 *    złamanie wiersza. Zgłoszone przy leadzie na `/studia`: „…łatwiej Ci
 *    dotrzeć. Na" kończyło wiersz.
 */
const POCZATEK_ZDANIA = /(?<=^|[.!?][ \t])([A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż])[ \t]+/gu;

/**
 * 5. Oznaczenie karnetu („x4", „x8") nie zostaje samo na końcu wiersza.
 *
 *    Bez tego wyliczanka rozpadała się w kroku 3 na `/pierwsza-wizyta`:
 *    „…albo karnet — x4," kończyło wiersz, a „x8 lub Open" schodziło niżej.
 *    Wiązanie przesuwa całą wyliczankę razem, a łamanie wypada przed słowem
 *    „karnet", czyli w naturalnym miejscu.
 *
 *    Reguła zatrzymuje się na „lub": gdyby objęła też „Open", nierozdzielny
 *    kawałek urósłby do 25 znaków i przy wąskich kolumnach groziłby
 *    wypchnięciem tekstu poza kadr.
 */
const OZNACZENIE_PAKIETU = /\b(x\d+[,.;]?)[ \t]+/gu;

/** Wspólny przebieg reguł — używany i przez `typo()`, i przez wtyczkę rehype. */
export const zastosujReguly = (tekst: string): string =>
  tekst
    .replace(MARKA, (m) => m.split(' ').join(TWARDA))
    .replace(MYSLNIK, `${TWARDA}—${TWARDA}`)
    .replace(SIEROTY, `$1${TWARDA}`)
    .replace(POCZATEK_ZDANIA, `$1${TWARDA}`)
    .replace(OZNACZENIE_PAKIETU, `$1${TWARDA}`);

/**
 * Stringi z prefiksem `TODO(` zostawiamy nietknięte: nigdy się nie renderują,
 * a `docs/dla-klientki.md` powstaje z ich dosłownej treści.
 */
export const typo = (tekst: string): string => {
  if (!tekst || tekst.trimStart().startsWith('TODO(')) return tekst;
  return zastosujReguly(tekst);
};

/** Wersja dla pól opcjonalnych — przepuszcza `undefined` i `null` bez zmian. */
export function typoOpt(tekst: string): string;
export function typoOpt(tekst: string | undefined): string | undefined;
export function typoOpt(tekst: string | null): string | null;
export function typoOpt(tekst: string | null | undefined): string | null | undefined {
  return typeof tekst === 'string' ? zastosujReguly(tekst) : tekst;
}

/**
 * Elementy pomijane przy obchodzeniu drzewa.
 *
 * Kod i dane — bo twarda spacja zmieniłaby tam treść, a nie tylko łamanie.
 *
 * Nagłówki — z powodu, który wyszedł dopiero na buildzie: Astro generuje
 * identyfikatory kotwic Z TEKSTU nagłówka i robi to PO wtyczkach użytkownika.
 * Związana spacja wypadała przy tworzeniu odsyłacza i „pilates-a-joga"
 * zmieniało się w „pilates-ajoga". Identyfikator jest adresem, nie ozdobą,
 * więc typografia ustępuje mu pierwszeństwa. Nagłówki w markdown są krótkie
 * i tak czy inaczej rzadko się łamią.
 */
const POMIJANE = new Set([
  'code',
  'pre',
  'kbd',
  'samp',
  'script',
  'style',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
]);

type WezelHast = {
  type?: string;
  tagName?: string;
  value?: string;
  children?: WezelHast[];
};

/**
 * Wtyczka rehype dla treści z plików markdown.
 *
 * Obchodzenie drzewa napisane ręcznie zamiast przez `unist-util-visit`:
 * to osiem linii, a dokładanie zależności do projektu, który świadomie ma
 * ich kilka, byłoby nieproporcjonalne.
 */
export function rehypeSieroty() {
  const chodz = (wezel: WezelHast): void => {
    if (!wezel || !Array.isArray(wezel.children)) return;
    for (const dziecko of wezel.children) {
      if (dziecko.type === 'text' && typeof dziecko.value === 'string') {
        dziecko.value = zastosujReguly(dziecko.value);
      } else if (dziecko.type === 'element' && POMIJANE.has(dziecko.tagName ?? '')) {
        continue;
      } else {
        chodz(dziecko);
      }
    }
  };
  return (drzewo: WezelHast) => chodz(drzewo);
}
