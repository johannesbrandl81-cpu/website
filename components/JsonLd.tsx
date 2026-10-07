/** Gibt strukturierte Daten (schema.org) als JSON-LD aus. Unsichtbar für Besucher. */
export function JsonLd({ daten }: { daten: object | object[] }) {
  const liste = Array.isArray(daten) ? daten : [daten];
  return (
    <>
      {liste.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}
