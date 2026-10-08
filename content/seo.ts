/**
 * Titel und Beschreibungen für Suchmaschinen, gesammelt an einer Stelle.
 *
 * Google zeigt etwa 60 Zeichen Titel und 150 bis 160 Zeichen Beschreibung.
 * Unterseiten bekommen automatisch " | Neurologische Praxis Tempelhof" angehängt.
 * Keine Markennamen von Arzneimitteln und keine Heilversprechen (HWG).
 */

export const startseiteTitel = "Neurologe in Berlin-Tempelhof | Dr. med. Johannes Brandl";
export const startseiteBeschreibung =
  "Dr. med. Johannes Brandl, Facharzt für Neurologie in Berlin-Tempelhof. Für gesetzlich und privat Versicherte sowie Selbstzahlende. Termine online über Doctolib.";

export const seo = {
  untersuchungen: {
    titel: "Untersuchungen: EEG, ENG/NLG, EMG",
    beschreibung:
      "EEG, ENG/NLG, EMG, evozierte Potenziale, Ultraschall der Halsgefäße und Gedächtnistestung beim Neurologen in Berlin-Tempelhof. Mit Hinweisen zur Vorbereitung.",
  },
  ketamintherapie: {
    titel: "Ketamintherapie in Berlin",
    beschreibung:
      "Ketamintherapie bei Depression in Berlin-Tempelhof: als Infusion ärztlich durchgeführt und überwacht, psychotherapeutisch begleitet. Ablauf und Kosten.",
  },
  kosten: {
    titel: "Kosten für Selbstzahler",
    beschreibung:
      "Neurologe als Selbstzahler in Berlin-Tempelhof: Preise nach GOÄ für Erstgespräch, Gedächtnistestung, Nervenmessung, EEG, Ultraschall und weitere Leistungen.",
  },
  studien: {
    titel: "Klinische Studien in Berlin",
    beschreibung:
      "Klinische Studien in Berlin-Tempelhof mit FutureMeds: Depression, Polyneuropathie, Nervenschmerzen, Schlafstörungen und Narkolepsie. Infos zur Teilnahme.",
  },
  impressum: {
    titel: "Impressum",
    beschreibung: "Impressum der Neurologischen Praxis Tempelhof, Dr. med. Johannes Brandl, Berlin.",
  },
  datenschutz: {
    titel: "Datenschutzerklärung",
    beschreibung: "Datenschutzerklärung der Neurologischen Praxis Tempelhof, Dr. med. Johannes Brandl, Berlin.",
  },
} as const;
