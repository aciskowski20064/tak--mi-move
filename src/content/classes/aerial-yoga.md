---
name: Aerial yoga
# Druga, potoczna nazwa formy ruchu — stoi pod tytułem w nagłówku.
subtitle: 'Joga w hamaku'
order: 4
# Pierwsze zdanie wprowadzenia z ciała tego pliku, przepisane bez zmian.
# Nie renderuje się na tej podstronie: idzie na kafel na /zajecia, na kafel
# na stronie głównej i do opisu dla wyszukiwarek. Przy każdej zmianie wstępu
# trzeba je tu przenieść ręcznie — kolekcja nie czyta ciała pliku do pola.
shortDescription: 'Praktyka, podczas której wykorzystywany jest, podwieszony do sufitu, hamak. Łączy klasyczną jogę z elementami stretchingu i akrobatyki'
# FAKT: poziom i czas trwania odczytane z grafiku Fitssey 21.08.2026.
# Żadne z tych trzech pól nie jest renderowane — zostają jako dane.
level: 'Wszystkie poziomy'
duration: '55 minut'
intensity: medium
locationSlugs: ['gdansk', 'pruszcz-gdanski']
draft: false
# ——— TREŚĆ OD KLIENTKI ———
# Sekcje poniżej i całe ciało pliku pochodzą wprost z materiałów klientki,
# przepisane bez skracania i bez parafrazy. Nasze wcześniejsze opisy
# (`audience`, `goals`, `equipment`, `contraindicationsNote`) zostały
# USUNIĘTE, a nie odłożone obok. Zniknął też znacznik `preparation` z
# `TODO(klientka)` — klientka przysłała własny opis przygotowania i blok
# nie czeka już na treść.
#
# JEDYNA KOREKTA W TEKŚCIE: w „Jak się przygotować?" dopisana kropka
# i spacja po „(nie na ramiączkach)", brakujące w oryginale. Sens bez zmian,
# nic poza tym nie ruszone.
#
# CIAŁO PLIKU (pod frontmatterem) to WPROWADZENIE pod tytułem — żadna sekcja
# nie sięga po nie przez `fromBody`. Bez `introColumns`: to jedno zdanie,
# więc zostaje w jednej kolumnie.
sections:
  # Trzy akapity: pierwszy prowadzi na pełnej szerokości, dwa kolejne stoją
  # obok siebie. Nieparzysta liczba akapitów sama uruchamia ten układ.
  - label: 'Czego się spodziewać'
    variant: prose-grid
    text: |
      Hamak przejmuje część obciążeń, które na macie mogą być odczuwalne bardziej dotkliwie. Dzięki temu pozwala robić np. pozycje odwrócone bez napięć w karku czy wygięcia bez obciążania nadgarstków.

      Pierwsze zajęcia to głównie oswajanie się z hamakiem — jak w nim usiąść, jak przenieść ciężar, gdzie chwycić. Tkanina jest mocniejsza, niż wygląda, ale zaufanie do niej przychodzi dopiero po kilku pozycjach.

      Wysokość hamaka ustawia się indywidualnie, a każdą pozycję poprzedza pokaz i asekuracja. Nie musisz mieć doświadczenia w jodze na macie.
  # Lekki, otwarty blok na kremowym tle strony — bez tła, ramki i paska.
  # Wyróżnienie niesie sam znak `check` (ten, który przy układzie domyślnym
  # stoi przy „Jak się przygotować") i oddech wokół sekcji.
  - label: 'Jak się przygotować?'
    variant: plain
    icon: check
    text: >-
      W hamaku należy praktykować w długich, przylegających spodniach (np.
      legginsy) i koszulce z rękawkiem (nie na ramiączkach). Należy zdjąć
      biżuterię i sprawdzić, czy strój nie ma wystających zamków lub ozdób.
  # Ten sam lekki rząd co „Dla kogo" na stretchingu, tylko z czterema
  # pozycjami: symbol marki nad wyśrodkowanym tekstem, pionowe kreski
  # między kolumnami, bez tła i bez ramki.
  - label: 'Dla kogo'
    variant: features
    items:
      # Spacje w nawiasie są TWARDE (U+00A0) — wtrącenie ma się nie łamać
      # między wierszami. Same słowa i interpunkcja bez zmian.
      - 'Osoby, które chcą odciążyć kręgosłup po całym dniu (np. spędzonym na siedząco)'
      - 'Osoby szukające czegoś innego niż ćwiczenia na macie'
      - 'Osoby, które chcą spróbować pozycji odwróconych bez obciążania karku'
      - 'Osoby, którym zależy na odciążeniu stawów'
  # Pięć pozycji, więc ostatnia stoi sama w lewej kolumnie.
  - label: 'Efekty'
    variant: audience-grid
    items:
      - 'Dekompresja kręgosłupa w zwisie'
      - 'Otwarcie klatki piersiowej i barków'
      - 'Siła i stabilizacja wymuszona pracą z niestabilnym podparciem'
      - 'Poczucie lekkości'
      - 'Endorfiny wywołane przez skojarzenia z dziecięcą zabawą'
  # Bez `width` — uwagi biorą cały wiersz, a moduł grafiku schodzi pod nie.
  - label: 'Zdrowie i przeciwwskazania'
    variant: note
    text: >-
      Jaskra i inne choroby oczu, nadciśnienie, problemy kardiologiczne,
      świeże operacje, ciąża i zaburzenia błędnika wymagają wcześniejszej
      konsultacji z lekarzem. Uprzedź prowadzącą przed zajęciami.
---

Aerial yoga to praktyka z wykorzystaniem hamaka przymocowanego do sufitu.
