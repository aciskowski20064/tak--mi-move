# TAK MI MOVE — kontekst projektu

Strona internetowa dla studia jogi, pilatesu i aerial yogi z dwiema lokalizacjami.
**Realny, płatny projekt — 10 000 PLN.** Nie demo-pitch. Demo zostało zaakceptowane,
klientka kupuje stronę. Rozpoczęty 03.08.2026.

Wykonawca: Olek (freelancer web design/dev, Pomorze).
Klientka: Katarzyna Zawadzka, marka TAK MI MOVE.

---

## 1. Fakty o marce

Nie wolno wymyślać niczego, czego nie ma poniżej. Brief zabrania tego wprost, a strona
ma mówić prawdę o studiu.

| | Pruszcz Gdański (macierzyste) | Gdańsk |
|---|---|---|
| Adres | ul. Grunwaldzka 55/7, 83-000 | ul. Angielska Grobla 35/47 |
| E-mail | `takmimove@gmail.com` | ten sam — druga skrzynka skasowana 19.08 |
| Instagram | `@tak_mi_move` | `@tak_mi_move_gdansk` |

Telefon wspólny: **507 444 640**. Rok założenia: 2022. Hasło z mediów społecznościowych:
„Siła • Spokój • Równowaga".

Oferta: **joga, pilates, stretching, aerial yoga, barre** (5 rodzajów, każdy ma podstronę).

Rezerwacje: **Fitssey**, `https://app.fitssey.com/Takmimove/frontoffice`.

Pełna nazwa: **Tak Mi Move Katarzyna Zawadzka**, NIP **6040107434** (od 19.08.2026).

**Czego NADAL nie wiemy i czego nie wolno zmyślać:** imion i biogramów instruktorek
(klientka świadomie ich nie chce), treści opinii klientek, cen, godzin otwarcia.
Historia marki, wartości i zasady odwoływania są już znane — patrz
`docs/odpowiedzi-klientki.md`.

---

## 2. Dwa briefy — który jest nadrzędny

W `Downloads` leżą dwa briefy z 03.08.2026: krótszy „BRIEF PROJEKTOWY" i długi
`TAK_MI_MOVE_analiza_i_brief_dla_Claude_Code.md` (2397 linii). **Rozjeżdżają się
w 10 punktach.** Rozstrzygnięcia spisane w `docs/content-inventory.md`.

Obowiązuje mapa strony z briefu-analizy (`/zajecia`, `/grafik`, `/studia`,
`/pierwsza-wizyta`), nie z projektowego (`/oferta`, `/grafik-zajec`, `/lokalizacje`).

Odwołania w kodzie w formie `§15`, `§12.7` wskazują na **brief-analizę**.

Twarda zasada obu briefów: **zero „AI slop"**. Brak generowanych grafik, brak stocku,
brak frazesów bez pokrycia w faktach.

---

## 3. Stack i uruchamianie

Astro 7 + TypeScript + **własne tokeny CSS** (świadomie bez Tailwinda).
Generowanie statyczne, zero frameworka po stronie klienta.

```bash
npm run dev      # port 5201 — 4321 zajęte przez inny projekt
npm run build
npm run preview  # port 5202
```

Podgląd przez `preview_start` po nazwie `takmimove` (dev) lub `takmimove-demo` (build).
Konfiguracja w `.claude/launch.json` — ale narzędzie podglądu czyta plik z katalogu
roboczego sesji (`~/.claude/.claude/launch.json`), więc wpis musi istnieć **tam**,
z pełną ścieżką w `--prefix`.

Alias importów: `~/` → `src/`.

### Smart App Control blokuje kompilator Astro (maszyna Olka, od 19.08.2026)

`npm run build` przestał działać z komunikatem *„An Application Control policy has
blocked this file"* — Windows blokuje niepodpisaną bibliotekę natywną
`@astrojs/compiler-binding-win32-x64-msvc/astro.win32-x64-msvc.node`.
To ustawienie systemu (`VerifiedAndReputablePolicyState = 1`), nie problem projektu:
na innej maszynie repozytorium buduje się normalnie.

**Smart App Control raz wyłączony wraca dopiero po reinstalacji Windows** — dlatego
zamiast go ruszać, używamy fallbacku WASM, który Astro ma wbudowany i włącza sam:

```bash
npm install --no-save --force @astrojs/compiler-binding-wasm32-wasi@0.3.2 @emnapi/core@1.11.3
```

