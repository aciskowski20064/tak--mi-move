# Audyt brandbooka — TAK MI MOVE

Źródło: `TAK MI MOVE brandbook.pdf`, 32 arkusze, autor: TOTAMTO STUDIO.
Analiza: warstwa tekstowa wyciągnięta własnym czytnikiem PDF (obiekty + strumienie
obiektów + mapy ToUnicode) oraz warstwa wektorowa wyrenderowana do SVG i obejrzana
arkusz po arkuszu. Poppler ani żadne nowe narzędzie nie było instalowane.

Branch: `brandbook-redesign`, worktree `../takmimove-brandbook`.

---

## 1. Zasady z brandbooka — wartości dosłowne

### 1.1. Warianty logotypu

Brandbook definiuje **cztery** warianty znaku plus sygnet:

| Wariant | Arkusz | Opis |
|---|---|---|
| Pionowy pełny (podstawowy) | 3 | „TAK MI / MOVE" w dwóch wierszach + łukowy dopisek „S T U D I O" |
| Pionowy skrócony | 4 | to samo bez dopisku „STUDIO" |
| Poziomy pełny | 9 | „TAK MI MOVE" w jednym wierszu + „S T U D I O" pod spodem |
| Poziomy skrócony | 10 | jeden wiersz, bez „STUDIO" |
| Sygnet | 15 | sama litera „O" ze słowa MOVE — organiczny pierścień |

Wersja pionowa pełna jest **podstawowa** (nagłówek rozdziału 1). Wersja skrócona
to wariant do zastosowań, w których dopisek byłby nieczytelny.

Negatyw (biały znak na czerni) jest osobno zdefiniowany dla każdego wariantu:
arkusze 5 (pionowy), 11 (poziomy), 16 (sygnet).

### 1.2. Minimalne rozmiary

| Element | Minimum |
|---|---|
| Logotyp pionowy pełny | 22 mm / **130 px** |
| Logotyp pionowy skrócony | 12 mm / **85 px** |
| Logotyp poziomy pełny | 46 mm / **270 px** |
| Logotyp poziomy skrócony | 25 mm / **180 px** |
| Sygnet | 4 mm / **20 px** |

### 1.3. Pola ochronne

- **Logotyp** (arkusze 8 i 14): pole standardowe `2x` z każdej strony,
  pole minimalne `x`, gdzie `x` jest modułem wyprowadzonym z konstrukcji znaku.
- **Sygnet** (arkusz 19): pole standardowe `1/2 y`, pole minimalne `1/4 y`.

### 1.4. Kolorystyka (arkusz 21)

Trzy kolory marki, podane w brandbooku w CMYK, RGB i Pantone. Wartość
szesnastkowa czytelna wprost z warstwy tekstowej: **`#8FABA1`**.

| Rola w brandbooku | Hex | Uwaga |
|---|---|---|
| Róż / terakota | `#DA9788` | w warstwie wektorowej `#D99687` — różnica wynika z zaokrąglenia liczb zmiennoprzecinkowych w operatorze `rg`, wartość docelowa to podana wyżej |
| Zieleń (szałwia) | `#8FABA1` | w wektorze `#8EAAA0`, to samo zaokrąglenie |
| Szarość jasna | `#DADADA` | zgodna w tekście i w wektorze |
| Czerń | `#000000` | kolor znaku i typografii |

**Brandbook nie zawiera koloru kremowego.** Jego neutralem jest biel i `#DADADA`.

### 1.5. Znak na apli kolorystycznej (arkusz 22)

Zasada dosłowna z brandbooka:

1. Na apli **różowej** — znak w **negatywie** (biały).
2. Na apli **zielonej** — dozwolony znak **w czerni i w negatywie**.
3. Na apli **szarej** — znak **w czerni**.

### 1.6. Typografia

- **Podstawowa: Tenor Sans** (arkusz 24). Krój występuje w brandbooku wyłącznie
  jako Regular — nie ma odmiany pogrubionej.
- **Zastępcza: Georgia** — Regular, Bold, Italic (arkusz 25), do stosowania
  wyłącznie tam, gdzie nie ma możliwości użycia typografii podstawowej.

Silka i Comic Sans MS obecne w pliku należą do składu samego brandbooka
i do przykładów niedozwolonych — nie są krojami marki.

### 1.7. Motyw graficzny (arkusze 27–29)

Motyw to **organiczny, wypełniony kształt wyprowadzony z sygnetu** — nie kwiat,
nie liść. Arkusz 27 pokazuje go obok sygnetu: po lewej oficjalny sygnet
(czarny pierścień), po prawej ta sama sylwetka jako pełna plama w szałwii.

Dwa dozwolone zastosowania:

- **6.2 — jako apla kolorystyczna** (arkusz 28): kilka plam w różu i szałwii,
  w różnych rozmiarach i obrotach, częściowo wychodzących poza kadr, jako tło
  kompozycji z tekstem.
- **6.3 — jako maska zdjęcia** (arkusz 29): sylwetka motywu przycina fotografię.

