/**
 * Neurologie: Behandlungsgebiete (Startseite), Untersuchungsmethoden und Vorbereitung (Seite /untersuchungen).
 *
 * Aufbau angelehnt an neurovita-berlin.de (Wunsch von Dr. Brandl), Texte eigenständig
 * formuliert auf Basis seiner Schwerpunkte und Diagnostik. Alle Texte sind
 * Textvorschläge zur fachlichen Freigabe.
 */

export type FachIconName =
  | "kopfschmerz"
  | "schwindel"
  | "nerv"
  | "bewegung"
  | "anfall"
  | "gedaechtnis"
  | "ms"
  | "gefaess"
  | "ruecken"
  | "eeg"
  | "strom"
  | "muskel"
  | "auge"
  | "ultraschall"
  | "kopf-ultraschall"
  | "test"
  | "nadel"
  | "labor";

export type Fachkarte = {
  id: string;
  titel: string;
  text: string;
  icon: FachIconName;
  /** Name des passenden Postens in `selbstzahlerKasse`, falls es einen Selbstzahlerpreis gibt. */
  selbstzahlerPosten?: string;
};

/** Einleitung des Abschnitts Neurologie auf der Startseite (Text von Dr. Brandl, Doctolib-Profil). */
export const einleitungStartseite =
  "Als Facharzt für Neurologie befasse ich mich mit Erkrankungen des Nervensystems wie zum Beispiel Parkinson, Demenz, Kopfschmerzen, Restless-Legs-Syndrom, Karpaltunnelsyndrom, Epilepsie, Multiple Sklerose und der Nachsorge von Schlaganfällen.";

/** Einleitung der Unterseite Untersuchungen. */
export const einleitungUntersuchungen =
  "Ein gründliches Gespräch und die körperliche Untersuchung stehen am Anfang jeder Diagnose. Je nach Fragestellung kommen weitere Untersuchungen hinzu. Hier finden Sie, was in der Praxis möglich ist und wie Sie sich auf Ihren Termin vorbereiten.";

export const behandlungsgebiete: Fachkarte[] = [
  {
    id: "kopfschmerz",
    titel: "Kopfschmerz und Migräne",
    text: "Abklärung und Behandlung von Migräne, Spannungskopfschmerzen und anderen wiederkehrenden Kopfschmerzen, auch vorbeugend.",
    icon: "kopfschmerz",
  },
  {
    id: "schwindel",
    titel: "Schwindel",
    text: "Abklärung von Dreh- und Schwankschwindel sowie Gleichgewichtsstörungen, um die Ursache einzugrenzen und gezielt zu behandeln.",
    icon: "schwindel",
  },
  {
    id: "periphere-nerven",
    titel: "Periphere Nerven",
    text: "Polyneuropathie, Karpaltunnelsyndrom und andere Nervenengpässe. Typisch sind Taubheit, Kribbeln, Schmerzen oder Schwäche.",
    icon: "nerv",
  },
  {
    id: "bewegungsstoerungen",
    titel: "Parkinson und Bewegungsstörungen",
    text: "Diagnostik und Therapie bei Parkinson-Syndromen, Zittern (Tremor) und dem Restless-Legs-Syndrom.",
    icon: "bewegung",
  },
  {
    id: "epilepsie",
    titel: "Epilepsie",
    text: "Abklärung nach einem ersten Anfall sowie Einstellung und Begleitung der medikamentösen Behandlung.",
    icon: "anfall",
  },
  {
    id: "gedaechtnis",
    titel: "Gedächtnis und Demenz",
    text: "Testung bei nachlassendem Gedächtnis, Einordnung der Ergebnisse und Begleitung bei Demenzerkrankungen wie Alzheimer.",
    icon: "gedaechtnis",
  },
  {
    id: "multiple-sklerose",
    titel: "Multiple Sklerose",
    text: "Diagnostik, Verlaufskontrollen und Begleitung der Therapie bei Multipler Sklerose.",
    icon: "ms",
  },
  {
    id: "schlaganfallnachsorge",
    titel: "Schlaganfallnachsorge",
    text: "Weiterbehandlung nach einem Schlaganfall: Kontrolle der Risikofaktoren, Ultraschall der Gefäße und Behandlung von Folgen wie Spastik.",
    icon: "gefaess",
  },
  {
    id: "rueckenschmerzen",
    titel: "Rückenschmerzen",
    text: "Neurologische Abklärung, wenn Rückenschmerzen ausstrahlen oder mit Taubheit oder Schwäche in Armen oder Beinen einhergehen.",
    icon: "ruecken",
  },
];

