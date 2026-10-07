// Erzeugt Favicon (app/icon.png) und Apple-Icon (app/apple-icon.png) aus dem Logo.
//
// Aufruf: node scripts/favicon.mjs [logo.png, Standard public/logo-kopf-petrol.png]
//
// Das Logo steht auf hellem Praxisgrund (#fbfaf7), damit es auch in dunklen
// Browser-Tabs gut sichtbar ist. Das Favicon bekommt abgerundete Ecken, das
// Apple-Icon bleibt eckig und deckend (iOS rundet selbst ab und füllt Transparenz schwarz).

import sharp from "sharp";

const logo = process.argv[2] ?? "public/logo-kopf-petrol.png";
const grund = "#fbfaf7";

async function icon(groesse, ausgabe, { rund }) {
  const hoehe = Math.round(groesse * 0.8);
  const kopf = await sharp(logo).resize({ height: hoehe }).toBuffer();
  const { width: breite } = await sharp(kopf).metadata();
  // Leicht nach links versetzt, weil das Gesicht nach rechts schaut
  const links = Math.round((groesse - breite) / 2 - groesse * 0.02);
  const oben = Math.round((groesse - hoehe) / 2);
  const radius = rund ? Math.round(groesse * 0.22) : 0;
  const flaeche = Buffer.from(
    `<svg width="${groesse}" height="${groesse}"><rect width="100%" height="100%" rx="${radius}" fill="${grund}"/></svg>`,
  );
  await sharp(flaeche)
    .composite([{ input: kopf, left: links, top: oben }])
    .png({ compressionLevel: 9 })
    .toFile(ausgabe);
  console.log(`${ausgabe}: ${groesse} × ${groesse} px`);
}

await icon(192, "app/icon.png", { rund: true });
await icon(180, "app/apple-icon.png", { rund: false });
