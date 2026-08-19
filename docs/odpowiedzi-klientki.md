# Odpowiedzi klientki — 19.08.2026

Źródło: `TAK_MI_MOVE_pytania_i_odpowiedzi.pdf` (Downloads), opracowane z 5 stron
odręcznego formularza + maila Katarzyny Zawadzkiej. Numeracja identyczna jak
w `dla-klientki.md` (1–60), więc każdą pozycję można zestawić 1:1.

Status `NIE JESTEM W STANIE ZWERYFIKOWAĆ` pochodzi z oryginalnego opracowania
(odręczne pismo) — nie od Olka. Przy takich pozycjach nie wpisujemy nic do kodu
bez dopytania klientki, mimo że jakaś odpowiedź technicznie istnieje.

## Legenda statusu

| Skrót | Znaczenie |
|---|---|
| ✅ GOTOWE | można wpisać do kodu jako FAKT |
| ⚠️ CZĘŚCIOWE | część odpowiedzi pewna, część wymaga dopytania |
| ⛔ BRAK | nadal nic nie mamy |
| 🔁 KONFLIKT | odpowiedź koliduje z tym, co już stoi w kodzie |

---

## 1–12 — decyzje, studia, pierwsza wizyta

| # | Temat | Odpowiedź | Status | Kod |
|---|---|---|---|---|
| 1 | Sekcja Prowadzące | **NIE** — bez nazwisk i zdjęć, tylko ogólna informacja + link do Fitssey | ✅ | `Team.astro` — przebudowa modelu, nie tylko treść |
| 2 | Podstrona `/cennik` | **TAK** | ✅ | nowa strona, nie istnieje w kodzie |
| 3 | Ceny | "Wszystko jest w Fitssey" — brak tabeli cen | ⛔ | `/cennik` — może stanąć bez cen, z linkiem |
| 4 | Opis studia Pruszcz | „[Nowoczesne?] i jasne, wspaniała społeczność" | ⚠️ | `home.ts:56` — pierwsze słowo niepewne |
| 5 | Opis studia Gdańsk | „Przytulne, w centrum, eleganckie, intymna atmosfera" | ✅ | `home.ts:57` |
| 6 | Zdjęcie wnętrza Gdańsk | dostarczone, WeTransfer: we.tl/t-um6QWb6EuMS0sj8A | ✅ (tor zdjęć) | `home.ts:62` |
| 7 | Krok 1 — rezerwacja | „Wybiera studio i zajęcia w aplikacji" | ✅ | `home.ts:113` |
| 8 | Krok 2 — konto | „Podaje się e-mail i rejestruje w systemie" | ✅ | `home.ts:114` |
| 9 | Krok 3 — płatność/karnety | Poczuj nas / pojedyncze / karnet x4 (4 tyg.) / karnet x8 (6 tyg.) / karnet Open (4 tyg.); ważność liczy się od pierwszej wizyty; w Trójmieście przejazdem → „wejście jednorazowe" w Fitssey | ✅ | `home.ts:115` |
| 10 | Krok 4 — przyjście | szatnie w obu studiach, „10 min żeby w ciszy wypić herbatę i wejść" | ✅ | `home.ts:116` |
| 11 | Krok 5 — co zabrać | boso lub w skarpetkach, „wszystko jest, tylko wygodnie się ubrać" | ✅ | `home.ts:117` |
| 12 | Krok 6 — zgłaszanie urazów | mailowo `takmimove@gmail.com`; „nie dotyczy późnego odwołania" | ✅ | `home.ts:118` |

## 13–27 — prowadzące, opinie, FAQ

