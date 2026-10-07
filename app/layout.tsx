import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Sans, Newsreader } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobilBuchungsleiste } from "@/components/MobilBuchungsleiste";
import { JsonLd } from "@/components/JsonLd";
import { praxis, sprechzeitenStrukturiert } from "@/content/praxis";
import { behandlungsgebiete, untersuchungen } from "@/content/neurologie";
import { istVorschau, openGraphBasis, praxisJsonLd, twitterBasis } from "@/lib/seo";
import { startseiteBeschreibung, startseiteTitel } from "@/content/seo";
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
    default: startseiteTitel,
    template: `%s | ${praxis.kurzname}`,
  },
  description: startseiteBeschreibung,
  openGraph: openGraphBasis,
  twitter: twitterBasis,
  robots: istVorschau ? { index: false, follow: false } : { index: true, follow: true },
};

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
        <JsonLd
          daten={praxisJsonLd({
            schwerpunkte: behandlungsgebiete.map((k) => k.titel),
            untersuchungen: untersuchungen.map((k) => k.titel),
            sprechzeiten: sprechzeitenStrukturiert,
          })}
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
