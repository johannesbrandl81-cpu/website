import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { leistungen } from "@/content/leistungen";
import { googleMapsUrl, praxis, wochentage } from "@/content/praxis";
import { begruessung, ueberMich, werdegang } from "@/content/ueber-mich";
import { behandlungsgebiete, einleitungStartseite, untersuchungen } from "@/content/neurologie";
import { Fachkarte } from "@/components/Fachkarte";
import { PfeilIcon } from "@/components/Icons";
import { KarteMitZustimmung } from "@/components/KarteMitZustimmung";
import { Logoleiste } from "@/components/Logoleiste";
import {
  BuchenButton,
  Container,
  Eyebrow,
  Freigabehinweis,
  Platzhalter,
  Punktliste,
  TelefonButton,
} from "@/components/ui";
import { startseiteBeschreibung, startseiteTitel } from "@/content/seo";
import { seitenMetadaten } from "@/lib/seo";

export const metadata: Metadata = {
  ...seitenMetadaten({ titel: startseiteTitel, beschreibung: startseiteBeschreibung }, "/"),
  title: { absolute: startseiteTitel },
};

export default function Startseite() {
  return (
    <>
      <Hero />
      <Neurologie />
      <Leistungen />
      <UeberMich />
      <Logoleiste />
      <Kontakt />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[minmax(0,640px)_minmax(0,1fr)] lg:py-28">
        <div className="flex max-w-[640px] flex-col gap-5">
          <Eyebrow>{praxis.abrechnung}</Eyebrow>
          <h1 className="font-serif text-4xl leading-[1.08] font-normal tracking-[-0.01em] md:text-[56px]">
            Neurologische Praxis in Berlin-Tempelhof
          </h1>
          <p className="text-lg leading-relaxed text-ink-2">{begruessung}</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-base text-ink-2">
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-leaf" aria-hidden="true" />
              {praxis.fachrichtung}
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-leaf" aria-hidden="true" />
              Ehemaliger Oberarzt einer neurologischen Abteilung
            </li>
          </ul>
          <div className="mt-1 flex flex-col gap-3 sm:flex-row">
            <BuchenButton className="min-h-[54px] px-7" />
            <TelefonButton className="min-h-[54px] bg-surface/85 px-7" />
          </div>
          <p className="text-sm text-ink-2">{praxis.onlineBuchung}</p>
        </div>
        <LogoBuehne />
      </Container>
    </section>
  );
}

/** Praxislogo als ruhiger Blickfang rechts im Einstieg, ab Desktop-Breite. Rein dekorativ. */
function LogoBuehne() {
  return (
    <div aria-hidden="true" className="relative mx-auto hidden aspect-square w-full max-w-[400px] lg:block">
      <div className="absolute inset-0 rounded-full bg-accent-soft" />
      <div className="absolute inset-[9%] rounded-full border border-accent/15" />
      <div className="absolute inset-[18%] rounded-full bg-surface shadow-[0_24px_60px_-24px_rgba(15,79,75,0.35)]" />
      <span className="absolute top-[13%] right-[16%] size-3 rounded-full bg-leaf" />
      <span className="absolute bottom-[17%] left-[11%] size-2 rounded-full bg-accent/30" />
      <Image
        src="/logo-kopf-petrol.png"
        alt=""
        width={276}
        height={362}
        sizes="150px"
        className="absolute top-1/2 left-1/2 h-[44%] w-auto -translate-x-[54%] -translate-y-1/2"
      />
    </div>
  );
}

