import { map } from "@/.map";
import { createMDXSource, defaultSchemas } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";
import { z } from "zod";

export const news = loader({
  baseUrl: "/news",
  rootDir: "news",
  source: createMDXSource(map, {
    schema: {
      frontmatter: defaultSchemas.frontmatter.extend({
        author: z.string(),
        date: z.string().date().or(z.date()).optional(),
      }),
    },
  }),
});

export const bylaws = loader({
  baseUrl: "/bylaws",
  rootDir: "bylaws",
  source: createMDXSource(map),
});
