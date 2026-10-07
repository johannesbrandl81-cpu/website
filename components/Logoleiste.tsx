import Image from "next/image";
import { mitgliedschaften } from "@/content/ueber-mich";
import { Container } from "@/components/ui";

/** Banderole mit den Logos der Mitgliedschaften. Ohne Logo erscheint der Name. */
export function Logoleiste() {
  return (
    <section aria-labelledby="mitgliedschaften-titel" className="border-y border-hair bg-surface py-10">
      <Container>
        <h2 id="mitgliedschaften-titel" className="eyebrow">
          Mitgliedschaften
        </h2>
        <ul className="mt-6 grid grid-flow-row-dense grid-cols-3 items-center gap-x-4 gap-y-6 md:flex md:justify-between md:gap-6">
          {mitgliedschaften.map((m) => (
            <li
              key={m.name}
              className={`flex h-[76px] items-center justify-center md:h-[100px] ${
                m.logo?.breit ? "col-span-3" : ""
              }`}
            >
              {m.logo ? (
                <Image
                  src={m.logo.src}
                  alt={`Logo ${m.name}`}
                  width={m.logo.width}
                  height={m.logo.height}
                  className={
                    m.logo.breit
                      ? "h-auto w-[280px] max-w-full md:w-[260px]"
                      : "h-auto max-h-[68px] w-auto max-w-[110px] md:max-h-[88px] md:max-w-[170px]"
                  }
                />
              ) : (
                <span className="max-w-[150px] text-center font-serif text-sm leading-snug text-ink md:text-left md:text-[17px]">
                  {m.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
