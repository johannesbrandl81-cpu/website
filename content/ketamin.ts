/**
 * Inhalte der Seite Ketamintherapie.
 *
 * Die Fachtexte sind Textvorschläge und müssen vor der Veröffentlichung von
 * Dr. Brandl fachlich freigegeben werden. `null` zeigt einen Platzhalter.
 */

export const ketamin = {
  einleitung:
    "In unserer Praxis erhalten Sie Ketamin als Infusion. Die Behandlung wird ärztlich durchgeführt und überwacht und von einer Psychotherapeutin begleitet. Ob sie für Sie in Frage kommt, besprechen wir in einem persönlichen Vorgespräch.",

  wasIst:
    "Ketamin ist ein Arzneistoff, der seit vielen Jahrzehnten in der Anästhesie und Notfallmedizin eingesetzt wird. In deutlich niedrigerer Dosierung wird es als Infusion auch in der Behandlung psychischer Erkrankungen und bestimmter Schmerzerkrankungen angewendet.",

  wieWirkt:
    "Ketamin wirkt auf das Glutamat-System im Gehirn, indem es sogenannte NMDA-Rezeptoren hemmt. Damit setzt es an einer anderen Stelle an als die meisten Antidepressiva. Eine Wirkung kann bereits wenige Stunden bis Tage nach der Infusion eintreten. Wie lange sie anhält, ist individuell verschieden.",

  fuerWen:
    "Ob eine Ketamintherapie für Sie geeignet ist, klären wir in einem ärztlichen Vorgespräch. Dabei besprechen wir Ihre Beschwerden, Ihre Vorgeschichte und mögliche Gegenanzeigen.",

  /** Weitere Anwendungsgebiete legt Dr. Brandl fest. */
  anwendungsgebiete: ["Depression"] as string[],

  ablauf: {
    anzahlInfusionen: null as string | null,
    zeitraum: null as string | null,
    dauerVorgespraech: null as string | null,
    dauerInfusion: null as string | null,
    ueberwachung: null as string | null,
    dauerNachbeobachtung: null as string | null,
    begleitgespraeche: null as string | null,
  },

  psychotherapeutin: {
    name: "Stella Savelsberg" as string | null,
    beruf: "Psychologische Psychotherapeutin" as string | null,
    /** Kurzvorstellung, von Frau Savelsberg geliefert. */
    text: "Vorbereitung im Gespräch, Begleitung rund um die ärztliche Behandlung und Integration, damit das Erlebte in Ihre laufende Psychotherapie einfließen kann." as string | null,
    /** Vorschaubild des Fotografen, zugeschnitten. Vor dem Livegang durch die lizenzierte Datei ersetzen. */
    foto: { src: "/bilder/savelsberg.jpg", width: 700, height: 700 },
    website: "https://www.psychotherapie-stella-savelsberg.de/ketamin-gestuetzte-psychotherapie",
  },

  begleitung:
    "Die Ketamintherapie wird in unserer Praxis psychotherapeutisch begleitet. So können Erfahrungen während und nach den Infusionen besprochen und eingeordnet werden.",

  keineBehandlung: [
    "Nicht eingestellter Bluthochdruck",
    "Psychotische Erkrankungen",
    "Schwangerschaft und Stillzeit",
    "Schwere Herz-Kreislauf-Erkrankungen",
    "Schwere Lebererkrankungen",
    "Abhängigkeitserkrankungen (Prüfung im Einzelfall)",
  ],

  nebenwirkungen: [
    "Veränderte Wahrnehmung von Körper und Zeit",
    "Schwindel",
    "Anstieg von Blutdruck und Puls",
    "Übelkeit",
    "Kopfschmerzen und Müdigkeit",
  ],
  nebenwirkungenHinweis: "Diese Wirkungen lassen in der Regel kurze Zeit nach der Infusion nach.",

  behandlungstag: [
    "Kein Auto, Motorrad oder Fahrrad fahren",
    "Keine Maschinen bedienen",
    "Bitte kommen Sie mit einer Begleitperson oder planen Sie eine Abholung ein",
  ],

  offLabel:
    "Ketamin ist als Narkosemittel zugelassen. Die Anwendung bei Depression und weiteren Anwendungsgebieten erfolgt außerhalb dieser Zulassung (Off-Label-Use). Vor Beginn der Behandlung klären wir Sie darüber ausführlich und schriftlich auf.",

  krise:
    "Telefonseelsorge 0800 111 0 111 oder 116 123 (kostenfrei, rund um die Uhr), ärztlicher Bereitschaftsdienst 116 117, Notruf 112.",
};
