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
        <h2>Berufsbezeichnung und berufsrechtliche Angaben</h2>
        <p>
          Gesetzliche Berufsbezeichnung: Arzt ({praxis.fachrichtung})
          <br />
          Verliehen in: <Platzhalter>Staat, in dem die Berufsbezeichnung verliehen wurde</Platzhalter>
        </p>
        <p>
          Zuständige Kammer: Ärztekammer Berlin, <Platzhalter>Anschrift</Platzhalter>
          <br />
          Zuständige Kassenärztliche Vereinigung: Kassenärztliche Vereinigung Berlin,{" "}
          <Platzhalter>Anschrift</Platzhalter>
        </p>
        <p>
          Es gelten die Berufsordnung der Ärztekammer Berlin und das Berliner Heilberufekammergesetz.{" "}
          <Platzhalter>Link zu den berufsrechtlichen Regelungen</Platzhalter>
        </p>
      </div>

      <div>
        <h2>Verantwortlich für den Inhalt</h2>
        <p>
          {praxis.arzt}, Anschrift wie oben
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
