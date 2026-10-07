import type { ReactNode } from "react";

type IconProps = { className?: string };

export function KalenderIcon({ className = "size-[18px]" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </svg>
  );
}

export function TelefonIcon({ className = "size-[18px]" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
    </svg>
  );
}

export function PfeilIcon({ className = "size-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function MenueIcon({ className = "size-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function SchliessenIcon({ className = "size-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

/** Linien-Icons für Behandlungsgebiete und Untersuchungen (Seite Neurologie). */
const fachIcons: Record<string, ReactNode> = {
  // Kopf im Profil mit Blitz
  kopfschmerz: (
    <>
      <path d="M15.5 20v-3h2a1.5 1.5 0 0 0 1.5-1.5V13l1.5-.8-1.6-2.7A7 7 0 1 0 8 15.6V20" />
      <path d="M12.5 6.5l-2 3h2.5l-2 3" />
    </>
  ),
  schwindel: <path d="M12 12a1.5 1.5 0 1 1 1.5 1.5A3 3 0 1 1 10.5 9a4.5 4.5 0 1 1-1.5 7.5A6 6 0 1 1 18 6.5" />,
  // Verzweigter Nerv
  nerv: <path d="M12 3v7m0 0l-5 4m5-4l5 4M7 14v7m0-7l-3 3m3-3l3 3m7-3v7m0-7l-3 3m3-3l3 3" />,
  bewegung: <path d="M3 12c1.5-4 3-4 4.5 0s3 4 4.5 0 3-4 4.5 0 3 4 4.5 0" />,
  anfall: <path d="M3 12h4l2-6 4 12 2-6h6" />,
  // Gehirn, zwei Hälften
  gedaechtnis: (
    <>
      <path d="M12 5.5A3.5 3.5 0 0 0 5.6 6.8 3.5 3.5 0 0 0 4.5 13a3.5 3.5 0 0 0 3 5.5 3 3 0 0 0 4.5 1Z" />
      <path d="M12 5.5a3.5 3.5 0 0 1 6.4 1.3 3.5 3.5 0 0 1 1.1 6.2 3.5 3.5 0 0 1-3 5.5 3 3 0 0 1-4.5 1Z" />
    </>
  ),
  // Nervenfaser mit Markscheiden
  ms: (
    <>
      <path d="M2 12h20" />
      <rect x="4" y="9.5" width="4" height="5" rx="2.5" />
      <rect x="10" y="9.5" width="4" height="5" rx="2.5" />
      <rect x="16" y="9.5" width="4" height="5" rx="2.5" />
    </>
  ),
  gefaess: <path d="M8 3c0 6 8 6 8 12a4 4 0 0 1-8 0M8 15v6M16 3v3" />,
  // Wirbelsäule
  ruecken: (
    <>
      <rect x="9" y="2.5" width="6" height="3.5" rx="1.2" />
      <rect x="8.5" y="7.5" width="7" height="3.5" rx="1.2" />
      <rect x="8" y="12.5" width="8" height="3.5" rx="1.2" />
      <rect x="7.5" y="17.5" width="9" height="3.5" rx="1.2" />
    </>
  ),
  eeg: <path d="M3 7c2-2 3 2 5 0s3 2 5 0 3 2 5 0 2 1 3 0M3 12c2-2 3 2 5 0s3 2 5 0 3 2 5 0 2 1 3 0M3 17c2-2 3 2 5 0s3 2 5 0 3 2 5 0 2 1 3 0" />,
  strom: <path d="M2 12h6m8 0h6M13 5l-4 7h6l-4 7" />,
  muskel: <path d="M3 15h3l1.5-7 2 11 2-14 2 12 1.5-5H21" />,
  auge: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  ultraschall: (
    <>
      <path d="M5 4v16" />
      <path d="M9 8.5a5 5 0 0 1 0 7M12.5 6a8.5 8.5 0 0 1 0 12M16 3.5a12 12 0 0 1 0 17" />
    </>
  ),
  "kopf-ultraschall": (
    <>
      <circle cx="10" cy="11" r="7" />
      <path d="M18.5 8a5 5 0 0 1 0 6M21 6a8.5 8.5 0 0 1 0 10" />
    </>
  ),
  test: (
    <>
      <rect x="5" y="3.5" width="14" height="17" rx="2" />
      <path d="M8.5 9l1.5 1.5 3-3M8.5 15l1.5 1.5 3-3M15 9h1M15 15h1" />
    </>
  ),
  nadel: <path d="M19 5l-2-2m1 1l-9.5 9.5m4-4L9 6m6 6l-3-3M8.5 13.5l2 2M8.5 13.5 4 18v2h2l4.5-4.5" />,
  labor: (
    <>
      <path d="M9 3h6M10 3v6.5L5 19a1.5 1.5 0 0 0 1.3 2h11.4a1.5 1.5 0 0 0 1.3-2l-5-9.5V3" />
      <path d="M7.5 15h9" />
    </>
  ),
};

export function FachIcon({ name, className = "size-6" }: IconProps & { name: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {fachIcons[name]}
    </svg>
  );
}
