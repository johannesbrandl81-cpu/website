import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { leistungen, selbstzahlerKasse, type Posten } from "@/content/leistungen";
import { BuchenButton, Container, Eyebrow, Platzhalter, TelefonButton } from "@/components/ui";

export const metadata: Metadata = {
  title: "Kosten",
  description:
    "Kosten nach GOÄ: neurologische Untersuchung als Selbstzahler (Erstgespräch, Gedächtnistestung, Nervenmessung, EEG, Ultraschall) sowie Selbstzahlerleistungen wie Ketamintherapie, Botulinumtoxin-Therapie und Infusionen.",
};

/** Preistabelle für eine Gruppe von Posten. */
function Preistabelle({ titel, posten }: { titel: string; posten: Posten[] }) {
  return (
    <table className="w-full text-[17px]">
      <caption className="sr-only">Preise {titel}</caption>
      <tbody>
        {posten.map((p) => (
          <tr key={p.name} className="border-t border-hair-soft">
            <th scope="row" className="px-5 py-3.5 text-left font-normal md:px-6">
              {p.name}
            </th>
            <td className="px-5 py-3.5 text-right whitespace-nowrap md:px-6">
              {p.preis ? <span className="font-medium">{p.preis}</span> : <Platzhalter>Betrag</Platzhalter>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Kasten({ id, titel, children }: { id?: string; titel: string; children: ReactNode }) {
  return (
    <div id={id} className="scroll-mt-28 overflow-hidden rounded border border-hair bg-surface">
      <div className="flex min-h-16 items-center justify-between gap-4 bg-sand px-5 py-3 md:px-6">
        <h3 className="font-serif text-[21px] leading-tight font-normal md:text-[23px]">{titel}</h3>
      </div>
      {children}
    </div>
  );
}

export default function KostenSeite() {
  return (
    <>
      <section className="pt-12 pb-8 md:pt-16 md:pb-10">
        <Container className="max-w-[880px] md:px-0">
          <nav aria-label="Brotkrumen" className="text-sm text-muted">
            <Link href="/" className="text-muted">
              Startseite
            </Link>
            <span aria-hidden="true" className="mx-2">/</span>
            <span className="text-ink">Kosten</span>
          </nav>
          <h1 className="mt-4 font-serif text-[40px] leading-tight font-normal md:text-[52px]">Kosten</h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-2">
            Alle Leistungen auf dieser Seite werden nach der Gebührenordnung für Ärzte (GOÄ) abgerechnet. Die Beträge
            sind Richtwerte und können je nach Aufwand abweichen.
          </p>
          <ul className="mt-6 flex flex-col gap-2 text-[17px] sm:flex-row sm:gap-6">
            <li>
              <a href="#selbstzahler" className="font-medium">
                Neurologische Untersuchung als Selbstzahler
              </a>
            </li>
            <li>
              <a href="#igel" className="font-medium">
                Selbstzahlerleistungen (IGeL)
              </a>
            </li>
          </ul>
        </Container>
      </section>

      <section id="selbstzahler" className="scroll-mt-24 pb-12 md:pb-16">
        <Container className="flex max-w-[880px] flex-col gap-5 md:px-0">
          <div>
            <Eyebrow>Ohne Kassentermin</Eyebrow>
            <h2 className="mt-2 font-serif text-3xl leading-tight font-normal md:text-[36px]">
              Neurologische Untersuchung als Selbstzahler
            </h2>
            <p className="mt-3 text-[17px] leading-relaxed text-ink-2">
              Falls in der Kassensprechstunde kein Termin mehr frei ist, können Sie sich auch als Selbstzahler
              untersuchen und behandeln lassen. Die Kosten tragen Sie in diesem Fall selbst.
            </p>
          </div>
          <Kasten titel="Untersuchung und Diagnostik">
            <Preistabelle titel="Untersuchung und Diagnostik" posten={selbstzahlerKasse} />
          </Kasten>
        </Container>
      </section>

      <section id="igel" className="scroll-mt-24 pb-12 md:pb-16">
        <Container className="flex max-w-[880px] flex-col gap-5 md:px-0">
          <div>
            <Eyebrow>IGeL</Eyebrow>
            <h2 className="mt-2 font-serif text-3xl leading-tight font-normal md:text-[36px]">
              Selbstzahlerleistungen
            </h2>
            <p className="mt-3 text-[17px] leading-relaxed text-ink-2">
              Diese Leistungen gehören nicht zum Leistungskatalog der gesetzlichen Krankenversicherung.
            </p>
          </div>
          {leistungen.map((l) => (
            <Kasten key={l.id} id={l.id} titel={l.titel}>
              {l.text && (
                <p className="border-t border-hair-soft px-5 py-5 text-[17px] leading-relaxed text-ink-2 md:px-6">
                  {l.text}
                  {l.weiterLink && (
                    <>
                      {" "}
                      <Link href={l.weiterLink.href} className="font-medium">
                        {l.weiterLink.label}
                      </Link>
                    </>
                  )}
                </p>
              )}
              {l.posten.length > 0 && <Preistabelle titel={l.titel} posten={l.posten} />}
            </Kasten>
          ))}
        </Container>
      </section>

      <section className="pb-14 md:pb-[72px]">
        <Container className="max-w-[880px] md:px-0">
          <div className="flex flex-col gap-3 rounded border border-hair bg-sand p-6 md:p-8">
            <h2 className="text-xl font-semibold">Hinweise</h2>
            <p className="text-[17px] leading-relaxed text-ink-2">
              Alle Beträge in Euro. <Platzhalter>Weitere Hinweise zur Abrechnung, z. B. Zahlungsarten</Platzhalter>
            </p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <BuchenButton />
              <TelefonButton />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
