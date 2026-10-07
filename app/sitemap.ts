import type { MetadataRoute } from "next";
import { praxis } from "@/content/praxis";

/**
 * Indexierbare Seiten mit dem Datum der letzten inhaltlichen Änderung.
 * Bei Textänderungen auf einer Seite das Datum hier mit anpassen.
 * Impressum und Datenschutz fehlen bewusst, sie stehen auf noindex.
 */
const seiten: { pfad: string; geaendert: string }[] = [
  { pfad: "", geaendert: "2026-10-07" },
  { pfad: "/untersuchungen", geaendert: "2026-10-07" },
  { pfad: "/ketamintherapie", geaendert: "2026-10-07" },
  { pfad: "/kosten", geaendert: "2026-10-07" },
  { pfad: "/studien", geaendert: "2026-10-07" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return seiten.map((s) => ({
    url: `${praxis.domain}${s.pfad}`,
    lastModified: s.geaendert,
  }));
}
