import type { ReactNode } from "react";
import { praxis, telefonHref } from "@/content/praxis";
import { KalenderIcon, TelefonIcon } from "@/components/Icons";

/** Einheitliche Inhaltsbreite (1152 px) mit Seitenabstand. */
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 md:px-8 ${className}`}>{children}</div>;
}

/**
 * Sichtbarer Platzhalter für Angaben, die noch fehlen.
 * Gewollt auffällig, damit vor dem Livegang nichts übersehen wird.
 */
export function Platzhalter({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`text-placeholder ${className}`}>[{children}]</span>;
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

type ButtonVariante = "primaer" | "sekundaer" | "hell" | "dunkelRand";

const variantenKlassen: Record<ButtonVariante, string> = {
  primaer: "bg-accent text-ground hover:bg-accent-dark hover:text-ground",
  sekundaer: "border border-[#c9c4b6] text-ink hover:border-accent hover:text-accent",
  hell: "bg-on-night text-night hover:bg-white hover:text-night",
  dunkelRand: "border border-night-border text-on-night hover:border-on-night hover:text-white",
};

const buttonBasis =
  "inline-flex items-center justify-center gap-2.5 rounded-full font-medium no-underline transition-colors min-h-12 px-6 text-base";

/** Buchungslink zu Doctolib. Öffnet in einem neuen Tab. */
export function BuchenButton({
  children = "Termin online buchen",
  variante = "primaer",
  className = "",
}: {
  children?: ReactNode;
  variante?: ButtonVariante;
  className?: string;
}) {
  return (
    <a
      href={praxis.doctolib}
      target="_blank"
      rel="noopener noreferrer"
      className={`${buttonBasis} ${variantenKlassen[variante]} ${className}`}
    >
      <KalenderIcon />
      {children}
      <span className="sr-only"> (öffnet Doctolib in neuem Tab)</span>
    </a>
  );
}

/** Anruf-Button. Solange keine Nummer hinterlegt ist, wird ein Platzhalter gezeigt. */
export function TelefonButton({
  variante = "sekundaer",
  className = "",
  label,
}: {
  variante?: ButtonVariante;
  className?: string;
  label?: string;
}) {
  if (!praxis.telefon) {
    return (
      <span className={`${buttonBasis} ${variantenKlassen[variante]} cursor-default ${className}`}>
        <TelefonIcon />
        <Platzhalter>Telefonnummer</Platzhalter>
      </span>
    );
  }
  return (
    <a href={telefonHref(praxis.telefon)} className={`${buttonBasis} ${variantenKlassen[variante]} ${className}`}>
      <TelefonIcon />
      {label ?? praxis.telefon}
    </a>
  );
}

/** Fläche für ein Foto, das noch geliefert wird. */
export function FotoPlatzhalter({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={`Platzhalter für Foto: ${label}`}
      className={`flex items-center justify-center rounded border border-[#dcd9d0] bg-sand-2 p-[7%] ${className}`}
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed border-[#b9af97] text-center">
        <span className="text-xs uppercase tracking-[0.12em] text-[#7e7359]">Foto</span>
        <span className="text-base text-[#5f5849]">{label}</span>
      </div>
    </div>
  );
}

export function Punktliste({ punkte, className = "" }: { punkte: ReactNode[]; className?: string }) {
  return (
    <ul className={`flex flex-col gap-2 ${className}`}>
      {punkte.map((p, i) => (
        <li key={i} className="flex items-start gap-2.5 text-base leading-relaxed text-ink-2">
          <span className="mt-[0.7em] size-[5px] shrink-0 rounded-full bg-leaf" aria-hidden="true" />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  );
}
/**
 * Sichtbare Kennzeichnung KI-generierter Bilder (EU AI Act, Art. 50).
 * Wird absolut im Bild positioniert; das Elternelement braucht `relative`.
 */
export function KiEtikett({ className = "bottom-2 left-2" }: { className?: string }) {
  return (
    <span
      className={`absolute z-10 rounded-sm bg-night/55 px-1.5 py-0.5 text-[11px] leading-snug text-white/90 backdrop-blur-sm ${className}`}
    >
      KI-generiert
    </span>
  );
}
