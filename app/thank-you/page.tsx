import { Button } from "@/components/ui/button";
import { siteContent } from "@/lib/site-content";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen px-5 py-10 text-white">
      <section className="mx-auto flex min-h-[80vh] max-w-3xl items-center">
        <div className="panel w-full border-white/80 bg-white/95 p-8 text-slate-950 sm:p-10">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-accent">Application Sent</p>
          <h1 className="mt-4 text-5xl uppercase leading-none text-slate-950 sm:text-6xl">Success. Your application is in.</h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Jazzay will review your details and contact you soon. If you are ready to move faster, you can book a consultation now.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button href={siteContent.brand.consultationLink} target="_blank" rel="noreferrer">
              {siteContent.brand.consultationLabel}
            </Button>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-800 transition hover:border-accent hover:text-slate-950"
            >
              Back to site
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
