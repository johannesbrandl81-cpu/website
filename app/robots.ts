import type { MetadataRoute } from "next";
import { praxis } from "@/content/praxis";
import { istVorschau } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  // Vorschau-Deployments komplett sperren, damit keine Dubletten bei Google landen.
  if (istVorschau) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${praxis.domain}/sitemap.xml`,
  };
}