| # | Temat | Odpowiedź | Status | Kod |
|---|---|---|---|---|
| 13 | Co łączy zespół | „Profesjonalizm" | ✅ | `home.ts:146` |
| 14–15 | Imiona / zajęcia instruktorek | zastąpione wartościami „fachowe przygotowanie", „pasja" — koncepcja sekcji zmieniona | ✅ (jako decyzja) | `Team.astro` |
| 16 | Doświadczenie/podejście | „otwartość na drugiego człowieka" (4. wartość z 13–16) | ✅ | `Team.astro` |
| 17 | Zdjęcia instruktorek | brak — nie dotyczy nowej koncepcji | ✅ (jako decyzja) | — |
| 18 | Zgoda na wizerunek | nieaktualne wobec decyzji „bez zdjęć" | ✅ (moot) | — |
| 19 | Opinie klientek | link Google + 2 linki Instagram (highlighty) | ⚠️ | `Reviews.astro` — treść trzeba jeszcze wydobyć z linków |
| 20 | Źródło opinii | formularz: Google+Facebook; mail: Google+Instagram | ⚠️ | traktować jako Google + Instagram (nowszy mail) |
| 21 | Zgoda na opinie z wiadomości prywatnej | brak jednoznacznego tak/nie | ⚠️ (prawdopodobnie moot — źródła to Google/IG, nie DM) | — |
| 22 | Coś poza Fitssey w zapisach | „nie", ale telefon/mail jako alternatywa dla niechętnych systemowi | ✅ | pokrywa się z istniejącym `content/faq/jak-zapisac-sie-na-zajecia.md` |
| 23 | Doświadczenie wymagane | „nie" | ✅ | pokrywa się z `czy-potrzebuje-doswiadczenia.md` |
| 24 | Dodatkowe rzeczy do zabrania | „Aerial Yoga — bez biżuterii!" | ✅ | rozszerza `co-zabrac-na-pierwsze-zajecia.md` lub FAQ zajęć aerial-yoga |
| 25 | Zajęcia per lokalizacja | pytanie przekreślone, brak listy | 🔁 KONFLIKT | patrz „Konflikty" niżej |
| 26 | Zalecenia ciąża/urazy | robocze: „zielone światło od lekarza"; **finalna wersja ma dojść osobno** | ⚠️ | `pages.ts:140,145` — używać jako tymczasowe, oznaczyć do podmiany |
| 27 | Inne częste pytania | parking miejski (obie lokalizacje), Pruszcz wejście od Kossaka, karnety x4/x8 współdzielone z bliskimi, dzieci na zajęciach „dla mam z dziećmi" i sesjach indywidualnych | ⚠️ (ostatnia linijka nie w 100%) | nowe pozycje FAQ |

## 28–39 — grafik, zapisy, lokalizacje

