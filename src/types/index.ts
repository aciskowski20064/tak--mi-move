/**
 * Modele danych TAK MI MOVE (brief §38–39).
 *
 * Zasada nadrzędna: pola, których nie mamy potwierdzonych, są OPCJONALNE
 * i pomijane w renderze. Nigdy nie dostają wartości domyślnych ani wypełniaczy —
 * dzięki temu żadna zmyślona treść nie może wejść na produkcję (brief §50).
 */

export type Studio = 'gdansk' | 'pruszcz-gdanski';

export type ImageAsset = {
  src: ImageMetadata;
  alt: string;
  caption?: string;
};

export type StudioLocation = {
  slug: Studio;
  /** Nazwa w interfejsie, np. „Studio Gdańsk”. */
  name: string;
  city: string;
  /** Miejscownik nazwy miasta — „w Gdańsku", nie „w Gdańsk". */
  cityLocative: string;
  street: string;
  postalCode?: string;
  phone?: string;
  email?: string;
  /** Link do Google Maps — do podmiany na potwierdzony przez klientkę. */
  mapUrl?: string;
  directionsUrl?: string;
  coordinates?: { lat: number; lng: number };
  entranceInfo?: string;
  parkingInfo?: string;
  transitInfo?: string;
  accessibilityInfo?: string;
  openingHours?: string[];
  /** Krótka charakterystyka miejsca — musi być inna dla każdej lokalizacji (brief §16.4). */
  description?: string;
  classSlugs: string[];
  /** ID lokalizacji w Fitssey — pozwala filtrować widżet grafiku. */
  fitsseyLocationId?: string;
  social: SocialLink[];
};

export type SocialLink = {
  platform: 'instagram' | 'facebook';
  label: string;
  url: string;
};

export type ClassIntensity = 'low' | 'medium' | 'high' | 'varied';

export type ClassType = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription?: string;
  /** Dla kogo — konkretnie, nie „dla każdego”. */
  audience?: string[];
  goals?: string[];
  intensity?: ClassIntensity;
  level?: string;
  duration?: string;
  equipment?: string[];
  preparation?: string[];
  /** Zawsze odsyła do konsultacji ze specjalistą, nigdy nie obiecuje efektów zdrowotnych. */
  contraindicationsNote?: string;
  locationSlugs: Studio[];
  instructorSlugs?: string[];
  fitsseyCategoryId?: string;
  heroImage?: ImageAsset;
  gallery?: ImageAsset[];
};

export type TeamMember = {
  slug: string;
  name: string;
  role?: string;
  specialties?: string[];
  bio?: string;
  /** Publikacja dopiero po pisemnej zgodzie osoby (brief §60). */
  photoConsent: boolean;
  photo?: ImageAsset;
  locationSlugs?: Studio[];
  classSlugs?: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
  /** Pytanie dotyczy konkretnej lokalizacji albo obu. */
  scope?: Studio | 'all';
};

export type Review = {
  author: string;
  text: string;
  /** Bez źródła opinia nie idzie na stronę (brief §12.10). */
  source: 'google' | 'facebook' | 'direct';
  sourceUrl?: string;
  consent: boolean;
  locationSlug?: Studio;
};

export type CtaSource =
  | 'header'
  | 'hero'
  | 'schedule'
  | 'location'
  | 'class'
  | 'first-visit'
  | 'footer'
  | 'final'
  | 'not-found';
