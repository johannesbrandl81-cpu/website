"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { istGruppe, navigation } from "@/components/navigation";

function Pfeil({ offen }: { offen: boolean }) {
  return (
    <svg
      className={`size-3.5 transition-transform ${offen ? "rotate-180" : ""}`}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      aria-hidden="true"
    >
      <path d="M4 6l4 4 4-4" />
    </svg>
  );
}

/** Desktop-Menü mit Aufklappgruppen. Öffnet bei Mausberührung und per Klick oder Tastatur. */
export function DesktopNavigation() {
  const [offen, setOffen] = useState<string | null>(null);
  const wurzel = useRef<HTMLUListElement>(null);

  // Mit Escape oder Klick außerhalb schließen.
  useEffect(() => {
    if (!offen) return;
    const beiTaste = (e: KeyboardEvent) => e.key === "Escape" && setOffen(null);
    const beiKlick = (e: MouseEvent) => {
      if (wurzel.current && !wurzel.current.contains(e.target as Node)) setOffen(null);
    };
    window.addEventListener("keydown", beiTaste);
    window.addEventListener("mousedown", beiKlick);
    return () => {
      window.removeEventListener("keydown", beiTaste);
      window.removeEventListener("mousedown", beiKlick);
    };
  }, [offen]);

  const linkKlasse = "text-[15px] whitespace-nowrap text-[#2a4442] no-underline hover:text-accent";

  return (
    <ul ref={wurzel} className="flex items-center gap-5 xl:gap-7">
      {navigation.map((eintrag) =>
        istGruppe(eintrag) ? (
          <li
            key={eintrag.label}
            className="relative"
            onMouseEnter={() => setOffen(eintrag.label)}
            onMouseLeave={() => setOffen(null)}
          >
            <button
              type="button"
              aria-expanded={offen === eintrag.label}
              aria-controls={`menue-${eintrag.label}`}
              onClick={() => setOffen(offen === eintrag.label ? null : eintrag.label)}
              className={`inline-flex items-center gap-1.5 ${linkKlasse} ${offen === eintrag.label ? "text-accent" : ""}`}
            >
              {eintrag.label}
              <Pfeil offen={offen === eintrag.label} />
            </button>
            {offen === eintrag.label && (
              // pt-3 überbrückt den Abstand zum Knopf, damit das Menü beim Hineinfahren offen bleibt
              <div id={`menue-${eintrag.label}`} className="absolute top-full left-1/2 z-50 -translate-x-1/2 pt-3">
                <ul className="w-[320px] rounded border border-hair bg-surface p-2 shadow-[0_16px_40px_rgba(16,48,47,0.12)]">
                  {eintrag.kinder.map((k) => (
                    <li key={k.href}>
                      <Link
                        href={k.href}
                        onClick={() => setOffen(null)}
                        className="flex flex-col gap-0.5 rounded-sm px-4 py-3 text-ink no-underline hover:bg-sand hover:text-ink"
                      >
                        <span className="text-[15px] font-medium">{k.label}</span>
                        {k.hinweis && <span className="text-[13px] text-muted">{k.hinweis}</span>}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ) : (
          <li key={eintrag.href}>
            <Link href={eintrag.href} className={linkKlasse}>
              {eintrag.label}
            </Link>
          </li>
        ),
      )}
    </ul>
  );
}
