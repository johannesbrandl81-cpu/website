/**
 * Stammdaten der Praxis.
 *
 * Felder mit `null` sind noch nicht bekannt. Die Seite zeigt an diesen Stellen
 * einen sichtbaren Platzhalter in eckigen Klammern (siehe components/Platzhalter.tsx),
 * damit keine Lücke unbemerkt online geht. Sobald der Wert vorliegt, hier eintragen.
 */

export type Sprechzeit = { tag: string; zeit: string };

/** Sprechzeiten maschinenlesbar für die strukturierten Daten (schema.org). Bei Änderungen der Sprechzeiten hier mit anpassen. */
export const sprechzeitenStrukturiert: { tage: string[]; von: string; bis: string }[] = [
  { tage: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], von: "09:00", bis: "12:00" },
  { tage: ["Monday", "Tuesday", "Thursday"], von: "15:00", bis: "18:00" },
];

export type Praxis = {
  name: string;
  kurzname: string;
  arzt: string;
  fachrichtung: string;
  strasse: string;
  plz: string;
  ort: string;
  stadtteil: string;
  domain: string;
  doctolib: string;
  telefon: string | null;
  email: string | null;
  sprechzeiten: Sprechzeit[] | null;
  foto: { src: string; width: number; height: number };
  oepnv: string | null;
  barrierefreiheit: string[];
  abrechnung: string;
  onlineBuchung: string;
};

export const praxis: Praxis = {
  name: "Neurologische Praxis Tempelhof Dr. Brandl",
  kurzname: "Neurologische Praxis Tempelhof",
  arzt: "Dr. med. Johannes Brandl",
  fachrichtung: "Facharzt für Neurologie",
  strasse: "Friedrich-Wilhelm-Straße 68",
  plz: "12103",
  ort: "Berlin",
  stadtteil: "Tempelhof",
  domain: "https://neurologie-praxistempelhof.de",
  doctolib: "https://www.doctolib.de/neurologie/berlin/johannes-brandl",
  telefon: null,
  email: null,
  sprechzeiten: [
    { tag: "Montag", zeit: "9 bis 12 Uhr und 15 bis 18 Uhr" },
    { tag: "Dienstag", zeit: "9 bis 12 Uhr und 15 bis 18 Uhr" },
    { tag: "Mittwoch", zeit: "9 bis 12 Uhr" },
    { tag: "Donnerstag", zeit: "9 bis 12 Uhr und 15 bis 18 Uhr" },
    { tag: "Freitag", zeit: "9 bis 12 Uhr" },
  ],
  foto: { src: "/bilder/brandl.jpg", width: 600, height: 538 },
  oepnv: "U6, Haltestelle Kaiserin-Augusta-Straße",
  barrierefreiheit: ["Erdgeschoss, 2 Treppenstufen", "Kostenlose Parkplätze in der Nähe"],
  abrechnung: "Gesetzlich und privat Versicherte sowie Selbstzahlende",
  onlineBuchung: "Online-Buchung über Doctolib, auch für Neupatient:innen möglich.",
};

/** Wochentage für die Sprechzeiten-Tabelle, solange keine Zeiten eingetragen sind. */
export const wochentage = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"];

export const adresseEinzeilig = `${praxis.strasse}, ${praxis.plz} ${praxis.ort}`;

export const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  adresseEinzeilig,
)}`;

/** Wandelt eine deutsche Telefonnummer in einen tel:-Link um (030 123 → +4930123). */
export function telefonHref(nummer: string): string {
  const ziffern = nummer.replace(/[^\d+]/g, "");
  return `tel:${ziffern.startsWith("0") ? `+49${ziffern.slice(1)}` : ziffern}`;
}
