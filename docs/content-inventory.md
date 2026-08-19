# TAK MI MOVE — inwentarz treści (Etap 0)

Wynik audytu materiałów wg §52 briefu. Statusy: **GOTOWE** / **DO WERYFIKACJI** / **BRAK** / **TYMCZASOWE**.
Nic oznaczonego BRAK lub DO WERYFIKACJI nie trafia na stronę produkcyjną jako fakt.

---

## 1. Rozbieżności między dwoma briefami

Oba dokumenty mają datę 03.08.2026 i miejscami się rozjeżdżają. Wymaga rozstrzygnięcia:

| # | Temat | Brief „projektowy" | Brief „analiza" | Rekomendacja |
|---|---|---|---|---|
| 1 | Mapa strony | `/oferta`, `/grafik-zajec`, `/lokalizacje`, `/umow-wizyte` | `/zajecia`, `/grafik`, `/studia`, `/pierwsza-wizyta`, dokumenty prawne | **Analiza** — krótsze URL-e, ma `/pierwsza-wizyta` (wysoka konwersja) i strony prawne |
| 2 | Stack | Astro + Tailwind | „framework React + TypeScript" | Do decyzji — patrz §5 tego pliku |
| 3 | E-mail | dwa: `takmimove@gmail.com`, `takmimovegdansk@gmail.com` | jeden, do potwierdzenia | Potwierdzić u klientki, który obsługuje którą lokalizację |
| 4 | Kod pocztowy Gdańsk | brak | `80-756` | Potwierdzić (potrzebne do schema `LocalBusiness`) |
| 5 | Rok założenia | 2022 | nie podaje | **Nie publikować** bez potwierdzenia |
| 6 | Zakres oferty | 5 form | 5 form + ~10 dodatkowych (ciąża, mamy, personalne, kursy, wynajem) | Analiza ma rację: uporządkować z klientką, nie wystawiać archiwalnych usług jako aktualnych |
| 7 | Hasło marki | „Siła • Spokój • Równowaga" jako claim marki | te słowa tylko w słowniku zalecanym | Potwierdzić, czy to oficjalny claim |
| 8 | Blog | opcja płatna 1500–2500 zł | architektura od razu, CMS później | Zgodne — budujemy model danych, CMS dopiero po decyzji |
| 9 | Cel CTA | zawsze `target="_blank"` | pytanie otwarte do klientki | Domyślnie nowa karta (Fitssey to osobna aplikacja), do potwierdzenia |
| 10 | Właścicielka | Katarzyna Zawadzka | nie nazywa | Nie publikować nazwiska bez zgody |

---

## 2. Fakty potwierdzone dwukrotnie (można używać)

