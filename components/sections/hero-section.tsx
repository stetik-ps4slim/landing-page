import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/ui/site-header";
import { siteContent } from "@/lib/site-content";

export function HeroSection() {
  return (
    <section id="top" className="relative pb-16 pt-4 sm:pb-20">
      <div className="absolute inset-0 -z-10 bg-grid bg-[size:42px_42px] opacity-[0.16]" />
      <div className="absolute left-1/2 top-20 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-cta/30 blur-3xl" />
      <SiteHeader />

      <div className="container-shell grid gap-10 pt-14 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-20">
        <div className="rounded-[2rem] border border-white/15 bg-white/20 p-5 shadow-glow backdrop-blur sm:p-8 lg:bg-white/15">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-accent">
            {siteContent.brand.eyebrow}
          </p>
          <h1 className="max-w-4xl text-6xl uppercase leading-[0.88] text-ink drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)] sm:text-7xl lg:text-8xl">
            {siteContent.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-zinc-100 sm:text-xl">
            {siteContent.hero.subheading}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button href="#lead-form">{siteContent.brand.applicationLabel}</Button>
            <a
              href={siteContent.brand.consultationLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-accent bg-accent px-6 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-canvas shadow-[0_14px_35px_rgba(255,210,63,0.35)] transition hover:-translate-y-0.5 hover:bg-[#ffe26f]"
            >
              {siteContent.brand.consultationLabel}
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {siteContent.hero.highlights.map((item) => (
              <div key={item} className="rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <p className="text-sm font-semibold leading-6 text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2.4rem] border border-white/25 bg-white/80 p-5 text-canvas shadow-[0_30px_90px_rgba(0,0,0,0.22)] sm:p-8">
          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cta/45 blur-2xl" />
          <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-accent/55 blur-2xl" />

          <div className="relative mx-auto flex max-w-[430px] justify-center rounded-[2rem] border border-black/10 bg-white/70 p-4 shadow-2xl backdrop-blur sm:p-6">
            <img
              src="/upper-notch-character.png"
              alt="Upper Notch Coaching character"
              className="w-full max-w-[360px] drop-shadow-[0_28px_35px_rgba(0,0,0,0.24)]"
            />
          </div>

          <div className="relative mt-5 grid gap-3 sm:grid-cols-3">
            {[
              ["Look", "Better"],
              ["Feel", "Stronger"],
              ["Perform", "Higher"]
            ].map(([title, label]) => (
              <div key={title} className="rounded-2xl border border-white/40 bg-sky-500/25 p-4 text-white shadow-xl backdrop-blur">
                <p className="text-xl font-black uppercase tracking-[0.08em] text-accent">{title}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-white/85">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
