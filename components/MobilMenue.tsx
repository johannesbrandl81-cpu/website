"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MenueIcon, SchliessenIcon } from "@/components/Icons";
import { istGruppe, navigation } from "@/components/navigation";

export function MobilMenue() {
  const [offen, setOffen] = useState(false);

  // Mit Escape schließen, solange das Menü offen ist.
  useEffect(() => {
    if (!offen) return;
    const beiTaste = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOffen(false);
    };
    window.addEventListener("keydown", beiTaste);
    return () => window.removeEventListener("keydown", beiTaste);
  }, [offen]);

  return (
    <div>
      <button
        type="button"
        aria-expanded={offen}
        aria-controls="mobil-navigation"
        aria-label={offen ? "Menü schließen" : "Menü öffnen"}
        onClick={() => setOffen((o) => !o)}
        className="-mr-2 flex size-12 items-center justify-center text-ink"
      >
        {offen ? <SchliessenIcon /> : <MenueIcon />}
      </button>

      {offen && (
        <nav
          id="mobil-navigation"
          aria-label="Hauptnavigation"
          className="absolute inset-x-0 top-full border-b border-hair bg-ground shadow-[0_12px_24px_rgba(16,48,47,0.08)]"
        >
          <div className="mx-auto flex max-h-[calc(100dvh-72px)] max-w-6xl flex-col overflow-y-auto px-5 pt-2 pb-5">
            {navigation.map((eintrag) =>
              istGruppe(eintrag) ? (
                <div key={eintrag.label} className="border-b border-hair-soft py-3">
                  <p className="eyebrow-muted">{eintrag.label}</p>
                  <ul className="mt-1 flex flex-col">
                    {eintrag.kinder.map((k) => (
                      <li key={k.href}>
                        <Link
                          href={k.href}
                          onClick={() => setOffen(false)}
                          className="flex min-h-12 items-center text-lg text-ink no-underline"
                        >
                          {k.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  key={eintrag.href}
                  href={eintrag.href}
                  onClick={() => setOffen(false)}
                  className="flex min-h-14 items-center border-b border-hair-soft text-lg text-ink no-underline"
                >
                  {eintrag.label}
                </Link>
              ),
            )}
            <p className="mt-4 flex gap-5 text-sm">
              <Link href="/impressum" onClick={() => setOffen(false)} className="text-muted">
                Impressum
              </Link>
              <Link href="/datenschutz" onClick={() => setOffen(false)} className="text-muted">
                Datenschutz
              </Link>
            </p>
          </div>
        </nav>
      )}
    </div>
  );
}
