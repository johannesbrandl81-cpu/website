import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PfeilIcon } from "@/components/Icons";
import { partner, studien, studienStand, type Studie } from "@/content/studien";
import { BuchenButton, Container, Eyebrow, KiEtikett, Punktliste } from "@/components/ui";

export const metadata: Metadata = {
  title: "Klinische Studien",
  description:
    "Klinische Studien in Berlin in Zusammenarbeit mit FutureMeds: Depressionen, Polyneuropathie, Insomnie, Narkolepsie. Informationen zur Teilnahme.",
};

function Eckdaten({ studie }: { studie: Studie }) {
  const zeilen = [
    { label: "Studienstart", wert: studie.start },
    { label: "Standort", wert: studie.standort },
    { label: "Alter", wert: studie.alter },
    { label: "Aufwandsentschädigung", wert: studie.aufwandsentschaedigung },
  ].filter((z) => z.wert);
  if (zeilen.length === 0) return null;
  return (
    <dl className="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-hair-soft pt-4">
      {zeilen.map((z) => (
        <div key={z.label}>
          <dt className="text-[13px] tracking-[0.04em] text-muted">{z.label}</dt>
          <dd className="text-base font-medium">{z.wert}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function StudienSeite() {
  return (
    <>
      <section className="pt-12 pb-10 md:pt-16 md:pb-14">
        <Container className="max-w-[880px] md:px-0">
          <nav aria-label="Brotkrumen" className="text-sm text-muted">
            <Link href="/" className="text-muted">
              Startseite
            </Link>
            <span aria-hidden="true" className="mx-2">/</span>
            <span className="text-ink">Studien</span>
          </nav>
          <h1 className="mt-4 font-serif text-[40px] leading-tight font-normal md:text-[52px]">Klinische Studien</h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-2">
            Die Praxis arbeitet mit dem Studienzentrum {partner.name} in Berlin zusammen. Wenn Sie Interesse an einer
            Teilnahme haben, sprechen Sie uns an. Wir stellen gern den Kontakt her.
          </p>
          <Punktliste
            className="mt-6"
            punkte={[
              "Die Teilnahme ist freiwillig und kann jederzeit beendet werden.",
              "Ob Sie teilnehmen können, prüft das Studienzentrum.",
              `Durchführung und Betreuung der Studie liegen bei ${partner.name}.`,
              "Eine Aufwandsentschädigung gibt es, wenn vorgesehen, nur bei tatsächlicher Teilnahme.",
            ]}
          />
        </Container>
      </section>

      <section className="border-t border-hair bg-sand py-14 md:py-[72px]">
        <Container className="max-w-[880px] md:px-0">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <Eyebrow>Aktuelle Studien</Eyebrow>
            <p className="text-sm text-muted">Stand: {studienStand}</p>
          </div>
          <ul className="mt-6 flex flex-col gap-4">
            {studien.map((s) => (
              <li
                key={s.id}
                id={s.id}
                className={`scroll-mt-28 overflow-hidden rounded border border-hair bg-surface ${s.bild ? "md:grid md:grid-cols-[300px_minmax(0,1fr)]" : ""}`}
              >
                {s.bild && (
                  <figure className="relative">
                    <Image
                      src={s.bild.src}
                      alt={s.bild.alt}
                      width={s.bild.width}
                      height={s.bild.height}
                      // unoptimized: Die Optimierung von Next.js würde die KI-Kennzeichnung in den Metadaten entfernen.
                      unoptimized
                      className="aspect-[16/9] w-full object-cover md:aspect-auto md:h-full"
                    />
                    {/* Sichtbare Kennzeichnung nach EU AI Act, Art. 50 */}
                    <figcaption>
                      <KiEtikett />
                    </figcaption>
                  </figure>
                )}
                <div className="flex flex-col gap-3.5 p-6 md:p-7">
                  <h2 className="font-serif text-2xl leading-tight font-normal hyphens-auto md:text-[26px]">{s.titel}</h2>
                  <p className="text-base leading-relaxed text-ink-2">{s.text}</p>
                  <Eckdaten studie={s} />
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 self-start pt-1 text-[15px] font-medium"
                  >
                    Zur Studie bei {partner.name}
                    <PfeilIcon />
                    <span className="sr-only"> (neuer Tab)</span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            Die Bilder auf dieser Seite wurden mit künstlicher Intelligenz erzeugt. Sie zeigen keine realen Personen und
            keine Patientinnen oder Patienten der Praxis.
          </p>
        </Container>
      </section>

      <section className="py-14 md:py-[72px]">
        <Container className="max-w-[880px] md:px-0">
          <div className="flex flex-col gap-4 rounded border border-hair bg-surface p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <h2 className="font-serif text-[26px] leading-tight font-normal">Interesse an einer Studie?</h2>
              <p className="mt-1.5 text-base text-ink-2">
                Sprechen Sie uns beim nächsten Termin an oder melden Sie sich direkt bei {partner.name}.
              </p>
            </div>
            <BuchenButton className="shrink-0">Termin vereinbaren</BuchenButton>
          </div>
        </Container>
      </section>
    </>
  );
}
