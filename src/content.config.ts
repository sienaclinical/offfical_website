import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      category: z.enum([
        'researchers',
        'clinical-experts',
        'tech-team',
        'operating-officers',
      ]),
      order: z.number().int().nonnegative(),
      bio: z.string(),
      image: image(),
      links: z
        .array(
          z.object({
            kind: z.enum(['linkedin', 'scholar', 'github']),
            label: z.string(),
            href: z.string().url(),
          }),
        )
        .optional(),
    }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    citation: z.string(),
    year: z.number(),
    kind: z.enum(['journal', 'conference']),
    order: z.number().int().nonnegative(),
    link: z.string().url().optional(),
    published: z.boolean().default(true),
    summary: z.string().optional(),
  }),
});

const courses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/courses' }),
  schema: z.object({
    order: z.number().int().nonnegative().default(999),
    published: z.boolean().default(false),
    title: z.string(),
    titleId: z.string().default(''),
    badge: z.string().default(''),
    badgeId: z.string().default(''),
    description: z.string(),
    descriptionId: z.string().default(''),
    sections: z.array(
      z.object({
        heading: z.string(),
        items: z.array(z.string()),
      }),
    ).default([]),
    instructor: z.string().optional(),
    registerUrl: z.string().url().optional(),
    icon: z
      .string()
      .default(
        "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' class='w-6 h-6'><path d='M4 4h16v16H4z'/></svg>",
      ),
  }),
});

const blogs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blogs' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number().int().nonnegative(),
      published: z.boolean().default(true),
      description: z.array(z.string()).min(1),
      keyFindings: z.array(z.string()).optional(),
      link: z.object({
        href: z.string().url(),
        label: z.string().default('Read more'),
      }),
      image: image(),
      imageAlt: z.string(),
    }),
});

const pastEventHighlights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/past-event-highlights' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number().int().nonnegative(),
      published: z.boolean().default(true),
      image: image(),
      imageAlt: z.string(),
    }),
});

const pastEvents = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/past-events' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number().int().nonnegative(),
      published: z.boolean().default(true),
      description: z.array(z.string()).min(1),
      link: z
        .object({
          href: z.string().url(),
          label: z.string().default('Read more'),
        })
        .optional(),
      image: image(),
      imageAlt: z.string(),
    }),
});

const researchStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research-studies' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number().int().nonnegative(),
      published: z.boolean().default(true),
      description: z.string(),
      image: image(),
      imageAlt: z.string(),
      details: z.array(
        z.object({
          label: z.string(),
          value: z.string(),
        }),
      ),
    }),
});

export const collections = {
  team,
  publications,
  courses,
  blogs,
  pastEventHighlights,
  pastEvents,
  researchStudies,
};
