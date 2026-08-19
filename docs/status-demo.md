# TAK MI MOVE — status wersji poglądowej

Dokument do rozmowy z klientką. Stan na 03.08.2026.

---

## Co działa i można pokazać

**17 podstron**, wszystkie z osobnym tytułem i opisem, wszystkie linki prowadzą
do istniejących stron.

| Sekcja | Adres |
|---|---|
| Strona główna | `/` |
| Grafik i zapisy (system Fitssey osadzony na stronie) | `/grafik` |
| Zajęcia + 5 podstron dyscyplin | `/zajecia`, `/zajecia/joga` … |
| Studia + 2 podstrony lokalizacji | `/studia`, `/studia/gdansk`, `/studia/pruszcz-gdanski` |
| Pierwsza wizyta | `/pierwsza-wizyta` |
| O nas | `/o-nas` |
| Kontakt | `/kontakt` |
| Dokumenty prawne (szkielety) | `/polityka-prywatnosci`, `/polityka-cookies` |
| Strona błędu | `/404` |

Do tego: identyfikacja wyprowadzona z logo (kolory, symbol jako element
systemu wizualnego) i obrazek podglądu przy udostępnianiu linku.

**Miejsca bez treści są oznaczone.** W wersji poglądowej każde brakujące pole
pokazuje ramkę „Do uzupełnienia” z informacją, co dokładnie ma się tam znaleźć.
Dzięki temu widać pełny układ strony i jednocześnie konkretną listę braków.
Po przełączeniu `DEMO_MODE = false` wszystkie te ramki znikają razem ze stylami
— na produkcję nie trafi ani jeden placeholder.

---

## Co jest robocze i wymaga akceptacji

Te teksty napisałem sam, żeby strona nie miała dziur. Opisują **dyscypliny**,
a nie fakty o marce — żadnych zmyślonych nazwisk, opinii, statystyk ani historii.
Wszystkie do zmiany jednym plikiem.

| Element | Gdzie edytować |
|---|---|
| Hasło w nagłówku strony głównej | `src/data/copy/home.ts` → `hero.title` |
| Opisy 5 dyscyplin + przeciwwskazania | `src/content/classes/*.md` |
| Rekomendacje „nie wiesz, co wybrać?” | `src/data/copy/home.ts` → `choose.scenarios` |
| 5 pytań i odpowiedzi FAQ | `src/content/faq/*.md` |
| Teksty podstron | `src/data/copy/pages.ts` |

**FAQ wymaga osobnego przejrzenia.** Pięć pytań działa jako przykład układu.
Odpowiedź „Co zabrać na pierwsze zajęcia” jest **celowo niepełna** — brakuje
w niej najważniejszego, czyli czy studio zapewnia maty i sprzęt. Odpowiedź
o podziale zajęć między studia opiera się na opisach profili w mediach
społecznościowych, więc mogła się zdezaktualizować.

Opisy obu studiów, przebieg pierwszej wizyty i sekcja „O nas” zostały
**celowo puste** — to procedury i historia konkretnej marki, których nie da się
wywieść z briefu. Widnieją tam ramki „Do uzupełnienia”.

**Uwaga do treści zdrowotnych:** przy każdej dyscyplinie jest nota
o przeciwwskazaniach odsyłająca do lekarza lub fizjoterapeuty. Przy aerial yodze
wypisałem je szczegółowo (pozycje odwrócone, jaskra, nadciśnienie, ciąża).
To celowe — powinien to przejrzeć ktoś z zespołu.

---

## Czego potrzebuję od klientki, żeby domknąć projekt

Kolejność od najbardziej blokującego:

1. **Zdjęcia wnętrz obu studiów** — mamy trzy kadry na całą stronę, więc każdy
   pracuje dwa razy. Min. 8–10 zdjęć na lokalizację, bez ludzi na pierwszym
   planie tam, gdzie chodzi o pokazanie przestrzeni.
2. **Potwierdzenie, które studio jest na którym zdjęciu.** Kadr z betonową
   ścianą i hamakami to Pruszcz — to wiemy. Drugi (jasne wnętrze z oknami,
   jodełka, złota rama) przypisałem do Gdańska **wyłącznie na podstawie
   kolejności przekazania zdjęć**. Do potwierdzenia przed wysyłką.
3. **Dostęp do panelu Fitssey** (Studio → Integracje) — po to, żeby grafik dał
   się filtrować po lokalizacji. Dziś działa wariant awaryjny: pełny system
   osadzony w ramce, pokazujący oba studia.
4. **Zasady zapisów** — do kiedy można odwołać rezerwację, jak działają listy
   rezerwowe, czy karnet obowiązuje w obu studiach, czy są karty sportowe.
5. **Co zabrać na pierwsze zajęcia** i co zapewnia studio.
6. **Zespół** — imiona, role, bio i **pisemne zgody na publikację wizerunku**.
   Bez zgody nikt nie trafia na stronę.
7. **Opinie** — link do wizytówek Google obu lokalizacji. Bez źródła
   i zgody opinii nie publikujemy.
8. **FAQ** — odpowiedzi zatwierdzone przez właścicielkę.
9. **Dane firmowe do stopki:** pełna nazwa działalności, NIP, godziny otwarcia.
10. **Domena** — czy jest wykupiona i kto ma do niej dostęp.
11. **Kod pocztowy i skrzynka dla Gdańska** — briefy podają sprzeczne dane.
12. **Kto obsługuje formularz kontaktowy.** Formularz jest zbudowany, ale
    celowo się nie pokazuje, dopóki nie wskażemy odbiorcy — formularz, który
    po cichu gubi wiadomości, jest gorszy niż jego brak.

---

## Czego jeszcze nie ma w tej wersji

Świadomie, zgodnie z ustaloną kolejnością prac:

- **Blog** — w briefie wyceniony osobno (1500–2500 zł). Model danych gotowy,
  szablonów wpisu nie ma.
- **Dane strukturalne `LocalBusiness`** — wymagają NIP-u i godzin otwarcia.
- **Analityka i zdarzenia konwersji** — punkty pomiarowe są już w kodzie
  (`data-event`), brakuje podpiętego narzędzia.
- **Treść dokumentów prawnych** — nie podaję wygenerowanego tekstu jako
  gotowej polityki prywatności. To zadanie dla specjalisty.

---

## Zanim strona pójdzie na produkcję

W `src/data/site.ts` stoi `DEMO_MODE = true`. Dopóki tak jest:

- każda podstrona ma `noindex, nofollow`,
- `robots.txt` zabrania indeksowania,
- w źródle strony jest nota o prawach do projektu.

To zabezpieczenie, żeby wersja poglądowa nie trafiła do Google i nie
konkurowała z docelową stroną ani nie rozjechała wizytówki lokalnej.
**Przed wdrożeniem: `DEMO_MODE = false` i potwierdzona domena.**
