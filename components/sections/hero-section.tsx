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
        <div className="rounded-[2rem] border border-white/15 bg-black/45 p-5 shadow-glow backdrop-blur sm:p-8 lg:bg-black/35">
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
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-canvas"
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

        <div className="relative overflow-hidden rounded-[2.4rem] border border-white/20 bg-gradient-to-br from-white/80 via-sky-200 to-electric p-5 shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:p-8">
          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cta/45 blur-2xl" />
          <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-accent/55 blur-2xl" />

          <div className="relative rounded-[2rem] border border-black/10 bg-white/75 p-5 text-canvas shadow-2xl backdrop-blur sm:p-6">
            <img
              src="/upper-notch-logo.png"
              alt="Upper Notch Coaching logo"
              className="mx-auto w-full max-w-[440px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)]"
            />
            <img
              src="/upper-notch-character.png"
              alt="Upper Notch Coaching character"
              className="mx-auto -mt-10 w-full max-w-[360px] drop-shadow-[0_28px_35px_rgba(0,0,0,0.28)] sm:-mt-16"
            />
          </div>

          <div className="relative mt-5 grid gap-3 sm:grid-cols-3">
            {[
              ["Fat loss", "Structure"],
              ["Strength", "Progression"],
              ["Mindset", "Standards"]
            ].map(([title, label]) => (
              <div key={title} className="rounded-2xl border border-black/10 bg-black/85 p-4 text-white shadow-xl">
                <p className="text-xl font-black uppercase tracking-[0.08em] text-accent">{title}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-zinc-300">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
