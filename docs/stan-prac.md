# Stan prac — finalizacja strony

**Ostatnia aktualizacja: 19.08.2026, koniec sesji pierwszej.**

Numery w nawiasach odsyłają do pytań 1–60 z `dla-klientki.md`; odpowiedzi
i statusy ich weryfikacji są w `odpowiedzi-klientki.md`.

Licznik: **37 znaczników `TODO(` w kodzie** (na starcie sesji było 55).

---

## Ustalona kolejność pracy

**Struktura stron → treść → zdjęcia (tor równoległy) → kolorystyka na końcu.**

Struktura idzie pierwsza, bo zmienia zakres reszty. Kolorystyka na końcu, bo
paleta jest już wyprowadzona ze zdjęć i zwalidowana pod kontrast — zmiana
wcześniej oznaczałaby przewalidowanie po każdej kolejnej zmianie tła.
Klientka i tak musi ją zatwierdzić, więc lepiej raz, na gotowej treści.

---

## ZROBIONE 19.08.2026

### Fundament

- [x] **Repozytorium na GitHubie** — `github.com/aciskowski20064/tak--mi-move`.
      Projekt wcześniej nie miał gita w ogóle. `.gitignore` wycina
      `node_modules`, `dist`, `.astro` i pełnowymiarowe oryginały zdjęć.
- [x] **`odpowiedzi-klientki.md`** — 60 odpowiedzi przełożonych na tabelę
      ze statusem gotowości i wskazaniem miejsca w kodzie.

### Dane firmowe (57–60)

- [x] Pełna nazwa `Tak Mi Move Katarzyna Zawadzka` i NIP `6040107434`
      w stopce na wszystkich 17 podstronach.
- [x] Skrzynka `takmimovegdansk@gmail.com` **usunięta** — klientka ją
      przekreśliła, obie lokalizacje mają wspólny `takmimove@gmail.com`.
- [x] Kod pocztowy Gdańska `80-756` potwierdzony.
- [x] Telefon potwierdzony jako wspólny dla obu studiów.

### Strona główna — kroki pierwszej wizyty (7–12)

- [x] Sześć kroków zredagowanych na jedno zdanie każdy: rezerwacja w Fitssey,
      konto na e-mail, pakiety (Poczuj nas / pojedyncze / x4 / x8 / Open)
      z ważnością liczoną od pierwszej wizyty, 10 minut zapasu, boso lub
      w skarpetkach, zgłaszanie urazów.

### `/pierwsza-wizyta` — KOMPLETNA (48–52)

- [x] Wstęp i cztery bloki treści: Co zabrać, Na miejscu, Urazy, Odwoływanie.
- [x] Treść scalona z odpowiedzi rozsypanych po formularzu — blok o odwołaniach
      łączy 28+29+30, zdrowotny 12+26+51, o strojach 11+42+24.
- [x] Domknięta pozycja FAQ „Co zabrać na pierwsze zajęcia", która od demo
      miała świadomą lukę (nie wiedzieliśmy, czy studio daje maty i ręczniki).
- [x] **Przebudowa układu wg makiet:** nagłówek dzielony z kadrem w łuku
      wychodzącym poza krawędź okna, karta rezerwacji jako poziomy pasek
      (tytuł | telefon | okrągła strzałka), sześć kroków jako pionowa oś
      czasu z kroplą, cztery kafle informacyjne 2×2, rząd czterech udogodnień.
- [x] **Trzy realne zdjęcia** od klientki wstawione tam, gdzie coś dowodzą:
      regał ze sprzętem przy „nie musisz nic przynosić", szatnia przy
      „na miejscu", kawa w nagłówku przy kroku o 10 minutach na herbatę.

### `/grafik` — KOMPLETNA treściowo (28–31)

- [x] Sześć zasad zapisów: 14 godzin na odwołanie, lista rezerwowa mailem,
      karnet w obu studiach, brak kart sportowych, dzielenie karnetów x4/x8
      z bliskimi (27), wejście jednorazowe dla osób przejazdem (mail).

### Decyzja o wycofaniu treści

- [x] **Usunięty niepotwierdzony wyjątek od zasady 14 godzin.** Dopisek
      klientki o nagłej ciąży stał *nad tabelą*, nie przy pytaniu 28 — nie
      wiadomo, czy w ogóle dotyczy odwołań. Publikacja zamieniłaby prywatną
      notatkę w zobowiązanie wobec każdej klientki.

---

## DO ZROBIENIA

### Blok A — `/o-nas` (53–56) · wszystko potwierdzone, zero blokad

