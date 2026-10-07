/**
 * Klinische Studien in Zusammenarbeit mit FutureMeds.
 *
 * Eckdaten von den Studienseiten bei FutureMeds (Screenshots, Oktober 2026).
 * Vor jeder Veröffentlichung und regelmäßig danach mit futuremeds.de abgleichen.
 * Prüfmedikamente werden bewusst nicht genannt (§ 3a HWG).
 * Alle Bilder sind KI-generiert und werden sichtbar sowie in den Metadaten gekennzeichnet (EU AI Act, Art. 50).
 * `null` = Angabe noch nicht bestätigt, die Zeile wird dann ausgeblendet.
 */

export const studienStand = "Oktober 2026";

export const partner = {
  name: "FutureMeds",
  url: "https://www.futuremeds.de/studien",
};

export type Studie = {
  id: string;
  titel: string;
  text: string;
  start: string | null;
  standort: string | null;
  alter: string | null;
  aufwandsentschaedigung: string | null;
  url: string;
  /** KI-generiertes Bild, aufbereitet mit scripts/ki-bild.mjs (inkl. KI-Kennzeichnung in den Metadaten). */
  bild?: { src: string; width: number; height: number; alt: string };
};

export const studien: Studie[] = [
  {
    id: "depressionen",
    titel: "Depressionen",
    text: "Für Erwachsene mit Depressionen, zum Beispiel mit gedrückter Stimmung, Antriebslosigkeit oder Schlafstörungen.",
    start: "Studie läuft",
    standort: "Berlin",
    alter: "ab 18 Jahren",
    aufwandsentschaedigung: "ja",
    url: "https://www.futuremeds.de/studie/depressionen-23-1",
    bild: { src: "/bilder/studien/depressionen.jpg", width: 1200, height: 670, alt: "KI-generierte Illustration: Frau sitzt nachdenklich am Fenster" },
  },
  {
    id: "diabetische-polyneuropathie",
    titel: "Diabetische Polyneuropathie",
    text: "Für Menschen mit Diabetes und Nervenschmerzen, Missempfindungen oder Taubheitsgefühlen, vor allem an den Füßen.",
    start: "Studie läuft",
    standort: "Berlin und Offenbach",
    alter: "18 bis 80 Jahre",
    aufwandsentschaedigung: "ja",
    url: "https://www.futuremeds.de/studie/diabetische-neuropathie-24-1",
    bild: { src: "/bilder/studien/diabetische-polyneuropathie.jpg", width: 1200, height: 670, alt: "KI-generierte Illustration: Älterer Mann sitzt im Sessel und hält seinen Fuß" },
  },
  {
    id: "idiopathische-polyneuropathie",
    titel: "Chronische Nervenschmerzen (idiopathische Polyneuropathie)",
    text: "Für Erwachsene mit chronischen Nervenschmerzen, etwa Brennen, Kribbeln oder Taubheit, deren Ursache unklar geblieben ist.",
    start: "voraussichtlich 2027",
    standort: "Berlin und Offenbach",
    alter: "ab 18 Jahren",
    aufwandsentschaedigung: "noch offen",
    url: "https://www.futuremeds.de/studie/chronische-nervenschmerzen-idiopathische-polyneuropathie-26-01",
    bild: { src: "/bilder/studien/idiopathische-polyneuropathie.jpg", width: 1200, height: 670, alt: "KI-generierte Illustration: Frau sitzt am Tisch und hält eine Tasse" },
  },
  {
    id: "insomnie",
    titel: "Ein- und Durchschlafstörungen (Insomnie)",
    text: "Für Erwachsene, die schlecht einschlafen, nachts häufig aufwachen oder morgens zu früh wach werden.",
    start: "voraussichtlich Winter 2027",
    standort: "Berlin",
    alter: "ab 18 Jahren",
    aufwandsentschaedigung: "noch offen",
    url: "https://www.futuremeds.de/studie/ein-und-durchschlafstoerungen-26-01",
    bild: { src: "/bilder/studien/insomnie.jpg", width: 1200, height: 670, alt: "KI-generierte Illustration: Mann sitzt müde auf der Bettkante" },
  },
  {
    id: "narkolepsie",
    titel: "Narkolepsie",
    text: "Für Erwachsene mit ausgeprägter Tagesschläfrigkeit oder plötzlichen Schlafepisoden.",
    start: "voraussichtlich Herbst 2026",
    standort: "Berlin",
    alter: "18 bis 70 Jahre",
    aufwandsentschaedigung: "ja",
    url: "https://www.futuremeds.de/studie/narkolepsie-26-1",
    bild: { src: "/bilder/studien/narkolepsie.jpg", width: 1200, height: 655, alt: "KI-generierte Illustration: Frau ist am Frühstückstisch eingeschlafen" },
  },
];
