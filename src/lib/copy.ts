/**
 * Obsługa treści, których jeszcze nie mamy od klientki.
 *
 * Konwencja: każdy string wymagający danych od marki zaczyna się od `TODO(`.
 * Takie stringi NIGDY nie renderują się jako treść. W trybie deweloperskim
 * pokazuje je komponent <Todo>, w buildzie produkcyjnym znikają całkowicie —
 * dzięki temu spełniamy jednocześnie dwa wymagania: strukturę widać od razu,
 * a brief §50 („nie zostawiać placeholderów w produkcji”) zostaje dotrzymany.
 */

import { DEMO_MODE } from '~/data/site';

export const isPlaceholder = (value?: string | null): boolean =>
  !value || value.trimStart().startsWith('TODO(');

/**
 * Czy pokazywać znaczniki brakującej treści.
 *
 * W wersji poglądowej TAK — klientka ma zobaczyć, gdzie trafi jej treść
 * i co dokładnie musi dostarczyć. Po `DEMO_MODE = false` znikają wszystkie.
 */
export const showPlaceholders = import.meta.env.DEV || DEMO_MODE;

/** Zwraca tekst tylko wtedy, gdy jest realną treścią. */
export const copyOrNull = (value?: string | null): string | null =>
  isPlaceholder(value) ? null : (value as string);

/** Odfiltrowuje z listy pozycje bez realnej treści. */
export const realOnly = <T>(items: T[], pick: (item: T) => string | undefined): T[] =>
  items.filter((item) => !isPlaceholder(pick(item)));