Dwa warunki, bez których fallback milczy:

1. **Wersja `wasm32-wasi` musi być identyczna z `@astrojs/compiler-binding`** (dziś 0.3.2).
   Domyślne `@latest` instaluje 0.4.0 i kończy się błędem ABI.
2. **`@emnapi/core` i `@emnapi/runtime` muszą być z tej samej linii.** W drzewie siedział
   `core@2.0.0-alpha.3` przy `runtime@1.11.3` — stąd
   `napi_set_last_error: function import requires a callable`.

Instalacja jest `--no-save`, więc `package.json` i lockfile zostają czyste. Znaczy to
też, że **`npm install` albo `npm ci` skasuje obejście** i trzeba powtórzyć komendę.
Do zdiagnozowania prawdziwej przyczyny, gdy fallback się nie ładuje:
`NAPI_RS_FORCE_WASI=1 npm run build`.

---

## 4. Mechanizm treści — najważniejsza rzecz w tym projekcie

**Komponenty nie zawierają tekstów.** Cała treść siedzi w `src/data/copy/home.ts`
i `src/data/copy/pages.ts`, treści powtarzalne w kolekcjach `src/content/`.

Konwencja trzech stanów, opisana w `src/lib/copy.ts`:

| Prefiks | Znaczenie |
|---|---|
| `FAKT` (komentarz) | potwierdzone w materiałach od klientki |
| `ROBOCZE` (komentarz) | napisane przeze mnie, do akceptacji klientki |
| `TODO(klientka):` | dane, których nie mamy i których **nie wolno wymyślać** |

**String zaczynający się od `TODO(` nigdy się nie renderuje jako treść.**
W trybie deweloperskim pokazuje go komponent `<Todo>`, w buildzie produkcyjnym
znika razem z elementem opakowującym. Helpery: `isPlaceholder`, `copyOrNull`, `realOnly`.

### Pułapka, która już raz uderzyła

Ten mechanizm sprawił, że **wersja produkcyjna miała 5 sekcji zamiast 11** — wycinał
wszystko naraz, w tym całą listę zajęć. Strona studia jogi bez informacji o zajęciach.
W dev wyglądało to dobrze, bo `<Todo>` wypełniał dziury.

**Zawsze sprawdzaj strukturę na buildzie produkcyjnym, nie w dev.** Szybki test:

```bash
npm run build && grep -o '<h2[^>]*>[^<]*' dist/index.html
```

Rozwiązaniem było rozróżnienie, którego wcześniej nie było: **opis dyscypliny to nie
zmyślony fakt o marce.** „Pilates wzmacnia mięśnie głębokie" można napisać i oznaczyć
jako ROBOCZE. „Zajęcia prowadzi Anna, instruktorka z 10-letnim stażem" — nie.

### Sekcje, które nie renderują się bez danych

`Team.astro`, `Reviews.astro`, `Faq.astro` czekają na flagi `photoConsent`, `consent`,
`approved` w kolekcjach treści. Dziś wszystkie kolekcje mają tylko pliki `przyklad.md`,
więc te trzy sekcje są niewidoczne. To zachowanie zamierzone, nie błąd.

---

## 5. System wizualny

**Symbol-kropla.** Litera „O" w słowie MOVE to organiczna, asymetryczna kropla,
nie okrąg. Marka używa jej samodzielnie jako białego konturu na zdjęciach.
To **oś całego systemu wizualnego** — zastępuje bibliotekę ikon, służy jako maska
kadrów, znacznik sekcji i favicon. Komponent `ui/Mark.astro`.

Obrysowana programowo z JPG-a (Moore-neighbor tracing + RDP + Catmull-Rom, 93,5% IoU).
Wordmark to na razie **PNG z alfą wyliczoną z luminancji** — do podmiany, gdy przyjdzie
plik wektorowy.

**Wnętrza wbrew założeniom briefu nie są beżowe:** surowy beton, czarny industrialny
sufit z rurami, jodełka z jasnego dębu, mosiężne ramy luster, lniane zasłony.

**Paleta wyciągnięta pikselowo ze zdjęć** (`src/styles/tokens.css`):

```
--clay      #da9787   tło logo — jedyny mocny kolor marki
--clay-deep #8f4c3b   akcent tekstowy, 5.4:1 na --bone
--bone      #f7f4eb   tło domyślne
--sand      #e8ded0   tło alternatywne
--oak       #c2a98f   podłoga jodełka — linie
--stone     #665d54   tekst drugorzędny
--espresso  #2e2621   tekst główny, sufit industrialny
--brass     #a8875c   ramy luster — tylko cienkie linie 1px
```

