import type { Metadata } from "next";
import { praxis, telefonHref } from "@/content/praxis";
import { Platzhalter } from "@/components/ui";
import { Rechtstext } from "@/components/Rechtstext";
import { seo } from "@/content/seo";
import { seitenMetadaten } from "@/lib/seo";

export const metadata: Metadata = {
  ...seitenMetadaten(seo.datenschutz, "/datenschutz"),
  robots: { index: false, follow: true },
};

export default function DatenschutzSeite() {
  return (
    <Rechtstext
      titel="Datenschutzerklärung"
    >
      <div>
        <h2>1. Verantwortlicher</h2>
        <p>
          {praxis.name}
          <br />
          {praxis.arzt}
          <br />
          {praxis.strasse}, {praxis.plz} {praxis.ort}
          <br />
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
        <h2>2. Aufruf der Website und Hosting</h2>
        <p>
          Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, betrieben. Beim Aufruf der Seiten verarbeitet der Anbieter technisch notwendige Daten wie IP-Adresse, Datum
          und Uhrzeit des Zugriffs, aufgerufene Seite und Browserinformationen, um die Website auszuliefern und ihre
          Sicherheit zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse
          liegt im sicheren und stabilen Betrieb der Website.
        </p>
        <p>
          Mit Vercel besteht ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO. Da Vercel seinen Sitz in den USA
          hat, kann es zu einer Übermittlung von Daten in die USA kommen. Diese stützt sich auf den
          Angemessenheitsbeschluss der EU-Kommission zum EU-US Data Privacy Framework (Art. 45 DSGVO), unter dem Vercel
          zertifiziert ist, sowie ergänzend auf Standardvertragsklauseln (Art. 46 DSGVO). Die Server-Logdaten werden nur
          so lange gespeichert, wie es für den Betrieb und die Sicherheit der Website erforderlich ist, und danach
          gelöscht.
        </p>
      </div>

      <div>
        <h2>3. Besucherstatistik ohne Cookies</h2>
        <p>
          Um zu verstehen, welche Seiten gelesen werden, nutzen wir Vercel Web Analytics (Anbieter wie unter Punkt 2).
          Dabei werden aufgerufene Seite, verweisende Website, Gerätetyp, Browser, Betriebssystem und Land erfasst. Es
          werden keine Cookies gesetzt und keine Daten im Browser gespeichert. Besucher werden nur über einen
          Hashwert aus der Anfrage wiedererkannt, der nach 24 Stunden verworfen wird, sodass kein Profil über mehrere
          Tage oder Websites entsteht. Wir sehen ausschließlich zusammengefasste Zahlen, keine einzelnen Personen.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt darin, das Angebot der
          Website zu verbessern. Für die Datenübermittlung in die USA gelten die Angaben unter Punkt 2. Sie können
          jederzeit widersprechen (Art. 21 DSGVO), zum Beispiel per E-Mail an uns.
        </p>
        <p>
          Darüber hinaus setzt diese Website keine Cookies zu Analyse- oder Werbezwecken. Die Schriftarten werden von
          unserem eigenen Server ausgeliefert. Es besteht dabei keine Verbindung zu Servern von Google.
        </p>
      </div>

      <div>
        <h2>4. Terminbuchung über Doctolib</h2>
        <p>
          Für die Online-Terminbuchung verlinken wir auf unser Profil bei Doctolib. Die Buchung findet auf der Website
          von Doctolib statt. Erst wenn Sie den Link anklicken, werden Daten an Doctolib übertragen. Für die
          Verarbeitung dort gilt die Datenschutzerklärung von Doctolib.
        </p>
      </div>

      <div>
        <h2 id="google-maps" className="scroll-mt-28">5. Karte und Anfahrt über Google Maps</h2>
        <p>
          Auf der Startseite können Sie eine Karte von Google Maps (Google Ireland Limited, Gordon House, Barrow Street,
          Dublin 4, Irland) anzeigen lassen. Die Karte wird erst geladen, wenn Sie auf &bdquo;Karte laden&ldquo;
          klicken. Vorher werden keine Daten an Google übertragen. Nach dem Klick erhält Google unter anderem Ihre
          IP-Adresse und Informationen zu Ihrem Browser; dabei kann es auch zu einer Übermittlung in die USA kommen.
          Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1 TDDDG. Die
          Einwilligung gilt nur für den aktuellen Seitenaufruf; beim nächsten Besuch wird die Karte nicht automatisch
          geladen.
        </p>
        <p>
          Der Link &bdquo;Route in Google Maps öffnen&ldquo; führt zu Google Maps. Auch hier werden erst beim Anklicken
          Daten an Google übertragen. Es gilt die Datenschutzerklärung von Google.
        </p>
      </div>

      <div>
        <h2>6. Kontakt per Telefon oder E-Mail</h2>
        <p>
          Wenn Sie uns anrufen oder eine E-Mail schreiben, verarbeiten wir Ihre Angaben, um Ihr Anliegen zu bearbeiten.
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO und, soweit Gesundheitsdaten betroffen sind, Art. 9 Abs. 2
          lit. h DSGVO. Bitte beachten Sie, dass unverschlüsselte E-Mails nicht vollständig vor dem Zugriff Dritter
          geschützt sind.
        </p>
      </div>

      <div>
        <h2>7. Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung
          der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch gegen Verarbeitungen auf Grundlage
          berechtigter Interessen (Art. 21 DSGVO).
        </p>
        <p>
          Sie können sich außerdem bei einer Datenschutz-Aufsichtsbehörde beschweren (Art. 77 DSGVO). Für uns
          zuständig ist die Berliner Beauftragte für Datenschutz und Informationsfreiheit.
        </p>
      </div>
    </Rechtstext>
  );
}
