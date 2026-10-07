# Neurologische Praxis Tempelhof Dr. Brandl

Website für die neurologische Praxis von Dr. med. Johannes Brandl in Berlin-Tempelhof.
Design: Variante A "Klinische Klarheit" aus dem Entwurf. Next.js 16, TypeScript, Tailwind CSS 4.

Das Projekt ist eigenständig und kann als Ordner direkt in ein eigenes GitHub-Repository übernommen werden.

## Starten

```bash
npm install
npm run dev        # Entwicklung auf http://localhost:3000
npm run build      # Produktionsbuild
npm start          # Produktionsserver
npm run typecheck  # TypeScript-Prüfung
```

Voraussetzung: Node.js 20 oder neuer.

## Seiten

| Adresse | Inhalt |
|---|---|
| `/` | Startseite: Einstieg, Neurologie mit Behandlungsgebieten und Untersuchungen, Selbstzahlerleistungen (IGeL), Über mich, Logoleiste der Mitgliedschaften, Termin und Kontakt mit Karte |
| `/ketamintherapie` | Ketamintherapie mit psychotherapeutischer Begleitung |
| `/untersuchungen` | Untersuchungsmethoden im Detail und Vorbereitung auf den Termin (`/neurologie` leitet hierher weiter) |
| `/studien` | Klinische Studien in Zusammenarbeit mit FutureMeds |
| `/kosten` | Neurologische Untersuchung als Selbstzahler und Selbstzahlerleistungen (IGeL) |
| `/impressum`, `/datenschutz` | Pflichtseiten (Entwurf) |

## Aufbau

```
app/          Seiten (App Router), globale Styles, Sitemap, robots.txt, Vorschaubild zum Teilen
components/   Header, Footer, Logoleiste, mobile Buchungsleiste, UI-Bausteine
content/      Alle Texte und Stammdaten als typisierte Dateien
lib/seo.ts    Metadaten und strukturierte Daten für Suchmaschinen
assets/       Schriftdateien für das Vorschaubild (SIL Open Font License)
public/logos/ Logos der Mitgliedschaften
public/bilder/ Porträtfotos
```

**Inhalte werden nur in `content/` gepflegt**, nicht in den Seiten selbst:

| Datei | Inhalt |
|---|---|
| `content/praxis.ts` | Name, Adresse, Doctolib-Link, Telefon, E-Mail, Sprechzeiten, Anfahrt |
| `content/leistungen.ts` | Preise als Selbstzahler (`selbstzahlerKasse`) und Selbstzahlerleistungen (IGeL) |
| `content/neurologie.ts` | Einleitung Neurologie, Behandlungsgebiete (Startseite), Untersuchungen und Vorbereitung (`/untersuchungen`) |
| `content/studien.ts` | Studien mit Eckdaten und Stand |
| `content/ueber-mich.ts` | Begrüßung, Über mich, Werdegang, Mitgliedschaften und Logos |
| `content/ketamin.ts` | Alle Texte und Ablaufdaten der Ketamin-Seite |
| `content/seo.ts` | Titel und Beschreibungen für Google je Seite |

## Platzhalter

Fehlende Angaben stehen in den Inhaltsdateien als `null`. Die Website zeigt an diesen Stellen
bewusst auffällige Platzhalter in eckigen Klammern, zum Beispiel `[Telefonnummer]`. So geht keine Lücke
unbemerkt online. Sobald ein Wert eingetragen ist, verschwindet der Platzhalter automatisch.

Solange keine Telefonnummer eingetragen ist, zeigt die mobile Buchungsleiste nur den Doctolib-Button.

### Noch offen vor dem Livegang

