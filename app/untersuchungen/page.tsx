import type { Metadata } from "next";
import Link from "next/link";
import { Fachkarte } from "@/components/Fachkarte";
import { PfeilIcon } from "@/components/Icons";
import { einleitungUntersuchungen, mitbringen, untersuchungen, vorbereitungJeUntersuchung } from "@/content/neurologie";
import { BuchenButton, Container, Eyebrow, Punktliste, TelefonButton } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { seo } from "@/content/seo";
import { brotkrumenJsonLd, medizinischeSeiteJsonLd, seitenMetadaten } from "@/lib/seo";

export const metadata: Metadata = seitenMetadaten(seo.untersuchungen, "/untersuchungen");

export default function UntersuchungenSeite() {
  return (
    <>
      <JsonLd
        daten={[
          brotkrumenJsonLd("Untersuchungen", "/untersuchungen"),
          medizinischeSeiteJsonLd({
            name: seo.untersuchungen.titel,
            beschreibung: seo.untersuchungen.beschreibung,
            pfad: "/untersuchungen",
            thema: untersuchungen.map((u) => ({ "@type": "DiagnosticProcedure", name: u.titel })),
          }),
        ]}
      />
      <section className="pt-12 pb-10 md:pt-16 md:pb-14">
        <Container>
          <nav aria-label="Brotkrumen" className="text-sm text-muted">
            <Link href="/" className="text-muted">
              Startseite
            </Link>
            <span aria-hidden="true" className="mx-2">/</span>
            <span className="text-ink">Untersuchungen</span>
          </nav>
          <h1 className="mt-4 font-serif text-[40px] leading-tight font-normal md:text-[54px]">
            Untersuchungen und Vorbereitung
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-2">{einleitungUntersuchungen}</p>
          <ul className="mt-6 flex flex-col gap-2 text-[17px] sm:flex-row sm:gap-6">
            <li>
              <Link href="/#neurologie" className="font-medium">Behandlungsgebiete</Link>
            </li>
            <li>
              <a href="#untersuchungen" className="font-medium">Untersuchungsmethoden</a>
            </li>
            <li>
              <a href="#vorbereitung" className="font-medium">Vorbereitung auf den Termin</a>
            </li>
          </ul>
        </Container>
      </section>

      <section id="untersuchungen" className="scroll-mt-24 border-y border-hair bg-sand py-14 md:py-[88px]">
        <Container>
          <Eyebrow>Diagnostik in der Praxis</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl leading-tight font-normal md:text-[40px]">Untersuchungsmethoden</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {untersuchungen.map((k) => (
              <Fachkarte key={k.id} karte={k} />
            ))}
          </ul>
          <p className="mt-8 text-[17px] text-ink-2">
            Die Preise bei Behandlung als Selbstzahler finden Sie auf der Seite{" "}
            <Link href="/kosten#selbstzahler" className="font-medium">
              Kosten
            </Link>
            .
          </p>
        </Container>
      </section>

      <section id="vorbereitung" className="scroll-mt-24 py-14 md:py-[88px]">
        <Container className="grid gap-10 lg:grid-cols-[400px_minmax(0,1fr)] lg:gap-16">
          <div className="flex flex-col gap-4">
            <Eyebrow>Ihr Termin</Eyebrow>
            <h2 className="font-serif text-3xl leading-tight font-normal md:text-[40px]">Vorbereitung auf den Termin</h2>
            <h3 className="eyebrow-muted mt-4">Bitte mitbringen</h3>
            <Punktliste punkte={mitbringen} className="[&_li]:text-[17px]" />
          </div>
          <div>
            <h3 className="eyebrow-muted">Hinweise zu einzelnen Untersuchungen</h3>
            <dl className="mt-4 border-t border-hair">
              {vorbereitungJeUntersuchung.map((v) => (
                <div key={v.titel} className="grid gap-1.5 border-b border-hair py-4 sm:grid-cols-[170px_minmax(0,1fr)] sm:gap-6">
                  <dt className="font-serif text-xl leading-snug">{v.titel}</dt>
                  <dd className="text-base leading-relaxed text-ink-2">{v.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section className="pb-14 md:pb-[88px]">
        <Container>
          <div className="flex flex-col gap-4 rounded border border-hair bg-sand p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <h2 className="font-serif text-[26px] leading-tight font-normal">Termin vereinbaren</h2>
              <p className="mt-1.5 text-base text-ink-2">Online über Doctolib, auch für Neupatient:innen.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <BuchenButton />
              <TelefonButton />
            </div>
          </div>
          <p className="mt-6">
            <Link href="/#neurologie" className="inline-flex items-center gap-2 text-[17px] font-medium">
              Zurück zu den Behandlungsgebieten
              <PfeilIcon />
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
}
