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
    /* FAKT — charakter działalności. Nazwy miast zdjęte na prośbę klientki
       (poprawki 25.08.2026): stały pod nadtytułem i powtarzały to, co i tak
       mówi sekcja lokalizacji niżej oraz stopka. */
    eyebrow: 'Butikowe studia zdrowego ruchu',
    /**
     * FAKT — hasło marki z mediów społecznościowych, to samo, które stoi nad
     * wartościami na /o-nas. Klientka wskazała je jako główny komunikat hero
     * w miejsce dawnego „Ruch, do którego chce się wracać."
     *
     * Trzy słowa NIE powtarzają się już jako plakietka przy zdjęciu —
     * klientka prosiła wprost, żeby nie dublować ich obok kadru.
     */
    /* Trzy człony, nie jeden napis z separatorami. Tylda znika: w hero
       hasło jest ułożone w trzy wiersze wyrównane do lewej, więc podziału
       nie musi nieść znak — niesie go sam układ. Rozbicie na tablicę
       zamiast łamania w CSS, bo to podział treści, a nie łamanie wiersza:
       przy każdej szerokości okna ma wyjść dokładnie tak samo.

       Na /zajecia hasło zostaje jednym napisem z tyldami — tam stoi
       w nagłówku podstrony i tego układu nie ruszamy. */
    title: ['SIŁA', 'SPOKÓJ', 'RÓWNOWAGA'],
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
    // „Pięć form ruchu" usunięte na prośbę klientki (25.08.2026): oferta się
    // rozwija i nie chcemy nigdzie zamykać jej w konkretnej liczbie.
    'Zapisy online',
    'Zajęcia dla różnych poziomów',
  ],

  studios: {
    eyebrow: 'Dwie lokalizacje',
    // ROBOCZE
    title: 'Wybierz studio blisko siebie',
    // Lead o wspólnym zespole zdjęty na prośbę klientki (25.08.2026).
    // Po jego usunięciu sekcja zaczyna się od razu od dwóch kadrów.
    /**
     * Brief §16.4 zabrania identycznych opisów obu lokalizacji — i faktycznie
     * te dwie sale różnią się na zdjęciach na tyle, że opisy same się rozeszły.
     *
     * Każdy opis stoi na dwóch nogach:
     *
     * FAKT — przymiotniki klientki. Pruszcz „jasne, wspaniała społeczność"
     * (odpowiedź 4), Gdańsk „przytulne, w centrum, eleganckie, intymna
     * atmosfera" (odpowiedź 5). Że Pruszcz jest macierzysty — z materiałów marki.
     *
     * ROBOCZE — opis wnętrza. To, co widać na zdjęciach z sesji (20.08.2026):
     * jodełka, łuk w terakocie i hamaki w Pruszczu, betonowy słup i czarny
     * sufit z rurami w Gdańsku. Nie są to zmyślone fakty o marce, tylko opis
     * pomieszczenia — ta sama zasada co przy opisach dyscyplin. Do akceptacji.
     *
     * Czego tu świadomie NIE ma: godzin otwarcia (odpowiedź 37 bez odpowiedzi)
     * i nazwy ulicy wejścia w Gdańsku (odpowiedź 33 niepewna).
     */
    descriptions: {
      'pruszcz-gdanski':
        'Jasna sala z oknami z dwóch stron: dąb w jodełkę, biel ścian i łuk w kolorze terakoty. Hamaki do aerial yogi wiszą u sufitu na stałe, a przy oknie biegnie drążek do barre. To nasze pierwsze studio i to tutaj zebrała się wspaniała społeczność.',
      gdansk:
        'Kameralna, przytulna sala w centrum miasta: surowy betonowy słup, czarny sufit z odsłoniętymi rurami i dąb w jodełkę. Elegancko, ale bez chłodu — mniejsza przestrzeń robi intymną atmosferę.',
    },
    /**
     * Nagłówek karty z opisem, osobny dla każdej sali — jeden wspólny byłby
     * albo nieprawdziwy, albo pusty. Oba wprost z przymiotników klientki:
     * Pruszcz „jasne" (odpowiedź 4), Gdańsk „przytulne, intymna atmosfera"
     * (odpowiedź 5).
     */
    descriptionTitles: {
      'pruszcz-gdanski': 'Światło i przestrzeń',
      gdansk: 'Kameralnie i przytulnie',
    },
    // Etykieta ujednolicona z /studia — klientka prosiła o „Poznaj przestrzeń"
    // w miejsce „Poznaj studio" i „Dojazd i szczegóły" (25.08.2026).
    linkLabel: 'Poznaj przestrzeń',
    // Klientka nazywa to wyjście „grafik studia" — trzymamy jej nazewnictwo,
    // to samo, które wraca na podstronach obu studiów.
    scheduleLabel: 'Grafik studia',
    // Zdjęcie mamy tylko dla Pruszcza (potwierdzone przez klienta).
    missingPhoto: 'TODO(klientka): zdjęcie wnętrza tego studia',
  },

  classes: {
    eyebrow: 'Zajęcia',
    // ROBOCZE — nawiązuje do §4.2 briefu: różne drogi, wspólny cel.
    title: 'Różne formy ruchu, jeden kierunek',
    // Klientka wskazała ten komunikat dla sekcji zajęć (25.08.2026).
    // Ten sam tekst stoi na /zajecia — decyzja o spójności obu miejsc.
    lead: 'Wybierz, czego dziś potrzebujesz',
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
    /**
     * Każdy scenariusz wskazuje DWA rodzaje zajęć, bo tak brzmi podpowiedź
     * („Joga albo stretching"). Wcześniej dane niosły jeden `href`, więc
     * drugi wymieniony rodzaj nie miał dokąd prowadzić — tekst obiecywał
     * wybór, a strona dawała jedno wyjście.
     *
     * ROBOCZE — rekomendacje wynikają z charakteru samych dyscyplin, nie
     * z ustaleń o poziomach grup. Te wymagają potwierdzenia zespołu (§12.5).
     */
    scenarios: [
      {
        label: 'Chcę zacząć spokojnie.',
        hint: 'Wolne tempo, brak sekwencji, za którymi trzeba nadążać, i każda pozycja w wersji łatwiejszej.',
        zajecia: [
          { nazwa: 'Joga', slug: 'joga' },
          { nazwa: 'Stretching', slug: 'stretching' },
        ],
      },
      {
        label: 'Chcę się wzmocnić.',
        hint: 'Pilates buduje stabilny gorset wokół kręgosłupa, barre — wytrzymałość nóg i pośladków.',
        zajecia: [
          { nazwa: 'Pilates', slug: 'pilates' },
          { nazwa: 'Barre', slug: 'barre' },
        ],
      },
      {
        label: 'Chcę poprawić mobilność i rozciągnięcie.',
        hint: 'Godzina na zakres ruchu zamiast pięciu minut na koniec treningu — a w hamaku dochodzi odciążenie kręgosłupa.',
        zajecia: [
          { nazwa: 'Stretching', slug: 'stretching' },
          { nazwa: 'Aerial yoga', slug: 'aerial-yoga' },
        ],
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
    // `title` to skrót kroku dla osi czasu na podstronie /pierwsza-wizyta.
    // Sekcja na stronie głównej pokazuje sam `text`.
    steps: [
      {
        title: 'Wybierz studio i zajęcia',
        text: 'Wybierz studio i zajęcia w aplikacji Fitssey — grafik obu lokalizacji jest w jednym miejscu.',
      },
      {
        title: 'Załóż konto',
        text: 'Załóż konto, podając adres e-mail; rejestracja odbywa się w tym samym systemie.',
      },
      {
        /* Nazwa pakietu poprawiona na prośbę klientki (25.08.2026): w cenniku
           Fitssey wejście dla nowych osób nazywa się „Pierwsza wizyta", a nie
           „Poczuj nas". Sprawdzone w jej cenniku, nie przyjęte na słowo. */
        title: 'Wybierz karnet lub wejście',
        text: 'Wybierz „Pierwszą wizytę”, wejście pojedyncze albo karnet — x4, x8 lub Open. Ważność karnetu liczy się od dnia pierwszej wizyty, nie od zakupu.',
      },
      {
        title: 'Przyjdź trochę wcześniej',
        text: 'Przyjdź około 10 min przed zajęciami, żeby w ciszy wypić herbatę i spokojnie wejść na salę. W obu studiach są szatnie.',
      },
      {
        title: 'Ubierz się wygodnie',
        text: 'Ubierz się wygodnie, w coś, co nie krępuje ruchów — ćwiczymy boso lub w skarpetkach. Resztę sprzętu masz na miejscu.',
      },
      {
        title: 'Powiedz nam o ważnych rzeczach',
        text: 'O kontuzji, ciąży czy innej szczególnej potrzebie napisz wcześniej na takmimove@gmail.com, a przed samymi zajęciami powiedz prowadzącej.',
      },
    ],
    ctaLabel: 'Zarezerwuj pierwsze zajęcia',
    moreLabel: 'Więcej o pierwszej wizycie',
  },

  /** Brief §12.8: duże zdjęcia z krótkimi podpisami, nie galeria miniatur. */
  atmosphere: {
    eyebrow: 'Atmosfera',
    /* Poprawki klientki (25.08.2026): podtytuł „Ludzie, przestrzeń, oddech"
       usunięty, a zdanie o kameralnych grupach zastąpione tym poniżej.
       Jej tekst wchodzi na miejsce nagłówka, nie leadu — po usunięciu
       podtytułu został jedynym komunikatem sekcji, a sekcja bez nagłówka
       wypada ze struktury dokumentu. */
    title: 'Kameralne studia, w których czujesz się bezpiecznie i swobodnie',
    /**
     * Cztery kadry z sesji. Kolejność nie jest przypadkowa — idzie za
     * tytułem sekcji: najpierw ludzie, potem przestrzeń, na końcu praktyka.
     *
     * Podpisów nie ma. Wcześniej każdy kadr miał etykietę w rodzaju „Zespół
     * TAK MI MOVE", ale to nazywanie oczywistości: widać, że to zespół.
     * Opis alternatywny zostaje, bo czytnik ekranu zdjęcia nie widzi.
     */
    photos: [
      {
        key: 'atmo-spotkanie',
        alt: 'Cztery kobiety rozmawiają przy herbacie w części wypoczynkowej studia',
      },
      {
        key: 'atmo-szatnia',
        alt: 'Kobiety przebierają się i rozmawiają w szatni z czarnymi szafkami',
      },
      {
        key: 'atmo-herbata',
        alt: 'Rozmowa przy herbacie w fotelach, przy oknie i dużym lustrze w złoconej ramie',
      },
      {
        key: 'atmo-praktyka',
        alt: 'Grupa ćwiczących w pozycji dziecka na matach, w jasnej sali z podłogą w jodełkę',
      },
    ],

  },


  reviews: {
    eyebrow: 'Opinie',
    title: 'Co mówią uczestniczki',
    /**
     * FAKT: ocena 5,0 odczytana z wizytówki Google 21.08.2026. Liczby opinii
     * świadomie nie podajemy — Google pokazywał ją tylko przy zalogowanym
     * widoku, więc nie mamy pewnej wartości, a wpisanie przybliżonej byłoby
     * zmyśleniem liczby, którą każdy może sprawdzić jednym kliknięciem.
     */
    ratingLabel: 'Ocena 5,0 w Google',
    ctaLead: 'Ćwiczysz z nami?',
    ctaLabel: 'Wystaw opinię w Google',
    /** Adres wizytówki — ten sam, z którego pochodzą cytaty. */
    ctaUrl:
      'https://www.google.com/maps/place/Tak+Mi+Move/@54.2585342,18.6325267,17z/data=!4m8!3m7!1s0x46fd71bbbc135c41:0xc2f3b8dc541e48b7!8m2!3d54.2585342!4d18.6351016!9m1!1b1!16s%2Fg%2F11t7xz606d',
  },

  faq: {
    eyebrow: 'Pytania',
    title: 'Najczęstsze pytania',
    moreLabel: 'Masz inne pytanie? Napisz do nas',
  },

  /** Brief §12.14 podaje konstrukcję tej sekcji wprost. */
  finalCta: {
    title: 'Znajdź zajęcia dla siebie',
    /* Zdanie o sprawdzeniu grafiku w obu miastach usunięte 26.08.2026.
       Powtarzało to, co niosą oba przyciski obok, a pas domykający
       ma być krótki. */
    firstVisitLabel: 'Zobacz, jak wygląda pierwsza wizyta',
    secondaryLead: 'Masz pytanie?',
    secondaryLabel: 'Napisz do nas',
  },
} as const;
