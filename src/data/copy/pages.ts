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
    rulesTitle: 'Zasady zapisów',
    // FAKT: pierwsze cztery to odpowiedzi 28–31. Piąta i szósta pochodzą
    // z odpowiedzi 27 i z maila (19.08.2026) — dotyczą tego samego tematu,
    // więc stoją tutaj, a nie w FAQ.
    rules: [
      'Rezerwację odwołasz bez utraty wejścia najpóźniej 14 godzin przed rozpoczęciem zajęć. Później wejście przepada.',
      'Gdy termin jest zajęty, zapisz się na listę rezerwową — o zwolnionym miejscu poinformujemy Cię e-mailem.',
      'Karnet działa w obu studiach: możesz ćwiczyć raz w Pruszczu, raz w Gdańsku.',
      'Nie akceptujemy kart sportowych.',
      'Karnety x4 i x8 możesz dzielić z bliskimi — na przykład z partnerem albo córką.',
      'Jesteś w Trójmieście przejazdem? W systemie rezerwacji wybierz wejście jednorazowe i przyjdź do wybranego studia.',
    ],
    helpTitle: 'Coś nie działa?',
    helpLead: 'Jeśli grafik się nie wczytuje albo nie możesz dokończyć rezerwacji, napisz lub zadzwoń — pomożemy zapisać się ręcznie.',
  },

  studios: {
    meta: {
      title: 'Nasze studia',
      description:
        'Dwa studia TAK MI MOVE — Pruszcz Gdański, ul. Grunwaldzka 55/7 i Gdańsk, ul. Angielska Grobla 35/47.',
    },
    eyebrow: 'Studia',
    title: 'Dwa miejsca, jeden zespół',
    lead: 'Wybierz studio, do którego łatwiej Ci dotrzeć. Na podstronie każdego znajdziesz dojazd, wejście i grafik.',
  },

  classes: {
    meta: {
      title: 'Zajęcia',
      description:
        'Joga, pilates, stretching, aerial yoga i barre w kameralnych grupach — Gdańsk i Pruszcz Gdański.',
    },
    eyebrow: 'Zajęcia',
    title: 'Znajdź formę ruchu dla siebie',
    lead: 'Każde zajęcia prowadzą do tego samego: sprawniejszego ciała i mniejszego napięcia. Różnią się tempem, sprzętem i tym, komu służą najbardziej.',
    firstTimeTitle: 'Pierwszy raz?',
    firstTimeLead: 'Nie musisz nic umieć ani być rozciągnięta. Zobacz, jak wygląda pierwsza wizyta.',
  },

  firstVisit: {
    meta: {
      title: 'Pierwsza wizyta',
      description:
        'Jak zapisać się na pierwsze zajęcia w TAK MI MOVE, co zabrać i czego się spodziewać. Gdańsk i Pruszcz Gdański.',
    },
    eyebrow: 'Pierwszy raz?',
    title: 'Pierwsza wizyta krok po kroku',
    /** Nagłówki i etykiety układu — nie są faktami o marce, tylko nawigacją. */
    stepsEyebrow: 'Krok po kroku',
    stepsTitle: 'Tak wygląda Twoja pierwsza wizyta',
    blocksEyebrow: 'Ważne informacje',
    blocksTitle: 'Wszystko, co warto wiedzieć wcześniej',
    /** FAKT: odpowiedzi 10 i 50 — co realnie zastaje się na miejscu. */
    amenities: ['Szatnie', 'Prysznic', 'Ręczniki', 'Kosmetyki'],
    photos: {
      // Zdjęcia od klientki (19.08.2026). Lokalizacja niepotwierdzona,
      // dlatego opisy nie nazywają studia.
      hero: 'Kubek kawy na tacy w studiu, w porannym słońcu',
      gear: 'Regał ze sprzętem: klocki, piłki, wałki, koce i bolstery, obok różowy łuk na ścianie',
      changing: 'Szatnia — ręczniki na mosiężnych wieszakach, ławka i czarne szafki',
    },
    // FAKT: cała treść tej podstrony pochodzi z odpowiedzi 48–52 oraz
    // powtórzonych tam odpowiedzi 10–12, 24, 26, 28–30 i 42 (19.08.2026).
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
        // ROBOCZE: klientka zapowiedziała osobną, zredagowaną wersję treści
        // zdrowotnych (odpowiedź 26). Do podmiany, gdy przyjdzie.
        body: 'O kontuzji, ciąży albo innej szczególnej potrzebie napisz nam wcześniej na takmimove@gmail.com, a przed samymi zajęciami powiedz o niej prowadzącej — dobierze warianty ćwiczeń. W ciąży ćwiczą u nas osoby, które mają zielone światło od lekarza prowadzącego. Nie zastępujemy diagnozy ani leczenia: jeśli coś Cię niepokoi, skonsultuj się najpierw z lekarzem lub fizjoterapeutą.',
      },
      cancel: {
        title: 'Odwoływanie rezerwacji',
        // Dopisek klientki „chyba że ktoś dowie się akurat o ciąży i lekarz nie
        // pozwoli ćwiczyć" stał nad tabelą, nie przy pytaniu 28 — nie wiadomo,
        // czy dotyczy odwołań, ani czy ma być publiczną regułą. Nie publikujemy
        // go do czasu potwierdzenia: to zobowiązanie wobec każdej klientki.
        body: 'Rezerwację możesz odwołać bez utraty wejścia najpóźniej 14 godzin przed rozpoczęciem zajęć — później wejście przepada. Jeśli termin jest już zajęty, zapisz się na listę rezerwową: gdy zwolni się miejsce, dostaniesz wiadomość e-mail. Karnet działa w obu studiach.',
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
    lead: 'Jesteśmy studiem zdrowego ruchu. Tworzymy bezpieczną, inkluzywną i wspierającą przestrzeń — miejsce treningu i praktyki, spotkań oraz holistycznej troski o ciało i głowę.',
    manifesto: {
      title: 'Po co powstało TAK MI MOVE',
      // FAKT: odpowiedź 54 (mail) — geneza marki. Świadomie bez imienia
      // założycielki: klientka nie zgodziła się na nazwiska w sekcji o zespole,
      // więc dopóki tego nie potwierdzi, historia mówi o niej opisowo.
      body: 'Studio wzięło się z osobistej potrzeby założycielki. Po urodzeniu syna chciała być bliżej ludzi i stworzyć miejsce, którego sama wtedy potrzebowała — przyjazne i kobiece, pozwalające spokojnie i bezpiecznie wrócić do aktywności, z równą uwagą dla ciała i dla głowy.',
    },
    values: {
      title: 'Co jest dla nas ważne',
      // FAKT: hasło marki z mediów społecznościowych i z maila (odpowiedź 55).
      motto: 'Siła ~ Spokój ~ Równowaga',
      // FAKT: trzy przymiotniki („bezpieczne, inkluzywne, wspierające”) i troska
      // o ciało i głowę pochodzą wprost z maila. ROBOCZE: rozwinięcia pod nimi —
      // opisują sposób pracy potwierdzony w odpowiedziach 12, 23, 26, 41 i 51,
      // ale sformułowane przeze mnie. Do akceptacji klientki.
      items: [
        {
          title: 'Bezpiecznie',
          body: 'Ruch dobieramy do tego, z czym przychodzisz, nie odwrotnie. O kontuzji, ciąży czy innej szczególnej potrzebie mówisz przed zajęciami — prowadząca podpowie wtedy łagodniejszy wariant ćwiczenia.',
        },
        {
          title: 'Dla każdego',
          body: 'Nie trzeba mieć doświadczenia ani formy na start. Ćwiczymy w kameralnych grupach, około ośmiu osób, więc nikt nie ginie w tłumie i nikt nie zostaje z tyłu.',
        },
        {
          title: 'Ze wsparciem',
          body: 'Prowadząca jest po to, żeby patrzeć i podpowiadać, a nie żeby oceniać. Pytania w trakcie zajęć są mile widziane.',
        },
        {
          title: 'Ciało i głowa',
          body: 'Trening to u nas nie tylko mięśnie. Tak samo liczy się to, w jakim stanie wychodzisz z sali — dlatego pilnujemy oddechu, tempa i spokoju.',
        },
      ],
    },
    spaces: {
      title: 'Dwie przestrzenie',
      // FAKT — wynika z materiałów: dwie lokalizacje, ten sam zespół.
      body: 'Prowadzimy dwa studia — w Pruszczu Gdańskim i w Gdańsku. Prowadzi je ten sam zespół, a różnią się charakterem wnętrza i grafikiem.',
    },
    community: {
      title: 'Społeczność i wydarzenia',
      // FAKT: odpowiedź 56 — „Tak, regularnie warsztaty i wyjazdy → info na FB i IG”,
      // plus uzupełnienie z maila o wydarzeniach na zamówienie („gotowy pakiet
      // albo uszyte na miarę”) i o ofercie wysyłanej mailem.
      body: 'Warsztaty i wyjazdy organizujemy regularnie — terminy ogłaszamy na Facebooku i Instagramie. U nas można też zamówić własne wydarzenie: gotowy pakiet albo coś uszytego na miarę. Pełną ofertę i ceny wysyłamy mailem.',
    },
  },

  contact: {
    meta: {
      title: 'Kontakt',
      description:
        'Kontakt do studiów TAK MI MOVE w Gdańsku i Pruszczu Gdańskim — telefon, e-mail, adresy i profile społecznościowe.',
    },
    eyebrow: 'Kontakt',
    title: 'Napisz albo zadzwoń',
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
