import { Button } from "@/components/ui/button";
import { siteContent } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="container-shell relative z-20 flex items-center justify-between pt-5">
      <a href="#top" className="text-lg font-semibold uppercase tracking-[0.24em] text-ink">
        {siteContent.brand.shortName}
      </a>
      <Button href={siteContent.brand.consultationLink} className="px-4 py-2 text-xs" target="_blank" rel="noreferrer">
        {siteContent.brand.consultationLabel}
      </Button>
    </header>
  );
}
