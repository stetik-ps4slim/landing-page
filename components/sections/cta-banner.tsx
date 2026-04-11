import { Button } from "@/components/ui/button";
import { siteContent } from "@/lib/site-content";

export function CtaBanner() {
  return (
    <section className="pb-16 sm:pb-20">
      <div className="container-shell">
        <div className="panel border-accent/30 bg-gradient-to-r from-white/30 via-sky-300/30 to-cta/20 p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            {siteContent.brand.name}
          </p>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-4xl uppercase leading-none text-ink sm:text-5xl">
                {siteContent.cta.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-white/90">
                {siteContent.cta.description}
              </p>
            </div>
            <Button href="#lead-form">
              {siteContent.brand.applicationLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
