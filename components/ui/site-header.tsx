import { Button } from "@/components/ui/button";
import { siteContent } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="container-shell relative z-20 flex flex-col gap-4 pt-5 sm:flex-row sm:items-center sm:justify-between">
      <a href="#top" className="flex items-center gap-3 text-lg font-black uppercase tracking-[0.24em] text-ink drop-shadow-[0_8px_20px_rgba(0,0,0,0.3)]">
        <img
          src="/upper-notch-logo-badge.png"
          alt="Upper Notch Coaching logo"
          className="h-12 w-12 rounded-full border border-white/40 bg-white object-contain p-1 shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
        />
        <span>{siteContent.brand.shortName}</span>
      </a>

      <div className="flex flex-wrap items-center gap-3 sm:justify-end">
        <a
          href="#lead-form"
          className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:border-cta hover:bg-cta hover:text-white"
        >
          {siteContent.brand.applicationLabel}
        </a>
        <Button
          href={siteContent.brand.consultationLink}
          className="border-accent bg-accent px-4 py-2 text-xs text-canvas shadow-[0_14px_35px_rgba(255,210,63,0.35)] hover:bg-[#ffe26f]"
          target="_blank"
          rel="noreferrer"
        >
          {siteContent.brand.consultationLabel}
        </Button>
      </div>
    </header>
  );
}