| Dana | Wartość |
|---|---|
| Nazwa | TAK MI MOVE (wersalikami, wg logo; podpis „STUDIO") |
| Branża | butikowe studio zdrowego ruchu, dwie lokalizacje |
| Adres Pruszcz Gdański | ul. Grunwaldzka 55/7, 83-000 Pruszcz Gdański |
| Adres Gdańsk | ul. Angielska Grobla 35/47, Gdańsk |
| Telefon | 507 444 640 (wspólny dla obu lokalizacji) |
| System rezerwacji | Fitssey — `https://app.fitssey.com/Takmimove/frontoffice` |
| IG Pruszcz | `instagram.com/tak_mi_move` |
| IG Gdańsk | `instagram.com/tak_mi_move_gdansk` |
| FB Pruszcz | `facebook.com/takmimove` |
| FB Gdańsk | `facebook.com/profile.php?id=61576011456827` |
| Trzon oferty | joga, pilates, stretching, aerial yoga, barre |

---

## 3. Materiały wizualne

| Pozycja | Status | Uwagi |
|---|---|---|
| Logo — podgląd | **GOTOWE** (JPG) | dwie wersje: na jasnym i na terakocie |
| Logo — SVG | **BRAK** | blokuje ostry render w headerze i favicon; alternatywa: odrysowanie wektorowe po naszej stronie |
| Symbol marki (kropla) | **GOTOWE** jako podgląd, SVG **BRAK** | kluczowy element systemu wizualnego — odrysowanie priorytetowe |
| Zdjęcie zespołu (6 osób, wnętrze jasne) | **GOTOWE** | 1536×2048 |
| Zdjęcie zespołu (4 osoby, wnętrze betonowe + aerial) | **GOTOWE** | 1423×1897, najmocniejszy kadr — kandydat na hero |
| Portret instruktorki (aerial) | **GOTOWE** | 1440×1920 |
| Które zdjęcie = które studio | **DO WERYFIKACJI** | krytyczne: strony lokalizacji nie mogą pokazywać wnętrza drugiego studia |
| Wnętrza Pruszcz Gdański | **BRAK** | |
| Wejścia do obu lokali, otoczenie, parking | **BRAK** | §16.1 wymaga |
| Zajęcia: joga, pilates, stretching, barre | **BRAK** | mamy tylko aerial |
| Zgody osób ze zdjęć | **BRAK** | blokuje publikację |
| Wideo hero | **BRAK** | opcjonalne (§28) |

---

## 4. Treści

| Pozycja | Status | Uwagi |
|---|---|---|
| Historia marki | **BRAK** | §17: nie wolno wymyślać |
| Manifest / obietnica marki | **BRAK** | |
| Zespół: imiona, role, specjalizacje, bio | **BRAK** | na zdjęciach 6 osób, żadna nienazwana |
| Kwalifikacje instruktorek | **BRAK** | §50 zakazuje dopisywania certyfikatów |
| Opinie + źródło + zgoda | **BRAK** | sekcja opinii zostaje pusta do czasu dostarczenia |
| Cennik | **TYMCZASOWE** | 50 / 70 / 240 / 420 / 640 zł — dane orientacyjne z Fitssey, **nie hardkodować**; docelowo widżet cennika albo jedno źródło danych + „aktualny cennik w systemie rezerwacji" |
| Karnet w obu lokalizacjach? | **DO WERYFIKACJI** | pytanie z FAQ, wprost wymienione w §12.13 |
| Karty sportowe (Multisport itp.) | **DO WERYFIKACJI** | |
| Maty i sprzęt na miejscu | **DO WERYFIKACJI** | |
| Szatnie, prysznice | **DO WERYFIKACJI** | |
| Zasady odwoływania rezerwacji, listy rezerwowe | **BRAK** | wymagane na `/pierwsza-wizyta` i `/grafik` |
| Wejście od ul. Kossaka (Pruszcz) | **DO WERYFIKACJI** | |
| Parking i dojazd — obie lokalizacje | **BRAK** | |
| Godziny otwarcia | **BRAK** | wymagane do schema `LocalBusiness` |

---

## 5. Techniczne i formalne

| Pozycja | Status | Uwagi |
|---|---|---|
| Kod bazowy Fitssey + widżet grafiku | **BRAK — ale nie blokuje** | sprawdzone 03.08.2026: Fitssey **pozwala na osadzenie w ramce** (brak odmowy `X-Frame-Options`), więc `/grafik` działa już teraz na iframe. Natywny widżet potrzebny wyłącznie do filtrowania po lokalizacji i dopasowania stylów |
| ID lokalizacji w Fitssey (filtr) | **BRAK** | decyduje, czy przełącznik Gdańsk/Pruszcz w ogóle zadziała |
| Możliwość custom CSS w widżecie | **DO WERYFIKACJI** | |
| NIP, pełna nazwa działalności | **BRAK** | wymagane w stopce i schema |
| Google Business Profile — obie lokalizacje | **DO WERYFIKACJI** | źródło opinii i spójności NAP |
| Domena | **BRAK** | kto rejestruje, kto ma dostęp |
| Hosting | do ustalenia | Vercel zgodnie z dotychczasowym stackiem |
| Polityka prywatności, cookies, regulamin | **BRAK** | teksty do zatwierdzenia przez klientkę, nie generujemy jako porady prawnej |
| Konto Analytics / Search Console | **BRAK** | |
| Wersja angielska | **DO WERYFIKACJI** | §61 pyt. 21 |

---

## 6. Blokery ostrej krytyczności

Bez tych pięciu rzeczy strona nie może pójść na produkcję:

1. **Kod widżetu Fitssey** (albo świadoma decyzja o pozostaniu przy iframe).
2. **Logo w SVG** (albo zgoda na naszą wektoryzację).
3. **Przypisanie zdjęć do lokalizacji** + zdjęcia drugiego studia.
4. **Zgody osób** na zdjęciach.
5. **Dane firmowe** (NIP, nazwa, godziny) do stopki i danych strukturalnych.

Reszta braków da się obejść na etapie budowy — sekcje powstają puste, oznaczone w kodzie,
z realną strukturą gotową na podmianę treści.

---

## 7. Czego świadomie NIE robimy

- nie wymyślamy imion instruktorek, opinii, liczby klientek, lat doświadczenia, certyfikatów,
- nie wystawiamy licznika obserwujących z Instagrama jako social proof (dane zmienne),
- nie wpisujemy cen na sztywno w komponenty,
- nie budujemy własnego systemu rezerwacji ani nie kopiujemy grafiku z Fitssey,
- nie używamy zdjęć stockowych ani AI jako materiału finalnego.
