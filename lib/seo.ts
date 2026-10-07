import type { Metadata } from "next";
import { googleMapsUrl, praxis } from "@/content/praxis";

/**
 * Vorschau-Deployments auf Vercel (Branches, Pull Requests) sollen nicht in
 * Suchmaschinen landen. VERCEL_ENV ist beim Build auf Vercel gesetzt; lokal
 * fehlt die Variable, dann gilt die Seite als normal indexierbar.
 */
export const istVorschau = Boolean(process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production");

/** Feste Kennung der Praxis in den strukturierten Daten, damit Unterseiten darauf verweisen können. */
export const praxisId = `${praxis.domain}/#praxis`;

/**
 * Gemeinsame Open-Graph-Angaben. Next.js ersetzt `openGraph` einer Seite komplett
 * (auch das Vorschaubild aus app/opengraph-image.tsx), deshalb hier gebündelt.
 */
export const openGraphBasis = {
  type: "website",
  locale: "de_DE",
  siteName: praxis.name,
  images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${praxis.kurzname}, ${praxis.arzt}` }],
};

/** Großes Vorschaubild auch für X (Twitter), gleiches Bild wie bei Open Graph. */
export const twitterBasis = { card: "summary_large_image" as const, images: ["/opengraph-image"] };

/**
 * Metadaten einer Unterseite: Titel, Beschreibung, kanonische Adresse und
 * passende Angaben für das Teilen in sozialen Netzwerken und Messengern.
 */
export function seitenMetadaten(
  { titel, beschreibung }: { titel: string; beschreibung: string },
  pfad: string,
): Metadata {
  return {
    title: titel,
    description: beschreibung,
    alternates: { canonical: pfad },
    openGraph: { ...openGraphBasis, title: titel, description: beschreibung, url: pfad },
    twitter: { ...twitterBasis, title: titel, description: beschreibung },
  };
}

/** Arztpraxis als schema.org-Objekt für die lokale Suche. */
export function praxisJsonLd({
  schwerpunkte,
  untersuchungen,
  sprechzeiten,
}: {
  schwerpunkte: string[];
  untersuchungen: string[];
  sprechzeiten: { tage: string[]; von: string; bis: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": praxisId,
    name: praxis.name,
    url: praxis.domain,
    logo: `${praxis.domain}/logo-kopf.png`,
    image: `${praxis.domain}${praxis.foto.src}`,
    medicalSpecialty: "Neurologic",
    ...(praxis.telefon ? { telephone: praxis.telefon } : {}),
    ...(praxis.email ? { email: praxis.email } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: praxis.strasse,
      postalCode: praxis.plz,
      addressLocality: praxis.ort,
      addressRegion: "Berlin",
      addressCountry: "DE",
    },
    hasMap: googleMapsUrl,
    sameAs: [praxis.doctolib],
    employee: { "@type": "Person", name: praxis.arzt, jobTitle: praxis.fachrichtung },
    openingHoursSpecification: sprechzeiten.map((z) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: z.tage,
      opens: z.von,
      closes: z.bis,
    })),
    knowsAbout: schwerpunkte,
    availableService: untersuchungen.map((name) => ({ "@type": "DiagnosticProcedure", name })),
  };
}

/** Brotkrumen-Pfad Startseite › Unterseite für Google. */
export function brotkrumenJsonLd(name: string, pfad: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: praxis.domain },
      { "@type": "ListItem", position: 2, name, item: `${praxis.domain}${pfad}` },
    ],
  };
}

/** Medizinische Informationsseite, herausgegeben von der Praxis. */
export function medizinischeSeiteJsonLd({
  name,
  beschreibung,
  pfad,
  thema,
}: {
  name: string;
  beschreibung: string;
  pfad: string;
  thema: object | object[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name,
    description: beschreibung,
    url: `${praxis.domain}${pfad}`,
    inLanguage: "de-DE",
    about: thema,
    publisher: { "@id": praxisId },
  };
}