**Biel na `--clay` daje 2,4:1 i odpada** — dlatego `--on-accent` to `--espresso` (6,2:1).
`--stone` i `--clay-deep` wzięte wprost ze zdjęć oblewały AA na tle `--sand`
(4,42 i 4,45 przy progu 4,5) — przyciemnione. **Paletę trzeba walidować przeciw
każdemu tłu sekcji, nie tylko domyślnemu.**

Fonty rozstrzygnięte empirycznie: **Tenor Sans** (display) + **Figtree** (tekst),
oba z pełnym `latin-ext`. Italiana odrzucona — zero polskich glifów.

### Wejście w podstronę — jeden wzorzec na wszystkie

Okruszki → nadtytuł → tytuł (miara 18ch) → **krótka kreska akcentu 3,5rem** →
lead (interlinia 1,85, miara 46ch). Układ zatwierdzony na makiecie pierwszej
wizyty, obowiązuje na **każdej** podstronie. Kreska stoi także tam, gdzie leadu
nie ma — domyka nagłówek, zamiast zostawiać go zawieszonym nad treścią.

Reguły siedzą **globalnie w `base.css`** jako `.page-header__title`,
`.page-header__rule`, `.page-header__lead`, a nie w scoped-stylach `PageHeader`.
Powód: ten sam rytm musi działać w dwóch obudowach — w komponencie
(14 podstron) i w dwukolumnowym nagłówku `/pierwsza-wizyta`, gdzie obok tekstu
stoi kadr w łuku i karta rezerwacji. Dwa komplety scoped-styli już raz się
rozjechały. **Zmieniasz rytm wejścia → zmieniasz `base.css`, nie komponent.**

Wyjątki świadome: strona główna (ma własny hero) i `/404` (wyśrodkowany układ
z symbolem-kroplą).

---

## 6. Stan — co stoi

12 podstron, build przechodzi, zero zepsutych linków, zero placeholderów w produkcji.

```
/                      strona główna, 11 sekcji
/zajecia + /[slug]     5 rodzajów zajęć z kolekcji
/grafik                widżet Fitssey + zasady zapisów + FAQ
/studia + /[slug]      2 lokalizacje
/pierwsza-wizyta
/o-nas
/kontakt
/polityka-prywatnosci  noindex, czeka na treść
/polityka-cookies      noindex, czeka na treść
/404
```

Nawigacja: Zajęcia · Grafik i zapisy · Studia · Pierwsza wizyta · O nas · Kontakt
+ przycisk „Umów wizytę".

**`DEMO_MODE = true` w `src/data/site.ts`** — cała strona wychodzi z `noindex, nofollow`.
Przed publikacją przestawić na `false`.

Adres bazowy: `SITE_URL` → adres Vercela → `takmimove.pl`. Domena **niepotwierdzona**.

---

## 7. Fitssey — stan integracji

**Fitssey pozwala na osadzenie w ramce** — sprawdzone, brak `X-Frame-Options`.
Dlatego `/grafik` działa już teraz na iframe (wariant awaryjny z briefu §6.2).

Docelowo natywny widżet JS. Panel: **Studio → Integracje → Widżety**.
Generator ma filtry: `Ukrycie nawigacji`, `Kategoria`, `Klasa`, `Pracownik`,
**`Lokalizacja`**. Przycisk `Generuj kod`.

Wnioski: **filtrowanie po lokalizacji i po kategorii zajęć jest możliwe od razu.**
Kody są dwa — bazowy (przed `</body>`, na całej stronie) i widżetu (w miejscu osadzenia).
Widżet grafiku i widżet kursów nie mogą stać na tej samej podstronie.

Miejsca gotowe na podmianę, wystarczy uzupełnić wartości:

- `booking.widgetScript` w `src/data/site.ts`
- `fitsseyLocationId` w `locations[]`
- `fitsseyCategoryId` w kolekcji `classes`
- `canFilter` w `components/fitssey/ScheduleEmbed.astro`

Instrukcja dla klientki: `docs/instrukcja-fitssey.md`.

---

## 8. Pułapki wykryte w tym projekcie

**`Astro.url.searchParams` jest puste przy generowaniu statycznym.** Przełącznik
lokalizacji na `?studio=` musi działać po stronie przeglądarki, inaczej zmienia adres
bez zmiany treści. Patrz `components/fitssey/LocationSwitch.astro`.

