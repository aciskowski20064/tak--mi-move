import type { StudioLocation } from '~/types';

/**
 * JEDYNE źródło prawdy dla danych kontaktowych marki.
 *
 * NAP (nazwa, adres, telefon) musi być identyczny na stronie, w danych
 * strukturalnych i w wizytówce Google. Dlatego nie wolno powtarzać tych
 * wartości w komponentach — zawsze import stąd.
 */

export const site = {
  /** Zapis wg logo — wersalikami. */
  name: 'TAK MI MOVE',
  /** FAKT: pełna nazwa działalności i NIP — odpowiedzi 57 i 58 (19.08.2026). */
  legalName: 'Tak Mi Move Katarzyna Zawadzka',
  vatId: '6040107434',
  tagline: 'Butikowe studia zdrowego ruchu',
  locale: 'pl_PL',
  lang: 'pl',
  /** FAKT: jeden numer obsługuje oba studia — odpowiedź 60. */
  phone: '+48507444640',
  phoneDisplay: '507 444 640',
  /**
   * FAKT: jeden wspólny adres dla obu lokalizacji — odpowiedź 59.
   * Klientka przekreśliła `takmimovegdansk@gmail.com`: ta skrzynka nie działa.
   */
  email: 'takmimove@gmail.com',
  /** TODO(klientka): potwierdzić domenę. */
  url: 'https://takmimove.pl',
  /** Obraz udostępniania — bez niego link wysłany w komunikatorze nie ma podglądu. */
  ogImage: '/og-default.jpg',
} as const;

/**
 * TRYB DEMO.
 *
 * Dopóki `true`, cała strona wychodzi z `noindex, nofollow`, a robots.txt
 * zabrania indeksowania. To zabezpieczenie na czas prezentacji: wersja
 * poglądowa pod tymczasowym adresem nie może trafić do Google i konkurować
 * z docelową stroną klientki ani rozjechać jej wizytówki lokalnej.
 *
 * PRZED WDROŻENIEM PRODUKCYJNYM: ustawić na `false` i potwierdzić domenę
 * w `site.url` oraz w `astro.config.mjs`.
 */
export const DEMO_MODE = true;

/**
 * Fitssey obsługuje grafik, konto, płatność i rezerwację.
 * Strona nigdy nie odtwarza tych funkcji (brief §15.5).
 */
export const booking = {
  frontOfficeUrl: 'https://app.fitssey.com/Takmimove/frontoffice',
  label: 'Umów wizytę',
  /** Fitssey to osobna aplikacja z logowaniem — otwieramy w nowej karcie. */
  newTab: true,
  /**
   * FAKT: kody z panelu Fitssey, otrzymane 21.08.2026.
   *
   * Fitssey daje dwa osobne kody. Bazowy ładuje bibliotekę i inicjuje konto —
   * wystarczy raz na stronie. Widżet to własny element HTML `lb-schedule-widget`,
   * który ta biblioteka rejestruje; sam z siebie nic nie robi.
   *
   * Skryptu NIE wpinamy globalnie. Wchodzi tylko tam, gdzie faktycznie stoi
   * widżet, czyli na /grafik. Powód jest podwójny: to skrypt zewnętrzny, który
   * ustawia własne ciasteczka, a strona nie ma jeszcze zgody na cookies —
   * więc im mniej podstron go dotyka, tym mniejszy problem do zamknięcia.
   * Drugi powód jest prozaiczny: reszta serwisu nie ma z niego pożytku.
   */
  widgetSrc: 'https://app.fitssey.com/assets/js/lb.widget.prod.js',
  widgetAccount: 'Takmimove',
} as const;

/*
 * Formularza kontaktowego nie ma — decyzja klientki z 20.08.2026.
 *
 * Briefy były tu rozbieżne: dokument projektowy §6.5 wymagał formularza,
 * analiza §19 dopuszczała go „tylko wtedy, gdy ktoś będzie go obsługiwać”.
 * Rozstrzygnięte na korzyść tej drugiej: kontakt idzie telefonem i mailem,
 * oba wprost na /kontakt i w stopce. Formularz, którego nikt nie odbiera,
 * jest gorszy niż jego brak.
 */

