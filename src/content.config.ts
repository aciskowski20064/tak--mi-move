import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
// `z` z 'astro:content' jest w Astro 7 wycofane — oficjalny następca to 'astro/zod'.
import { z } from 'astro/zod';

/**
 * Kolekcje treści. Wszystko, co nie jest potwierdzone przez klientkę,
 * jest polem opcjonalnym — brak danych oznacza pominiętą sekcję,
 * nigdy wypełniacz (brief §0 pkt 3, §50).
 *
 * `draft: true` trzyma wpis poza buildem produkcyjnym.
 */

const studioEnum = z.enum(['gdansk', 'pruszcz-gdanski']);

const faqItem = z.object({
  question: z.string(),
  answer: z.string(),
});

const classes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/classes' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      order: z.number().default(99),
      shortDescription: z.string(),
      audience: z.array(z.string()).optional(),
      goals: z.array(z.string()).optional(),
      intensity: z.enum(['low', 'medium', 'high', 'varied']).optional(),
      level: z.string().optional(),
      duration: z.string().optional(),
      equipment: z.array(z.string()).optional(),
      preparation: z.array(z.string()).optional(),
      contraindicationsNote: z.string().optional(),
      locationSlugs: z.array(studioEnum),
      instructorSlugs: z.array(z.string()).optional(),
      fitsseyCategoryId: z.string().optional(),
      heroImage: image().optional(),
      heroImageAlt: z.string().optional(),
      faq: z.array(faqItem).optional(),
      seoTitle: z.string().optional(),
      seoDescription: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

const faq = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faq' }),
  schema: z.object({
    question: z.string(),
    order: z.number().default(99),
    scope: z.union([studioEnum, z.literal('all')]).default('all'),
    /** Odpowiedź zatwierdzona przez właścicielkę — inaczej nie renderujemy. */
    approved: z.boolean().default(false),
  }),
});

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reviews' }),
  schema: z.object({
    author: z.string(),
    source: z.enum(['google', 'facebook', 'direct']),
    sourceUrl: z.url().optional(),
    /** Opinia bez zgody i bez źródła nie idzie na stronę (brief §12.10). */
    consent: z.boolean().default(false),
    locationSlug: studioEnum.optional(),
    order: z.number().default(99),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishedAt: z.date(),
      updatedAt: z.date().optional(),
      /** Autor artykułu musi być wskazany (brief §22.3). */
      author: z.string(),
      category: z.string(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      relatedClassSlugs: z.array(z.string()).optional(),
      /** Zastrzeżenie przy treściach zdrowotnych. */
      healthDisclaimer: z.boolean().default(false),
      draft: z.boolean().default(true),
    }),
});

export const collections = { classes, faq, reviews, blog };
