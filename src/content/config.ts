import { defineCollection, z } from "astro:content";

const project = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.string().optional(),
    heroImg: z.string().optional(),
    techStack: z.array(z.array(z.string())),
    pubDate: z
      .string()
      .or(z.date())
      .transform((val: string | number | Date) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str: string | number | Date) => (str ? new Date(str) : undefined)),
  }),
});

export const collections = { project };
