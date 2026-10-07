import type { MetadataRoute } from "next";
import { praxis } from "@/content/praxis";

export default function sitemap(): MetadataRoute.Sitemap {
  const jetzt = new Date();
  const seiten = [
    { pfad: "", prioritaet: 1 },
    { pfad: "/ketamintherapie", prioritaet: 0.8 },
    { pfad: "/untersuchungen", prioritaet: 0.8 },
    { pfad: "/kosten", prioritaet: 0.7 },
    { pfad: "/studien", prioritaet: 0.5 },
    { pfad: "/impressum", prioritaet: 0.2 },
    { pfad: "/datenschutz", prioritaet: 0.2 },
  ];
  return seiten.map((s) => ({
    url: `${praxis.domain}${s.pfad}`,
    lastModified: jetzt,
    changeFrequency: "monthly" as const,
    priority: s.prioritaet,
  }));
}