- [ ] Opis marki (53) — „studio zdrowego ruchu" + rozwinięcie z maila.
- [ ] Historia powstania (54) — po urodzeniu syna, miejsce przyjazne
      i kobiece na bezpieczny powrót do aktywności.
- [ ] Wartości (55) — Siła ~ Spokój ~ Równowaga; bezpieczne, inkluzywne,
      wspierające; troska o ciało i głowę. Do rozbicia na 3–5 punktów.
- [ ] Warsztaty i wydarzenia (56) — regularne, info na FB/IG, można zamówić
      własne wydarzenie mailowo.

**To najszybszy zysk: jeden plik `pages.ts`, wszystko pewne.**

### Blok B — strona główna (4–5, 13–17)

- [ ] Opis studia w Gdańsku (5) — „przytulne, w centrum, eleganckie,
      intymna atmosfera". Gotowe do wpisania.
- [ ] Opis studia w Pruszczu (4) — **pierwsze słowo nieczytelne** w skanie,
      dopytać. Reszta: „…i jasne, wspaniała społeczność".
- [ ] **Przebudowa sekcji Prowadzące (1, 13–17)** — klientka nie chce nazwisk
      ani zdjęć, ma być ogólna informacja o zespole plus link do Fitssey.
      Ma cztery wartości: profesjonalizm, fachowe przygotowanie, pasja,
      otwartość na drugiego człowieka. **To zmiana modelu danych
      w `Team.astro`, nie podmiana tekstu.**

### Blok C — `/zajecia` (40–47) · wymaga decyzji projektowej

- [ ] **Czas trwania 55 minut (45)** — do wpisania w pięciu plikach kolekcji.
- [ ] **Poziom (43)** — klientka: „opisane w Fitssey". To decyzja, nie brak
      danych: zamiast wartości ma być odnośnik do systemu.
- [ ] **Intensywność (44)** — klientka: „różnie". Parametru nie da się ustawić
      per zajęcia, pasek powinien go pomijać.
- [ ] Zdjęcia z zajęć (47) — **brak, klientka potwierdziła**. Pominąć.
- [ ] **DECYZJA DO PODJĘCIA:** odpowiedzi 40, 41 i 42 opisują zajęcia
      *ogólnie, dla wszystkich pięciu form* („osoby chcące usprawnić ciało",
      „ok. 8 osób, 55 minut", „ubranie niekrępujące ruchów"). Nie mamy nic,
      co różnicowałoby jogę od pilatesu *u nich*. Propozycja: przenieść te
      zdania raz na `/zajecia` jako wspólny opis, a podstrony zostawić przy
      opisach dyscyplin. Alternatywa to powtórzenie tych samych zdań pięć razy.

### Blok D — `/studia/[slug]` (33–37)

