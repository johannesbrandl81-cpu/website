import Image from "next/image";
import Link from "next/link";
import { praxis } from "@/content/praxis";
import { BuchenButton, Container } from "@/components/ui";
import { DesktopNavigation } from "@/components/DesktopNavigation";
import { MobilMenue } from "@/components/MobilMenue";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-hair bg-ground/95 backdrop-blur">
      <Container className="flex h-[72px] items-center justify-between gap-6 md:h-[84px]">
        <Link href="/" className="flex items-center gap-3 text-ink no-underline hover:text-ink md:gap-3.5">
          <Image
            src="/logo-kopf.png"
            alt=""
            width={276}
            height={362}
            priority
            className="logo-kopf h-10 w-auto shrink-0 md:h-12"
          />
          <span className="flex flex-col gap-0.5">
            <span className="font-serif text-xl font-medium leading-tight md:text-[24px] md:whitespace-nowrap lg:text-[20px] xl:text-[22px]">{praxis.kurzname}</span>
            <span className="text-xs text-muted md:text-[13px] md:whitespace-nowrap">
              {praxis.arzt}
              <span className="hidden sm:inline lg:hidden">, {praxis.fachrichtung}</span>
            </span>
          </span>
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-6 lg:flex xl:gap-8">
          <DesktopNavigation />
          <BuchenButton className="min-h-11 px-4 text-[15px] whitespace-nowrap xl:px-5">Termin buchen</BuchenButton>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <div className="hidden md:block">
            <BuchenButton className="min-h-11 px-5 text-[15px] whitespace-nowrap">Termin buchen</BuchenButton>
          </div>
          <MobilMenue />
        </div>
      </Container>
    </header>
  );
}