### 1.8. Niedozwolone zastosowania znaku (arkusz 31)

Dziewięć przykładów. Odczytane z warstwy wektorowej: przebarwianie znaku
(m.in. na szałwię), pogrubianie, zmiana proporcji, rozciąganie, obracanie,
zmiana odstępów w konstrukcji, kontur zamiast wypełnienia, gradient,
znak na niespokojnym tle.

### 1.9. Sygnet a motyw — rozróżnienie

To są **dwa różne elementy** i brandbook trzyma je osobno:

| | Sygnet | Motyw graficzny |
|---|---|---|
| Czym jest | oficjalna część znaku, litera „O" z MOVE | dekoracyjna pochodna sygnetu |
| Postać | pierścień z prześwitem | pełna, zamknięta plama |
| Kolory | **wyłącznie czerń albo biel** | dowolny kolor marki: róż, szałwia, szarość |
| Zasady | pole ochronne `1/2 y`, minimum 20 px | brak pola ochronnego, swoboda skali i obrotu |
| Rola | znak marki | tło, apla, maska zdjęcia |

Kolorowanie **sygnetu** na róż czy szałwię jest niedozwolone (arkusz 31).
Kolorowanie **motywu** jest wprost przewidziane (arkusz 28).

---

## 2. Różnice: brandbook a obecna strona

### 2.1. Kolory

| Token dziś | Wartość | Ocena |
|---|---|---|
| `--clay` | `#da9787` | róż marki z dokładnością do 1 jednostki — do skorygowania na `#DA9788` |
| `--sage` | `#90aba2` | szałwia z dokładnością do 1–2 jednostek — do skorygowania na `#8FABA1` |
| `--grey` | `#dadada` | zgodny, ale **bez ani jednego użycia w kodzie** |
| `--ink` | `#232927` | zieleń przyciemniona do 15% jasności. **To nie jest czerń marki.** |
| `--bone` | `#f7f4eb` | krem spoza brandbooka — zostaje, patrz §5 |
| `--sand` | `#e8ded0` | beż ze zdjęć wnętrz, spoza palety |
| `--oak` | `#c2a98f` | brąz podłogi ze zdjęć — nosi wszystkie linie w serwisie |
| `--stone` | `#665d54` | brązowa szarość — nosi cały tekst drugorzędny |
| `--brass` | `#a8875c` | mosiądz ram luster — linie detalu |
| `--clay-deep` | `#8f4c3b` | terakota przyciemniona do 40% jasności — tekst akcentowany |
| `--clay-wash` | `#f1ded7` | terakota rozcieńczona — powierzchnie paneli |

Siedem kolorów interfejsu pochodzi ze zdjęć wnętrz albo z przeliczeń, nie
z brandbooka. Trzy z nich (`--oak`, `--stone`, `--brass`) to brązy.

### 2.2. Typografia

Strona używa **Figtree** jako kroju tekstowego i **Tenor Sans** wyłącznie
do nagłówków. Brandbook nie zna Figtree i wskazuje Tenor Sans jako typografię
podstawową **całej** komunikacji. Figtree ma też odmianę 500, używaną
w przyciskach i akcentach — brandbook nie przewiduje pogrubień.

### 2.3. Logotyp

`Logo.astro` renderuje **PNG odzyskany z JPG-a** przez wyliczenie kanału alfa
z luminancji (komentarz w pliku wprost nazywa to materiałem tymczasowym).
Jest tylko jeden wariant — wordmark bez dopisku „STUDIO", czyli odpowiednik
wersji skróconej. Brandbookowych wariantów pionowego pełnego, poziomego
pełnego i poziomego skróconego strona nie ma.

### 2.4. Sygnet

`Mark.astro` renderuje ścieżki **obrysowane programowo** z rastra
(Moore-neighbor tracing + RDP + Catmull-Rom, zgodność 93,5% IoU deklarowana
w komentarzu). To rekonstrukcja, nie oryginał. Sygnet bywa też kolorowany
na `--accent` (róż) i `--accent-strong`, co arkusz 31 wprost wyklucza.

### 2.5. Motyw graficzny

Strona nie ma motywu brandbookowego w ogóle. Zamiast niego ma
`ornament-kwiat.png` i `ornament-lisc.png` — ilustracje kwiatu i liścia
z nowszych materiałów social media, w kolorach spoza palety (`#d29c8c`,
`#94aca1`, `#dbb16d`).

---

## 3. Planowane zmiany

1. **Tokeny kolorów** — trzy kolory marki w wartościach z brandbooka, czerń
   jako kolor tekstu, krem jako tło (patrz §5). Brązy i pochodne terakoty
   usunięte, ich role przejmują czerń, szarość marki i przezroczystości czerni.
2. **Typografia** — Tenor Sans dla całego serwisu, Georgia jako jedyny fallback,
   Figtree usunięty razem z odmianą 500. Hierarchia budowana rozmiarem
   i światłem, nie grubością.
