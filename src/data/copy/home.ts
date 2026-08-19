/**
 * CAŁA TREŚĆ STRONY GŁÓWNEJ W JEDNYM PLIKU.
 *
 * Komponenty nie zawierają żadnych tekstów — edycja copy odbywa się wyłącznie tutaj.
 *
 * Legenda statusów:
 *   FAKT     — wynika wprost z materiałów marki albo briefu, można publikować.
 *   ROBOCZE  — napisane przez nas, wymaga akceptacji właścicielki.
 *   TODO(...) — dane, których nie mamy i których nie wolno wymyślać (brief §50).
 *              Takie stringi nie renderują się nigdy; w trybie dev pokazuje je
 *              znacznik „brak treści”, w produkcji znikają.
 */

export const home = {
  meta: {
    // ROBOCZE — do dopracowania pod frazy lokalne w Etapie 5.
    title: 'TAK MI MOVE',
    description:
      'Butikowe studia zdrowego ruchu w Gdańsku i Pruszczu Gdańskim. Joga, pilates, stretching, aerial yoga i barre w kameralnych grupach.',
  },

  hero: {
    // FAKT — dwie lokalizacje, charakter działalności.
    eyebrow: 'Butikowe studia zdrowego ruchu · Gdańsk i Pruszcz Gdański',
    // ROBOCZE — brief §12.2 zabrania wyboru hasła bez rozmowy z właścicielką.
    title: 'Ruch, do którego chce się wracać.',
    // FAKT — wymienione formy zajęć i wspólny system zapisów.
    lead: 'Joga, pilates, stretching, aerial yoga i barre w kameralnych grupach — w dwóch studiach, z jednym systemem zapisów.',
    secondaryCta: 'Zobacz grafik',
    imageAlt:
      'Instruktorki TAK MI MOVE w studiu w Pruszczu Gdańskim — betonowa ściana, hamaki do aerial yogi i podłoga w jodełkę',
    imageCaption: 'Studio Pruszcz Gdański',
  },

  /**
   * Brief §12.3: zamiast wymyślonych statystyk krótkie, prawdziwe atuty,
   * i to jako subtelny pas, a nie pięć identycznych kart z ikonami.
   */
  values: [
    'Dwa studia',
    'Kameralne grupy',
    'Pięć form ruchu',
    'Zapisy online',
    'Zajęcia dla różnych poziomów',
  ],

  studios: {
    eyebrow: 'Dwa miejsca',
    // ROBOCZE
    title: 'Wybierz studio blisko siebie',
    lead: 'Obie przestrzenie prowadzi ten sam zespół. Różnią się charakterem wnętrza i grafikiem — wybierz to, do którego łatwiej Ci dotrzeć.',
    // Brief §16.4 zabrania identycznych opisów obu lokalizacji.
    // Opisy pisze zespół — my dajemy tylko miejsce i wskazówkę, co ma zawierać.
    descriptions: {
      'pruszcz-gdanski':
        'TODO(klientka): 2–3 zdania o studiu w Pruszczu — charakter miejsca, wejście, atmosfera',
      gdansk: 'TODO(klientka): 2–3 zdania o studiu w Gdańsku — charakter miejsca, wejście, atmosfera',
    },
    linkLabel: 'Poznaj studio',
    scheduleLabel: 'Grafik tej lokalizacji',
    // Zdjęcie mamy tylko dla Pruszcza (potwierdzone przez klienta).
    missingPhoto: 'TODO(klientka): zdjęcie wnętrza tego studia',
  },

  classes: {
    eyebrow: 'Zajęcia',
    // ROBOCZE — nawiązuje do §4.2 briefu: różne drogi, wspólny cel.
    title: 'Różne formy ruchu, jeden kierunek',
    lead: 'Każde zajęcia prowadzą do tego samego: sprawniejszego ciała i mniejszego napięcia. Różnią się tempem, sprzętem i tym, komu służą najbardziej.',
    allLabel: 'Zobacz wszystkie zajęcia',
  },

  /**
   * Brief §12.6 — sekcja krytyczna dla nowych klientek.
   * Scenariusze pochodzą wprost z briefu; rekomendacje są ROBOCZE
   * i wymagają potwierdzenia przez zespół (§12.5).
   */
  choose: {
    eyebrow: 'Nie wiesz, co wybrać?',
    title: 'Zacznij od tego, czego teraz potrzebujesz',
    scenarios: [
      {
        label: 'Chcę zacząć spokojnie.',
        // ROBOCZE — rekomendacje wynikają z charakteru samych dyscyplin,
        // nie z ustaleń o poziomach grup. Te wymagają potwierdzenia zespołu.
        hint: 'Joga albo stretching. Wolne tempo, brak sekwencji, za którymi trzeba nadążać, i każda pozycja w wersji łatwiejszej.',
        href: '/zajecia/joga',
      },
      {
        label: 'Chcę się wzmocnić.',
        hint: 'Pilates albo barre. Pierwszy buduje stabilny gorset wokół kręgosłupa, drugi — wytrzymałość nóg i pośladków.',
        href: '/zajecia/pilates',
      },
      {
        label: 'Chcę poprawić mobilność i rozciągnięcie.',
        hint: 'Stretching albo aerial yoga. Godzina na zakres ruchu zamiast pięciu minut na koniec treningu — a w hamaku dochodzi odciążenie kręgosłupa.',
        href: '/zajecia/stretching',
      },
    ],
    contactLead: 'Wolisz zapytać?',
    contactLabel: 'Napisz do nas',
  },

  /**
   * FAKT: sześć kroków wprost z odpowiedzi 7–12 (19.08.2026), zredagowanych
   * na jedno zdanie każdy. Wszystko, co tu stoi, pochodzi od klientki —
   * nazwa systemu, 10 minut zapasu, boso lub w skarpetkach, adres do zgłoszeń.
   */
  firstVisit: {
    eyebrow: 'Pierwszy raz?',
    title: 'Jak wygląda pierwsza wizyta',
    steps: [
      { text: 'Wybierasz studio i zajęcia w aplikacji Fitssey — grafik obu lokalizacji jest w jednym miejscu.' },
      { text: 'Zakładasz konto, podając adres e-mail; rejestracja odbywa się w tym samym systemie.' },
      { text: 'Wybierasz pierwsze wejście „Poczuj nas”, wejście pojedyncze albo karnet — x4, x8 lub Open. Ważność karnetu liczy się od dnia pierwszej wizyty, nie od zakupu.' },
      { text: 'Przyjdź jakieś 10 minut wcześniej, żeby w ciszy wypić herbatę i spokojnie wejść na salę. W obu studiach są szatnie.' },
      { text: 'Ubierz się wygodnie, w coś, co nie krępuje ruchów — ćwiczymy boso lub w skarpetkach. Resztę sprzętu masz na miejscu.' },
      { text: 'O kontuzji, ciąży czy innej szczególnej potrzebie napisz wcześniej na takmimove@gmail.com, a przed samymi zajęciami powiedz prowadzącej.' },
    ],
    ctaLabel: 'Zarezerwuj pierwsze zajęcia',
    moreLabel: 'Więcej o pierwszej wizycie',
  },

  /** Brief §12.8: duże zdjęcia z krótkimi podpisami, nie galeria miniatur. */
  atmosphere: {
    eyebrow: 'Atmosfera',
    title: 'Ludzie, przestrzeń, oddech',
    lead: 'Kameralne grupy i miejsce, w którym nikt nikogo nie ocenia.',
    photos: [
      {
        key: 'zespol-grupa',
        alt: 'Zespół instruktorek TAK MI MOVE w jasnym wnętrzu studia z podłogą w jodełkę',
        caption: 'Zespół TAK MI MOVE',
      },
      {
        key: 'instruktorka-aerial-yoga',
        alt: 'Instruktorka TAK MI MOVE w hamaku do aerial yogi',
        caption: 'Aerial yoga',
      },
    ],
  },

  team: {
    eyebrow: 'Zespół',
    title: 'Prowadzące',
    lead: 'TODO(klientka): kilka zdań o tym, co łączy zespół',
    allLabel: 'Poznaj cały zespół',
  },

  reviews: {
    eyebrow: 'Opinie',
    title: 'Co mówią uczestniczki',
  },

  faq: {
    eyebrow: 'Pytania',
    title: 'Najczęstsze pytania',
    moreLabel: 'Masz inne pytanie? Napisz do nas',
  },

  /** Brief §12.14 podaje konstrukcję tej sekcji wprost. */
  finalCta: {
    title: 'Znajdź zajęcia dla siebie.',
    lead: 'Sprawdź aktualny grafik w Gdańsku i Pruszczu Gdańskim.',
    secondaryLead: 'Masz pytanie?',
    secondaryLabel: 'Napisz do nas',
  },
} as const;
