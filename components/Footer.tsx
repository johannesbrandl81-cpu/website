import Link from "next/link";
import { istGruppe, navigation } from "@/components/navigation";
import { praxis, telefonHref } from "@/content/praxis";
import { Container, Platzhalter } from "@/components/ui";

export function Footer() {
  return (
    <footer className="bg-night-foot pb-24 text-foot-text md:pb-0">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-2">
          <p className="font-serif text-xl text-on-night">{praxis.name}</p>
          <address className="text-sm not-italic leading-relaxed">
            {praxis.arzt}
            <br />
            {praxis.strasse}
            <br />
            {praxis.plz} {praxis.ort}
          </address>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.1em] text-mint">Kontakt</p>
          <p className="text-sm leading-relaxed">
            {praxis.telefon ? (
              <a href={telefonHref(praxis.telefon)} className="text-foot-text">
                {praxis.telefon}
              </a>
            ) : (
              <Platzhalter className="text-[#e8d9b0]">Telefonnummer</Platzhalter>
            )}
            <br />
            {praxis.email ? (
              <a href={`mailto:${praxis.email}`} className="text-foot-text">
                {praxis.email}
              </a>
            ) : (
              <Platzhalter className="text-[#e8d9b0]">E-Mail-Adresse</Platzhalter>
            )}
          </p>
        </div>
        <nav aria-label="Seiten" className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.1em] text-mint">Seiten</p>
          {/* Gleiche Einträge wie die Hauptnavigation, ohne Gruppen */}
          <ul className="flex flex-col gap-1 text-sm">
            {navigation.flatMap((e) => (istGruppe(e) ? e.kinder : [e])).map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-foot-text">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Rechtliches" className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.1em] text-mint">Rechtliches</p>
          <ul className="flex flex-col gap-1 text-sm">
            <li><Link href="/impressum" className="text-foot-text">Impressum</Link></li>
            <li><Link href="/datenschutz" className="text-foot-text">Datenschutzerklärung</Link></li>
          </ul>
        </nav>
      </Container>
      <Container>
        <p className="border-t border-foot-line py-6 text-[13px] leading-relaxed text-foot-muted">
          Die Inhalte dieser Website dienen der Information und ersetzen keine ärztliche Beratung, Diagnose oder
          Behandlung.
        </p>
      </Container>
    </footer>
  );
}