3. **Logotyp** — cztery warianty jako SVG wyciągnięte z wektorów brandbooka,
   dobierane do miejsca; PNG z JPG-a odchodzą.
4. **Sygnet** — oryginalna ścieżka z brandbooka zamiast rekonstrukcji,
   wyłącznie w czerni albo bieli.
5. **Motyw graficzny** — sylwetka z arkusza 27, jako apla i jako maska kadru,
   oszczędnie. Kwiat i liść znikają.
6. **Komponenty** — ujednolicone promienie, separatory, stany hover i focus
   na kolorach marki.

---

## 4. Czego nie da się wdrożyć dokładnie

1. **Pola ochronne w konstrukcji znaku.** Brandbook definiuje `x` i `y` jako
   moduły geometrii znaku, ale nie podaje ich wartości liczbowej. Odtworzone
   proporcjonalnie z bryły logotypu — zgodne co do proporcji, niekoniecznie
   co do modułu autora.
2. **Pantone.** Brandbook podaje odpowiedniki Pantone; na ekranie nie mają
   zastosowania i zostały pominięte.
3. **Pełny zestaw plików źródłowych.** Z dostarczonych EPS-ów został na dysku
   tylko `tak_mi_move_logo_negatywowe.eps`. Pozostałe warianty zostały
   wyciągnięte **jako wektor z samego PDF-a brandbooka** — to nadal krzywe
   Béziera autora, nie przerysowanie i nie rasteryzacja. Wizualnie identyczne
   ze znakiem w brandbooku.
4. **Fotografie w maskach.** Arkusz 29 pokazuje maskowanie na zdjęciach
   z sesji, których w projekcie nie ma w tych kadrach. Maska została
   zastosowana do zdjęć, którymi dysponujemy.
5. **Biel znaku na apli różowej a kontrast tekstu.** Brandbook nakazuje znak
   w negatywie na różu. Biały tekst na `#DA9788` daje 2,4:1 i nie przechodzi
   WCAG AA. Rozstrzygnięcie: **znak** na różowej apli jest biały zgodnie
   z brandbookiem, ale **etykiety przycisków** na różu zostają czarne
   (6,2:1). Zasada 4.2 dotyczy znaku, nie tekstu użytkowego, a dostępność
   była wymagana wprost.
6. **Tekst akcentowany.** Róż `#DA9788` na kremie daje 2,2:1 i nie nadaje się
   na tekst. Brandbook nie przewiduje przyciemnionej odmiany różu, a jej
   dorobienie byłoby „kolorem udającym oficjalną paletę". Tekst akcentowany
   przechodzi więc na czerń z podkreśleniem; róż zostaje kolorem powierzchni
   i wypełnień CTA.

---

## 5. Krem — świadome odstępstwo

Brandbook nie zawiera koloru kremowego. Jego neutralem jest biel i `#DADADA`.

Klientka wskazała jednak, że **krem z nowszych materiałów social media ma
pozostać głównym tłem strony**. Zachowujemy więc dotychczasową wartość
`#f7f4eb` bez zmiany odcienia i traktujemy ją jako **rozszerzenie nowszej
identyfikacji**, a nie jako kolor brandbookowy.

Konsekwencje:

- krem nie zastępuje bieli w tych miejscach, gdzie brandbook wymaga apli
  białej (negatyw znaku),
- krem nie jest opisany jako kolor marki w tokenach — ma własną notatkę,
- nowego odcienia kremu nie wymyślamy; pochodne `--sand` i `--clay-wash`
  znikają, bo były wyliczane z kremu i mnożyły niepotwierdzone wartości.

---

## 6. Mapowanie ról kolorów

| Rola | Przed | Po | Uzasadnienie |
|---|---|---|---|
| tło strony | `--bone` | `--bone` bez zmian | decyzja klientki, §5 |
| tekst główny | `#232927` | `#000000` | czerń marki |
| tekst drugorzędny | `#665d54` (brąz) | czerń 62% na kremie | brak brązów, ten sam ton co tekst |
| linie | `--oak` 45% (brąz) | `#DADADA` | szarość marki |
| linie mocne | `--oak` (brąz) | czerń 22% | ta sama rodzina co tekst |
| linia detalu | `--brass` (mosiądz) | usunięta | poza paletą |
| akcent / CTA | `--clay` | `#DA9788` | róż marki |
| tekst akcentowany | `--clay-deep` (brąz-czerwień) | czerń + podkreślenie | §4 pkt 6 |
| powierzchnia miękka | `--clay-wash` | róż 14% na kremie | pochodna róża marki, nie osobny odcień |
| powierzchnia alternatywna | `--sand` (beż) | `#DADADA` 40% | szarość marki |
| stopka | `--sage` | `#8FABA1` | szałwia marki |
| znak na różu | — | biel | brandbook 4.2 |
| znak na szałwii | — | czerń | brandbook 4.2 |
| znak na szarości i kremie | — | czerń | brandbook 4.2 |
