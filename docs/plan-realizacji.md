# TAK MI MOVE — plan realizacji

**Stack:** Astro + TypeScript + tokeny CSS (bez Tailwinda — paleta i skale są własne, Tailwind
dokładałby warstwę konfiguracji bez zysku przy 2 fontach i 8 kolorach).
**Fitssey:** fallback iframe w oprawie marki, komponent-wrapper gotowy na podmianę na natywny widżet.
**Hosting docelowy:** Vercel.

---

## 1. Routing (wg briefu-analizy, §11)

```
/                          strona główna
/zajecia                   przegląd + pomoc w wyborze
/zajecia/joga
/zajecia/pilates
/zajecia/stretching
/zajecia/aerial-yoga
/zajecia/barre
/grafik                    widżet/iframe Fitssey + przełącznik lokalizacji + FAQ
/cennik                    sekcja informacyjna, ceny NIE hardkodowane
/studia                    rozdroże dwóch lokalizacji
/studia/gdansk
/studia/pruszcz-gdanski
/o-nas                     manifest, historia, wartości, zespół
/pierwsza-wizyta           najwyżej konwertująca podstrona dla początkujących
/kontakt
/blog                      struktura gotowa, publikacja po decyzji klientki
/blog/[slug]
/polityka-prywatnosci
/polityka-cookies
```

Nawigacja główna: Zajęcia · Grafik i zapisy · Studia · O nas · Kontakt + wyróżnione **Umów wizytę**.

---

## 2. Struktura projektu

```
src/
├── components/
│   ├── layout/     Header, Nav, MobileMenu, Footer, SkipLink
│   ├── sections/   Hero, StudiosSplit, ClassesEditorial, ChooseHelp,
│   │               FirstVisitSteps, Atmosphere, Team, Reviews, Faq, FinalCta
│   ├── ui/         Button, Mark (symbol-kropla), Figure, Caption, Rule, Accordion
│   ├── fitssey/    ScheduleEmbed, LocationSwitch, FitsseyFallback
│   ├── blog/       PostCard, PostList, Prose
│   └── seo/        Meta, SchemaOrganization, SchemaLocalBusiness, SchemaFaq, Breadcrumbs
├── content/        classes/ locations/ team/ faq/ blog/   (Astro content collections + zod)
├── data/           site.ts (NAP, socjale, CTA), nav.ts
├── layouts/        Base, Page, Article
├── pages/
├── styles/         tokens.css, base.css, typography.css
└── types/
```

**Zasada:** jedno źródło prawdy. Adresy, telefon, maile, linki społecznościowe i URL Fitssey
żyją wyłącznie w `src/data/site.ts`. Zero powtórzonego NAP w JSX — inaczej rozjedzie się
ze schema i z Google Business Profile.

---

## 3. Model danych

Wg §38–39 briefu, z jedną zmianą: pola bez potwierdzonych danych są **opcjonalne w schemacie
zod i pomijane w renderze**, zamiast dostawać wartości domyślne. Sekcja bez danych po prostu
się nie pokazuje — to gwarantuje, że nic zmyślonego nie wejdzie na produkcję.

---

## 4. Etapy

| Etap | Zakres | Rezultat |
|---|---|---|
| **1. Fundament** ✅ | projekt Astro, `tokens.css` z paletą z materiałów, weryfikacja polskich znaków w fontach display, wektoryzacja logo i symbolu do SVG, Base layout, Header ze sticky CTA, Footer, komponenty UI | **zrobione 03.08.2026** — build zielony, 0 błędów / 0 hintów |
| **2. Strona główna** ✅ | 11 sekcji w kolejności z §54, mobile sprawdzany po każdej sekcji (nie na końcu) | **zrobione 03.08.2026** — wszystkie 20 par tekst/tło przechodzi AA, produkcja bez placeholderów |
| **3. Podstrony** ✅ | `/grafik` → `/studia/*` → `/zajecia/*` → `/pierwsza-wizyta` → `/o-nas` → `/kontakt` + dokumenty prawne | **zrobione 03.08.2026** — 11 stron w produkcji, 0 zepsutych linków, 0 placeholderów |
| **4. Blog** | kolekcja treści, szablon listy i wpisu, RSS; CMS dopiero po decyzji kto publikuje | architektura gotowa, zero wpisów |
| **5. SEO i analityka** | unikalne meta, `LocalBusiness` ×2, `Organization`, `FAQPage`, breadcrumbs, sitemap, robots, OG/Twitter, eventy `booking_cta_click` itd. | strona indeksowalna |
| **6. QA** | 320 / 375 / 390 / 430 / 768 / 1024 / 1280 / 1440, a11y, build produkcyjny, konsola, wszystkie linki | gotowe do wdrożenia |

Etapy 1–3 idą teraz. 4–6 po dostarczeniu brakujących treści.

---

## 5. Decyzje do zatwierdzenia przed kodowaniem

1. **Mapa strony** wg briefu-analizy (powyżej) — zatwierdzam tę wersję, nie tę z briefu projektowego.
2. **Wektoryzacja logo i symbolu po naszej stronie** — mam tylko JPG. Odrysuję w SVG,
   klientka potwierdza zgodność przed publikacją. Alternatywa: czekamy na plik źródłowy.
3. **Fonty** — finalna para po teście polskich znaków. Do odrzucenia każdy krój display,
   który nie ma kompletu `ą ć ę ł ń ó ś ź ż`.
4. **Hasło hero** — §12.2 zabrania wyboru bez konsultacji z właścicielką. Na czas budowy
   wchodzi jeden kierunek oznaczony w kodzie jako roboczy, do podmiany po rozmowie.
5. **Zdjęcie hero** — `zeespol 2.jpg` (beton + aerial + zespół) to najmocniejszy kadr,
   ale najpierw musi być jasne, które to studio.

---

## 6. Ryzyka

| Ryzyko | Skala | Reakcja |
|---|---|---|
| Brak zdjęć drugiego studia | wysoka | strony lokalizacji gotowe strukturalnie, kadry puste z oznaczeniem; **nie** wypełniamy zdjęciami tego drugiego |
| Iframe Fitssey psuje CWV `/grafik` | średnia | `loading="lazy"`, izolacja na jedną podstronę, własna treść indeksowalna wokół (§34) |
| Iframe nie da się filtrować per lokalizacja | średnia | przełącznik degraduje się do dwóch linków z parametrem; komunikat zamiast martwego przycisku |
| Brak zgód na zdjęcia zespołu | wysoka | sekcja Zespół nie idzie na produkcję bez zgód |
| Klientka nie dostarczy treści | wysoka | strona kompletna technicznie, publikacja wstrzymana — zgodnie z §0 pkt 9 |
