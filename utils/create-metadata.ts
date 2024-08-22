import type { Metadata } from "next/types";
import { siteConfig } from "./constants";

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: siteConfig.url,
      images: "/banner.png",
      siteName: "Radiological Students' Association of Pakistan (RSAP)",
      ...override.openGraph,
    },
    twitter: {
      card: "summary_large_image",

      creator: "@radsapakistan",
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: "/banner.png",

      ...override.twitter,
    },
  };
}
