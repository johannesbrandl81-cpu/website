import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { PfeilIcon } from "@/components/Icons";
import { ketamin } from "@/content/ketamin";
import { leistungen } from "@/content/leistungen";
import { praxis } from "@/content/praxis";
import { ueberMich } from "@/content/ueber-mich";
import {
  BuchenButton,
  Container,
  Eyebrow,
  KiEtikett,
  Platzhalter,
  Punktliste,
  TelefonButton,
} from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { seo } from "@/content/seo";
import { brotkrumenJsonLd, medizinischeSeiteJsonLd, seitenMetadaten } from "@/lib/seo";

export const metadata: Metadata = seitenMetadaten(seo.ketamintherapie, "/ketamintherapie");

/** Zeigt den Wert oder einen Platzhalter. */
function Wert({ wert, platzhalter }: { wert: string | null; platzhalter: string }) {
  return wert ? <>{wert}</> : <Platzhalter>{platzhalter}</Platzhalter>;
}

const ketaminPosten = leistungen.find((l) => l.id === "ketamintherapie")?.posten ?? [];

export default function KetamintherapieSeite() {
  const a = ketamin.ablauf;
  const w = ketamin.wirkung;
  const v = ketamin.vertraeglichkeit;
  const pt = ketamin.psychotherapeutin;

  const schritte: { nr: string; titel: string; text: ReactNode }[] = [
    {
      nr: "01",
      titel: "Vorgespräch",
      text: "Anamnese, Durchsicht Ihrer Befunde, Klärung der Eignung und ausführliche Aufklärung.",
    },
    {
      nr: "02",
      titel: "Infusion",
      text: `Sie erhalten Ketamin als Infusion über ${a.dauerInfusion}. Währenddessen werden Ihre Vitalwerte kontrolliert.`,
    },
    {
      nr: "03",
      titel: "Nachbeobachtung",
      text: `Nach der Infusion bleiben Sie noch ${a.dauerNachbeobachtung} in der Praxis.`,
    },
    {
      nr: "04",
      titel: "Begleitung",
      text: (
        <>
          Begleitend finden Gespräche mit <Wert wert={pt.name} platzhalter="Name der Psychotherapeutin" /> statt.
        </>
      ),
    },
  ];

  return (
    <>
      <JsonLd
        daten={[
          brotkrumenJsonLd("Ketamintherapie", "/ketamintherapie"),
          medizinischeSeiteJsonLd({
            name: seo.ketamintherapie.titel,
            beschreibung: seo.ketamintherapie.beschreibung,
            pfad: "/ketamintherapie",
            thema: { "@type": "MedicalTherapy", name: "Ketamintherapie als Infusion" },
          }),
        ]}
      />
      {/* Einstieg */}
      <section className="py-12 md:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-[620px_minmax(0,1fr)] lg:gap-16">
          <div className="flex flex-col gap-4">
            <nav aria-label="Brotkrumen" className="text-sm text-muted">
              <Link href="/" className="text-muted">
                Startseite
              </Link>
              <span aria-hidden="true" className="mx-2">/</span>
              <span className="text-ink">Ketamintherapie</span>
            </nav>
            <Eyebrow>Selbstzahlerleistung</Eyebrow>
            <h1 className="font-serif text-[40px] leading-[1.05] font-normal tracking-[-0.01em] md:text-[58px]">
              Ketamin-gestützte Psychotherapie
            </h1>
            <p className="text-lg leading-relaxed text-ink-2">{ketamin.einleitung}</p>
            <div className="mt-1 flex flex-col gap-3 sm:flex-row">
              <BuchenButton className="min-h-[54px] px-7">Vorgespräch buchen</BuchenButton>
              <TelefonButton className="min-h-[54px] px-7" />
            </div>
          </div>
          {/* KI-generiert. unoptimized: Die Bildoptimierung würde die KI-Kennzeichnung in den Metadaten entfernen. */}
          <figure className="relative h-64 overflow-hidden rounded border border-hair bg-sand-2 md:h-[380px]">
            <Image
              src="/bilder/ketamin-behandlungsraum.jpg"
              alt="KI-generierte Illustration: Behandlungsraum mit Infusionsständer und Infusionspumpe"
              fill
              unoptimized
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[60%_center]"
            />
            <KiEtikett />
          </figure>
        </Container>
      </section>

      {/* Was ist Ketamin */}
      <section className="border-t border-hair pt-14 md:pt-[88px]">
        <Container className="flex flex-col gap-4">
          <h2 className="font-serif text-3xl leading-tight font-normal md:text-[34px]">Was ist Ketamin?</h2>
          <p className="max-w-3xl text-lg leading-relaxed text-ink-2">{ketamin.wasIst}</p>
        </Container>
      </section>

      {/* Wie wirkt die Ketamintherapie (Text von Dr. Brandl) */}
      <section className="py-14 md:py-[88px]">
        <Container className="flex flex-col gap-8">
          <div className="flex max-w-3xl flex-col gap-4">
            <h2 className="font-serif text-3xl leading-tight font-normal md:text-[42px]">{w.titel}</h2>
            <p className="text-lg leading-relaxed text-ink-2">{w.einleitung}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {[w.biologisch, w.psychotherapeutisch].map((block) => (
              <Kasten key={block.titel} titel={block.titel}>
                <Stichpunkte punkte={block.punkte} />
              </Kasten>
            ))}
          </div>
          <div className="flex flex-col gap-3.5 rounded border border-[#c9d8d5] bg-accent-soft p-6 md:p-[30px]">
            <h3 className="font-serif text-2xl leading-tight font-normal md:text-[28px]">{w.infusion.titel}</h3>
            <p className="text-[17px] leading-relaxed text-ink-2">{w.infusion.einleitung}</p>
            <Stichpunkte punkte={w.infusion.punkte} />
          </div>
        </Container>
      </section>

      {/* Für wen */}
      <section className="border-y border-hair bg-sand py-14 md:py-[88px]">
        <Container className="grid gap-10 lg:grid-cols-[500px_minmax(0,1fr)] lg:gap-16">
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-3xl leading-tight font-normal md:text-[36px]">
              Für wen kommt die Behandlung in Frage?
            </h2>
            <p className="text-lg leading-relaxed text-ink-2">{ketamin.fuerWen}</p>
          </div>
          <div className="flex flex-col gap-3.5">
            <h3 className="eyebrow-muted">Anwendungsgebiete</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {ketamin.anwendungsgebiete.map((g) => (
                <li key={g} className="flex min-h-[58px] items-center rounded border border-hair bg-surface px-5 text-[17px]">
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Ablauf */}
      <section className="py-14 md:py-24">
        <Container>
          <h2 className="font-serif text-3xl leading-tight font-normal md:text-[42px]">Ablauf der Behandlung</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-2">
            {a.einleitung} {a.nachhaltigkeit}
          </p>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {schritte.map((s) => (
              <li key={s.nr} className="flex flex-col gap-3 border-t-2 border-[#c9d8d5] pt-5">
                <span className="font-serif text-[38px] leading-none text-accent" aria-hidden="true">
                  {s.nr}
                </span>
                <h3 className="text-[19px] font-semibold">{s.titel}</h3>
                <p className="text-base leading-relaxed text-ink-2">{s.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Ansprechpartner */}
      <section className="border-y border-hair bg-sand py-14 md:py-24">
        <Container>
          <Eyebrow>Ihre Ansprechpartner</Eyebrow>
          <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight font-normal md:text-[42px]">
            Ärztliche Behandlung und psychotherapeutische Begleitung
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-2">{ketamin.begleitung}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
            <Person
              name={praxis.arzt}
              beruf={praxis.fachrichtung}
              text={ueberMich}
              foto={{ ...praxis.foto, alt: praxis.arzt }}
              aufgaben={["Vorgespräch", "Durchführung der Infusion", "Ärztliche Überwachung"]}
            />
            <Person
              name={<Wert wert={pt.name} platzhalter="Name der Psychotherapeutin" />}
              beruf={<Wert wert={pt.beruf} platzhalter="Berufsbezeichnung" />}
              text={<Wert wert={pt.text} platzhalter="Kurzer Text zu Person, Qualifikation und Arbeitsweise" />}
              foto={{ ...pt.foto, alt: pt.name ?? "Psychotherapeutin" }}
              aufgaben={["Vorbereitung", "Begleitung", "Integration"]}
              link={{ href: pt.website, label: `Zur Website von ${pt.name ?? "der Psychotherapeutin"}` }}
            />
          </div>
        </Container>
      </section>

      {/* Verträglichkeit (Einleitung und zwei Kästen: Text von Dr. Brandl) */}
      <section className="py-14 md:py-24">
        <Container className="flex flex-col gap-4">
          <h2 className="font-serif text-3xl leading-tight font-normal md:text-[42px]">{v.titel}</h2>
          {v.einleitung.map((absatz) => (
            <p key={absatz} className="max-w-3xl text-lg leading-relaxed text-ink-2">
              {absatz}
            </p>
          ))}
          <div className="mt-6 grid gap-5 md:grid-cols-2 md:gap-6">
            <Kasten titel={v.begleiterscheinungen.titel}>
              <p className="text-base leading-relaxed text-ink-2">{v.begleiterscheinungen.text}</p>
            </Kasten>
            <Kasten titel={v.steuerung.titel}>
              <p className="text-base leading-relaxed text-ink-2">{v.steuerung.text}</p>
            </Kasten>
            <Kasten titel="Wann keine Behandlung erfolgt">
              <Punktliste punkte={ketamin.keineBehandlung} />
            </Kasten>
            <Kasten titel="Am Behandlungstag">
              <Punktliste
                punkte={[
                  ...ketamin.behandlungstag,
                  <Platzhalter key="essen">Hinweise zu Essen und Trinken vor der Infusion</Platzhalter>,
                ]}
              />
            </Kasten>
          </div>
        </Container>
      </section>

      {/* Off-Label und Kosten */}
      <section className="pb-14 md:pb-[72px]">
        <Container className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-8">
          <div className="flex flex-col gap-3 rounded border border-hair bg-sand p-6 md:p-8">
            <h2 className="text-[19px] font-semibold">Hinweis zum Off-Label-Use</h2>
            <p className="text-[17px] leading-relaxed text-ink-2">{ketamin.offLabel}</p>
          </div>
          <div className="flex flex-col gap-3 rounded border border-hair bg-surface p-6 md:p-8">
            <h2 className="text-[19px] font-semibold">Kosten</h2>
            <p className="text-base text-ink-2">Die Ketamintherapie ist eine Selbstzahlerleistung.</p>
            <dl className="border-y border-hair-soft">
              {ketaminPosten.map((p) => (
                <div key={p.name} className="flex justify-between gap-4 py-2.5 text-base [&+&]:border-t [&+&]:border-hair-soft">
                  <dt className="text-ink-2">{p.name}</dt>
                  <dd className="font-medium whitespace-nowrap">{p.preis ?? <Platzhalter>Betrag</Platzhalter>}</dd>
                </div>
              ))}
            </dl>
            <Link href="/kosten" className="text-[15px] font-medium">
              Alle Preise ansehen
            </Link>
          </div>
        </Container>
      </section>

      {/* Krisenhinweis */}
      <section className="pb-14 md:pb-16">
        <Container>
          <div className="flex flex-col gap-2 rounded border border-hair p-5 md:flex-row md:items-center md:gap-5 md:px-6">
            <p className="shrink-0 text-base font-semibold">In einer akuten Krise</p>
            <p className="text-base leading-relaxed text-ink-2">{ketamin.krise}</p>
          </div>
        </Container>
      </section>

      {/* Termin */}
      <section className="bg-night py-14 text-on-night md:py-20">
        <Container className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_380px] md:gap-16">
          <div className="flex flex-col gap-3.5">
            <h2 className="font-serif text-3xl leading-tight font-normal md:text-[40px]">Vorgespräch vereinbaren</h2>
            <p className="text-lg leading-relaxed text-on-night-2">
              Termine für das Vorgespräch können Sie online über Doctolib oder telefonisch vereinbaren.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <BuchenButton variante="hell" className="min-h-[54px]" />
            <TelefonButton variante="dunkelRand" className="min-h-[54px]" />
          </div>
        </Container>
      </section>
    </>
  );
}

function Person({
  name,
  beruf,
  text,
  aufgaben,
  foto,
  link,
}: {
  name: ReactNode;
  beruf: ReactNode;
  text: ReactNode;
  aufgaben: string[];
  foto?: { src: string; width: number; height: number; alt: string };
  link?: { href: string; label: string };
}) {
  return (
    <article className="flex flex-col gap-5 rounded border border-hair bg-surface p-6 md:p-[34px]">
      <div className="flex items-center gap-5">
        {foto ? (
          <Image
            src={foto.src}
            alt={foto.alt}
            width={208}
            height={208}
            className="size-[104px] shrink-0 rounded-full border border-hair object-cover"
          />
        ) : (
          <div
            role="img"
            aria-label="Platzhalter für Porträtfoto"
            className="flex size-[104px] shrink-0 items-center justify-center rounded-full border border-dashed border-[#b9af97] bg-sand-2 text-xs text-[#7e7359]"
          >
            Foto
          </div>
        )}
        <div className="flex flex-col gap-1.5">
          <h3 className="font-serif text-2xl leading-tight font-normal md:text-[27px]">{name}</h3>
          <p className="text-base font-medium text-accent">{beruf}</p>
        </div>
      </div>
      <p className="text-[17px] leading-relaxed text-ink-2">{text}</p>
      {link && (
        <a href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 self-start text-[15px] font-medium">
          {link.label}
          <PfeilIcon />
          <span className="sr-only"> (neuer Tab)</span>
        </a>
      )}
      <div className="mt-auto flex flex-col gap-2.5">
        <h4 className="eyebrow-muted">Aufgaben in der Behandlung</h4>
        <ul className="flex flex-wrap gap-2">
          {aufgaben.map((a) => (
            <li key={a} className="rounded-full bg-accent-soft px-3.5 py-2 text-[15px] text-[#1f4442]">
              {a}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/** Aufzählung mit fettem Stichwort am Anfang jedes Punkts. */
function Stichpunkte({ punkte }: { punkte: { stichwort: string; text: string }[] }) {
  return (
    <ul className="flex flex-col gap-3.5">
      {punkte.map((p) => (
        <li key={p.stichwort} className="flex items-start gap-2.5 text-base leading-relaxed text-ink-2">
          <span className="mt-[0.7em] size-[5px] shrink-0 rounded-full bg-leaf" aria-hidden="true" />
          <span>
            <strong className="font-semibold text-ink">{p.stichwort}:</strong> {p.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Kasten({ titel, children }: { titel: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3.5 rounded border border-hair bg-surface p-6 md:p-[30px]">
      <h3 className="text-[19px] font-semibold">{titel}</h3>
      {children}
    </div>
  );
}
