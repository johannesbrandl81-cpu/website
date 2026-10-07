import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Sans, Newsreader } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobilBuchungsleiste } from "@/components/MobilBuchungsleiste";
import { praxis, sprechzeitenStrukturiert } from "@/content/praxis";
import { behandlungsgebiete, untersuchungen } from "@/content/neurologie";
import "./globals.css";

/*
 * Die Schriften werden beim Build heruntergeladen und von der eigenen Domain
 * ausgeliefert. Beim Seitenaufruf entsteht keine Verbindung zu Google.
 */
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--schrift-serif",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--schrift-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(praxis.domain),
  title: {
    default: `${praxis.kurzname} | ${praxis.arzt}, Neurologe in Berlin`,
    template: `%s | ${praxis.kurzname}`,
  },
  description:
    "Neurologische Praxis in Berlin-Tempelhof. Dr. med. Johannes Brandl, Facharzt für Neurologie. Gesetzlich und privat Versicherte sowie Selbstzahlende. Termine online über Doctolib.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: praxis.name,
  },
  robots: { index: true, follow: true },
};

/** Strukturierte Daten für die lokale Suche. */
function arztpraxisJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: praxis.name,
    url: praxis.domain,
    medicalSpecialty: "Neurologic",
    ...(praxis.telefon ? { telephone: praxis.telefon } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: praxis.strasse,
      postalCode: praxis.plz,
      addressLocality: praxis.ort,
      addressCountry: "DE",
    },
    employee: { "@type": "Person", name: praxis.arzt, jobTitle: praxis.fachrichtung },
    image: `${praxis.domain}${praxis.foto.src}`,
    openingHoursSpecification: sprechzeitenStrukturiert.map((z) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: z.tage,
      opens: z.von,
      closes: z.bis,
    })),
    availableService: [...behandlungsgebiete, ...untersuchungen].map((k) => ({ "@type": "MedicalProcedure", name: k.titel })),
  };
}

const farbvarianteSkript = `(function(){try{var p=new URLSearchParams(location.search).get("farbe");if(p==="braun"||p==="petrol"){sessionStorage.setItem("farbe",p)}if(sessionStorage.getItem("farbe")==="braun"){document.documentElement.setAttribute("data-farbe","braun")}}catch(e){}})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" className={`${newsreader.variable} ${plexSans.variable}`} suppressHydrationWarning>
      <head>
        {/* VORÜBERGEHEND: Farbvergleich für Dr. Brandl. ?farbe=braun aktiviert die braune Variante
            für die ganze Sitzung, ?farbe=petrol schaltet zurück. Nach der Entscheidung entfernen. */}
        <script dangerouslySetInnerHTML={{ __html: farbvarianteSkript }} />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(arztpraxisJsonLd()) }}
        />
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        >
          Zum Inhalt springen
        </a>
        <Header />
        <main id="inhalt">{children}</main>
        <Footer />
        <MobilBuchungsleiste />
      </body>
    </html>
  );
}
