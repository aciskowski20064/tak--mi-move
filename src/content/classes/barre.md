---
name: Barre
order: 5
# Pierwsze zdanie wprowadzenia z ciała tego pliku, przepisane bez zmian.
# Nie renderuje się na tej podstronie: idzie na kafel na /zajecia, na kafel
# na stronie głównej i do opisu dla wyszukiwarek. Przy każdej zmianie wstępu
# trzeba je tu przenieść ręcznie — kolekcja nie czyta ciała pliku do pola.
shortDescription: 'Trening przy drążku będący wyjątkowym połączeniem precyzji pilatesu, elegancji baletu i dynamiki treningu funkcjonalnego.'
# FAKT: poziom i czas trwania odczytane z grafiku Fitssey 21.08.2026.
# Żadne z tych trzech pól nie jest renderowane — zostają jako dane.
level: 'Początkujący'
duration: '55 minut'
intensity: high
locationSlugs: ['pruszcz-gdanski', 'gdansk']
draft: false
# ——— TREŚĆ OD KLIENTKI ———
# Sekcje poniżej i całe ciało pliku pochodzą wprost z materiałów klientki,
# przepisane bez skracania i bez parafrazy. Nasze wcześniejsze opisy
# (`audience`, `goals`, `preparation`, `equipment`, `contraindicationsNote`)
# zostały USUNIĘTE, a nie odłożone obok — mieszanka starego z nowym byłaby
# tu gorsza niż brak.
#
# Czego klientka NIE przysłała dla barre i czego dlatego tu nie ma:
# ogólnej sekcji „Jak się przygotować".
#
# CIAŁO PLIKU (pod frontmatterem) to WPROWADZENIE pod tytułem — żadna sekcja
# nie sięga po nie przez `fromBody`. Bez `introColumns`: to jedno zdanie,
# więc zostaje w jednej kolumnie.
sections:
  # Dwa równorzędne akapity obok siebie, rozdzielone włoskowatą kreską.
  # Bez ramki i bez znaków. Na telefonie jedna kolumna.
  - label: 'Czego się spodziewać'
    variant: prose-grid
    text: |
      Regularna praktyka pozwala wzmocnić ciało, poprawić postawę, poczuć się silniejszym i pełnym energii, a przy tym odkryć przyjemność płynącą z harmonijnego i pełnego gracji ruchu.

      Muzyka sprawia, że ćwiczy się niezwykle przyjemnie i płynnie, jednak niepozorne ruchy w dużej liczbie powtórzeń sprawiają, że jest to dość intensywny trening.
  # Trzy równe kolumny z symbolem marki nad pozycją.
  - label: 'Dla kogo'
    variant: features
    items:
      - 'Osoby, które chcą wyraźnie popracować nad siłą nóg i pośladków'
      - 'Osoby lubiące ruch w rytm muzyki'
      - 'Osoby, którym joga i stretching to za mało intensywności'
  # Siatka dwóch kolumn na wyróżnionej powierzchni, z kroplą marki przy
  # pozycji. Cztery pozycje, czyli pełne 2 × 2.
  - label: 'Efekty'
    variant: audience-grid
    items:
      - 'Wytrzymałość siłowa nóg, pośladków i brzucha'
      - 'Postawa i lekkość ruchu wyniesione z baletu'
      - 'Praca nad mięśniami posturalnymi bez obciążania stawów'
      - 'Zwiększone spalanie kalorii'
  # Bez `width` — uwagi biorą cały wiersz, a moduł grafiku schodzi pod nie.
  - label: 'Zdrowie i przeciwwskazania'
    variant: note
    text: >-
      Duża liczba powtórzeń może obciążać stawy kolanowe i skokowe. Przy
      problemach z kolanami, świeżym urazie skonsultuj udział z lekarzem lub
      fizjoterapeutą. Uprzedź prowadzącą przed zajęciami, aby mogła dobrać
      odpowiednie warianty pozycji.
---

Trening przy drążku będący wyjątkowym połączeniem precyzji pilatesu, elegancji baletu i dynamiki treningu funkcjonalnego.
