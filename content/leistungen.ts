/**
 * Kosten in zwei Gruppen:
 * - `selbstzahlerKasse`: neurologische Leistungen als Selbstzahler, falls in der
 *   Kassensprechstunde kein Termin frei ist (Preise von Dr. Brandl, Mail Oktober 2026).
 * - `leistungen`: Selbstzahlerleistungen (IGeL) in der von Dr. Brandl gewünschten Reihenfolge.
 *
 * `preis: null` bedeutet: Betrag noch nicht bekannt, die Seite zeigt [Betrag].
 * `aufStartseite: false` blendet einen Posten auf der Startseite aus; er bleibt
 * auf der Kostenseite sichtbar (hier: ästhetische Anwendungen).
 */

export type Posten = {
  name: string;
  preis: string | null;
  aufStartseite?: boolean;
};

export type Leistung = {
  id: string;
  titel: string;
  /** Kurzbeschreibung für die Startseite; `null` zeigt einen Platzhalter. */
  beschreibung?: string | null;
  /** Fließtext statt Postenliste (z. B. Atteste und Gutachten). */
  text?: string;
  /** Kürzere Fassung für die Karte auf der Startseite; ohne Angabe wird `text` verwendet. */
  kurztext?: string;
  posten: Posten[];
  weiterLink?: { href: string; label: string };
};

export const selbstzahlerKasse: Posten[] = [
  { name: "Erstes Gespräch mit klinischer Untersuchung", preis: "ca. 90 Euro" },
  { name: "Gedächtnistestungen", preis: "ca. 30 Euro" },
  { name: "Nervenmessung (Elektroneurografie)", preis: "100 bis 200 Euro" },
  { name: "EEG (Hirnstrommessung)", preis: "ca. 100 Euro" },
  { name: "Ultraschall der hirnversorgenden Halsgefäße", preis: "60 Euro" },
  { name: "Transkranieller Doppler", preis: "160 Euro" },
];

export const leistungen: Leistung[] = [
  {
    id: "ketamintherapie",
    titel: "Ketamintherapie",
    text: "Ketamin als Infusion, ärztlich durchgeführt und überwacht, mit psychotherapeutischer Begleitung.",
    posten: [{ name: "Ketamin-Infusion", preis: null }],
    weiterLink: { href: "/ketamintherapie", label: "Mehr zur Ketamintherapie" },
  },
  {
    id: "botulinumtoxin",
    titel: "Botulinumtoxin-Therapie",
    posten: [
      { name: "Bruxismus (Zähneknirschen)", preis: null },
      { name: "Migräne", preis: null },
      { name: "Spastik nach Schlaganfall", preis: null },
      { name: "Schulter-/Nackenschmerzen", preis: null },
      { name: "Spannungskopfschmerzen", preis: null },
      { name: "Stirnfalten", preis: null, aufStartseite: false },
      { name: "Zornesfalte", preis: null, aufStartseite: false },
    ],
  },
  {
    id: "infusionstherapien",
    titel: "Weitere Infusionstherapien",
    posten: [
      { name: "Alpha-Liponsäure", preis: null },
      { name: "Vitamin B", preis: null },
      { name: "Vitamin C", preis: null },
      { name: "NAD+", preis: null },
    ],
  },
  {
    id: "vagusnervstimulation",
    titel: "Vagusnervstimulation mit Nurosym",
    posten: [
      { name: "Einmalige Stimulation", preis: null },
      { name: "Leihgerät (nach Verfügbarkeit)", preis: null },
      { name: "Kauf", preis: null },
    ],
  },
  {
    id: "vilim-ball",
    titel: "Vilim-Ball",
    posten: [
      { name: "Leihgerät (nach Verfügbarkeit)", preis: null },
      { name: "Kauf", preis: null },
    ],
  },
  {
    id: "atteste-gutachten",
    titel: "Atteste und fachneurologische Gutachten",
    kurztext: "Ärztliche Atteste und fachneurologische Gutachten für Arbeitgeber, Behörden, Versicherungen und private Auftraggeber.",
    text: "Wir erstellen auf Anfrage ärztliche Atteste (z. B. für Arbeitgeber, Behörden oder Versicherungen) sowie fachneurologische Gutachten für gesetzliche Institutionen, Versicherungen und private Auftraggeber. Umfang, Fragestellung und Vorgehen werden vorab mit Ihnen besprochen.",
    posten: [],
  },
];
