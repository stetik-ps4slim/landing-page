"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";

const modes = {
  now: {
    label: "Pay Now",
    title: "The price is what you pay now.",
    body:
      "You invest in structure, accountability, coaching, and a clear path forward. It is a decision made once, with a result that keeps compounding.",
    points: [
      "A tailored plan with expert guidance",
      "Standards that keep you consistent",
      "Momentum in your physique, performance, and mindset"
    ]
  },
  later: {
    label: "Pay Later",
    title: "The cost is what you pay six months later by staying the same.",
    body:
      "More frustration. More inconsistency. More time lost second-guessing what to do. The longer the problem stays unsolved, the more it quietly costs you in confidence, energy, and progress.",
    points: [
      "Another six months of stop-start effort",
      "Low energy, low confidence, and no clear direction",
      "A body and routine that still do not reflect your standard"
    ]
  }
} as const;

export function CostOfWaitingSection() {
  const [activeMode, setActiveMode] = useState<keyof typeof modes>("later");
  const active = modes[activeMode];

  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="panel overflow-hidden border-accent/20 bg-gradient-to-br from-white/[0.07] to-white/[0.03] p-6 shadow-glow sm:p-8 lg:p-10">
          <SectionHeading
            eyebrow="Perspective"
            title="When people say it is expensive, they are usually only looking at one side of the equation."
            description="The price is what you pay now. The cost is what you pay later by leaving the problem unsolved."
          />

          <div className="mt-8 flex flex-wrap gap-3">
            {(Object.entries(modes) as Array<[keyof typeof modes, (typeof modes)[keyof typeof modes]]>).map(
              ([key, mode]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveMode(key)}
                  className={`rounded-full border px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition ${
                    activeMode === key
                      ? "border-accent bg-accent text-canvas"
                      : "border-white/15 text-ink hover:border-accent hover:text-accent"
                  }`}
                >
                  {mode.label}
                </button>
              )
            )}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div className="rounded-[1.75rem] border border-white/10 bg-black/30 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Cost vs Price</p>
              <h3 className="mt-4 text-3xl uppercase leading-none text-ink sm:text-4xl">{active.title}</h3>
              <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300">{active.body}</p>
            </div>

            <div className="space-y-4">
              {active.points.map((point) => (
                <div key={point} className="panel p-5">
                  <p className="text-base leading-7 text-zinc-200">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