- [ ] Telefonnummer (`content/praxis.ts`)
- [ ] E-Mail-Adresse (`content/praxis.ts`)
- [x] Sprechzeiten je Wochentag (`content/praxis.ts`)
- [x] Anbindung mit öffentlichen Verkehrsmitteln (`content/praxis.ts`)
- [x] Preise als Selbstzahler ohne Kassentermin (`selbstzahlerKasse` in `content/leistungen.ts`)
- [ ] Preise der Selbstzahlerleistungen (IGeL), von Dr. Brandl angekündigt (`content/leistungen.ts`)
- [ ] Ketamintherapie: Anzahl Infusionen, Zeitraum, Dauer, Überwachung, Nachbeobachtung, Begleitgespräche (`content/ketamin.ts`)
- [ ] Ketamintherapie: weitere Anwendungsgebiete (`content/ketamin.ts`, Liste `anwendungsgebiete`; den Platzhalter "Weitere Anwendungsgebiete" in `app/ketamintherapie/page.tsx` danach entfernen)
- [ ] Ketamintherapie: Hinweise zu Essen und Trinken vor der Infusion (`app/ketamintherapie/page.tsx`)
- [x] Psychotherapeutin: Name (Stella Savelsberg), Berufsbezeichnung, Link zu ihrer Website (`content/ketamin.ts`)
- [x] Psychotherapeutin: Kurzvorstellung (`content/ketamin.ts`, Feld `text`)
- [ ] **Foto Stella Savelsberg:** Eingebaut ist ein zugeschnittenes Vorschaubild des Fotografen (Original trägt das Wasserzeichen "NUR ZUR AUSWAHL"). Vor dem Livegang durch die lizenzierte Datei ersetzen und das Nutzungsrecht für die Website klären (`public/bilder/savelsberg.jpg`)
- [ ] Fachliche Freigabe der Ketamin-Texte durch Dr. Brandl, danach die Hinweise "Textvorschlag zur fachlichen Freigabe" entfernen
- [ ] Hinweis zu Zahlungsarten auf der Kostenseite (`app/kosten/page.tsx`)
- [x] Porträt Dr. Brandl (`public/bilder/brandl.jpg`). Die Datei ist nur 600 Pixel breit; eine höher aufgelöste Version wäre besser
- [ ] Startseite: KI-Hintergrundbild (`public/bilder/praxis-ki.jpg`) möglichst durch ein echtes Foto der Praxis ersetzen. Das KI-Bild zeigt einen fiktiven Raum, auf dem Diplom an der Wand steht Fantasietext
- [ ] Fotos Praxisräume und Behandlungsraum (Komponente `FotoPlatzhalter` in `app/page.tsx` und `app/ketamintherapie/page.tsx` durch `next/image` ersetzen)
- [ ] Fachliche Freigabe der Texte zu Behandlungsgebieten (Startseite) und auf `/untersuchungen`, danach die Hinweise "Textvorschlag zur fachlichen Freigabe" entfernen
- [ ] Nerven- und Muskelsonografie: anbieten? Dann in `content/neurologie.ts` ergänzen
- [ ] Studien: alle Angaben vor dem Livegang mit futuremeds.de abgleichen (`content/studien.ts`, `studienStand`)
- [ ] Studien: klären, ob die Praxis für die Vermittlung vergütet wird (dann rechtlich prüfen lassen)
- [ ] Logo als Originaldatei (SVG oder PNG ab 1000 px). `public/logo-kopf.png`, `app/icon.png` und `app/apple-icon.png` sind aus einem kleinen Bild freigestellt
- [ ] Farbvariante entscheiden: Vorschau mit `?farbe=braun`, zurück mit `?farbe=petrol`. Danach Skript in `app/layout.tsx` und Block `html[data-farbe="braun"]` in `app/globals.css` entfernen oder die Werte als Standard übernehmen
- [x] Studien: Bild für Narkolepsie ergänzen (mit `scripts/ki-bild.mjs` aufbereiten, in `content/studien.ts` als `bild` eintragen)
- [ ] Logo Arbeitskreis Botulinumtoxin (in `public/logos/` ablegen und in `content/ueber-mich.ts` eintragen)
- [ ] Größere Datei des BGPN-Logos (die vorhandene ist nur 98 × 115 Pixel)
- [ ] Zustimmung der Vereine zur Nutzung ihrer Logos
- [ ] Impressum vervollständigen (Staat der Berufsbezeichnung, Anschriften von Ärztekammer und KV, Link zur Berufsordnung) und prüfen lassen
- [ ] Datenschutzerklärung vervollständigen (Hosting, Speicherdauer, Auftragsverarbeitung) und prüfen lassen, inklusive Abschnitt zur Google-Maps-Karte
- [ ] Danach die Entwurfshinweise auf Impressum und Datenschutz entfernen (`hinweis` in `app/impressum/page.tsx` und `app/datenschutz/page.tsx`)

## Technik

- **Schriften:** Newsreader (Überschriften) und IBM Plex Sans (Text) über `next/font`. Sie werden beim Build
  geladen und von der eigenen Domain ausgeliefert. Beim Seitenaufruf entsteht keine Verbindung zu Google.
