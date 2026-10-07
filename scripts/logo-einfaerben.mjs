// Färbt ein einfarbiges Logo mit Transparenz in eine andere Farbe um.
//
// Aufruf: node scripts/logo-einfaerben.mjs <eingabe.png> <ausgabe.png> <#farbe>
// Beispiel: node scripts/logo-einfaerben.mjs public/logo-kopf.png public/logo-kopf-petrol.png "#0f4f4b"
//
// Alle Pixel bekommen die Zielfarbe, die Transparenz bleibt unverändert. Das funktioniert,
// weil das Kopf-Logo eine einfarbige Fläche ist und die Baumlinien durchsichtig sind.

import sharp from "sharp";

const [eingabe, ausgabe, farbe] = process.argv.slice(2);
if (!eingabe || !ausgabe || !/^#[0-9a-f]{6}$/i.test(farbe ?? "")) {
  console.error('Aufruf: node scripts/logo-einfaerben.mjs <eingabe.png> <ausgabe.png> "#rrggbb"');
  process.exit(1);
}

const [r, g, b] = [1, 3, 5].map((i) => parseInt(farbe.slice(i, i + 2), 16));
const { data, info } = await sharp(eingabe).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
for (let i = 0; i < data.length; i += 4) {
  data[i] = r;
  data[i + 1] = g;
  data[i + 2] = b;
}
await sharp(data, { raw: info }).png({ compressionLevel: 9 }).toFile(ausgabe);
console.log(`${ausgabe}: ${info.width} × ${info.height} px in ${farbe}`);
