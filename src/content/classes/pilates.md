---
name: Pilates
order: 2
# Pierwsze zdanie wprowadzenia z ciała tego pliku, przepisane bez zmian.
# Nie renderuje się na tej podstronie: idzie na kafel na /zajecia, na kafel
# na stronie głównej i do opisu dla wyszukiwarek. Przy każdej zmianie wstępu
# trzeba je tu przenieść ręcznie — kolekcja nie czyta ciała pliku do pola.
shortDescription: 'Pilates to system ćwiczeń stworzony przez Josepha Pilatesa.'
# FAKT: poziom i czas trwania odczytane z grafiku Fitssey 21.08.2026.
# Żadne z tych trzech pól nie jest renderowane — zostają jako dane.
level: 'Wszystkie poziomy'
duration: '55 minut'
intensity: medium
locationSlugs: ['gdansk', 'pruszcz-gdanski']
draft: false
# Wprowadzenie w dwóch kolumnach na szerokim ekranie — pięć akapitów z ciała
# pliku dzieli się na trzy i dwa. Na telefonie wracają do jednej kolumny
# w kolejności z pliku.
introColumns: true
# ——— TREŚĆ OD KLIENTKI (03.09.2026) ———
# Sekcje poniżej i całe ciało pliku pochodzą wprost z materiałów klientki,
# przepisane bez skracania i bez parafrazy. Nasze wcześniejsze opisy
# (`audience`, `goals`, `preparation`, `equipment`, `contraindicationsNote`)
# zostały USUNIĘTE, a nie odłożone obok.
#
# Uwaga na „Dla kogo": trzy pierwsze pozycje brzmią jak dawne `audience`,
# ale przyszły w materiale klientki razem z czwartą, nową. Przepisane
# z jej listy w całości — pole `audience` mimo to znika, żeby nie było
# dwóch źródeł tej samej treści.
#
# Czego klientka NIE przysłała dla pilatesu i czego dlatego tu nie ma:
# sekcji „Efekty" ani ogólnej sekcji „Jak się przygotować".
#
# CIAŁO PLIKU (pod frontmatterem) to WPROWADZENIE pod tytułem — żadna sekcja
# nie sięga po nie przez `fromBody`, więc szablon renderuje je jako prozę bez
# nagłówka i bez ramki. Podział na akapity odwzorowuje wiersze z materiału
# klientki, słowo w słowo. Komentarze stoją tutaj, a nie pod frontmatterem:
# YAML-owe zostają w źródle, a `<!-- -->` w ciele pliku jedzie do przeglądarki.
sections:
  # Rząd trzech równych kolumn: symbol marki nad pozycją, włoskowate kreski
  # między nimi, bez ramki. Na telefonie jedna pod drugą.
  - label: 'Czego się spodziewać'
    variant: features
    items:
      - 'wzmacnianie mięśni głębokich'
      - 'poprawa postawy i elastyczności ciała'
      - 'nauka świadomego oddechu i kontroli nad ciałem'
  # Siatka 2 × 2 na jednej wyróżnionej powierzchni, z terakotowym okręgiem
  # przy każdej pozycji. Na telefonie cztery pozycje w słupku.
  - label: 'Dla kogo'
    variant: audience-grid
    items:
      - 'Osoby, które chcą wzmocnić brzuch i plecy'
      - 'Osoby z bólem krzyża wynikającym z siedzącego trybu życia'
      - 'Osoby, które wolą kontrolowany ruch od intensywnego cardio'
      - 'Osoby chcące zwiększyć świadomość swojego ciała i zbudować fundament pod intensywniejsze treningi np. z obciążeniem'
  # Treść zdrowotna zamyka stronę — bez ikony i bez pudełka, samo wyróżnienie
  # terakotowym paskiem po lewej. Tekst identyczny jak na /zajecia/joga:
  # klientka podała to samo zdanie dla obu kategorii.
  - label: 'Zdrowie i przeciwwskazania'
    variant: note
    text: >-
      Jeśli jesteś w ciąży, wracasz po urazie albo operacji, skonsultuj udział
      z lekarzem lub fizjoterapeutą. Uprzedź prowadzącą przed zajęciami, aby
      mogła dobrać odpowiednie warianty pozycji.
---

Pilates to system ćwiczeń stworzony przez Josepha Pilatesa.

Trening, pierwotnie znany jako Contrology, opiera się na ścisłej kontroli ruchów ciała.

Ćwiczenia angażują przede wszystkim mięśnie głębokie, wzmacniając i stabilizując ciało. Pozycje poprawiają postawę i kształtują sylwetkę, a także wspierają zdrowie kręgosłupa.

W Tak Mi Move pracujemy w oparciu o klasyczną metodę Pilates wzbogaconą o elementy współczesne.

Ćwiczymy na matach, wykorzystując także mały sprzęt: piłki, taśmy, krążki czy ringi.