| # | Temat | Odpowiedź | Status | Kod |
|---|---|---|---|---|
| 28 | Odwołanie bez utraty wejścia | 14h przed; brak wyjątków poza nagłą ciążą/zakazem lekarza | ✅ | `pages.ts:18` |
| 29 | Lista rezerwowa | mail o zwolnieniu miejsca | ✅ | `pages.ts:19` |
| 30 | Karnet w obu lokalizacjach | TAK | ✅ | `pages.ts:20` |
| 31 | Karty sportowe | NIE | ✅ | `pages.ts:21` |
| 32 | Kody widżetu Fitssey | **brak, zapowiedziane** | ⛔ | `site.ts:53` — nadal główny bloker `/grafik` |
| 33 | Wejście do budynku | Pruszcz: ul. Kossaka, 1 piętro ✅; Gdańsk: ulica niepewna („Bądkowskiego"?), parter ⚠️ | ⚠️ | `site.ts:82`, `studia/[slug].astro:42` |
| 34 | Parking | Gdańsk: płatny ✅; Pruszcz: nieokreślone | ⚠️ | `site.ts:83`, `studia/[slug].astro:43` |
| 35 | Dojazd komunikacją | **„nie opisujemy"** — decyzja, nie brak danych | ✅ (jako decyzja: pomiń sekcję) | `studia/[slug].astro:44` |
| 36 | Dostępność | Pruszcz: schody, **„nie opisujemy"** | ✅ (jako decyzja: pomiń) | `studia/[slug].astro:45` |
| 37 | Godziny otwarcia | brak odpowiedzi | ⛔ | `site.ts:83` |
| 38 | Zdjęcia wnętrz (4–6/studio) | dostarczone: Pruszcz we.tl/t-YCH3xgh1LNDnKT54, Gdańsk we.tl/t-um6QWb6EuMS0sj8A | ✅ (tor zdjęć) | `src/assets/photos/` |
| 39 | Zdjęcie wejścia od ulicy | dostarczone (w paczkach wyżej) | ✅ (tor zdjęć) | `src/assets/photos/` |

## 40–53 — zajęcia, pierwsza wizyta, opis marki

| # | Temat | Odpowiedź | Status | Kod |
|---|---|---|---|---|
| 40 | Dla kogo zajęcia | „Osoby chcące usprawnić ciało, stawiające na świadomy i bezpieczny ruch w wybranej intensywności" | ✅ (ogólne, wszystkie 5) | `zajecia/[slug].astro:105` |
| 41 | Przebieg zajęć | ok. 8 os., 55 min, [wspólnota?], [domowo?] | ⚠️ | `zajecia/[slug].astro:118` |
| 42 | Strój/sprzęt | „ubranie niekrępujące ruchów" | ✅ | `zajecia/[slug].astro:131` |
| 43 | Poziom zaawansowania | „opisane w Fitssey" — **nie chce podawać wprost na stronie** | ✅ (jako decyzja) | `zajecia/[slug].astro:40` — link zamiast wartości |
| 44 | Charakter/intensywność | „różnie" | ✅ (jako decyzja: nie da się skategoryzować per zajęcia) | `zajecia/[slug].astro:41` |
| 45 | Czas trwania | 55 min | ✅ | `zajecia/[slug].astro:42` |
| 46 | Lokalizacja zajęć | „oba", „za mało różnic żeby osobno opisywać" | 🔁 KONFLIKT | patrz „Konflikty" niżej |
| 47 | Zdjęcie z zajęć | brak | ✅ (jako decyzja: pomiń) | — |
| 48 | Pierwsza wizyta — wstęp | „Nauczyciel pokaże studio i podpowie... są warianty ćwiczeń" | ✅ | `pages.ts:61` |
| 49 | Reużycie 7–12 | TAK | ✅ | — |
| 50 | Szatnie/prysznice | kosmetyki, ręczniki, prysznic dostępne | ✅ | `pages.ts:65,69` |
| 51 | Urazy/ciąża dodatkowo | „zgłoś nauczycielowi prowadzącemu" | ✅ | `pages.ts:73` |
| 52 | Kompletność 28–29 | TAK | ✅ | — |
| 53 | Opis marki (elevator pitch) | „Studio zdrowego ruchu" + rozwinięcie z maila (bezpieczna, inkluzywna, wspierająca przestrzeń...) | ✅ | `pages.ts:90` |

## 54–60 — historia, wartości, dane firmowe

| # | Temat | Odpowiedź | Status | Kod |
|---|---|---|---|---|
| 54 | Historia marki | po urodzeniu syna — chęć bycia bliżej ludzi, miejsce przyjazne i kobiece na bezpieczny powrót do aktywności | ✅ | `pages.ts:93` |
| 55 | Co ważne w pracy z ludźmi | „Siła ~ Spokój ~ Równowaga"; bezpieczne/inkluzywne/wspierające; ciało + głowa | ✅ (treść realna, do rozbicia na 3–5 punktów) | `pages.ts:97` |
| 56 | Warsztaty/wydarzenia | TAK regularnie, info na FB/IG; można zamówić własne (gotowy pakiet lub „na miarę") przez mail | ✅ | `pages.ts:106` |
| 57 | Pełna nazwa działalności | **Tak Mi Move Katarzyna Zawadzka** | ✅ | `site.ts:14`, `Footer.astro:62` |
| 58 | NIP | **6040107434** | ✅ | `site.ts:14`, `Footer.astro:62` |
| 59 | Maile — oba aktualne? | **NIE** — jeden wspólny adres `takmimove@gmail.com` | 🔁 KONFLIKT | patrz „Konflikty" niżej |
| 60 | Telefon wspólny? | TAK, 507 444 640 dla obu studiów | ✅ | już tak w kodzie, teraz potwierdzone |

---

## Dodatkowe fakty z maila (poza numeracją)

- **Kolorystyka wskazana przez klientkę:** kremowy/beżowy jako wiodący, terakota/róż i szałwia/zieleń jako dodatkowe — „estetyka widoczna na social mediach i szablonach pod SM". Patrz sekcja „Konflikty".
- Sesje indywidualne (joga, stretching, trening wzmacniający, trening medyczny) — umawiane mailowo, klient podaje cel i lokalizację.
- Wejście jednorazowe w Fitssey dla osób w Trójmieście przejazdem.
- Z dziećmi: tylko zajęcia „dla mam z dziećmi" oraz sesje indywidualne.
- Adres Gdańsk **z potwierdzonym kodem pocztowym**: Angielska Grobla 35/47, **80-756** Gdańsk (rozstrzyga wcześniejsze „DO POTWIERDZENIA" w `site.ts`).
- Linki do materiałów: opinie Google, 2× opinie Instagram, zdjęcia Pruszcz, zdjęcia Gdańsk, logo (WeTransfer — część linków mogła już wygasnąć, logo w wektorze mamy z innej dostawy 18.08).

---

## 🔁 Konflikty z tym, co już stoi w kodzie

1. **E-mail Gdańska.** `site.ts` ma dziś `takmimovegdansk@gmail.com` dla lokalizacji Gdańsk. Klientka: jeden wspólny adres `takmimove@gmail.com`. Trzeba zmienić pole `email` w `locations[]` i wszędzie, gdzie adres gdański jest używany osobno.

2. **Podział zajęć na lokalizacje.** `site.ts` ma dziś Pruszcz z barre, Gdańsk **bez** barre (`classSlugs`). Pytanie 46 mówi „oba, za mało różnic żeby osobno opisywać" — ale pytanie 25 (wprost o to pytające) zostało przekreślone bez odpowiedzi. Nie jest jasne, czy to oznacza, że **barre jednak jest w obu**, czy to ogólny komentarz niedotyczący konkretnej listy. To nie jest niedoczytanie odręcznego pisma (jak większość „⚠️" wyżej) — to sprzeczność z danymi już zaszytymi w kodzie, które same w sobie nigdy nie były potwierdzone przez klientkę (był to wstępny domysł z etapu 1). **Wymaga dopytania wprost.**

3. **Kolorystyka.** Cały system wizualny strony (`tokens.css`, `docs/kierunek-wizualny.md`) został zbudowany na palecie wyprowadzonej ze zdjęć wnętrz: beton, czarny sufit przemysłowy, dąb, mosiądz — **świadomie odrzucając „beżowość"**, bo wnętrza na zdjęciach jej nie pokazywały. Klientka w mailu wprost deklaruje inny kierunek: **kremowy/beżowy + terakota/róż + szałwia/zieleń**, wzorem swoich social mediów. To nie jest doprecyzowanie istniejącej palety — to **inny kierunek**. Zgodnie z ustaloną kolejnością zostaje na koniec procesu, ale to duże ustalenie, więc odnotowuję je już teraz, żeby nie zaskoczyło nikogo na finiszu.

---

## ⛔ Nadal całkowicie brakuje

- Kody widżetu Fitssey (pytanie 32) — główny bloker `/grafik` i `/cennik`.
- Tabela cen (pytanie 3).
- Godziny otwarcia (pytanie 37).
- Domena docelowa (nieporuszona w tym dokumencie).
- Finalna, zredagowana wersja treści o przeciwwskazaniach zdrowotnych (zapowiedziana osobno, dziś tylko robocza).
- Decyzja o obsłudze formularza kontaktowego (nieporuszona w tym dokumencie).

## ⚠️ Do szybkiego dopytania (małe, ale blokujące)

- Pytanie 4 — dokładne pierwsze słowo opisu Pruszcza.
- Pytanie 33 — nazwa ulicy wejścia w Gdańsku.
- Pytanie 34 — czy parking w Pruszczu jest płatny.
- Pytanie 41 — dwa ostatnie słowa opisujące atmosferę zajęć.
- **Nowe:** czy barre faktycznie odbywa się w Gdańsku (konflikt #2 wyżej).
- **Nowe:** czy wyjątek od zasady 14 godzin przy nagłej ciąży ma być publiczną regułą na stronie. Dopisek stał nad tabelą, nie przy pytaniu 28, więc nie wiadomo, czy w ogóle dotyczy odwołań. Nie publikujemy go — na stronie zostaje sama zasada 14 godzin.