- [ ] Wejście w Pruszczu: ul. Kossaka, 1 piętro — **pewne, do wpisania**.
- [ ] Wejście w Gdańsku: parter pewny, **nazwa ulicy niepewna** („Bądkowskiego"?).
- [ ] Parking: w Gdańsku płatny — pewne. **W Pruszczu nieokreślony.**
- [ ] Dojazd komunikacją (35) i dostępność (36) — klientka: **„nie opisujemy"**.
      To decyzja: sekcje mają zniknąć, nie czekać na dane.
- [ ] Godziny otwarcia (37) — **brak odpowiedzi, dopytać**.
- [ ] Zdjęcia wnętrz (38–39) — paczki WeTransfer w mailu, **linki mogą wygasnąć**.

### Blok E — sekcje warunkowe

- [ ] Opinie (19–21) — mamy link do Google i dwa do wyróżnionych relacji
      na Instagramie. **Treść trzeba z nich wydobyć**, to osobna robota.
- [ ] FAQ (22–27) — pięć pozycji już stoi jako zatwierdzone; doszły nowe
      tematy z odpowiedzi 27: parking, wejście od Kossaka, dzieci.

### Blok F — przed publikacją

- [ ] `DEMO_MODE = false` w `src/data/site.ts` (dziś cała strona ma `noindex`).
- [ ] Domena — **niepotwierdzona**, adresy kanoniczne wskazują dziś w próżnię.
- [ ] Polityka prywatności i cookies — klientka pisze sama.
- [ ] Formularz kontaktowy — ukryty do czasu ustawienia `contactForm.endpoint`;
      **decyzja, kto go obsługuje, nadal nie zapadła**.
- [ ] Klikniąć całą stronę na prawdziwym telefonie. 70% ruchu idzie z Instagrama.

---

## BLOKADY — czekamy na klientkę

| Co | Po co | Numer |
|---|---|---|
| **Kody widżetu Fitssey** | filtrowanie grafiku po lokalizacji; dziś działa iframe | 32 |
| **Tabela cen** | podstrona `/cennik` — zatwierdzona, ale nieistniejąca w kodzie | 2, 3 |
| **Godziny otwarcia** | nagłówki podstron studiów i dane strukturalne | 37 |
| **Treści zdrowotne** | podmiana sekcji ROBOCZE na `/pierwsza-wizyta` | 26 |
| **Domena** | adresy kanoniczne, `SITE_URL`, `astro.config.mjs` | — |

### Pytania do wysłania klientce (krótkie, odblokowują dużo)

1. Pierwsze słowo opisu studia w Pruszczu (4).
2. Nazwa ulicy, od której jest wejście w Gdańsku (33).
3. Czy parking w Pruszczu jest płatny (34).
4. Dwa ostatnie słowa opisujące atmosferę zajęć (41).
5. **Czy barre odbywa się w Gdańsku** — patrz konflikt niżej.
6. Czy wyjątek od zasady 14 godzin przy nagłej ciąży ma być publiczną regułą (28).

---

## KONFLIKTY NIEROZSTRZYGNIĘTE

**1. Barre a podział zajęć na lokalizacje.** W kodzie Gdańsk nie ma barre —
to był mój domysł z etapu 1, nigdy niepotwierdzony. Odpowiedź 46 mówi „oba,
za mało różnic żeby osobno opisywać", ale pytanie 25 (wprost o podział)
klientka **przekreśliła bez odpowiedzi**. Twierdzenie stoi dziś jako fakt
w FAQ („Czy wszystkie zajęcia odbywają się w obu studiach?"), czyli także
na `/grafik` i `/pierwsza-wizyta`. **Do rozstrzygnięcia przed publikacją.**

**2. Kolorystyka.** Klientka w mailu wskazuje kremowy/beżowy jako wiodący
plus terakotę i szałwię. Obecna paleta powstała ze zdjęć wnętrz i świadomie
odrzucała beżowość. **Zdjęcia dostarczone 19.08 rozstrzygają spór na korzyść
klientki:** na zdjęciu ze sprzętem widać różowy łuk namalowany na ścianie
studia, a na zdjęciu recepcji szałwiową ścianę. Paleta z maila nie jest
kaprysem z Instagrama — jest na ich ścianach. Do zrobienia na końcu, zgodnie
z ustaloną kolejnością.

**3. Sekcja zdrowotna na `/pierwsza-wizyta`** jest oznaczona ROBOCZE.
Klientka zapowiedziała osobną, zredagowaną wersję treści o przeciwwskazaniach.

---

## Pułapki techniczne wykryte w tej sesji

**Smart App Control blokuje kompilator Astro.** `npm run build` przestaje
działać z mylącym komunikatem o bugu npm. Obejście i wyjaśnienie: `CLAUDE.md`
sekcja 3. Uwaga: **`npm install` kasuje obejście**, trzeba je powtórzyć.

**Klasa przekazana propem do komponentu Astro gubi scope.** `<Section class="intro">`
— reguła `.intro` w stylach strony **po cichu nie działa**, bo element nosi
scope komponentu Section. Ratunek: `:global(.intro)`. Wykrywalne tylko przez
`getComputedStyle`, nie przez czytanie kodu. To samo dotyczy klas
przekazywanych do `Button`.

**`100vw` liczy szerokość razem z paskiem przewijania.** Kadr wypuszczany poza
kontener wychodzi o kilka pikseli za daleko i robi poziomy pasek. Zabezpieczenie:
`overflow-x: clip` na sekcji — w odróżnieniu od `hidden` nie tworzy kontenera
przewijania, więc nie psuje `position: sticky`.

**Weryfikacja wizualna bez zrzutów ekranu.** Panel podglądu bywa ukryty i wtedy
strona nie renderuje klatek — `computer screenshot` zwraca błąd, a `loading="lazy"`
nie odpala się wcale. Sprawdzać pomiarami przez `javascript_tool`:
`getBoundingClientRect`, `scrollWidth` kontra `clientWidth`, policzony kontrast.

---

## Uruchamianie

```bash
npm run dev      # port 5201
npm run build
npm run preview  # port 5202
```

Podgląd: `preview_start` po nazwie `takmimove-demo`. **Wpis musi być
w `~/.claude/.claude/launch.json`**, nie w `.claude/launch.json` projektu —
narzędzie czyta plik z katalogu roboczego sesji.
