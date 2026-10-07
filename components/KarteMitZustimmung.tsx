"use client";

import { useState } from "react";
import { adresseEinzeilig, praxis } from "@/content/praxis";

const einbettungUrl = `https://www.google.com/maps?q=${encodeURIComponent(adresseEinzeilig)}&z=16&output=embed`;

/**
 * Google-Maps-Karte mit Zwei-Klick-Lösung: Erst nach dem Klick auf "Karte laden" wird
 * die Karte von Google geladen. Vorher fließen keine Daten an Google. Die Zustimmung
 * wird nicht gespeichert und gilt nur für den aktuellen Seitenaufruf.
 */
export function KarteMitZustimmung() {
  const [geladen, setGeladen] = useState(false);

  if (geladen) {
    return (
      <div className="overflow-hidden rounded border border-night-line">
        <iframe
          title={`Karte: ${adresseEinzeilig}`}
          src={einbettungUrl}
          className="block h-[320px] w-full md:h-[420px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }

  return (
    <div
      className="flex h-[320px] flex-col items-center justify-center gap-4 rounded border border-night-line bg-night-2 px-6 text-center md:h-[420px]"
      style={{
        backgroundImage:
          "linear-gradient(var(--color-night-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-night-line) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
        backgroundPosition: "center",
      }}
    >
      <span className="flex size-14 items-center justify-center rounded-full bg-night text-mint" aria-hidden="true">
        <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
          <circle cx="12" cy="10" r="2.4" />
        </svg>
      </span>
      <p className="font-serif text-xl md:text-2xl">
        {praxis.strasse} · {praxis.plz} {praxis.ort}
      </p>
      <p className="max-w-md text-[15px] leading-relaxed text-on-night-2">
        Mit dem Laden der Karte werden Daten an Google übertragen. Es gilt die Datenschutzerklärung von Google. Mehr
        dazu in unserer{" "}
        <a href="/datenschutz#google-maps" className="text-night-link underline hover:text-white">
          Datenschutzerklärung
        </a>
        .
      </p>
      <button
        type="button"
        onClick={() => setGeladen(true)}
        className="mt-1 inline-flex min-h-12 items-center justify-center rounded-full bg-on-night px-7 text-base font-medium text-night transition-colors hover:bg-white"
      >
        Karte laden
      </button>
    </div>
  );
}
