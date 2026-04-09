"use client";

import { useState } from "react";

const comparisonRows = [
  {
    label: "Decision",
    now: "Invest in coaching and solve it properly",
    later: "Keep delaying and keep carrying the problem"
  },
  {
    label: "Momentum",
    now: "Structured progress with clear direction",
    later: "Stop-start effort and inconsistent execution"
  },
  {
    label: "Energy",
    now: "More confidence, more energy, better standards",
    later: "Low energy, low confidence, no clear direction"
  },
  {
    label: "6 Months",
    now: "A stronger body and a routine that reflects your standard",
    later: "Another six months of second-guessing and stalled progress"
  }
] as const;

const details = {
  now: {
    label: "Pay Now",
    title: "The price is what you pay now.",
    body:
      "You invest in structure, accountability, coaching, and a clear plan. It is a decision that costs once and keeps paying you back in confidence, energy, and momentum.",
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
      "A body and routine that still does not reflect your standard"
    ]
  }
} as const;

export function CostOfWaitingSection() {
  const [position, setPosition] = useState(62);
  const activeSide = position < 50 ? "now" : "later";
  const active = details[activeSide];

  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="panel overflow-hidden border-accent/20 bg-gradient-to-br from-white/[0.07] to-white/[0.03] p-6 shadow-glow sm:p-8 lg:p-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Cost vs Price</p>
            <h2 className="mt-4 text-4xl uppercase leading-none text-ink sm:text-5xl">
              The price is what you pay now. The cost is what you pay later by leaving the problem unsolved.
            </h2>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {(["now", "later"] as const).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setPosition(key === "now" ? 38 : 62)}
                className={`rounded-full border px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition ${
                  activeSide === key
                    ? "border-accent bg-accent text-canvas"
                    : "border-white/15 text-ink hover:border-accent hover:text-accent"
                }`}
              >
                {details[key].label}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/30 p-6 sm:p-8">
              <div className="pointer-events-none absolute inset-0 grid grid-cols-2">
                <div className="bg-[#17120d]" />
                <div className="bg-[#101010]" />
              </div>

              <div
                className="pointer-events-none absolute inset-y-0 z-10 flex -translate-x-1/2 items-center"
                style={{ left: `${position}%` }}
              >
                <div className="h-full w-px bg-accent/80" />
                <div className="absolute left-1/2 top-1/2 flex h-14 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-canvas shadow-[0_12px_30px_rgba(210,168,108,0.35)]">
                  <span className="text-base font-semibold leading-none">|||</span>
                </div>
              </div>

              <input
                aria-label="Compare pay now and pay later"
                type="range"
                min="15"
                max="85"
                value={position}
                onChange={(event) => setPosition(Number(event.target.value))}
                className="compare-slider absolute inset-0 z-20 h-full w-full cursor-ew-resize appearance-none bg-transparent"
              />

              <div className="relative z-0">
                <div className="grid grid-cols-2 gap-4 border-b border-white/10 pb-5">
                  <p className={`text-sm font-semibold uppercase tracking-[0.25em] ${activeSide === "now" ? "text-accent" : "text-zinc-500"}`}>
                    Pay Now
                  </p>
                  <p className={`text-right text-sm font-semibold uppercase tracking-[0.25em] ${activeSide === "later" ? "text-accent" : "text-zinc-500"}`}>
                    Pay Later
                  </p>
                </div>

                <div className="mt-5 space-y-5">
                  {comparisonRows.map((row) => (
                    <div key={row.label} className="grid grid-cols-[0.8fr_1.4fr] gap-4 border-t border-white/10 pt-5 first:border-t-0 first:pt-0">
                      <p className="text-sm font-semibold text-zinc-500">{row.label}</p>
                      <p className="text-sm leading-7 text-zinc-100 transition duration-200">
                        {activeSide === "now" ? row.now : row.later}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[1.75rem] border border-white/10 bg-black/30 p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Cost vs Price</p>
                <h3 className="mt-4 text-3xl uppercase leading-none text-ink sm:text-4xl">{active.title}</h3>
                <p className="mt-5 text-base leading-8 text-zinc-300">{active.body}</p>
              </div>

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
