---
name: Yogilates
# Za barre, czyli na końcu dotychczasowej listy — klientka nie wskazała
# miejsca w kolejności.
order: 6
# Zdanie wprowadzające klientki, użyte także jako opis na kaflu i w opisie
# dla wyszukiwarek. Schemat wymaga tego pola, a żadnego osobnego, krótkiego
# opisu dla tej formy ruchu nie ma.
shortDescription: 'Praktyka łącząca klasyczne pozycje jogi z ćwiczeniami pilates w płynnych, zsynchronizowanych z oddechem, ruchach.'
# TODO(klientka): w których studiach odbywa się yogilates. Pole jest
# wymagane przez schemat i zasila WYŁĄCZNIE tytuł oraz opis dla
# wyszukiwarek — na samej podstronie lokalizacji nie pokazujemy. Do
# potwierdzenia razem z poziomem i długością zajęć z grafiku Fitssey.
locationSlugs: ['gdansk', 'pruszcz-gdanski']
draft: false
# ——— TREŚĆ OD KLIENTKI ———
# Sekcje poniżej i całe ciało pliku pochodzą wprost z materiałów klientki,
# przepisane bez skracania i bez parafrazy.
#
# ZAPIS „swiadomy oddech" ZOSTAWIONY DOSŁOWNIE, bez ogonka — tak stoi
# w materiale klientki i na tym etapie go nie poprawiamy.
#
# Czego klientka NIE przysłała dla yogilatesu i czego dlatego tu nie ma:
# ogólnej sekcji „Jak się przygotować".
#
# CIAŁO PLIKU (pod frontmatterem) to WPROWADZENIE pod tytułem — żadna sekcja
# nie sięga po nie przez `fromBody`. Bez `introColumns`: to jedno zdanie,
# więc zostaje w jednej kolumnie.
sections:
  # Jeden akapit, więc siatka zwija się do pojedynczej kolumny na pełnej
  # szerokości — bez ramki i bez znaków.
  - label: 'Czego się spodziewać'
    variant: prose-grid
    text: >-
      Sesja, kładąca duży nacisk na świadome zaangażowanie poszczególnych
      partii mięśniowych w ruch i wzmocnienie mięśni głębokich, bez
      jednoczesnej utraty płynności.
  # Trzy równe kolumny z symbolem marki nad pozycją.
  - label: 'Dla kogo'
    variant: features
    items:
      - 'Osoby chcące zadbać o kręgosłup'
      - 'Osoby chcące wzmocnić ciało bez rezygnowania z płynności ruchu'
      - 'Osoby lubiące różnokierunkowe podejście do ćwiczeń, nieograniczone jednym schematem następujących po sobie ruchów'
  # Siatka dwóch kolumn na wyróżnionej powierzchni, z kroplą marki przy
  # pozycji. Cztery pozycje, czyli pełne 2 × 2.
  - label: 'Efekty'
    variant: audience-grid
    items:
      - 'poprawa stabilizacji ciała'
      - 'zniesienie obciążeń kręgosłupa'
      - 'zwiększona świadomość i czucie własnego ciała'
      - 'swiadomy oddech'
  # Bez `width` — uwagi biorą cały wiersz, a moduł grafiku schodzi pod nie.
  - label: 'Zdrowie i przeciwwskazania'
    variant: note
    text: >-
      Duża liczba powtórzeń może obciążać stawy kolanowe i skokowe. Przy
      problemach z kolanami, świeżym urazie skonsultuj udział z lekarzem lub
      fizjoterapeutą. Uprzedź prowadzącą przed zajęciami, aby mogła dobrać
      odpowiednie warianty pozycji.
---

Praktyka łącząca klasyczne pozycje jogi z ćwiczeniami pilates w płynnych, zsynchronizowanych z oddechem, ruchach.
