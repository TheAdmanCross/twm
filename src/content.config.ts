import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const settings = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/settings" }),
  schema: z.any()
});

const testimonials = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/testimonials" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    quote: z.string(),
    result: z.string()
  })
});

export const collections = {
  settings,
  testimonials
};
