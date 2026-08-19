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
   * TODO(klientka): kod widżetu z panelu Studio → Integracje → Widżety.
   * Dopóki jest `null`, /grafik działa na fallbacku iframe (brief §15.4).
   */
  widgetScript: null as string | null,
} as const;

/**
 * Formularz kontaktowy.
 *
 * Briefy są tu rozbieżne: dokument projektowy §6.5 wymaga formularza,
 * analiza §19 dopuszcza go „tylko wtedy, gdy ktoś będzie go obsługiwać”.
 * Rozstrzygnięcie: formularz jest zbudowany, ale renderuje się dopiero po
 * ustawieniu `endpoint`. Formularz, który po cichu gubi wiadomości, jest
 * gorszy niż jego brak — a klientka i tak musi zdecydować, kto go obsługuje.
 */
export const contactForm = {
  /** TODO: adres usługi wysyłkowej (Formspree / Resend / API route). */
  endpoint: null as string | null,
};

export const locations: StudioLocation[] = [
  {
    slug: 'pruszcz-gdanski',
    name: 'Studio Pruszcz Gdański',
    city: 'Pruszcz Gdański',
    street: 'ul. Grunwaldzka 55/7',
    postalCode: '83-000',
    phone: site.phone,
    email: site.email,
    // TODO(klientka): potwierdzić wejście od ul. Kossaka.
    // TODO(klientka): parking, dojazd, dostępność, godziny otwarcia.
    classSlugs: ['joga', 'pilates', 'stretching', 'aerial-yoga', 'barre'],
    social: [
      { platform: 'instagram', label: '@tak_mi_move', url: 'https://www.instagram.com/tak_mi_move/' },
      { platform: 'facebook', label: 'TAK MI MOVE', url: 'https://www.facebook.com/takmimove' },
    ],
  },
  {
    slug: 'gdansk',
    name: 'Studio Gdańsk',
    city: 'Gdańsk',
    street: 'ul. Angielska Grobla 35/47',
    postalCode: '80-756', // FAKT: potwierdzone w mailu klientki (19.08.2026)
    phone: site.phone,
    email: site.email, // FAKT: jeden wspólny adres — odpowiedź 59
    classSlugs: ['joga', 'pilates', 'stretching', 'aerial-yoga'],
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
