/** Hauptnavigation: zwei Gruppen mit Aufklappmenü, dazu zwei direkte Links. */

export type NavLink = { href: string; label: string; hinweis?: string };
export type NavGruppe = { label: string; kinder: NavLink[] };
export type NavEintrag = NavLink | NavGruppe;

export const navigation: NavEintrag[] = [
  {
    label: "Neurologie",
    kinder: [
      { href: "/#neurologie", label: "Behandlungsgebiete", hinweis: "Kopfschmerz, Schwindel, Nerven, Parkinson und mehr" },
      { href: "/untersuchungen", label: "Untersuchungen und Vorbereitung", hinweis: "EEG, ENG/NLG, EMG, Ultraschall und mehr" },
      { href: "/studien", label: "Klinische Studien", hinweis: "In Zusammenarbeit mit FutureMeds" },
    ],
  },
  {
    label: "Selbstzahler",
    kinder: [
      { href: "/#leistungen", label: "Selbstzahlerleistungen", hinweis: "Botulinumtoxin, Infusionen, Nurosym und mehr" },
      { href: "/ketamintherapie", label: "Ketamintherapie", hinweis: "Mit psychotherapeutischer Begleitung" },
      { href: "/kosten", label: "Kosten", hinweis: "Preise nach GOÄ" },
    ],
  },
  { href: "/#ueber-mich", label: "Über mich" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function istGruppe(e: NavEintrag): e is NavGruppe {
  return "kinder" in e;
}