- **Keine Cookies, kein Tracking.** Doctolib ist nur verlinkt. Die Google-Maps-Karte im Kontaktbereich lädt erst nach Klick auf "Karte laden" (`components/KarteMitZustimmung.tsx`); vorher fließen keine Daten an Google. Die Zustimmung wird nicht gespeichert.
- **KI-generierte Bilder** (Startseite und Studienseite) werden doppelt gekennzeichnet (EU AI Act, Art. 50): sichtbar mit dem Etikett "KI-generiert" und maschinenlesbar in den XMP-Metadaten (IPTC DigitalSourceType `trainedAlgorithmicMedia`). Neue Bilder immer mit `node scripts/ki-bild.mjs <eingabe> <ausgabe.jpg> "<Beschreibung>" [Breite]` aufbereiten, sichtbar mit `<KiEtikett />` (`components/ui.tsx`) kennzeichnen und mit `unoptimized` einbinden, sonst entfernt die Bildoptimierung die Metadaten.
- **Navigation** in `components/navigation.ts`: Gruppen "Neurologie" und "Selbstzahler" als Aufklappmenü, dazu "Über mich" und "Kontakt". Header, Handy-Menü und Footer nutzen dieselben Daten.
- **Farben und Schriften** stehen in `app/globals.css` im Block `@theme`.
- **SEO:** siehe Abschnitt "Suchmaschinen" unten.
- **Sicherheits-Header** in `next.config.ts`.
- Alle Seiten werden beim Build statisch erzeugt.

## Suchmaschinen (SEO)

**Im Code umgesetzt:**

- **Titel und Beschreibung je Seite** in `content/seo.ts`, mit Ort und Suchbegriff. Unterseiten bekommen automatisch " | Neurologische Praxis Tempelhof" angehängt.
- **Kanonische Adresse** je Seite (`alternates.canonical`). Google wertet nur die echte Domain, nicht www, Vercel-Adressen oder `?farbe=braun`.
- **Vorschau-Deployments gesperrt:** Auf Vercel-Vorschauen (`VERCEL_ENV` ungleich `production`) liefert `robots.txt` "Disallow: /" und jede Seite `noindex`. Die Produktion bleibt indexierbar.
- **Impressum und Datenschutz** stehen auf `noindex` und fehlen in der Sitemap.
- **Vorschaubild zum Teilen** (WhatsApp, LinkedIn, Facebook, X): `app/opengraph-image.tsx`, wird beim Build erzeugt. Bewusst ohne KI-Bild.
- **Strukturierte Daten** (schema.org) in `lib/seo.ts`:
  - `Physician` mit Adresse, Sprechzeiten, Schwerpunkten, Untersuchungen, Karte und Doctolib-Profil
  - auf Unterseiten `BreadcrumbList`
  - auf `/untersuchungen` und `/ketamintherapie` zusätzlich `MedicalWebPage`
  - Telefon und E-Mail erscheinen automatisch, sobald sie in `content/praxis.ts` stehen.
- **Sitemap** mit festem Änderungsdatum je Seite (`app/sitemap.ts`). Bei Textänderungen das Datum dort anpassen.

**Außerhalb des Codes (offen):**

- [ ] **Google Unternehmensprofil** anlegen oder übernehmen (Kategorie "Neurologe"). Name, Adresse, Telefon und Sprechzeiten genau wie auf der Website, Website-Link setzen, Fotos hochladen. Wichtigster Hebel für die lokale Suche.
- [ ] **Google Search Console:** Domain per DNS-Eintrag bei IONOS bestätigen, `https://neurologie-praxistempelhof.de/sitemap.xml` einreichen. Optional Bing Webmaster Tools.
- [ ] **Einheitliche Einträge** bei Doctolib, Jameda, KV Berlin und Ärztekammer: gleiche Schreibweise von Name, Adresse und Telefon, Link zur Website.
- [ ] **Vercel Domains:** `www.neurologie-praxistempelhof.de` als Weiterleitung auf `neurologie-praxistempelhof.de` einrichten (Settings → Domains, "Redirect to").
- [ ] Vor dem Livegang alle Platzhalter in eckigen Klammern füllen, sonst indexiert Google sie mit.
- [ ] Geokoordinaten der Praxis in die strukturierten Daten aufnehmen (optional, Google ermittelt sie auch aus der Adresse).

## Nach GitHub und Vercel

**Speicherort:** Repository `Johannesbrandl81-cpu/website` auf GitHub. Das Projekt liegt direkt im Hauptverzeichnis des Repositorys.

**Vercel:** Das Repository in Vercel importieren (Add New → Project). Vercel erkennt Next.js automatisch, ein Root Directory ist nicht nötig. Danach unter Settings → Domains die Domain `neurologie-praxistempelhof.de` hinzufügen und die DNS-Einträge bei IONOS wie von Vercel angezeigt umstellen (nur die Einträge für die Website, nicht die Mail-Einträge).

- Falls die Domain abweicht: `domain` in `content/praxis.ts` anpassen (wird für Sitemap und Metadaten verwendet).
