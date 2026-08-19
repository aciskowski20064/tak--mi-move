/**
 * Nawigacja główna. Brief §11: „Zajęcia” odpowiada na pytanie „co mogę ćwiczyć?”,
 * „Grafik i zapisy” na „kiedy mogę przyjść?”. Te dwie rzeczy nie mogą się zlewać.
 */

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
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
  { label: 'O nas', href: '/o-nas' },
  { label: 'Kontakt', href: '/kontakt' },
];

export const footerLegalNav: NavItem[] = [
  { label: 'Polityka prywatności', href: '/polityka-prywatnosci' },
  { label: 'Polityka cookies', href: '/polityka-cookies' },
];
