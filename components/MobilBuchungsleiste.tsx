import { praxis, telefonHref } from "@/content/praxis";
import { KalenderIcon, TelefonIcon } from "@/components/Icons";

/** Feste Leiste am unteren Bildschirmrand, nur auf kleinen Bildschirmen. */
export function MobilBuchungsleiste() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-hair bg-surface px-4 py-3 shadow-[0_-6px_20px_rgba(16,48,47,0.08)] md:hidden">
      <div className="mx-auto flex max-w-xl gap-2.5">
        <a
          href={praxis.doctolib}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-accent text-base font-semibold text-ground no-underline hover:text-ground"
        >
          <KalenderIcon />
          Termin buchen
          <span className="sr-only"> (öffnet Doctolib in neuem Tab)</span>
        </a>
        {praxis.telefon && (
          <a
            href={telefonHref(praxis.telefon)}
            className="flex min-h-12 w-[132px] items-center justify-center gap-2 rounded-full border border-[#c9c4b6] text-base font-medium text-ink no-underline"
          >
            <TelefonIcon />
            Anrufen
          </a>
        )}
      </div>
    </div>
  );
}
