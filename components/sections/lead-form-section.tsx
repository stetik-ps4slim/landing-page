"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteContent } from "@/lib/site-content";

type FormState = {
  name: string;
  phone: string;
  email: string;
  bestTimeToContact: string;
  goal: string;
};

const initialFormState: FormState = {
  name: "",
  phone: "",
  email: "",
  bestTimeToContact: "",
  goal: ""
};

export function LeadFormSection() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...form,
          notes: `Best time to contact: ${form.bestTimeToContact}`
        })
      });

      const data = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        setErrorMessage(data.error ?? "Please try again.");
        return;
      }

      setSuccessMessage(data.message ?? "Your consultation request has been submitted.");
      setForm(initialFormState);
      router.push("/thank-you");
    } catch (error) {
      console.error(error);
      setErrorMessage("We could not submit the form right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="lead-form" className="section-space">
      <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Consultation"
            title={siteContent.leadForm.title}
            description={siteContent.leadForm.description}
          />
          <div className="mt-8 panel p-6">
            <p className="text-sm leading-7 text-slate-700">{siteContent.leadForm.note}</p>
            <div className="mt-6 h-px bg-sky-200" />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
              Best Fit Clients
            </p>
            <ul className="mt-4 space-y-3 text-base leading-7 text-slate-700">
              {siteContent.leadForm.fitPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="panel border-accent/35 p-6 shadow-[0_24px_70px_rgba(3,55,104,0.18)] sm:p-8">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-slate-700">
                Full Name
              </label>
              <input
                id="name"
                value={form.name}
                onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                className="w-full rounded-2xl border border-sky-200 bg-sky-50 px-4 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-accent focus:bg-white"
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-slate-700">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
                className="w-full rounded-2xl border border-sky-200 bg-sky-50 px-4 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-accent focus:bg-white"
                placeholder="Best contact number"
                autoComplete="tel"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-slate-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                className="w-full rounded-2xl border border-sky-200 bg-sky-50 px-4 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-accent focus:bg-white"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>

            <div>
              <label htmlFor="best-time" className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-slate-700">
                Best Time To Contact
              </label>
              <input
                id="best-time"
                value={form.bestTimeToContact}
                onChange={(event) => setForm((current) => ({ ...current, bestTimeToContact: event.target.value }))}
                className="w-full rounded-2xl border border-sky-200 bg-sky-50 px-4 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-accent focus:bg-white"
                placeholder="Example: Weekdays after 5pm"
                autoComplete="off"
                required
              />
            </div>

            <div>
              <label htmlFor="goal" className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-slate-700">
                Main Goal
              </label>
              <textarea
                id="goal"
                value={form.goal}
                onChange={(event) => setForm((current) => ({ ...current, goal: event.target.value }))}
                className="min-h-32 w-full rounded-2xl border border-sky-200 bg-sky-50 px-4 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-accent focus:bg-white"
                placeholder="Tell us what you want to achieve over the next 3-6 months."
                required
              />
            </div>

            {errorMessage ? (
              <p className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {errorMessage}
              </p>
            ) : null}

            {successMessage ? (
              <p className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                {successMessage}
              </p>
            ) : null}

            <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : siteContent.brand.applicationLabel}
            </Button>
            <p className="text-sm leading-6 text-slate-500">
              Your details are used only to contact you about Upper Notch Coaching and manage your enquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
