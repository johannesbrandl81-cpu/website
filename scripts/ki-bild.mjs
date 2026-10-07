// Bereitet ein KI-generiertes Bild für die Website auf und kennzeichnet es maschinenlesbar.
//
// Aufruf: node scripts/ki-bild.mjs <eingabe> <ausgabe.jpg> "<Beschreibung>" [Breite, Standard 1200]
// Beispiel: node scripts/ki-bild.mjs ~/narkolepsie.jpg public/bilder/studien/narkolepsie.jpg "Person, die tagsüber einschläft"
//
// - verkleinert auf 1200 px Breite (oder die angegebene), JPEG-Qualität 80
// - schreibt XMP-Metadaten nach IPTC: DigitalSourceType = trainedAlgorithmicMedia
//   (Standard für KI-generierte Medien, siehe https://cv.iptc.org/newscodes/digitalsourcetype/)
// Die sichtbare Kennzeichnung "KI-generiertes Bild" setzt die Website selbst (Komponente KiEtikett).

import sharp from "sharp";

const [eingabe, ausgabe, beschreibung = "KI-generiertes Bild", breite = "1200"] = process.argv.slice(2);
if (!eingabe || !ausgabe) {
  console.error('Aufruf: node scripts/ki-bild.mjs <eingabe> <ausgabe.jpg> "<Beschreibung>"');
  process.exit(1);
}

const xmlText = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const xmp = `<?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?>
<x:xmpmeta xmlns:x="adobe:ns:meta/">
  <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
    <rdf:Description rdf:about=""
      xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/"
      xmlns:dc="http://purl.org/dc/elements/1.1/">
      <Iptc4xmpExt:DigitalSourceType>http://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia</Iptc4xmpExt:DigitalSourceType>
      <dc:description><rdf:Alt><rdf:li xml:lang="x-default">${xmlText(
        `KI-generiertes Bild, zeigt keine reale Person. ${beschreibung}`,
      )}</rdf:li></rdf:Alt></dc:description>
    </rdf:Description>
  </rdf:RDF>
</x:xmpmeta>
<?xpacket end="w"?>`;

const info = await sharp(eingabe)
  .rotate()
  .resize({ width: Number(breite), withoutEnlargement: true })
  .jpeg({ quality: 80, mozjpeg: true })
  .withXmp(xmp)
  .toFile(ausgabe);

console.log(`${ausgabe}: ${info.width} x ${info.height}, ${Math.round(info.size / 1024)} KB`);
