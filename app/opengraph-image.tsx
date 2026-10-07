import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { praxis } from "@/content/praxis";

/*
 * Vorschaubild beim Teilen der Seite (WhatsApp, LinkedIn, Facebook usw.).
 * Wird beim Build einmal erzeugt und gilt für alle Seiten. Bewusst ohne
 * KI-Bild, weil Messenger die sichtbare KI-Kennzeichnung abschneiden könnten.
 */

export const alt = `${praxis.kurzname}, ${praxis.arzt}, ${praxis.fachrichtung} in Berlin-Tempelhof`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Vorschaubild() {
  const [serif, sans, logo] = await Promise.all([
    readFile(join(process.cwd(), "assets/schriften/newsreader-latin-400-normal.woff")),
    readFile(join(process.cwd(), "assets/schriften/ibm-plex-sans-latin-500-normal.woff")),
    readFile(join(process.cwd(), "public/logo-kopf.png")),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#fbfaf7",
          borderBottom: "18px solid #0f4f4b",
          padding: "72px 80px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 760 }}>
          <div style={{ fontFamily: "Plex", fontSize: 26, letterSpacing: 2, color: "#0f4f4b", textTransform: "uppercase" }}>
            {praxis.fachrichtung}
          </div>
          <div style={{ fontFamily: "Newsreader", fontSize: 78, lineHeight: 1.05, color: "#10302f", marginTop: 22 }}>
            {praxis.kurzname}
          </div>
          <div style={{ fontFamily: "Plex", fontSize: 34, color: "#3a504e", marginTop: 26 }}>{praxis.arzt}</div>
          <div style={{ fontFamily: "Plex", fontSize: 26, color: "#5e7270", marginTop: 40 }}>
            {`${praxis.strasse}, ${praxis.plz} ${praxis.ort}-${praxis.stadtteil}`}
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={276} height={362} alt="" />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Newsreader", data: serif, weight: 400, style: "normal" },
        { name: "Plex", data: sans, weight: 500, style: "normal" },
      ],
    },
  );
}
