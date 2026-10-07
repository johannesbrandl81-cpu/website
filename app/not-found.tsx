import Link from "next/link";
import { Container } from "@/components/ui";

export default function NichtGefunden() {
  return (
    <section className="py-20 md:py-28">
      <Container className="max-w-[760px] md:px-0">
        <p className="eyebrow">Fehler 404</p>
        <h1 className="mt-3 font-serif text-[40px] leading-tight font-normal">Diese Seite gibt es nicht.</h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-2">
          Möglicherweise hat sich die Adresse geändert. Auf der <Link href="/">Startseite</Link> finden Sie alle
          Informationen zur Praxis.
        </p>
      </Container>
    </section>
  );
}
