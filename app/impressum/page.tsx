import type { Metadata } from "next";
import { praxis, telefonHref } from "@/content/praxis";
import { Platzhalter } from "@/components/ui";
import { Rechtstext } from "@/components/Rechtstext";
import { seo } from "@/content/seo";
import { seitenMetadaten } from "@/lib/seo";

export const metadata: Metadata = {
  ...seitenMetadaten(seo.impressum, "/impressum"),
  robots: { index: false, follow: true },
};

export default function ImpressumSeite() {
  return (
    <Rechtstext
      titel="Impressum"
      hinweis="Entwurf: Angaben in eckigen Klammern fehlen noch. Vor der Veröffentlichung vollständig ausfüllen und rechtlich prüfen lassen."
    >
      <div>
        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          {praxis.name}
          <br />
          {praxis.arzt}
          <br />
          {praxis.strasse}
          <br />
          {praxis.plz} {praxis.ort}
        </p>
      </div>

      <div>
        <h2>Kontakt</h2>
        <p>
          Telefon:{" "}
          {praxis.telefon ? (
            <a href={telefonHref(praxis.telefon)}>{praxis.telefon}</a>
          ) : (
            <Platzhalter>Telefonnummer</Platzhalter>
          )}
          <br />
          E-Mail:{" "}
          {praxis.email ? (
            <a href={`mailto:${praxis.email}`}>{praxis.email}</a>
          ) : (
            <Platzhalter>E-Mail-Adresse</Platzhalter>
          )}
        </p>
      </div>

      <div>
        <h2>Berufsbezeichnung</h2>
        <p>
          Gesetzliche Berufsbezeichnung: Arzt ({praxis.fachrichtung})
          <br />
          Verliehen in: Bundesrepublik Deutschland
        </p>
      </div>

      <div>
        <h2>Berufsrechtliche Regelungen</h2>
        <p>
          Zuständige Kammer:
          <br />
          Ärztekammer Berlin
          <br />
          Friedrichstraße 16
          <br />
          10969 Berlin
          <br />
          Website:{" "}
          <a href="https://www.aerztekammer-berlin.de" target="_blank" rel="noopener">
            www.aerztekammer-berlin.de
          </a>
        </p>
        <p>
          Zuständige kassenärztliche Vereinigung:
          <br />
          Kassenärztliche Vereinigung Berlin
          <br />
          Masurenallee 6A
          <br />
          14057 Berlin
          <br />
          Website:{" "}
          <a href="https://www.kvberlin.de" target="_blank" rel="noopener">
            www.kvberlin.de
          </a>
        </p>
        <h3 className="mt-5 font-semibold text-ink">Berufsrechtliche Regelungen</h3>
        <p className="mt-1">
          Es gelten die berufsrechtlichen Regelungen der Ärztekammer Berlin.
          <br />
          Die Regelungen sind einsehbar unter:{" "}
          <a href="https://www.aerztekammer-berlin.de" target="_blank" rel="noopener">
            www.aerztekammer-berlin.de
          </a>
        </p>
      </div>

      <div>
        <h2>Verantwortlich für den Inhalt</h2>
        <p>
          {praxis.arzt}, Anschrift wie oben
        </p>
        <p>
          Konzeption und Umsetzung der Website:{" "}
          <a href="https://ai-setta.com" target="_blank" rel="noopener">
            AI SETTA
          </a>
        </p>
      </div>

      <div>
        <h2>Hinweis</h2>
        <p>
          Die Inhalte dieser Website dienen der allgemeinen Information und ersetzen keine ärztliche Beratung,
          Diagnose oder Behandlung.
        </p>
      </div>
    </Rechtstext>
  );
}
