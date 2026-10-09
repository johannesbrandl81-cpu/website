/**
 * Inhalte der Seite Ketamintherapie.
 *
 * Wirkung, Verträglichkeit, Ablauf und Anwendungsgebiete stammen von Dr. Brandl
 * (Oktober 2026). Die übrigen Fachtexte sind Textvorschläge zur fachlichen
 * Freigabe. `null` zeigt einen Platzhalter.
 */

export const ketamin = {
  einleitung:
    "In unserer Praxis erhalten Sie Ketamin als Infusion. Die Behandlung wird ärztlich durchgeführt und überwacht und von einer Psychotherapeutin begleitet. Ob sie für Sie in Frage kommt, besprechen wir in einem persönlichen Vorgespräch.",

  wasIst:
    "Ketamin ist ein Arzneistoff, der seit vielen Jahrzehnten in der Anästhesie und Notfallmedizin eingesetzt wird. In deutlich niedrigerer Dosierung wird es als Infusion auch in der Behandlung psychischer Erkrankungen und bestimmter Schmerzerkrankungen angewendet.",

  /** Text von Dr. Brandl (Oktober 2026), wörtlich übernommen. */
  wirkung: {
    titel: "Wie wirkt die Ketamintherapie?",
    einleitung:
      "Die Ketamintherapie kombiniert biologische und psychotherapeutische Effekte, um Betroffenen einen schnellen Weg aus der Krise zu ermöglichen. Dabei wird die doppelte Wirkung der Substanz genutzt: den unmittelbar bewusstseinsverändernden (dissoziativen) Effekt während der Infusion und die darauf folgende, anhaltende antidepressive sowie angstlösende Wirkung.",
    biologisch: {
      titel: "Die biologische Wirkung: Schnelle Hilfe im Gehirn",
      punkte: [
        {
          stichwort: "Sofortige Entlastung",
          text: "Akute Krisen und Suizidgedanken können oft schon nach der ersten Infusion spürbar nachlassen.",
        },
        {
          stichwort: "Die temporäre „Abspaltung“ (Dissoziation)",
          text: "Ketamin blockiert gezielt bestimmte Andockstellen im Gehirn, die sogenannten NMDA-Rezeptoren. Dies führt zu einer vorübergehenden Entkopplung zwischen dem Großhirn (für rationales Denken) und dem limbischen System (für Emotionen). Reize von außen werden gedämpft, während das Gehirn intensiv nach innen blickt.",
        },
        {
          stichwort: "Förderung der Neuroplastizität durch Glutamat",
          text: "Nach dieser kurzen Trennung kommt es zu einem biologischen „Reset“. Ketamin sorgt für eine gezielte Ausschüttung des wichtigen Botenstoffs Glutamat. Dies stößt die Produktion von körpereigenen Wachstumsfaktoren an, die wie Dünger für die Nervenzellen wirken: Es entstehen neue Verbindungen (Synapsen). Diese Regeneration bricht verkrustete Denkmuster auf und macht Patienten wieder lernbereit – bei schweren Depressionen wird eine erfolgreiche Psychotherapie dadurch oft überhaupt erst möglich.",
        },
        {
          stichwort: "Kurze Verweildauer, nachhaltiger Effekt",
          text: "Der Körper baut den Wirkstoff bereits nach wenigen Stunden vollständig ab, während die positiven strukturellen Veränderungen im Gehirn anhalten. Dauerhafte Nebenwirkungen sind bei dieser kontrollierten Anwendung praktisch nicht bekannt.",
        },
      ],
    },
    psychotherapeutisch: {
      titel: "Der psychotherapeutische Nutzen: Ein Fenster zur Heilung",
      punkte: [
        {
          stichwort: "Während der Infusion",
          text: "Durch die schmerzfreie Distanz der Dissoziation können verdrängte Emotionen, Erinnerungen oder innere Konflikte an die Oberfläche treten – jedoch ohne die sonst übliche Panik oder Angst. Im geschützten Rahmen einer Praxis können diese wertvollen Erkenntnisse anschließend psychotherapeutisch verarbeitet werden.",
        },
        {
          stichwort: "Nach der Infusion",
          text: "Der eigentliche antidepressive Effekt entfaltet sich meist am Folgetag. Das frisch „neu verschaltete“ Gehirn zeigt sich in einer deutlich verbesserten und stabilisierten Stimmung.",
        },
      ],
    },
    infusion: {
      titel: "Warum die intravenöse Infusion die sicherste Methode ist",
      einleitung:
        "Im Gegensatz zu unkontrollierten Anwendungen oder dem auf dem Markt erhältlichen Ketamin-Nasenspray (Esketamin) bietet die intravenöse Infusion entscheidende Vorteile für Ihre Sicherheit und den Therapieerfolg:",
      punkte: [
        {
          stichwort: "Präzise Dosierung und Steuerbarkeit",
          text: "Während die Aufnahme beim Nasenspray durch Faktoren wie Schnupfen oder Schleimhautbeschaffenheit schwanken kann, gelangt der Wirkstoff bei der Infusion zu 100 % gleichmäßig in die Blutbahn. Die Intensität der Dissoziation lässt sich dadurch punktgenau und individuell steuern.",
        },
        {
          stichwort: "Maximale Sicherheit bei unangenehmen Effekten",
          text: "Sollten während der Reise unerwartet zu intensive oder unangenehme Emotionen auftreten, kann die Infusion jederzeit sofort gestoppt werden. Da Ketamin im Blut extrem schnell abgebaut wird, lässt die Wirkung nach dem Stopp innerhalb von nur einer Minute nach und ist komplett verschwunden. Sie behalten also zu jedem Zeitpunkt die volle Kontrolle über den Prozess.",
        },
      ],
    },
  },

  fuerWen:
    "Ob eine Ketamintherapie für Sie geeignet ist, klären wir in einem ärztlichen Vorgespräch. Dabei besprechen wir Ihre Beschwerden, Ihre Vorgeschichte und mögliche Gegenanzeigen.",

  /** Von Dr. Brandl festgelegt (Oktober 2026). */
  anwendungsgebiete: [
    "Depression",
    "Posttraumatische Belastungsstörungen (PTBS)",
    "Zwangsstörungen (OCD)",
    "Angststörungen",
    "Chronische Schmerzen",
    "Suchterkrankungen",
    "Long-Covid",
    "Fatigue-Syndrome und ME/CFS",
  ],

  ablauf: {
    einleitung: "Eine Behandlung umfasst in der Regel mehrere Infusionen. Dies wird individuell abgestimmt.",
    nachhaltigkeit:
      "Da die Wirkung von Ketamin individuell variiert und oft Tage, Wochen oder gar Monate anhält, wird gemeinsam geklärt, wie viele Infusionen und in welchem Abstand Sinn ergeben.",
    dauerInfusion: "ca. 40 Minuten",
    dauerNachbeobachtung: "ca. 30 Minuten",
  },

  psychotherapeutin: {
    name: "Stella Savelsberg" as string | null,
    beruf: "Psychologische Psychotherapeutin" as string | null,
    /** Kurzvorstellung, von Frau Savelsberg geliefert. */
    text: "Vorbereitung im Gespräch, Begleitung rund um die ärztliche Behandlung und Integration, damit das Erlebte in Ihre laufende Psychotherapie einfließen kann." as string | null,
    /** Porträt Stella Savelsberg (Oktober 2026), quadratisch zugeschnitten. */
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

  /** Text von Dr. Brandl (Oktober 2026), wörtlich übernommen. */
  vertraeglichkeit: {
    titel: "Verträglichkeit, Nebenwirkungen und Risiken",
    einleitung: [
      "Die ketamingestützte Psychotherapie ist eine hochmoderne und wissenschaftlich fundierte Behandlungsmethode, die eine qualitativ hochwertige, individuell angepasste Therapie ermöglicht und Betroffenen neue Hoffnung auf Heilung und Besserung geben kann.",
      "Ketamininfusionen sind in der Regel sehr gut verträglich. Dennoch gilt es, folgende Punkte zu beachten:",
    ],
    begleiterscheinungen: {
      titel: "Mögliche Begleiterscheinungen",
      text: "Zu den vorübergehenden Nebenwirkungen können ein kurzzeitiger Blutdruckanstieg, Übelkeit, Erbrechen, Schwindel oder Kopfschmerzen gehören. Diese Symptome klingen in der Regel unmittelbar nach dem Ende der Infusion von selbst wieder ab.",
    },
    steuerung: {
      titel: "Sicherheit durch Infusionssteuerung",
      text: "Sollten während der Behandlung unerwünschte Phänomene auftreten, wird die Infusionsgeschwindigkeit sofort angepasst oder die Gabe ganz angehalten. Innerhalb weniger Minuten verschwinden die Beschwerden vollständig. Dies unterstreicht den großen Vorteil von Infusionen, deren Tropfgeschwindigkeit sich zu jeder Sekunde perfekt an das Befinden des Patienten anpassen lässt.",
    },
  },

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
