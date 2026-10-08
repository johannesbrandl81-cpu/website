/**
 * Kosten in zwei Gruppen:
 * - `selbstzahlerKasse`: neurologische Leistungen als Selbstzahler, falls in der
 *   Kassensprechstunde kein Termin frei ist (Preise von Dr. Brandl, Mails Oktober 2026).
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
  /** Externe Herstellerseite, öffnet in neuem Tab. */
  herstellerLink?: { href: string; label: string };
};

export const selbstzahlerKasse: Posten[] = [
  { name: "Erstes Gespräch mit klinischer Untersuchung", preis: "ca. 90 Euro" },
  { name: "Gedächtnistestungen", preis: "ca. 30 Euro" },
  { name: "Nervenmessung (ENG/NLG)", preis: "100 bis 200 Euro" },
  { name: "EMG (Elektromyografie)", preis: "ca. 100 Euro" },
  { name: "Evozierte Potenziale", preis: "ca. 90 Euro" },
  { name: "EEG (Hirnstrommessung)", preis: "ca. 100 Euro" },
  { name: "Ultraschall der hirnversorgenden Halsgefäße", preis: "ca. 60 Euro" },
  { name: "Transkranieller Doppler", preis: "ca. 160 Euro" },
  { name: "Lumbalpunktion", preis: "ca. 150 Euro" },
];

export const leistungen: Leistung[] = [
  {
    id: "ketamintherapie",
    titel: "Ketamintherapie",
    text: "Ketamin als Infusion, ärztlich durchgeführt und überwacht, mit psychotherapeutischer Begleitung.",
    posten: [
      { name: "Vorgespräch", preis: "ca. 90 Euro" },
      { name: "Ketamin-Infusion", preis: "ca. 210 Euro" },
    ],
    weiterLink: { href: "/ketamintherapie", label: "Mehr zur Ketamintherapie" },
  },
  {
    id: "botulinumtoxin",
    titel: "Botulinumtoxin-Therapie",
    posten: [
      { name: "Bruxismus (Zähneknirschen)", preis: "299 Euro" },
      { name: "Migräne", preis: "850 Euro" },
      { name: "Schulter-/Nackenschmerzen", preis: "349 Euro" },
      { name: "Spannungskopfschmerzen", preis: "349 Euro" },
      { name: "Stirnfalten", preis: "199 Euro", aufStartseite: false },
      { name: "Zornesfalte", preis: "199 Euro", aufStartseite: false },
      { name: "Krähenfüße", preis: "199 Euro", aufStartseite: false },
      { name: "2-Zonen-Paket (Stirnfalten und Zornesfalte oder Krähenfüße)", preis: "299 Euro", aufStartseite: false },
      { name: "3-Zonen-Paket (Stirnfalten, Zornesfalte und Krähenfüße)", preis: "399 Euro", aufStartseite: false },
    ],
  },
  {
    id: "infusionstherapien",
    titel: "Weitere Infusionstherapien",
    posten: [
      { name: "Alpha-Liponsäure", preis: "110 Euro" },
      { name: "Vitamin B (Medivitan-Spritze)", preis: "ca. 30 Euro" },
    ],
  },
  {
    id: "vagusnervstimulation",
    titel: "Vagusnervstimulation mit Nurosym",
    posten: [
      { name: "Einmalige Stimulation (15 Minuten)", preis: "15 Euro" },
      { name: "Leihgerät (nach Verfügbarkeit)", preis: "30 Euro pro Tag" },
    ],
    herstellerLink: { href: "https://nurosym.com/de-de", label: "Mehr zu Nurosym" },
  },
  {
    id: "vilim-ball",
    titel: "Vilim-Ball",
    posten: [{ name: "Leihgerät (nach Verfügbarkeit)", preis: "15 Euro pro Tag" }],
    herstellerLink: { href: "https://vilimed.com/de/", label: "Mehr zum Vilim-Ball" },
  },
  {
    id: "atteste-gutachten",
    titel: "Atteste und fachneurologische Gutachten",
    kurztext: "Ärztliche Atteste und fachneurologische Gutachten für Arbeitgeber, Behörden, Versicherungen und private Auftraggeber.",
    text: "Wir erstellen auf Anfrage ärztliche Atteste (z. B. für Arbeitgeber, Behörden oder Versicherungen) sowie fachneurologische Gutachten für gesetzliche Institutionen, Versicherungen und private Auftraggeber. Umfang, Fragestellung und Vorgehen werden vorab mit Ihnen besprochen.",
    posten: [],
  },
];
