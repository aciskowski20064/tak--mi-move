/**
 * Nawigacja główna. Brief §11: „Zajęcia” odpowiada na pytanie „co mogę ćwiczyć?”,
 * „Grafik i zapisy” na „kiedy mogę przyjść?”. Te dwie rzeczy nie mogą się zlewać.
 */

import { eventOffer } from '~/data/site';

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
  /** Pozycja wyprowadza poza serwis (dokument) — otwiera się w nowej karcie. */
  newTab?: boolean;
};

/**
 * UWAGA: podmenu „Zajęcia” i „Studia” NIE są tu wypisane.
 *
 * Podstrony zajęć powstają z kolekcji treści i istnieją tylko wtedy, gdy wpis
 * nie jest szkicem. Zaszyta na sztywno lista linków rozjeżdżała się z realnymi
 * stronami i dawała 55 martwych odsyłaczy w buildzie produkcyjnym.
 * Podmenu składa `SiteNav.astro` z tego samego źródła, z którego generują się
 * strony — dzięki temu rozjazd jest niemożliwy.
 */
export const mainNav: NavItem[] = [
  { label: 'Zajęcia', href: '/zajecia' },
  { label: 'Grafik i zapisy', href: '/grafik' },
  { label: 'Studia', href: '/studia' },
  { label: 'Pierwsza wizyta', href: '/pierwsza-wizyta' },
  /**
   * ORGANIZACJA WYDARZEŃ (09.09.2026, propozycja klientki). Oferta eventowa
   * była dotąd schowana w jednej sekcji na /o-nas — tu dostaje wejście
   * z każdego ekranu, w menu desktopowym i mobilnym.
   *
   * Prowadzi wprost do polskiego PDF-a, który już leży w `public/documents/`;
   * osobnej podstrony świadomie nie ma, bo jej zakres nie jest ustalony.
   * Ścieżka idzie z `eventOffer` — jedynego miejsca, gdzie żyje adres tego
   * dokumentu, więc podmiana pliku nie wymaga ruszania nawigacji.
   */
  { label: 'Organizacja wydarzeń', href: eventOffer.pdfUrl, newTab: true },
  { label: 'O nas', href: '/o-nas' },
  { label: 'Kontakt', href: '/kontakt' },
];

export const footerLegalNav: NavItem[] = [
  { label: 'Polityka prywatności', href: '/polityka-prywatnosci' },
  { label: 'Polityka cookies', href: '/polityka-cookies' },
];
