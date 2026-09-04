---
name: Stretching
order: 3
# Pierwsze zdanie wprowadzenia z ciała tego pliku, przepisane bez zmian.
# Nie renderuje się na tej podstronie: idzie na kafel na /zajecia, na kafel
# na stronie głównej i do opisu dla wyszukiwarek. Przy każdej zmianie wstępu
# trzeba je tu przenieść ręcznie — kolekcja nie czyta ciała pliku do pola.
shortDescription: 'Wielokierunkowa praca nad zakresem ruchu korzystająca ze zróżnicowanych technik i metod rozciągania.'
# FAKT: poziom i czas trwania odczytane z grafiku Fitssey 21.08.2026.
# Żadne z tych trzech pól nie jest renderowane — zostają jako dane.
level: 'Początkujący'
duration: '55 minut'
intensity: low
locationSlugs: ['gdansk', 'pruszcz-gdanski']
draft: false
# ——— TREŚĆ OD KLIENTKI ———
# Sekcje poniżej i całe ciało pliku pochodzą wprost z materiałów klientki,
# przepisane bez skracania i bez parafrazy. Nasze wcześniejsze opisy
# (`audience`, `goals`, `preparation`, `equipment`, `contraindicationsNote`)
# zostały USUNIĘTE, a nie odłożone obok — mieszanka starego z nowym byłaby
# tu gorsza niż brak.
#
# Czego klientka NIE przysłała dla stretchingu i czego dlatego tu nie ma:
# ogólnej sekcji „Jak się przygotować".
#
# CIAŁO PLIKU (pod frontmatterem) to WPROWADZENIE pod tytułem — żadna sekcja
# nie sięga po nie przez `fromBody`, więc szablon renderuje je jako prozę bez
# nagłówka i bez ramki. Bez `introColumns`: to jedno zdanie, więc zostaje
# w jednej kolumnie.
sections:
  # Cztery równorzędne akapity w siatce 2 × 2, rozdzielone włoskowatymi
  # kreskami. Bez ramki i bez znaków — w jednym słupku czytały się jak jeden
  # długi blok.
  - label: 'Czego się spodziewać'
    variant: prose-grid
    text: |
      Zajęcia łączą różne techniki stretchingu – aktywny, pasywny, statyczny i dynamiczny – które wspierają poprawę elastyczności, zwiększenie zakresów ruchu i mobilności.

      Trening uwzględnia pracę z oddechem i układem nerwowym, pomagając w redukcji napięć.

      Dodatkowo wzmacniane są mięśnie, aby bezpiecznie budować i zwiększać zakresy ruchu.

      Dzięki holistycznemu podejściu zajęcia pomagają w osiągnięciu lepszej świadomości ciała, mobilności, a także znacząco poprawiają samopoczucie.
  # Trzy równe kolumny z symbolem marki nad pozycją — ten sam wariant,
  # który na pilatesie niesie „Czego się spodziewać".
  - label: 'Dla kogo'
    variant: features
    items:
      - 'Osoby, które czują sztywność w ciele'
      - 'Osoby biegające, jeżdżące na rowerze i trenujące siłowo'
      - 'Osoby dążące do zwiększenia zakresów ciała lub wykonania konkretnych pozycji jak np. mostek czy szpagat'
  # Siatka dwóch kolumn na wyróżnionej powierzchni, z kroplą marki przy
  # pozycji — ten sam wariant, który na pilatesie niesie „Dla kogo".
  # Pięć pozycji, więc ostatnia stoi sama w lewej kolumnie.
  - label: 'Efekty'
    variant: audience-grid
    items:
      - 'Większy zakres ruchu w biodrach'
      - 'Poprawa mobilności'
      - 'Aktywna praca w powiększających się zakresach ruchu'
      - 'Rozluźnienie miejsc, które trzymają napięcie'
      - 'Mniejsze ryzyko przeciążeń w innych aktywnościach'
  # Bez `width` — uwagi biorą cały wiersz, a moduł grafiku schodzi pod nie.
  - label: 'Zdrowie i przeciwwskazania'
    variant: note
    text: >-
      Jeśli jesteś w ciąży, wracasz po urazie albo operacji, skonsultuj udział
      z lekarzem lub fizjoterapeutą. Uprzedź prowadzącą przed zajęciami, aby
      mogła dobrać odpowiednie warianty pozycji.
---

Wielokierunkowa praca nad zakresem ruchu korzystająca ze zróżnicowanych technik i metod rozciągania.
