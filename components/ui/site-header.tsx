import { Button } from "@/components/ui/button";
import { siteContent } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="container-shell relative z-20 flex flex-col gap-4 pt-5 sm:flex-row sm:items-center sm:justify-between">
      <a href="#top" className="flex items-center gap-3 text-lg font-black uppercase tracking-[0.24em] text-ink">
        <img
          src="/upper-notch-logo.png"
          alt="Upper Notch Coaching logo"
          className="h-12 w-12 rounded-full border border-white/20 bg-white object-cover"
        />
        <span>{siteContent.brand.shortName}</span>
      </a>

      <div className="flex flex-wrap items-center gap-3 sm:justify-end">
        <a
          href="#lead-form"
          className="inline-flex items-center justify-center rounded-full border border-white/25 bg-black/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:border-accent hover:text-accent"
        >
          {siteContent.brand.applicationLabel}
        </a>
        <Button href={siteContent.brand.consultationLink} className="px-4 py-2 text-xs" target="_blank" rel="noreferrer">
          {siteContent.brand.consultationLabel}
        </Button>
      </div>
    </header>
  );
}
