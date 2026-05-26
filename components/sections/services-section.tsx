import { SectionHeading } from "@/components/ui/section-heading";
import { siteContent } from "@/lib/site-content";

export function ServicesSection() {
  return (
    <section id="services" className="section-space">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Services"
          title={siteContent.services.title}
          description={siteContent.services.description}
          align="center"
        />

        <div className="mt-10 space-y-10">
          {siteContent.services.categories.map((category) => (
            <div key={category.name}>
              <div className="mb-5 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/35" />
                <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                  {category.name}
                </p>
                <div className="h-px flex-1 bg-white/35" />
              </div>

              <div
                className={`grid gap-5 ${
                  category.plans.length >= 3 ? "lg:grid-cols-3" : "lg:grid-cols-1 max-w-xl mx-auto"
                }`}
              >
                {category.plans.map((plan) => (
                  <article
                    key={`${category.name}-${plan.name}`}
                    className={`panel flex h-full flex-col p-6 sm:p-8 ${
                      plan.featured
                        ? "border-accent/70 shadow-[0_24px_70px_rgba(255,210,63,0.22)]"
                        : ""
                    }`}
                  >
                    {plan.badge ? (
                      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                        {plan.badge}
                      </p>
                    ) : null}

                    <h3 className="text-4xl uppercase leading-none text-slate-950">
                      {plan.name}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-700">{plan.idealFor}</p>

                    {/* Results */}
                    <div className="mt-6">
                      <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-slate-950">
                        Results &amp; Benefits
                      </p>
                      <ul className="space-y-2">
                        {plan.results.map((result) => (
                          <li key={result} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Inclusions */}
                    <div className="mt-6">
                      <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-slate-950">
                        What&apos;s Included
                      </p>
                      <ul className="space-y-2">
                        {plan.inclusions.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                            <span className="mt-1 text-accent">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={siteContent.brand.consultationLink}
                     
                     
                      className="mt-8 inline-flex w-fit items-center rounded-full border border-accent bg-accent px-5 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-canvas shadow-[0_14px_35px_rgba(255,210,63,0.28)] transition hover:-translate-y-0.5 hover:bg-[#ffe26f]"
                    >
                      Book Consultation
                    </a>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
