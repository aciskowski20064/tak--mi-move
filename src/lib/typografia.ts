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
 * 4. Dwuliterowy wyraz nie zostaje sam na końcu wiersza — GDZIEKOLWIEK stoi.
 *
 *    Wcześniej reguła obejmowała tylko początek zdania, z obawy o to, że przy
 *    375 px każde dodatkowe wiązanie odbiera przeglądarce miejsce na złamanie
 *    wiersza. Praktyka tego nie potwierdziła: na kartach wartości `/o-nas`
 *    wiersze kończyły się na „nie", „na" i „to", a najdłuższy powstający
 *    kawałek („na wyposażeniu") ma 14 znaków, czyli mniej niż jedno dłuższe
 *    polskie słowo, które i tak musi się w tej kolumnie zmieścić.
 *
 *    Zakres: dwie litery, dowolna wielkość, także po nawiasie i cudzysłowie.
 *
 *    HAMULEC DŁUGOŚCI — patrz niżej.
 */
const DWULITEROWE = /(?<=^|[\s(„"'])(\p{L}\p{L})[ \t]+/gu;

/**
 * 5. „się" i „nie" nie zostają na końcu wiersza.
 *
 *    Trzy litery, więc reguła wyżej ich nie łapie, a to dwa najczęstsze
 *    polskie wyrazy wiszące: żaden nic nie znaczy sam z siebie i czyta się
 *    dopiero razem z tym, co po nim. Zgłoszone na kartach wartości `/o-nas`
 *    („Tak samo liczy się" i „nikt nie" kończyły wiersze).
 *
 *    Lista jest ZAMKNIĘTA i celowo krótka. Pozostałych trzyliterowych
 *    („lub", „czy", „dla") nie wiążemy: są samodzielne, a każdy kolejny
 *    związany wyraz odbiera przeglądarce miejsce na złamanie wiersza.
 *
 *    HAMULEC DŁUGOŚCI — patrz niżej.
 */
const SIE_NIE = /(?<=^|[\s(„"'])([Ss]ię|[Nn]ie)[ \t]+/gu;

/*
 * HAMULEC DŁUGOŚCI — wspólny dla reguł 4 i 5.
 *
 * Krótki wyraz doklejony do POJEDYNCZEGO słowa niczego nie psuje: to słowo
 * i tak musi się w kolumnie zmieścić, a dwie litery przed nim niczego nie
 * przeważą. Problem zaczyna się, gdy doklejamy go do ciągu, który JUŻ jest
 * nierozdzielny — wtedy kawałki się sumują.
 *
 * Nagłówek „Skąd wzięło się TAK MI MOVE" na `/o-nas`: reguła nazwy marki
 * związała „TAK MI MOVE" (11 znaków), a reguła 5 dokleiła do tego „się"
 * i zrobiła kawałek 15 znaków. W kolumnie 264 px przy 768 px potrzebował
 * 304 px i wypychał stronę o 12 px poza kadr, czyli poziomy pasek
 * przewijania na tablecie. Zmierzone, nie przewidziane — złapał to przegląd
 * QA zaraz po wprowadzeniu reguł 4 i 5.
 *
 * Stąd warunek: doklejamy do gotowego ciągu tylko wtedy, gdy suma zmieści
 * się w LIMICIE. „to" + „u nas" (8 znaków) przechodzi, „się" + „TAK MI MOVE"
 * (15) nie. Pojedyncze słowa przechodzą zawsze.
 *
 * Wyrazów jednoliterowych hamulec NIE dotyczy: ich wiązanie jest w polskiej
 * typografii obowiązkowe, działa od pierwszego etapu i stoi na stronach już
 * zatwierdzonych.
 */
const LIMIT_CIAGU = 12;

/** Ciąg od podanego miejsca do najbliższej ZWYKŁEJ spacji — twarde go nie kończą. */
const ciagOd = (tekst: string, od: number): string => {
  const koniec = tekst.slice(od).search(/[ \t\n]/);
  return koniec === -1 ? tekst.slice(od) : tekst.slice(od, od + koniec);
};

/** Wiązanie z hamulcem długości — używane przez reguły 4 i 5. */
const zwiazKrotkie = (tekst: string, regula: RegExp): string =>
  tekst.replace(regula, (dopasowanie, slowo: string, offset: number) => {
    const nastepny = ciagOd(tekst, offset + dopasowanie.length);
    const juzZwiazany = nastepny.includes(TWARDA);
    if (juzZwiazany && slowo.length + 1 + nastepny.length > LIMIT_CIAGU) return dopasowanie;
    return slowo + TWARDA;
  });

/**
 * 6. Oznaczenie karnetu („x4", „x8") nie zostaje samo na końcu wiersza.
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

/**
 * 7. Tylda w haśle „SIŁA ~ SPOKÓJ ~ RÓWNOWAGA" trzyma się słowa PRZED sobą.
 *
 *    Inaczej niż myślnik, który wiążemy z obu stron: tam chodzi o to, żeby
 *    nigdy nie stał sam na krawędzi wiersza, a tu o coś innego. Hasło musi
 *    móc się złamać — na telefonie mieści się dopiero w trzech wierszach,
 *    po jednym słowie. Wiązanie obustronne zrobiłoby z niego jeden
 *    nierozdzielny ciąg 25 znaków i zbiłoby stopień pisma do nieczytelnego.
 *
 *    Wiązanie jednostronne daje dokładnie to, czego chcemy: łamanie wypada
 *    PO tyldzie, więc wiersz kończy się „SIŁA ~", a nigdy nie zaczyna od
 *    samego separatora.
 */
const TYLDA_SEPARATOR = /([^\s])[ \t]+~[ \t]+/gu;

/**
 * 8. Skrót „ul." trzyma się nazwy ulicy.
 *
 *    Zgłoszone przez klientkę (13.09.2026): w adresie studia „ul." potrafiło
 *    zostać na końcu wiersza, a „Grunwaldzka 55/7" schodziło do następnego.
 *    Sam skrót nic wtedy nie znaczy — czyta się jak urwane słowo.
 *
 *    Wiązanie jednostronne i tylko z PIERWSZYM wyrazem po skrócie:
 *    „ul. Grunwaldzka" to 15 znaków, czyli mniej niż najwęższa kolumna
 *    adresu w serwisie (ok. 200 px w kaflu studia na tablecie). Numer domu
 *    łamie się dalej normalnie i to nikomu nie przeszkadza.
 *
 *    Reguła obejmuje oba studia — ich adresy zaczynają się tym samym
 *    skrótem, a robienie wyjątku dla jednego byłoby wymyślaniem różnicy,
 *    której nie ma.
 */
const SKROT_ULICY = /\b(ul\.)[ \t]+/gu;

/** Wspólny przebieg reguł — używany i przez `typo()`, i przez wtyczkę rehype. */
export const zastosujReguly = (tekst: string): string => {
  const zeSpacjami = tekst
    .replace(MARKA, (m) => m.split(' ').join(TWARDA))
    .replace(MYSLNIK, `${TWARDA}—${TWARDA}`)
    .replace(SIEROTY, `$1${TWARDA}`);

  const zKrotkimi = zwiazKrotkie(zwiazKrotkie(zeSpacjami, DWULITEROWE), SIE_NIE);

  return zKrotkimi
    .replace(OZNACZENIE_PAKIETU, `$1${TWARDA}`)
    .replace(TYLDA_SEPARATOR, `$1${TWARDA}~ `)
    .replace(SKROT_ULICY, `$1${TWARDA}`);
};

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