export const locations: StudioLocation[] = [
  {
    slug: 'pruszcz-gdanski',
    name: 'Studio Pruszcz Gdański',
    city: 'Pruszcz Gdański',
    cityLocative: 'Pruszczu Gdańskim',
    street: 'ul. Grunwaldzka 55/7',
    postalCode: '83-000',
    phone: site.phone,
    email: site.email,
    /** FAKT: odpowiedź 33 — ulica i piętro potwierdzone. */
    // Bez słowa „Wejście" na początku — stoi już w etykiecie karty obok.
    entranceInfo: 'Od ulicy Kossaka, pierwsze piętro',
    // TODO(klientka): czy parking przy studiu jest płatny (odpowiedź 34 tego
    // nie rozstrzyga — dla Gdańska tak, dla Pruszcza zostało nieokreślone).
    // TODO(klientka): godziny otwarcia (odpowiedź 37 bez odpowiedzi).
    /**
     * FAKT: pełne zdanie klientki (25.08.2026), podane wprost dla Pruszcza.
     * Zapis jak u niej — małą literą, bez skracania.
     */
    equipmentInfo:
      'sprzęt do ćwiczeń, szatnia, prysznic, kosmetyki i ręczniki dostępne na miejscu',
    /** FAKT: treść wprost od klientki (25.08.2026). Pruszcz bez „z dziećmi". */
    classesSummary:
      'zróżnicowane formy ruchu i intensywność, zajęcia w ciąży, sesje grupowe i indywidualne',
    classSlugs: ['joga', 'pilates', 'stretching', 'aerial-yoga', 'barre'],
    /** FAKT: identyfikator z generatora widżetu Fitssey (21.08.2026). */
    fitsseyLocationId: '7E7E757E-E55D-54BC-3262-E448A467174F',
    social: [
      { platform: 'instagram', label: '@tak_mi_move', url: 'https://www.instagram.com/tak_mi_move/' },
      { platform: 'facebook', label: 'TAK MI MOVE', url: 'https://www.facebook.com/takmimove' },
    ],
  },
  {
    slug: 'gdansk',
    name: 'Studio Gdańsk',
    city: 'Gdańsk',
    cityLocative: 'Gdańsku',
    street: 'ul. Angielska Grobla 35/47',
    postalCode: '80-756', // FAKT: potwierdzone w mailu klientki (19.08.2026)
    phone: site.phone,
    email: site.email, // FAKT: jeden wspólny adres — odpowiedź 59
    /**
     * FAKT: parter — odpowiedź 33. Nazwy ulicy świadomie nie podajemy:
     * klientka wpisała ją ze znakiem zapytania („Bądkowskiego"?), więc do
     * czasu potwierdzenia zostaje sam adres z nagłówka.
     */
    entranceInfo: 'Parter budynku',
    /**
     * FAKT: odpowiedź 34. Świadomie NIE renderowane od Etapu 5 — lista
     * klientki ma dokładnie cztery fakty i parkingu na niej nie ma.
     * Dane zostają, żeby ich nie stracić przy ewentualnej zmianie decyzji.
     */
    parkingInfo: 'Płatna strefa w okolicy',
    /**
     * Wpisane na polecenie (28.08.2026) po tym, jak wcześniej stało tu
     * PENDING. Każdy człon ma pokrycie w źródle, żadnego nie zmyślono:
     *
     *   szatnia ......... odpowiedź 10, wprost „szatnie w obu studiach"
     *   prysznic ........ odpowiedź 50 („kosmetyki, ręczniki, prysznic
     *   kosmetyki ....... dostępne") — bez wskazania lokalizacji, więc
     *   ręczniki ........ traktowana jako zasada marki; ta sama odpowiedź
     *                     stoi już jako reguła ogólna na /grafik
     *   sprzęt .......... widoczny na zdjęciach z sesji w Gdańsku
     *                     (regał z hantlami, piłkami i wałkami, DSC01472)
     *
     * Brzmienie celowo takie samo jak w Pruszczu: oba studia oferują to
     * samo, a odpowiedź 10 mówi to wprost. Różnicowanie słów dla samego
     * różnicowania byłoby wymyślaniem faktu, którego nie ma.
     *
     * DO POTWIERDZENIA przez klientkę przed publikacją — jedyny człon
     * podany przez nią explicite dla Gdańska to szatnia.
     */
    equipmentInfo:
      'sprzęt do ćwiczeń, szatnia, prysznic, kosmetyki i ręczniki dostępne na miejscu',
    // TODO(klientka): godziny otwarcia (odpowiedź 37 bez odpowiedzi).
    /**
     * FAKT: treść wprost od klientki (25.08.2026). Gdańsk ma dopisane
     * „i z dziećmi" — potwierdza to grafik Fitssey, gdzie „Joga dla mam
     * z dziećmi" i pilates dla mam z dziećmi stoją właśnie w Gdańsku.
     */
    classesSummary:
      'zróżnicowane formy ruchu i intensywność, zajęcia w ciąży i z dziećmi, sesje grupowe i indywidualne',
    classSlugs: ['joga', 'pilates', 'stretching', 'aerial-yoga', 'barre'],
    /** FAKT: identyfikator z generatora widżetu Fitssey (21.08.2026). */
    fitsseyLocationId: '190D8811-0D88-4976-8A63-F042C284B507',
    social: [
      {
        platform: 'instagram',
        label: '@tak_mi_move_gdansk',
        url: 'https://www.instagram.com/tak_mi_move_gdansk/',
      },
      {
        platform: 'facebook',
        label: 'TAK MI MOVE Gdańsk',
        url: 'https://www.facebook.com/profile.php?id=61576011456827',
      },
    ],
  },
];

export const getLocation = (slug: string): StudioLocation | undefined =>
  locations.find((l) => l.slug === slug);

/** Adres w jednej linii — do stopki, schema i wizytówek. */
export const formatAddress = (l: StudioLocation): string =>
  [l.street, [l.postalCode, l.city].filter(Boolean).join(' ')].filter(Boolean).join(', ');
