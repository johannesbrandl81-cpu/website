import Image from "next/image";
import { mitgliedschaften } from "@/content/ueber-mich";
import { Container } from "@/components/ui";

/** Mitgliedschaften als Raster: Logo mit Namen darunter. Ohne Logo erscheint nur der Name. */
export function Logoleiste() {
  return (
    <section aria-labelledby="mitgliedschaften-titel" className="border-y border-hair bg-surface py-10">
      <Container>
        <h2 id="mitgliedschaften-titel" className="eyebrow">
          Mitgliedschaften
        </h2>
        {/* Logo mit ausgeschriebenem Namen darunter. Ohne Logo steht nur der Name. */}
        <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-8">
          {mitgliedschaften.map((m) => (
            <li key={m.name} className="flex flex-col items-center gap-3 text-center">
              {m.logo ? (
                <>
                  <div className="flex h-[76px] w-full items-center justify-center md:h-[92px]">
                    <Image
                      src={m.logo.src}
                      alt=""
                      width={m.logo.width}
                      height={m.logo.height}
                      className={
                        m.logo.breit
                          ? "h-auto w-[200px] max-w-full md:w-[230px]"
                          : "h-auto max-h-[68px] w-auto max-w-[120px] md:max-h-[84px] md:max-w-[160px]"
                      }
                    />
                  </div>
                  <span className="max-w-[230px] text-[13px] leading-snug text-muted md:text-sm">{m.name}</span>
                </>
              ) : (
                <span className="flex h-[76px] max-w-[200px] items-center font-serif text-base leading-snug text-ink md:h-[92px] md:text-[17px]">
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
