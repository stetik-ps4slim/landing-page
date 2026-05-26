"use client";
import { useEffect } from "react";
import { SectionHeading } from "@/components/ui/section-heading";

export function CalendlySection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="book" className="section-space">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Book Your Free Call"
          title="Lock in your free phone call."
          description="Pick a time below — it takes 30 seconds. Free call, no obligation."
          align="center"
        />
        <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/20 bg-white shadow-xl">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/theuppernotch/30min?hide_gdpr_banner=1&primary_color=d2a86c"
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>
      </div>
    </section>
  );
}
