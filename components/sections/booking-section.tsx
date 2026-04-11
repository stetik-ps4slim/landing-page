import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteContent } from "@/lib/site-content";

export function BookingSection() {
  return (
    <section className="section-space">
      <div className="container-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeading
          eyebrow="Book Online"
          title={siteContent.booking.title}
          description={siteContent.booking.description}
        />

        <div className="panel border-white/80 bg-white/95 p-6 shadow-[0_24px_70px_rgba(3,55,104,0.18)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            External booking
          </p>
          <h3 className="mt-4 text-4xl uppercase leading-none text-slate-950 sm:text-5xl">
            Open Calendly to choose your consultation time.
          </h3>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700">
            Calendly opens in a new tab so the booking flow stays reliable on mobile and desktop.
            If you need to log in to manage your calendar, do that directly on Calendly, not inside the website.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button href={siteContent.brand.consultationLink} className="border-accent bg-accent text-canvas shadow-[0_14px_35px_rgba(255,210,63,0.35)] hover:bg-[#ffe26f]" target="_blank" rel="noreferrer">
              {siteContent.brand.consultationLabel}
            </Button>
            <a
              href="#lead-form"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-800 transition hover:border-accent hover:text-slate-950"
            >
              Apply First
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
