# TAK MI MOVE — kierunek wizualny

Źródło: 6 materiałów dostarczonych przez klientkę (`assets/source/`).
Kolory wyciągnięte pikselowo (System.Drawing, siatka próbek), nie dobierane „na oko".
Kontrasty policzone wg WCAG 2.x (formuła relative luminance).

---

## 1. Co realnie wynika z materiałów

### Logo
Wordmark **TAK MI MOVE** + podpis **STUDIO** ustawiony na łuku.
Krój: wysokokontrastowy sans (cienkie poziome kreski, grube pionowe, płaskie zakończenia,
brak szeryfów) — charakter modowo-edytorialny, nie „wellness-serif".
Litery mocno rozstrzelone, kompozycja centrowana, dwie linie.

**Zapis nazwy:** wersalikami — `TAK MI MOVE`. Tak jest w logo i tak trzymamy w całym serwisie
(nagłówki, meta title, schema `name`). W zdaniach ciągłych też wersalikami, bo to wordmark.

### Symbol marki — kluczowe odkrycie
Litera **O** w słowie MOVE nie jest okręgiem. To organiczna, asymetryczna kropla
z wgnieceniem u góry — kształt bliski nerce / oddechowi / ciału w skłonie.
Plik `charakterystyczny symbol.jpg` pokazuje, że marka **już używa go samodzielnie**:
biały kontur nałożony na zdjęcie z zajęć + jedno słowo pod spodem („Poczucie przynależności").

To jest gotowy język wizualny marki i on ma nieść całą stronę. Wnioski:

- symbol jako **maska kadru** dla zdjęć (hero, zespół, lokalizacje),
- symbol jako **znacznik sekcji** zamiast generycznych ikon,
- symbol jako **bullet** w listach i jako kształt hover na przyciskach,
- schemat „duże zdjęcie + kontur + jedno słowo" jako powtarzalny moduł edytorialny,
- favicon = sam symbol.

To zamyka temat ikonografii z briefu (§8 „minimalistyczna, spójna grubość linii") — mamy
własny, autorski element zamiast biblioteki ikon. Zero ryzyka AI-slopu.

### Wnętrza (ze zdjęć zespołu)
Dwa różne wnętrza, oba w tej samej rodzinie materiałowej:

| Element | Co widać |
|---|---|
| Podłoga | jodełka, jasny dąb, ciepły |
| Ściany | surowy beton (studio z hamakami) + gładka biel (studio jasne) |
| Sufit | czarny, industrialny — odsłonięte rury i szyny reflektorów |
| Lustra | duże, w **złotych/mosiężnych ramach** |
| Listwy przypodłogowe | mosiężne |
| Tekstylia | zasłony w kolorze lnu, hamaki aerial w kolorze piaskowym |
| Rośliny | monstera, figowiec, kosze wiklinowe |
| Stroje zespołu | kremowe bluzy oversize + czarne legginsy (spójny „uniform") |

Wniosek: to **nie** jest beżowe, pastelowe studio jogi. To ciepły minimalizm z industrialnym
kontrapunktem: beton + czerń + dąb + mosiądz. Strona ma to odwzorować, a nie „ocieplić" do
generycznego beżu, przed którym ostrzega §26 briefu.

---

## 2. Paleta

### Kolor marki
| Token | Hex | Skąd |
|---|---|---|
| `--clay` | `#DA9787` | tło logo 2 — **dosłownie z pliku**, próbka jednolita na całej powierzchni |
| `--clay-deep` | `#8F4C3B` | pociemniony clay do tekstu i obramowań (patrz kontrasty) |
| `--clay-wash` | `#F1DED7` | rozbielony clay na delikatne tła sekcji |

Terakota / przygaszony róż. To jedyny mocny kolor marki i ma zostać jedyny — §26 zabrania
przypisywania osobnych kolorów każdej formie zajęć.

### Neutralne (z wnętrz i logo 1)
| Token | Hex | Skąd |
|---|---|---|
| `--bone` | `#F7F4EB` | kremowe bluzy zespołu — główne tło strony (nie czysta biel) |
| `--sand` | `#E8DED0` | ściana w świetle / hamaki — tło sekcji przemiennych |
| `--oak` | `#C2A98F` | podłoga jodełka — akcenty, ramki, linie |
| `--concrete` | `#B9B9BB` | ściana betonowa i tło logo 1 (`#DADADA`) |
| `--stone` | `#665D54` | tekst drugorzędny |
| `--espresso` | `#2E2621` | tekst główny, stopka, sufit industrialny |

### Akcent pomocniczy
| Token | Hex | Skąd |
|---|---|---|
| `--brass` | `#A8875C` | ramy luster i listwy — **bardzo oszczędnie**, cienkie linie, nie wypełnienia |

Mosiądz jest w obu wnętrzach i daje „premium" bez wchodzenia w zakazane czerń+złoto (§26),
bo występuje tylko jako 1px linia / detal, nigdy jako powierzchnia czy gradient.

### Odrzucone świadomie
- lawenda z legginsów instruktorki (`#B09CA7`) — ładna, ale to przypadek jednego stroju,
  a nie kolor marki; wpuszczona do palety zsunęłaby całość w generyczny pastelowy wellness,
- czysta biel `#FFFFFF` jako tło — §26 wprost każe użyć ciepłego jasnego tła,
- jakikolwiek gradient.

---

## 3. Kontrasty — zmierzone na żywym DOM

| Kombinacja | Ratio | Werdykt |
|---|---|---|
| `--espresso` na `--bone` | 13.5:1 | AAA |
| `--clay` na `--bone` (tekst) | 2.1:1 | **NIE używać na tekst** — tylko powierzchnie |
| biel na `--clay` | 2.4:1 | **odpada** — klasyczna pułapka „białe na pastelu" |
| `--espresso` na `--clay` | 6.2:1 | AA ✔ **— tak robimy główne CTA** |
| `--stone` na `--sand` | 4.85:1 | AA ✔ (po korekcie) |
| `--clay-deep` na `--sand` | 4.84:1 | AA ✔ (po korekcie) — najniższa para w serwisie |

### Korekta z 03.08.2026

Pierwotne wartości `--stone` i `--clay-deep` wzięte wprost z materiałów przechodziły AA
na `--bone`, ale **oblewały na `--sand`** — 4,42:1 i 4,45:1 przy progu 4,5. Wyszło to
dopiero przy audycie wszystkich par tekst/tło na wyrenderowanej stronie, nie przy liczeniu
wybranych kombinacji na kartce. Oba tokeny zostały przyciemnione o kilka procent.

**Wniosek na przyszłość:** paletę trzeba walidować przeciw *każdemu* tłu sekcji,
a nie tylko przeciw domyślnemu.

**Decyzja:** przycisk „Umów wizytę" = tło `--clay`, tekst `--espresso`.
Nietypowe (wszyscy robią białe na kolorze), zgodne z ciepłym charakterem marki i przechodzi AA.
Wariant na ciemnym tle: `--clay-deep` + `--bone`.

---

## 4. Typografia

Brief §27 zabraniał zestawu Inter + Playfair Display. Zestaw dobieramy pod logo.

**Rozstrzygnięte 03.08.2026 — empirycznie, nie z pamięci.**

Przetestowano sześciu kandydatów pod kątem podzbioru `latin-ext` (liczba plików woff2
w paczkach Fontsource) i realnego pokrycia polskich glifów w przeglądarce
(`document.fonts.check` + porównanie szerokości znaku z fallbackiem):

| Krój | latin-ext | Werdykt |
|---|---|---|
| **Tenor Sans** | ✔ | **display** — wybrany, komplet `ą ć ę ł ń ó ś ź ż` |
| Julius Sans One | ✔ | zapasowy kandydat display |
| Italiana | ✘ (0 plików) | **odrzucony** — tylko Latin basic, polskie znaki lecą na fallback |
| **Figtree** | ✔ (14 wag) | **tekst** — wybrany, komplet polskich znaków |
| Karla | ✔ | alternatywa dla tekstu |
| Cormorant | ✔ | nieużywany (serif) |

Ostrzeżenie z pierwotnego briefu okazało się zasadne: Italiana wyglądała najbliżej wordmarku,
ale nie ma polskich znaków i odpadła.

Zasady: H1 duży, rozstrzelony (`--ls-display: 0.06em`, jak w logo), wersaliki tylko w eyebrow.
Maks. dwie rodziny, żadnej kursywy dekoracyjnej, długość linii 60–70 znaków.

---

## 5. Kierunek kompozycji

Zgodnie z §25 briefu — **„editorial movement studio"**, ale sprecyzowany pod te konkretne zdjęcia:

- duże, pełnoszerokościowe kadry wnętrz; zdjęcia zespołu są pionowe (3:4) — layout musi
  to uszanować, nie kadrować ich na siłę do panoram,
- rytm sekcji nierówny: pełny obraz → wąska kolumna tekstu → dwie kolumny → pas cytatu,
  zamiast ciągu identycznych kart (§50),
- podpisy pod zdjęciami jak w magazynie: małe wersaliki, `--stone`,
- linie działowe 1px w `--oak`/`--brass` zamiast cieni i ramek,
- symbol-kropla jako jedyny element dekoracyjny.

### Animacje
Zgodnie z §32: wejścia 300–500 ms, `ease-out`, tylko `opacity` + `translateY(12px)`,
wyzwalane w viewport, pełne `prefers-reduced-motion`. Zero parallaxu na mobile,
zero scroll-jackingu, zero animacji per-litera.

---

## 6. Zdjęcia — co mamy i jak użyć

| Plik | Jakość | Przeznaczenie |
|---|---|---|
| `logo 1.jpg` | wektor do odtworzenia | logo na jasnym tle — **potrzebne SVG** |
| `logo 2.jpg` | wektor do odtworzenia | logo w wersji odwróconej na clay |
| `charakterystyczny symbol.jpg` | JPG 1080×1350, zdjęcie przygaszone | wzorzec użycia symbolu; sam symbol do odrysowania w SVG |
| `zeespol 2.jpg` | 1423×1897, dobre | **hero** lub sekcja „Dwa studia" — pokazuje aerial, beton, mosiądz, cały zespół |
| `zespół.jpg` | 1536×2048, dobre | sekcja „Zespół" / „O nas" — ciepłe, nieformalne, autentyczne |
| `instruktora aeral jooga.jpg` | 1440×1920, dobre | karta instruktorki / strona zajęć aerial yoga |

### Czego brakuje (blokuje publikację)
- logo w **SVG** (mam tylko JPG — do wektoryzacji lub od klientki),
- zdjęcia **wnętrza Pruszcza Gdańskiego** — na razie nie wiadomo, które zdjęcie to które studio,
- zdjęcia **wejść do obu lokali** (§16.1 — kluczowe dla „gdzie wejść"),
- zdjęcia zajęć: joga, pilates, stretching, barre (mamy tylko aerial),
- **zgody osób** widocznych na zdjęciach zespołu.

Do czasu dostarczenia — sekcje bez materiału nie dostają zdjęć stockowych ani AI (§50).
Zamiast tego: kompozycja typograficzna na `--sand` + symbol marki, oznaczona w kodzie
komentarzem `<!-- ASSET PENDING -->`.