export const untersuchungen: Fachkarte[] = [
  {
    id: "eeg",
    titel: "EEG (Elektroenzephalografie)",
    text: "Messung der Hirnströme über Elektroden auf der Kopfhaut, vor allem zur Abklärung von Anfällen. Die Untersuchung ist schmerzfrei.",
    icon: "eeg",
    selbstzahlerPosten: "EEG (Hirnstrommessung)",
  },
  {
    id: "eng",
    titel: "ENG/NLG (Elektroneurografie, Nervenleitgeschwindigkeit)",
    text: "Misst, wie schnell und wie gut Nerven Signale weiterleiten. Kleine Stromimpulse auf der Haut fühlen sich wie ein kurzes Kribbeln an.",
    icon: "strom",
    selbstzahlerPosten: "Nervenmessung (ENG/NLG)",
  },
  {
    id: "emg",
    titel: "EMG (Elektromyografie)",
    text: "Ableitung der elektrischen Muskelaktivität mit einer feinen Nadelelektrode. Zeigt, ob eine Schwäche vom Muskel oder vom Nerv ausgeht.",
    icon: "muskel",
    selbstzahlerPosten: "EMG (Elektromyografie)",
  },
  {
    id: "evozierte-potenziale",
    titel: "Evozierte Potenziale",
    text: "Prüfung der Seh-, Hör- und Gefühlsbahnen über gezielte Reize, zum Beispiel bei Verdacht auf Multiple Sklerose.",
    icon: "auge",
    selbstzahlerPosten: "Evozierte Potenziale",
  },
  {
    id: "ultraschall-halsgefaesse",
    titel: "Ultraschall der Halsgefäße",
    text: "Doppler- und Duplexsonografie der hirnversorgenden Gefäße am Hals. Zeigt Verengungen und Ablagerungen, wichtig für die Einschätzung des Schlaganfallrisikos.",
    icon: "ultraschall",
    selbstzahlerPosten: "Ultraschall der hirnversorgenden Halsgefäße",
  },
  {
    id: "transkranieller-doppler",
    titel: "Transkranieller Doppler",
    text: "Ultraschall der Gefäße im Kopf durch die Schläfe. Beurteilt den Blutfluss in den großen Hirnarterien.",
    icon: "kopf-ultraschall",
    selbstzahlerPosten: "Transkranieller Doppler",
  },
  {
    id: "gedaechtnistestung",
    titel: "Gedächtnistestungen",
    text: "Standardisierte Tests zu Gedächtnis, Aufmerksamkeit und Orientierung als Grundlage, um Gedächtnisprobleme einzuordnen.",
    icon: "test",
    selbstzahlerPosten: "Gedächtnistestungen",
  },
  {
    id: "lumbalpunktion",
    titel: "Lumbalpunktion",
    text: "Entnahme einer kleinen Menge Nervenwasser im unteren Rücken, etwa bei Verdacht auf eine Entzündung des Nervensystems oder in der Demenzdiagnostik.",
    icon: "nadel",
    selbstzahlerPosten: "Lumbalpunktion",
  },
  {
    id: "labor",
    titel: "Laboruntersuchungen",
    text: "Blutuntersuchungen, zum Beispiel zur Ursachensuche bei Polyneuropathie oder zur Kontrolle von Medikamentenspiegeln.",
    icon: "labor",
  },
];

export const mitbringen = [
  "Versichertenkarte, als Selbstzahler einen Ausweis",
  "Überweisung, falls vorhanden",
  "Aktuellen Medikamentenplan",
  "Arztbriefe, Vorbefunde und Bilder (zum Beispiel MRT oder CT auf CD)",
  "Brille und Hörgerät, falls Sie diese nutzen",
];

export const vorbereitungJeUntersuchung: { titel: string; text: string }[] = [
  {
    titel: "EEG",
    text: "Bitte waschen Sie am Vortag oder am Morgen die Haare und verzichten Sie auf Gel, Haarspray oder Öl. Nehmen Sie Ihre Medikamente wie gewohnt ein, sofern nichts anderes besprochen ist.",
  },
  {
    titel: "ENG/NLG und EMG",
    text: "Bitte am Untersuchungstag keine Creme auf Arme und Beine auftragen. Sagen Sie uns vorab, wenn Sie blutverdünnende Medikamente nehmen oder einen Herzschrittmacher haben.",
  },
  {
    titel: "Ultraschall",
    text: "Keine besondere Vorbereitung nötig. Kleidung, die den Hals frei lässt, ist hilfreich.",
  },
  {
    titel: "Gedächtnistestung",
    text: "Kommen Sie möglichst ausgeruht und bringen Sie Brille und Hörgerät mit. Eine vertraute Begleitperson ist willkommen.",
  },
  {
    titel: "Lumbalpunktion",
    text: "Ablauf und Risiken besprechen wir vorher ausführlich mit Ihnen. Bitte sprechen Sie blutverdünnende Medikamente vorab an und setzen Sie diese nur nach Rücksprache ab. Planen Sie danach etwas Ruhe ein.",
  },
];
