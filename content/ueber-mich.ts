/** Über mich, Werdegang und Mitgliedschaften. */

export const begruessung =
  "Liebe Patientin, lieber Patient, ich freue mich, Sie in meiner neurologischen Praxis in Berlin Tempelhof begrüßen zu dürfen!";

export const ueberMich =
  "Als Facharzt für Neurologie und ehemaliger Oberarzt einer neurologischen Abteilung verfüge ich über langjährige Erfahrung auf dem Gebiet der Neurologie.";

export const werdegang: { zeit: string; text: string }[] = [
  { zeit: "2000", text: "Abitur, Musikgymnasium der Regensburger Domspatzen" },
  {
    zeit: "2001 bis 2005",
    text: "Musikstudium, Hauptfach Violine, Hochschule für Musik und Darstellende Kunst Frankfurt am Main und Hochschule für Musik Hanns Eisler Berlin",
  },
  { zeit: "2005 bis 2011", text: "Studium der Humanmedizin und Promotion, Charité Universitätsmedizin Berlin" },
  { zeit: "2012 bis 2017", text: "Facharztausbildung zum Facharzt für Neurologie" },
  { zeit: "2017 bis 2020", text: "Oberarzt" },
  { zeit: "Seit 2020", text: "Eigene Praxis in Berlin-Tempelhof" },
];

export type Logo = { src: string; width: number; height: number; breit?: boolean };

export type Mitgliedschaft = {
  name: string;
  art: "fachlich" | "persoenlich";
  /** Ohne Logo erscheint der Name als Text in der Logoleiste. */
  logo?: Logo;
};

export const mitgliedschaften: Mitgliedschaft[] = [
  {
    name: "Deutsche Gesellschaft für Neurologie",
    art: "fachlich",
    logo: { src: "/logos/dgn.png", width: 500, height: 331 },
  },
  {
    name: "Berliner Gesellschaft für Psychiatrie und Neurologie",
    art: "fachlich",
    logo: { src: "/logos/bgpn.jpg", width: 98, height: 115 },
  },
  {
    name: "Arbeitskreis Parkinson-Syndrome Berlin",
    art: "fachlich",
    logo: { src: "/logos/ak-parkinson.png", width: 160, height: 386 },
  },
  { name: "Arbeitskreis Botulinumtoxin", art: "fachlich" },
  {
    name: "Deutsche Gesellschaft für Musikphysiologie und Musikermedizin",
    art: "fachlich",
    logo: { src: "/logos/dgfmm.png", width: 738, height: 102, breit: true },
  },
  {
    name: "Deutsche Ultramarathon Vereinigung",
    art: "persoenlich",
    logo: { src: "/logos/duv.png", width: 400, height: 198 },
  },
  {
    name: "100 Marathon Club Deutschland",
    art: "persoenlich",
    logo: { src: "/logos/100-marathon-club.png", width: 1600, height: 1580 },
  },
];
