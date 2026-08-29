/**
 * Treść podstron. Te same zasady co w home.ts:
 * FAKT / ROBOCZE / TODO(...) — stringi z prefiksem `TODO(` nie renderują się nigdy.
 */

export const pages = {
  schedule: {
    meta: {
      title: 'Grafik i zapisy',
      description:
        'Aktualny grafik zajęć TAK MI MOVE w Gdańsku i Pruszczu Gdańskim. Rezerwacja miejsca online w systemie Fitssey.',
    },
    eyebrow: 'Grafik i zapisy',
    title: 'Wybierz zajęcia i termin',
    lead: 'Grafik i rezerwacje prowadzimy w systemie Fitssey. Poniżej działa on bezpośrednio na stronie — konto, karnet i płatność zostają po stronie systemu.',
    rulesEyebrow: 'Zasady zapisów',
    rulesTitle: 'Wszystko, co warto wiedzieć przed pierwszą wizytą',
    /**
     * FAKT: odpowiedzi 28–31, 27 oraz mail z 19.08.2026. Treść bez zmian —
     * rozbita tylko na tytuł i doprecyzowanie, bo tak czyta się szybciej niż
     * z sześciu pełnych zdań pod rząd.
     *
     * „Nie akceptujemy kart sportowych" zostaje samym tytułem. Makieta
     * dopisywała tam „płatności realizujemy online lub na miejscu" — tego
     * klientka nigdy nie powiedziała i nie wiemy, czy da się zapłacić na
     * miejscu, więc nie ma tu żadnego opisu.
     *
     * Zasada o karnecie działającym w obu studiach wyszła z tej listy do
     * osobnej karty niżej. Stała tam i tu, a to ta sama informacja.
     */
    rules: [
      {
        ikona: 'clock' as const,
        title: 'Rezerwację odwołasz bez utraty wejścia',
        // Sformułowanie klientki (25.08.2026) w miejsce „wejście przepada".
        body: 'Najpóźniej 14 godzin przed rozpoczęciem zajęć. Wejście, które nie zostało anulowane przed tym czasem, uznaje się za wykorzystane.',
      },
      {
        ikona: 'mail' as const,
        title: 'Gdy termin jest zajęty',
        body: 'Zapisz się na listę rezerwową — o zwolnionym miejscu poinformujemy Cię e-mailem.',
      },
      {
        ikona: 'users' as const,
        // Tytuł i treść wprost od klientki (25.08.2026).
        title: 'Minimalna wielkość grupy',
        body: 'Zajęcia odbywają się od 3 zapisanych uczestników.',
      },
      {
        ikona: 'card' as const,
        title: 'Nie akceptujemy kart sportowych',
      },
      {
        ikona: 'card' as const,
        title: 'Karnety x4 i x8 możesz dzielić z bliskimi',
        body: 'Na przykład z partnerem albo córką.',
      },
      {
        ikona: 'heart' as const,
        title: 'Jesteś w Trójmieście przejazdem?',
        body: 'W systemie rezerwacji wybierz wejście jednorazowe i przyjdź do wybranego studia.',
      },
      // Pozycja „Zajęcia prowadzą certyfikowane osoby" usunięta na prośbę
      // klientki (25.08.2026). Informacja o prowadzących wróciła na /o-nas,
      // w jej własnym brzmieniu, jako blok „Co nas łączy".
      {
        ikona: 'calendar' as const,
        /* FAKT: tytuł i treść wprost od klientki (25.08.2026), bez skracania.
           To najdłuższy tekst na tej liście — pozostałe zasady mieszczą się
           w jednym zdaniu, ten ma trzy razy tyle i dostaje własne
           traktowanie typograficzne w arkuszu strony. */
        title: 'Ważność karnetów',
        body: 'Ważność karnetów jest z góry określona i może ulec wydłużeniu jedynie w przypadku, w którym klient nie zdoła wykorzystać karnetu na skutek odwołania zajęć przez studio (np. kiedy nie zbierze się grupa lub przez nieobecność nauczyciela).',
      },
      {
        ikona: 'check' as const,
        /* FAKT: treść wprost od klientki (25.08.2026).
           Świadomie bez odsyłacza: klientka wskazuje profil w Fitssey jako
           miejsce, gdzie regulamin stoi, ale bezpośredniego adresu do samego
           dokumentu nie mamy i nie zgadujemy go. */
        title: 'Regulamin',
        body: 'Na profilu Tak Mi Move w Fitssey znajdziesz pełen regulamin studia. Akceptacja regulaminu jest wymagana przy założeniu konta. Prosimy o zapoznanie się z nim.',
      },
    ],
    /** FAKT: odpowiedź 30 — ta sama zasada, wyjęta z listy jako wyróżnik. */
    passHighlight: {
      title: 'Dwa studia, jeden karnet',
      // Podpis skrócony do sformułowania klientki (25.08.2026).
      body: 'Wybieraj dowolnie',
    },
    helpTitle: 'Jesteśmy tu, żeby pomóc',
    // Treść klientki (25.08.2026). Nadtytuł „Coś nie działa?" zdjęty —
    // to zdanie samo zadaje pytanie, więc oba naraz były powtórzeniem.
    helpLead: 'Masz problem z rejestracją albo zakupem karnetu? Napisz do nas!',
    helpPhoto: 'Prowadząca poprawia ustawienie ćwiczącej na macie',
  },

  studios: {
    meta: {
      title: 'Nasze studia',
      description:
        'Dwa studia TAK MI MOVE — Pruszcz Gdański, ul. Grunwaldzka 55/7 i Gdańsk, ul. Angielska Grobla 35/47.',
    },
    eyebrow: 'Studia',
    // Ujednolicone ze stroną główną (25.08.2026): klientka prosiła
    // o „Dwie lokalizacje" w miejsce „Dwóch miejsc". Komunikat o wspólnym
    // zespole nie wraca — zniknął też z sekcji na stronie głównej.
    title: 'Dwie lokalizacje',
    // Lead obiecywał wcześniej „dojazd", a sekcja dojazdu zniknęła z podstron
    // studiów — klientka odpowiedziała na to pytanie „nie opisujemy"
    // (odpowiedź 35). Zapowiedź musi zgadzać się z tym, co stoi niżej.
    // Treść wskazana przez klienta (28.08.2026), przepisana bez zmian.
    // Kropka na końcu dołożona — pozostałe leady w serwisie są zdaniami
    // zamkniętymi i brak jednej byłby widoczny.
    lead: 'Wybierz studio bliżej siebie. Poznaj przestrzeń, najważniejsze informacje i sprawdź, jakie zajęcia odbywają się w danej lokalizacji.',
  },

  classes: {
    meta: {
      title: 'Zajęcia',
      description:
        'Joga, pilates, stretching, aerial yoga i barre w kameralnych grupach — Gdańsk i Pruszcz Gdański.',
    },
    eyebrow: 'Zajęcia',
    // Oba komunikaty wskazane przez klientkę (25.08.2026): hasło marki
    // w miejsce „Znajdź formę ruchu dla siebie", a pod nim jedno zdanie
    // zamiast akapitu o tym, dokąd prowadzą zajęcia.
    // Bez tyld: klientka podała hasło jako trzy słowa, a tyldy w jej
    // odręcznej notatce (odpowiedź 55) były separatorem zapisu, nie częścią
    // hasła. Odstęp między słowami niesie sama typografia nagłówka.
    title: 'SIŁA SPOKÓJ RÓWNOWAGA',
    // Wiersze hasła — po jednym słowie, jak w hero strony głównej.
    // `title` zostaje jednym ciągiem, bo idzie też do <title> i do opisu
    // dla wyszukiwarek, gdzie łamanie nie ma sensu.
    titleLines: ['SIŁA', 'SPOKÓJ', 'RÓWNOWAGA'],
    lead: 'Wybierz, czego dziś potrzebujesz',
  },

  firstVisit: {
    meta: {
      title: 'Pierwsza wizyta',
      description:
        'Jak zapisać się na pierwsze zajęcia w TAK MI MOVE, co zabrać i czego się spodziewać. Gdańsk i Pruszcz Gdański.',
    },
    /**
     * Poprawki klientki (25.08.2026): na całej tej podstronie, poza samymi
     * podpunktami, ma zostać JEDEN tytuł. Zdjęte zostały więc nadtytuł
     * „Pierwszy raz?", nadtytuł „Krok po kroku", nagłówek „Tak wygląda
     * Twoja pierwsza wizyta" oraz para nagłówków nad blokami informacyjnymi.
     */
    title: 'Twoja pierwsza wizyta w Tak Mi Move',
    // Dwa kontrolowane wiersze zamiast zdania łamanego szerokością
    // pudełka — przy pełnej skali H1 rozpadało się na cztery linie.
    // `title` zostaje jednym ciągiem: idzie też do <title> i do opisu
    // dla wyszukiwarek, gdzie łamanie nie ma sensu.
    titleLines: ['Twoja pierwsza wizyta', 'w Tak Mi Move'],
    /**
     * `stepsEyebrow` i `stepsTitle` USUNIĘTE 28.08.2026, tym razem
     * ostatecznie. Wróciły na jeden dzień razem z układem asymetrycznym
     * i wypadły z powrotem, gdy okazało się, że lewa kolumna trzyma się
     * bez nich: niesie ją sam H1 z kreską, a oś czasu po prawej domyka
     * kompozycję. Uwaga klientki z 25.08.2026 obowiązuje bez wyjątku —
     * poza krokami na tej stronie stoi JEDEN tytuł.
     */
    /** FAKT: odpowiedzi 10 i 50 — co realnie zastaje się na miejscu. */
    amenities: ['Szatnie', 'Prysznic', 'Ręczniki', 'Kosmetyki'],
    photos: {
      // Zdjęcia od klientki (19.08.2026). Lokalizacja niepotwierdzona,
      // dlatego opisy nie nazywają studia.
      gear: 'Regał ze sprzętem: klocki, piłki, wałki, koce i bolstery, obok różowy łuk na ścianie',
      changing: 'Szatnia — ręczniki na mosiężnych wieszakach, ławka i czarne szafki',
    },
    // FAKT: cała treść tej podstrony pochodzi z odpowiedzi 48–52 oraz
    // powtórzonych tam odpowiedzi 10–12, 24, 26, 28–30 i 42 (19.08.2026).
    /**
     * NIE RENDEROWANY od 28.08.2026. Uwaga klientki („poza podpunktami
     * jeden tytuł") obejmuje też ten akapit — po H1 strona przechodzi
     * od razu do osi czasu. Treść zostaje w danych, bo pochodzi wprost
     * z odpowiedzi 48 i może się przydać w opisie dla wyszukiwarek.
     */
    lead: 'Na pierwszych zajęciach prowadząca pokaże Ci studio i podpowie, które jeszcze formy ruchu mogą Ci odpowiadać. Każde ćwiczenie ma łagodniejszy wariant — korzystasz z niego, kiedy potrzebujesz.',
    sections: {
      bring: {
        title: 'Co zabrać',
        body: 'Wystarczy ubranie, które nie krępuje ruchów. Ćwiczymy boso lub w skarpetkach, a maty i cały sprzęt czekają na miejscu — nie musisz przynosić nic swojego. Jedyny wyjątek dotyczy aerial yogi: na te zajęcia przychodzimy bez biżuterii, bo może uszkodzić hamak.',
      },
      arrival: {
        title: 'Na miejscu',
        body: 'Przyjdź około 10 minut przed zajęciami — tyle wystarczy, żeby w ciszy wypić herbatę i spokojnie wejść na salę. Oba studia mają szatnie, a do dyspozycji są prysznic, ręczniki i kosmetyki.',
      },
      health: {
        title: 'Urazy i szczególne potrzeby',
        // PENDING CLIENT CONTENT (potwierdzone 28.08.2026).
        //
        // Klientka zapowiedziała osobną, zredagowaną wersję treści
        // zdrowotnych (odpowiedź 26) i do dziś jej nie przysłała. Poniższy
        // akapit jest NASZ: wyprowadzony z odpowiedzi 51 („zgłoś
        // nauczycielowi prowadzącemu") i 26 („zielone światło od lekarza"),
        // ale sformułowany przez nas. Do podmiany, nie do cytowania.
        //
        // Nie dopisujemy tu ostrzeżeń przeniesionych z aerial yogi
        // (jaskra, nadciśnienie, kardiologia, błędnik) — tamte też są
        // naszą treścią, a łączenie dwóch niepotwierdzonych źródeł
        // w jedno zdanie o zdrowiu byłoby najgorszym z możliwych ruchów.
        body: 'O kontuzji, ciąży albo innej szczególnej potrzebie napisz nam wcześniej na takmimove@gmail.com, a przed samymi zajęciami powiedz o niej prowadzącej — dobierze warianty ćwiczeń. W ciąży ćwiczą u nas osoby, które mają zielone światło od lekarza prowadzącego. Nie zastępujemy diagnozy ani leczenia: jeśli coś Cię niepokoi, skonsultuj się najpierw z lekarzem lub fizjoterapeutą.',
      },
      cancel: {
        title: 'Odwoływanie rezerwacji',
        // Dopisek klientki „chyba że ktoś dowie się akurat o ciąży i lekarz nie
        // pozwoli ćwiczyć" stał nad tabelą, nie przy pytaniu 28 — nie wiadomo,
        // czy dotyczy odwołań, ani czy ma być publiczną regułą. Nie publikujemy
        // go do czasu potwierdzenia: to zobowiązanie wobec każdej klientki.
        // Sformułowanie klientki (25.08.2026) w miejsce „wejście przepada" —
        // to samo, co w zasadach zapisów na /grafik.
        body: 'Rezerwację możesz odwołać bez utraty wejścia najpóźniej 14 godzin przed rozpoczęciem zajęć. Wejście, które nie zostało anulowane przed tym czasem, uznaje się za wykorzystane. Jeśli termin jest już zajęty, zapisz się na listę rezerwową: gdy zwolni się miejsce, dostaniesz wiadomość e-mail. Karnet działa w obu studiach.',
      },
    },
  },

  about: {
    meta: {
      title: 'O nas',
      description:
        'TAK MI MOVE — butikowe studia zdrowego ruchu w Gdańsku i Pruszczu Gdańskim. Zespół, wartości i dwie przestrzenie.',
    },
    eyebrow: 'O nas',
    title: 'Zdrowy ruch w kameralnej przestrzeni',
    // FAKT: odpowiedź 53 — „studio zdrowego ruchu” z formularza plus opis marki
    // przysłany mailem („bezpieczna, inkluzywna i wspierająca przestrzeń…”).
    /**
     * SŁOWA TE SAME, ZMIENIONA JEST JEDNA SPACJA. Między „Tworzymy"
     * a „bezpieczną" stoi twarda spacja (U+00A0), żeby pierwsze słowo
     * drugiego zdania nie mogło zostać na końcu pierwszego wiersza.
     *
     * `typo()` tego nie załatwi: jego reguła początku zdania obejmuje
     * wyrazy DWULITEROWE, a „Tworzymy" ma osiem znaków. Rozszerzenie
     * tej reguły ruszyłoby skład na wszystkich podstronach, więc
     * wiązanie stoi punktowo, w tym jednym zdaniu.
     *
     * Efekt na 1280 px: cztery wiersze, złamanie na kropce.
     * Na telefonie para „Tworzymy bezpieczną," przechodzi razem
     * do następnego wiersza i nic się nie psuje.
     */
    lead: 'Jesteśmy studiem zdrowego ruchu. Tworzymy bezpieczną, inkluzywną i wspierającą przestrzeń — miejsce treningu i praktyki, spotkań oraz holistycznej troski o ciało i głowę.',
    /**
     * FAKT: tekst przysłany przez klientkę 19.08.2026 — pierwszy materiał
     * napisany przez nią w pierwszej osobie. Dlatego ten blok jest wreszcie
     * cytatem, a nie parafrazą: wcześniej mieliśmy tylko streszczenie maila
     * i wzięcie go w cudzysłów byłoby zmyśleniem wypowiedzi.
     *
     * Redakcja ograniczona do trzech rzeczy: literówki („ze" → „że",
     * „Przyjazne" w środku zdania), rozbicie na akapity oraz usunięcie
     * powtórzonego „bezpiecznie" w ostatnim zdaniu („bezpiecznie wrócić
     * do aktywności oraz poczuć się bezpiecznie"). Sens nietknięty.
     */
    founder: {
      eyebrow: 'Założycielka',
      title: 'Skąd wzięło się TAK MI MOVE',
      name: 'Katarzyna Zawadzka',
      caption: 'założycielka TAK MI MOVE',
      intro: [
        'Nazywam się Katarzyna Zawadzka. Jestem trenerką medyczną, nauczycielką jogi, instruktorką pilates i stretchingu.',
        'Prowadzę studia Tak Mi Move. Stworzyłam też program szkoleniowy dla początkujących trenerów i instruktorów, który wspiera ich w budowaniu pozycji trenera, umiejętnej pracy z klientami oraz w metodyce nauczania.',
      ],
      /**
       * Ostatnie zdanie klientki jest w oryginale jedno i długie. Rozbite na
       * cytat i domknięcie — układ wyciąga początek do ramki. Rozbicie wymusiło
       * dodanie słowa „Miejsce" na starcie drugiej części: bez niego zostaje
       * urwany równoważnik („Przyjazne i kobiece, w którym…"), który wisi
       * bez rzeczownika, do którego się odnosi.
       */
      quote:
        'Studio powstało, kiedy po urodzeniu synka poczułam, że chcę być bliżej ludzi i stworzyć miejsce, którego mi osobiście po porodzie brakowało.',
      afterQuote:
        'Miejsce przyjazne i kobiece, w którym spokojnie i bezpiecznie będę mogła wrócić do aktywności, dbając jednocześnie o głowę i ciało.',
      // FAKT: cztery specjalizacje wymienione przez klientkę w pierwszym zdaniu.
      tags: ['trenerka medyczna', 'joga', 'pilates', 'stretching'],
    },

    /**
     * FAKT: odpowiedzi 1 oraz 13–16. Klientka odrzuciła karty osób
     * („NIE — bez nazwisk i zdjęć"), ale sama wskazała, czym je zastąpić:
     * ogólna informacja, cechy wspólne i odesłanie do grafiku.
     *
     * Zakaz dotyczy instruktorek. Blok o założycielce wyżej go nie łamie —
     * Katarzyna przysłała własny opis i jest właścicielką, nie osobą
     * z zespołu, o której publikacji ktoś decydowałby za nią.
     */
    crew: {
      eyebrow: 'Zespół',
      title: 'Prowadzące',
      /**
       * FAKT: treść wprost od klientki (25.08.2026). Zastąpiła moje zdanie
       * ROBOCZE („Kto prowadzi dany termin, widać w grafiku…") — nie stoi
       * obok niego, tylko na jego miejscu.
       *
       * To jest też miejsce, w które wróciła informacja o przeszkolonych
       * prowadzących, zdjęta z zasad zapisów na /grafik.
       */
      body: 'Wszystkie zajęcia prowadzą osoby do tego przeszkolone i uprawnione. Szczegółowy opis i portfolio nauczycielek znajdziesz w aplikacji Fitssey.',
      // Nagłówek nad czterema cechami — klientka prosiła, żeby stanął
      // „przed tymi ramkami" (25.08.2026).
      valuesTitle: 'Co nas łączy',
      values: [
        'Profesjonalizm',
        'Fachowe przygotowanie',
        'Pasja',
        'Otwartość na drugiego człowieka',
      ],
      linkLabel: 'Zobacz grafik i zapisy',
      linkHref: '/grafik',
    },
    values: {
      // Tytuł sekcji wprost od klientki (25.08.2026).
      title: 'Wartości Tak Mi Move',
      /**
       * FAKT: hasło marki z mediów społecznościowych i z maila (odpowiedź 55).
       *
       * Bez tyld — tak samo jak w H1 na /zajecia od Etapu 6. Tyldy były
       * separatorem zapisu w jej odręcznej notatce, nie częścią hasła.
       * Rozdzielenie słów niesie teraz sam odstęp w typografii.
       */
      motto: 'SIŁA SPOKÓJ RÓWNOWAGA',
      /**
       * FAKT: cztery tytuły wprost od klientki (25.08.2026) — zastąpiły
       * przymiotniki „Bezpiecznie / Dla każdego / Ze wsparciem / Ciało i głowa".
       *
       * ROBOCZE: rozwinięcia pod nimi zostają BEZ ZMIAN. Opisują sposób pracy
       * potwierdzony w odpowiedziach 12, 23, 26, 41 i 51, ale sformułowane
       * przeze mnie i wciąż czekają na jej akceptację. Po zmianie tytułów
       * z przymiotników na rzeczowniki czytają się mniej gładko — to świadomie
       * zostawione do jej redakcji, a nie do mojej.
       */
      items: [
        {
          title: 'Bezpieczeństwo',
          body: 'Ruch dobieramy do tego, z czym przychodzisz, nie odwrotnie. O kontuzji, ciąży czy innej szczególnej potrzebie mówisz przed zajęciami — prowadząca podpowie wtedy łagodniejszy wariant ćwiczenia.',
        },
        {
          title: 'Inkluzywność',
          body: 'Nie trzeba mieć doświadczenia ani formy na start. Ćwiczymy w kameralnych grupach, około ośmiu osób, więc nikt nie ginie w tłumie i nikt nie zostaje z tyłu.',
        },
        {
          title: 'Wsparcie',
          body: 'Prowadząca jest po to, żeby patrzeć i podpowiadać, a nie żeby oceniać. Pytania w trakcie zajęć są mile widziane.',
        },
        {
          title: 'Holistyczne podejście',
          body: 'Trening to u nas nie tylko mięśnie. Tak samo liczy się to, w jakim stanie wychodzisz z sali — dlatego pilnujemy oddechu, tempa i spokoju.',
        },
      ],
    },
    // Kafel „Dwie przestrzenie" usunięty na prośbę klientki (25.08.2026).
    // W jego miejsce ma mocniej wybrzmieć informacja o wydarzeniach —
    // to Etap 8, nie ten.
    community: {
      eyebrow: 'Wydarzenia',
      title: 'Społeczność i wydarzenia',
      // FAKT: odpowiedź 56 — „Tak, regularnie warsztaty i wyjazdy → info na FB i IG”,
      // plus uzupełnienie z maila o wydarzeniach na zamówienie („gotowy pakiet
      // albo uszyte na miarę”) i o ofercie wysyłanej mailem.
      /**
       * Zostało jedno zdanie — to z odpowiedzi 56, jedyne potwierdzone.
       *
       * Zdjęte 28.08.2026: „U nas można też zamówić własne wydarzenie:
       * gotowy pakiet albo coś uszytego na miarę" oraz „Pełną ofertę
       * i ceny wysyłamy mailem". Pierwsze było moją parafrazą maila,
       * drugie dodatkowo kłóci się z przygotowywanym PDF-em: obiecywało
       * ofertę mailem w miejscu, w którym stanie przycisk do dokumentu.
       */
      body: 'Warsztaty i wyjazdy organizujemy regularnie — terminy ogłaszamy na Facebooku i Instagramie.',
      /**
       * FAKT: oba zdania wprost od klientki. Pytanie ma być mocniejszym
       * komunikatem tej podstrony, etykieta prowadzi do jej PDF-a
       * z ofertą — patrz `eventOffer` w site.ts.
       */
      eventTitle: 'Chcesz zorganizować u nas swoje wydarzenie?',
      eventCta: 'Poznaj nasze pakiety eventowe',
    },
  },

  contact: {
    meta: {
      title: 'Kontakt',
      description:
        'Kontakt do studiów TAK MI MOVE w Gdańsku i Pruszczu Gdańskim — telefon, e-mail, adresy i profile społecznościowe.',
    },
    /**
     * Klientka prosiła o zdjęcie „Napisz albo zadzwoń" (25.08.2026).
     * W jego miejsce wchodzi rzeczowe „Kontakt", bez nowego hasła.
     * Nadtytuł zniknął, bo brzmiał identycznie jak nowy tytuł — zostałyby
     * dwa te same słowa jedno pod drugim.
     */
    title: 'Kontakt',
    lead: 'W sprawach rezerwacji, karnetów i płatności najszybciej pomoże system Fitssey. Wszystko inne — pytania o zajęcia, wydarzenia, wynajem — kieruj bezpośrednio do nas.',
    whenFitssey: {
      title: 'Kiedy Fitssey',
      // FAKT — zakres systemu opisany w briefie §2.5.
      items: ['zapis na zajęcia', 'zakup i przedłużenie karnetu', 'płatności', 'odwołanie rezerwacji'],
    },
    whenDirect: {
      title: 'Kiedy bezpośrednio do nas',
      items: [
        'pytanie o dobór zajęć',
        'urazy i szczególne potrzeby',
        'wydarzenia i warsztaty',
        'wynajem przestrzeni',
        'współpraca',
      ],
    },
  },

  legal: {
    privacy: {
      meta: { title: 'Polityka prywatności', description: 'Polityka prywatności serwisu TAK MI MOVE.' },
      title: 'Polityka prywatności',
      body: 'TODO(klientka): treść przygotowana lub zatwierdzona przez specjalistę — brief §49 zabrania podawania wygenerowanego tekstu jako gotowej porady prawnej',
    },
    cookies: {
      meta: { title: 'Polityka cookies', description: 'Informacja o plikach cookies w serwisie TAK MI MOVE.' },
      title: 'Polityka cookies',
      body: 'TODO(klientka): treść zatwierdzona przez specjalistę, z opisem osadzonych usług zewnętrznych (Fitssey, mapy Google)',
    },
    notice:
      'Ta strona czeka na treść zatwierdzoną przez klientkę. Do tego czasu nie jest indeksowana.',
  },
} as const;
