import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const partners = defineCollection({
  loader: file("src/data/partners.json"),
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      alt: z.string(),
      image: image(),
    }),
});

const services = defineCollection({
  loader: file("src/data/services.json"),
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      title: z.string(),
      alt: z.string(),
      image: image(),
    }),
});

const instagramFeeds = defineCollection({
  loader: file("src/data/instagramFeeds.json"),
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      image: image(),
      alt: z.string(),
    }),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = { partners, services, instagramFeeds };