function Neurologie() {
  return (
    <section id="neurologie" className="scroll-mt-20 border-t border-hair py-14 md:py-[104px]">
      <Container>
        <Eyebrow>Kasse und privat</Eyebrow>
        <h2 className="mt-3 font-serif text-3xl leading-tight font-normal md:text-[42px]">Neurologie</h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-2">{einleitungStartseite}</p>

        <Freigabehinweis className="mt-8" />
        <h3 className="eyebrow-muted mt-5">Behandlungsgebiete</h3>
        {/* Handy: wischbar wie die Selbstzahlerleistungen, ab Tablet Raster. */}
        <ul className="-mx-5 mt-4 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-3 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden">
          {behandlungsgebiete.map((k) => (
            <Fachkarte key={k.id} karte={k} className="w-[82%] shrink-0 snap-start sm:w-[60%] md:w-auto" />
          ))}
        </ul>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-12">
          <div>
            <h3 className="eyebrow-muted">Untersuchungen in der Praxis</h3>
            <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-2.5">
              {untersuchungen.map((u) => (
                <li key={u.id}>
                  <Link
                    href={`/untersuchungen#${u.id}`}
                    className="inline-flex rounded-full border border-hair bg-surface px-3.5 py-2 text-[15px] leading-snug text-ink no-underline transition-colors hover:border-accent hover:text-ink md:text-base"
                  >
                    {/* Kurzform ohne Klammerzusatz, z. B. "EEG" statt "EEG (Elektroenzephalografie)" */}
                    {u.titel.split(" (")[0]}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/untersuchungen" className="mt-5 inline-flex items-center gap-2 text-base font-medium">
              Alle Untersuchungen und Vorbereitung auf den Termin
              <PfeilIcon />
            </Link>
            <p className="mt-6 text-base leading-relaxed text-ink-2">
              Interesse an klinischen Studien, etwa zu Polyneuropathie, Depression oder Schlafstörungen?{" "}
              <Link href="/studien" className="font-medium">
                Zu den Studien
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-3 self-start rounded border border-hair bg-sand p-6 md:p-7">
            <h3 className="font-serif text-[22px] leading-tight font-normal">Kein Termin in der Kassensprechstunde frei?</h3>
            <p className="text-base leading-relaxed text-ink-2">
              Dann ist eine neurologische Untersuchung auch als Selbstzahler möglich, abgerechnet nach GOÄ.
            </p>
            <Link href="/kosten#selbstzahler" className="inline-flex items-center gap-2 self-start text-base font-medium">
              Preise ansehen
              <PfeilIcon />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Leistungen() {
  return (
    <section id="leistungen" className="scroll-mt-20 border-y border-hair bg-sand py-14 md:py-[104px]">
      <Container>
        <Eyebrow>IGeL</Eyebrow>
        <h2 className="mt-3 font-serif text-3xl leading-tight font-normal md:text-[42px]">Selbstzahlerleistungen</h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-2">
          Die folgenden Leistungen werden nicht von der gesetzlichen Krankenversicherung übernommen und nach der
          Gebührenordnung für Ärzte (GOÄ) abgerechnet.
        </p>
        {/* Handy: waagerecht wischbar, die nächste Karte schaut an der Seite hervor. Ab Tablet: Raster. */}
        <ul className="-mx-5 mt-8 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-3 [scrollbar-width:none] md:mx-0 md:mt-10 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3 lg:gap-6 [&::-webkit-scrollbar]:hidden">
          {leistungen.map((l) => {
            const posten = l.posten.filter((p) => p.aufStartseite !== false);
            return (
              <li
                key={l.id}
                id={l.id}
                className="group relative flex w-[82%] shrink-0 snap-start scroll-mt-28 flex-col gap-3.5 rounded border border-hair bg-surface p-6 transition-colors hover:border-accent sm:w-[60%] md:w-auto md:p-[30px]"
              >
                <h3 className="font-serif text-2xl leading-tight font-normal md:text-[26px]">
                  {/* Die ganze Karte ist klickbar und führt zu Details und Preisen. */}
                  <Link
                    href={`/kosten#${l.id}`}
                    className="text-ink no-underline after:absolute after:inset-0 after:rounded after:content-[''] hover:text-ink"
                  >
                    {l.titel}
                  </Link>
                </h3>
                {l.beschreibung === null && (
                  <p className="text-base leading-relaxed">
                    <Platzhalter>Kurzbeschreibung der Leistung</Platzhalter>
                  </p>
                )}
                {l.text && <p className="text-[15px] leading-relaxed text-ink-2">{l.kurztext ?? l.text}</p>}
                {!l.text && posten.length > 0 && <Punktliste punkte={posten.map((p) => p.name)} />}
                {l.weiterLink && (
                  <Link
                    href={l.weiterLink.href}
                    className="relative z-10 inline-flex items-center gap-2 self-start text-[15px] font-medium"
                  >
                    {l.weiterLink.label}
                    <PfeilIcon />
                  </Link>
                )}
                <span
                  aria-hidden="true"
                  className="mt-auto inline-flex items-center gap-2 pt-2 text-[15px] font-medium text-muted transition-colors group-hover:text-accent"
                >
                  Details und Preise
                  <PfeilIcon />
                </span>
              </li>
            );
          })}
        </ul>
        <div className="mt-8">
          <BuchenButton className="min-h-[54px] px-7" />
        </div>
      </Container>
    </section>
  );
}

function UeberMich() {
  return (
    <section id="ueber-mich" className="py-14 md:py-[104px]">
      <Container className="grid gap-10 lg:grid-cols-[480px_minmax(0,1fr)] lg:gap-[72px]">
        <div className="relative aspect-[600/538] w-full self-start overflow-hidden rounded border border-hair bg-sand-2">
          <Image
            src={praxis.foto.src}
            alt={`${praxis.arzt}, ${praxis.fachrichtung}`}
            fill
            sizes="(min-width: 1024px) 480px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-3.5">
          <Eyebrow>Über mich</Eyebrow>
          <h2 className="font-serif text-3xl leading-tight font-normal md:text-[42px]">{praxis.arzt}</h2>
          <p className="text-[17px] font-medium text-accent">{praxis.fachrichtung}</p>
          <p className="mt-1.5 text-lg leading-relaxed text-ink-2">{ueberMich}</p>

          <h3 className="eyebrow-muted mt-5">Werdegang</h3>
          <dl className="border-t border-hair">
            {werdegang.map((w) => (
              <div key={w.zeit} className="grid gap-1 border-b border-hair py-2.5 sm:grid-cols-[136px_minmax(0,1fr)] sm:gap-4">
                <dt className="text-base font-semibold sm:text-[17px]">{w.zeit}</dt>
                <dd className="text-base sm:text-[17px]">{w.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}

function Kontakt() {
  return (
    <section id="kontakt" className="bg-night py-14 text-on-night md:py-24">
      <Container>
        <p className="eyebrow text-mint">Termin und Kontakt</p>
        <h2 className="mt-3 font-serif text-3xl leading-tight font-normal md:text-[42px]">Termin vereinbaren</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
          <div className="flex flex-col gap-3.5 rounded border border-night-line bg-night-2 p-6 md:p-7">
            <h3 className="text-[19px] font-semibold">Online buchen</h3>
            <p className="text-[17px] leading-relaxed text-on-night-2">{praxis.onlineBuchung}</p>
            <div className="mt-auto pt-2">
              <BuchenButton variante="hell" />
            </div>
          </div>

          <div className="flex flex-col gap-3 rounded border border-night-line bg-night-2 p-6 md:p-7">
            <h3 className="text-[19px] font-semibold">Telefon und Sprechzeiten</h3>
            <p className="font-serif text-2xl">
              {praxis.telefon ?? <Platzhalter className="text-[#e8d9b0]">Telefonnummer</Platzhalter>}
            </p>
            <dl className="flex flex-col gap-2.5 text-base">
              {(praxis.sprechzeiten ?? wochentage.map((tag) => ({ tag, zeit: "" }))).map((s) => (
                <div key={s.tag} className="grid grid-cols-[104px_minmax(0,1fr)] gap-3">
                  <dt className="text-on-night-2">{s.tag}</dt>
                  <dd>
                    {s.zeit ? (
                      s.zeit.split(" und ").map((block) => (
                        <span key={block} className="block">
                          {block}
                        </span>
                      ))
                    ) : (
                      <Platzhalter className="text-[#e8d9b0]">Uhrzeit</Platzhalter>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex flex-col gap-3 rounded border border-night-line bg-night-2 p-6 md:p-7">
            <h3 className="text-[19px] font-semibold">Anfahrt</h3>
            <address className="text-[17px] not-italic leading-relaxed">
              {praxis.strasse}
              <br />
              {praxis.plz} {praxis.ort}
            </address>
            <p className="text-base leading-relaxed text-on-night-2">
              {praxis.oepnv ?? <Platzhalter className="text-[#e8d9b0]">Öffentliche Verkehrsmittel</Platzhalter>}
            </p>
            <ul className="text-base leading-relaxed text-on-night-2">
              {praxis.barrierefreiheit.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto pt-2 text-[15px] font-medium text-night-link hover:text-white"
            >
              Route in Google Maps öffnen
              <span className="sr-only"> (neuer Tab)</span>
            </a>
          </div>
        </div>
        <div className="mt-6 md:mt-8">
          <KarteMitZustimmung />
        </div>
      </Container>
    </section>
  );
}
