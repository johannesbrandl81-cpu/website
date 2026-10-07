import Link from "next/link";
import { FachIcon } from "@/components/Icons";
import { selbstzahlerKasse } from "@/content/leistungen";
import type { Fachkarte as FachkarteDaten } from "@/content/neurologie";

function selbstzahlerPreis(name?: string) {
  return name ? (selbstzahlerKasse.find((p) => p.name === name)?.preis ?? null) : null;
}

/** Karte für Behandlungsgebiete (Startseite) und Untersuchungen (Unterseite). */
export function Fachkarte({ karte, className = "" }: { karte: FachkarteDaten; className?: string }) {
  const preis = selbstzahlerPreis(karte.selbstzahlerPosten);
  return (
    <li id={karte.id} className={`flex scroll-mt-28 flex-col gap-3 rounded border border-hair bg-surface p-6 md:p-7 ${className}`}>
      <span className="flex size-11 items-center justify-center rounded-full bg-accent-soft text-accent">
        <FachIcon name={karte.icon} />
      </span>
      <h3 className="font-serif text-[22px] leading-tight font-normal hyphens-auto md:text-2xl">{karte.titel}</h3>
      <p className="text-base leading-relaxed text-ink-2">{karte.text}</p>
      {preis && (
        <Link href="/kosten#selbstzahler" className="mt-auto pt-1 text-[15px] font-medium">
          Als Selbstzahler: {preis}
        </Link>
      )}
    </li>
  );
}
