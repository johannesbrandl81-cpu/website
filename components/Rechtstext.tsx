import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/ui";

/** Einheitlicher Rahmen für Impressum und Datenschutz. */
export function Rechtstext({ titel, hinweis, children }: { titel: string; hinweis?: ReactNode; children: ReactNode }) {
  return (
    <section className="py-12 md:py-16">
      <Container className="max-w-[760px] md:px-0">
        <nav aria-label="Brotkrumen" className="text-sm text-muted">
          <Link href="/" className="text-muted">
            Startseite
          </Link>
          <span aria-hidden="true" className="mx-2">/</span>
          <span className="text-ink">{titel}</span>
        </nav>
        <h1 className="mt-4 font-serif text-[34px] leading-tight font-normal hyphens-auto [overflow-wrap:anywhere] sm:text-[40px] md:text-[48px]">
          {titel}
        </h1>
        {hinweis && (
          <p className="mt-6 rounded-sm bg-placeholder-soft px-4 py-3 text-[15px] leading-relaxed text-[#6b5827]">
            {hinweis}
          </p>
        )}
        <div className="mt-8 flex flex-col gap-8 text-[17px] leading-relaxed text-ink-2 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-ink [&_h2]:font-normal [&_p+p]:mt-3">
          {children}
        </div>
      </Container>
    </section>
  );
}
