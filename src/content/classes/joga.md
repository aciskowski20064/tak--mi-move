---
name: Joga
order: 1
# Pierwsze zdanie wprowadzenia z ciała tego pliku, przepisane bez zmian.
# Nie renderuje się na tej podstronie: idzie na kafel na /zajecia, na kafel
# na stronie głównej i do opisu dla wyszukiwarek. Przy każdej zmianie wstępu
# trzeba je tu przenieść ręcznie — kolekcja nie czyta ciała pliku do pola.
shortDescription: 'Praktyka łącząca asany - pracę z ciałem, pranayamę - oddech i pratyaharę - uważność na to, co w środku.'
# FAKT: poziom i czas trwania odczytane z grafiku Fitssey 21.08.2026.
# W grafiku jest też jeden wariant oznaczony jako średni („Joga poziom open").
# Żadne z tych trzech pól nie jest renderowane — zostają jako dane.
level: 'Wszystkie poziomy'
duration: '55 minut'
intensity: varied
locationSlugs: ['gdansk', 'pruszcz-gdanski']
draft: false
# Wprowadzenie w dwóch kolumnach na szerokim ekranie — cztery akapity
# z ciała pliku dzielą się po dwa. Na telefonie wracają do jednej kolumny
# w kolejności z pliku.
introColumns: true
# ——— TREŚĆ OD KLIENTKI (03.09.2026) ———
# Sekcje poniżej i całe ciało pliku pochodzą wprost z materiałów klientki,
# przepisane bez skracania i bez parafrazy. Nasze wcześniejsze opisy
# (`audience`, `goals`, `preparation`, `equipment`, `contraindicationsNote`)
# zostały USUNIĘTE, a nie odłożone obok — mieszanka starego z nowym byłaby
# tu gorsza niż brak.
#
# Czego klientka NIE przysłała dla jogi i czego dlatego tu nie ma:
# sekcji „Efekty" ani ogólnej sekcji „Jak się przygotować".
#
# CIAŁO PLIKU (pod frontmatterem) to WPROWADZENIE pod tytułem — żadna sekcja
# nie sięga po nie przez `fromBody`, więc szablon renderuje je jako prozę bez
# nagłówka i bez ramki. Podział na akapity odwzorowuje wiersze z materiału
# klientki, słowo w słowo.
#
# Odsyłacz do Fitssey zapisany surowym HTML-em, nie składnią markdown:
# Fitssey to osobna aplikacja z logowaniem i w całym serwisie otwiera się
# w nowej karcie (`booking.newTab`), a markdown nie ustawi `target`.
# Widoczna treść „aplikacji Fitssey" pozostaje bez zmian.
#
# ADRES POWTÓRZONY: to jedyne miejsce w projekcie, gdzie adres FrontOffice
# stoi wpisany wprost, a nie przez `booking.frontOfficeUrl` z `site.ts` —
# pliki treści nie mają jak zaimportować stałej. Przy zmianie adresu Fitssey
# trzeba poprawić TAKŻE ten plik.
#
# Komentarze stoją tutaj, a nie pod frontmatterem: YAML-owe zostają w źródle,
# a `<!-- -->` w ciele pliku jedzie do przeglądarki z każdym wejściem.
#
# UKŁAD (dopracowany 03.09.2026, treść bez zmian od 03.09.2026):
# dwie krótkie sekcje prozy obok siebie (nierówny podział 5/7 z 12 kolumn —
# druga ma więcej tekstu, patrz `width` w `content.config.ts`), moduł
# rekomendacji na pełnej szerokości, blok zdrowotny na końcu.
sections:
  # Krótka proza na pełnej szerokości, bez ramki — jedno zdanie pod
  # nagłówkiem, kompaktowo.
  - label: 'Czego się spodziewać'
    variant: plain
    text: >-
      Ciało odzyskuje naturalne zakresy ruchu lub je poszerza. Głowa dostaje
      czas w skupieniu i bez rozproszeń.
  # Wyróżnienie jasnym tłem marki i terakotowym paskiem — bez zaokrągleń
  # i bez obwódki.
  - label: 'Nie musisz być rozciągnięta'
    variant: panel
    text: >-
      To najczęstsze nieporozumienie wokół jogi. Rozciągnięcie nie jest
      warunkiem wejścia — jest jednym z możliwych skutków regularnej praktyki.
      Każdą pozycję da się wykonać w wersji łatwiejszej, z podparciem albo
      w mniejszym zakresie, i tak właśnie zaczyna większość osób.
  # Moduł rekomendacji: wiersze „potrzeba → polecane zajęcia", nie wyliczanka
  # zdań ze myślnikiem w środku. `label` i `recommendation` przypisane ręcznie
  # z materiału klientki — myślnik w jej tekście oddziela dwie części
  # ZNACZENIOWO, ale to samo dziesiątki innych zdań w serwisie ma myślnik
  # WEWNĄTRZ siebie, więc podział nie może być automatyczny po znaku.
  # Widoczne słowa są dokładnie te same, które stały w dawnej wyliczance —
  # zmienił się układ (wiersze zamiast zdań), nie treść.
  - label: 'Które zajęcia wybrać?'
    variant: pairs
    pairs:
      - label: 'Osoby, które chcą zacząć spokojnie i bez presji'
        recommendation: 'Joga dla początkujących, joga relaksacyjna, yin joga'
      - label: 'Osoby pracujące przy biurku, z napiętym karkiem i barkami'
        recommendation: 'joga dla kręgosłupa, joga dla początkujących, aerial yoga, yin yoga, joga relaksacyjna'
      - label: 'Osoby szukające ruchu, który wycisza, a nie pobudza'
        recommendation: 'yin yoga, joga relaksacyjna'
      - label: 'Osoby chcące pogłębić swoją praktykę i wejść do bardziej zaawansowanych pozycji'
        recommendation: 'vinyasa yoga, yoga open'
      - label: 'kobiety w ciąży'
        recommendation: 'Joga w ciąży, aktywna w ciąży'
  # Treść zdrowotna zamyka stronę — bez ikony i bez pudełka, samo wyróżnienie
  # terakotowym paskiem po lewej.
  # `width` poniżej pełnej szerokości ustawia uwagi OBOK modułu grafiku
  # w pasie domykającym. Pominięte (jak w pilatesie) — uwagi biorą całą
  # szerokość, a moduł grafiku schodzi pod nie.
  - label: 'Zdrowie i przeciwwskazania'
    variant: note
    width: narrow
    text: >-
      Jeśli jesteś w ciąży, wracasz po urazie albo operacji, skonsultuj udział
      z lekarzem lub fizjoterapeutą. Uprzedź prowadzącą przed zajęciami, aby
      mogła dobrać odpowiednie warianty pozycji.
---

Praktyka łącząca asany - pracę z ciałem, pranayamę - oddech i pratyaharę - uważność na to, co w środku.

Joga łączy więc to, co w codziennym zabieganiu przestaje współistnieć.

Ciało odzyskuje zakres ruchu w miejscach, które siedzenie przy biurku systematycznie skraca — biodra, klatka piersiowa, kark. Głowa dostaje godzinę bez telefonu i bez rozproszeń, co dla wielu osób okazuje się ważniejsze niż sama część fizyczna.

W Tak Mi Move oferujemy praktyki różniące się stylem i dynamiką. Każda z nich jest dokładnie opisana w <a href="https://app.fitssey.com/Takmimove/frontoffice" target="_blank" rel="noopener">aplikacji Fitssey</a>.
