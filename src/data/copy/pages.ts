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
    rules: [
      'TODO(klientka): do kiedy można odwołać rezerwację bez utraty wejścia',
      'TODO(klientka): jak działają listy rezerwowe',
      'TODO(klientka): czy karnet obowiązuje w obu lokalizacjach',
      'TODO(klientka): czy akceptowane są karty sportowe',
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
    // Cała treść tej podstrony opisuje procedurę konkretnego studia,
    // więc pisze ją zespół. My dostarczamy układ i miejsca na tekst.
    lead: 'TODO(klientka): 1–2 zdania wprowadzenia — czego może spodziewać się osoba, która przychodzi pierwszy raz',
    sections: {
      bring: {
        title: 'Co zabrać',
        body: 'TODO(klientka): strój, mata, ręcznik, woda, skarpetki — co zapewnia studio, a co trzeba mieć swoje',
      },
      arrival: {
        title: 'Na miejscu',
        body: 'TODO(klientka): kiedy przyjść, gdzie zostawić rzeczy, czy są szatnie i prysznice',
      },
      health: {
        title: 'Urazy i szczególne potrzeby',
        body: 'TODO(klientka): jak zgłaszać urazy i ciążę, plus zdanie odsyłające do lekarza lub fizjoterapeuty (§9.3 — bez obietnic medycznych)',
      },
      cancel: {
        title: 'Odwoływanie rezerwacji',
        body: 'TODO(klientka): zasady odwoływania i listy rezerwowej — te same, co na podstronie grafiku',
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
    lead: 'TODO(klientka): jedno–dwa zdania, którymi właścicielka opisuje markę',
    manifesto: {
      title: 'Po co powstało TAK MI MOVE',
      body: 'TODO(klientka): historia powstania marki — brief §17 zabrania jej wymyślać',
    },
    values: {
      title: 'Co jest dla nas ważne',
      body: 'TODO(klientka): 3–5 wartości wspólnych dla obu lokalizacji, z krótkim rozwinięciem',
    },
    spaces: {
      title: 'Dwie przestrzenie',
      // FAKT — wynika z materiałów: dwie lokalizacje, ten sam zespół.
      body: 'Prowadzimy dwa studia — w Pruszczu Gdańskim i w Gdańsku. Prowadzi je ten sam zespół, a różnią się charakterem wnętrza i grafikiem.',
    },
    community: {
      title: 'Społeczność i wydarzenia',
      body: 'TODO(klientka): czy wydarzenia i warsztaty są stałym elementem oferty, czy pojedynczymi akcjami',
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