**Nawigacja z zaszytymi linkami rozjechała się ze stronami z kolekcji treści** — 55
martwych odsyłaczy. Podmenu musi być składane z tego samego źródła co `getStaticPaths`.

**Build produkcyjny wycina treść, której dev nie wycina** — patrz sekcja 4.

**Mapy Google ładowane dopiero po kliknięciu** (`ui/MapEmbed.astro`), żeby nie ustawiać
ciasteczek przed zgodą.

**Formularz kontaktowy zbudowany, ale ukryty** do czasu ustawienia `contactForm.endpoint`.
Świadoma decyzja: formularz, którego nikt nie odbiera, jest gorszy niż jego brak.

---

## 9. Dokumenty w `docs/`

| Plik | Zawartość |
|---|---|
| `content-inventory.md` | rozstrzygnięcia 10 sprzeczności między briefami |
| `kierunek-wizualny.md` | uzasadnienie palety, typografii, symbolu |
| `plan-realizacji.md` | podział na etapy |
| `status-demo.md` | stan na moment wysyłki demo |
| `stan-prac.md` | **START KAŻDEJ SESJI** — co zrobione, co zostało, blokady |
| `odpowiedzi-klientki.md` | 60 odpowiedzi klientki ze statusem weryfikacji |
| `dla-klientki.md` | **60 ponumerowanych pytań** z adresem podstrony i nazwą sekcji |
| `instrukcja-fitssey.md` | krok po kroku, jak pobrać kody widżetu |

`dla-klientki.md` jest zbudowany z faktycznych znaczników `TODO(` w kodzie
(przez `grep`, nie z pamięci). Przy aktualizacji kodu warto go przegenerować tą samą drogą.

---

## 10. Materiały

Oryginały: `Desktop\takmimove`, kopia w `assets/source/`. **6 plików JPG, to wszystko.**

- `logo 1.jpg`, `logo 2.jpg` — logo na tle szarym i clay
- `zeespol 2.jpg` — **wnętrze w Pruszczu Gdańskim, potwierdzone przez Olka**
- `zespół.jpg`, `charakterystyczny symbol.jpg` — jasne wnętrze, **lokalizacja niepotwierdzona**
- `instruktora aeral jooga.jpg` — instruktorka na hamaku

Użyte na stronie: `src/assets/photos/`. **Brak jakiegokolwiek zdjęcia studia w Gdańsku.**

---

## 11. Otwarte kwestie

**Blokery publikacji:** kody widżetu Fitssey, domena (niepotwierdzona, adresy kanoniczne
wskazują dziś w próżnię), NIP i pełna nazwa działalności, polityki prawne (klientka pisze
sama), zdjęcia studia w Gdańsku.

**Ustalone z Olkiem, ale nieprzekazane mi:** formularz kontaktowy, blog, mapy.
Wszystkie trzy dotyczą kodu, który już stoi — **dopytać przed dalszą pracą**.

**Do rozstrzygnięcia:** podstrona `/cennik` (zalecana, nie istnieje w kodzie — to nowa
praca, nie odblokowanie gotowego), sekcja z instruktorkami, kto edytuje treści po
wdrożeniu (dziś tylko przez kod — panel to osobna praca), przekierowania ze starej strony
jeśli istnieje, licencje na zdjęcia od fotografa, wizytówka Google dla obu lokalizacji,
analityka, termin publikacji.

**Weryfikacja wizualna była ograniczona** — panel podglądu bywał zamknięty. Sprawdzona
struktura, wygenerowany HTML i linki. Przed publikacją ktoś musi kliknąć całą stronę
na prawdziwym telefonie; 70% ruchu przy tego typu stronach idzie z Instagrama.

---

## 12. Zasady pracy w tym projekcie

1. **Nie wymyślaj faktów o marce.** Brak danych → `TODO(klientka):` → sekcja znika.
2. **Opis dyscypliny to nie fakt o marce.** Wolno pisać czym jest pilates, oznaczając ROBOCZE.
3. **Sprawdzaj na buildzie produkcyjnym**, nie w dev.
4. **Teksty tylko w `src/data/copy/`** — nigdy w komponentach.
5. **Kontrast walidować przeciw każdemu tłu**, nie tylko domyślnemu.
6. **Polski we wszystkich tekstach, komentarzach i nazwach commitów.**
