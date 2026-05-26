export const siteContent = {
  brand: {
    name: "Upper Notch Coaching",
    shortName: "Upper Notch",
    eyebrow: "Fat Loss · Lean Muscle · Simple Results",
    consultationLink: "https://calendly.com/theuppernotch/30min",
    consultationLabel: "Book Your Free Call",
    applicationLabel: "Book Your Free Call",
    location: "Richmond, Melbourne, Victoria"
  },
  hero: {
    headline: "Fat Loss & Lean Muscle Gain Made Simple",
    subheading:
      "Stop guessing. Stop starting over. Book a free phone call and get a clear plan built around your body and your goals — so you can finally see results that actually last.",
    highlights: [
      "Free phone call — no obligation, no pressure",
      "Fat loss & lean muscle made simple",
      "Built around your lifestyle & schedule"
    ]
  },
  about: {
    title: "Coaching that makes getting lean feel simple.",
    description:
      "You don't need another generic plan or a diet that makes you miserable. You need a clear system, a coach in your corner, and a process that actually fits your life. That's exactly what this is.",
    coachName: "Jazzay Sallah",
    coachRole: "Personal Trainer & Nutrition Coach",
    coachCardText:
      "Helping busy people lose fat, build lean muscle, and finally feel confident in their body — through structured coaching, real accountability, and a process that's built to last.",
    points: [
      "Fat loss and lean muscle gain don't have to be complicated. With the right structure and the right coach, the process becomes straightforward — and the results compound fast.",
      "Every program is built around your goals, your starting point, and your schedule. No cookie-cutter templates. No guesswork. Just a clear plan you can follow.",
      "Nutrition is built in from day one — practical targets and real-world guidance that fit your lifestyle, not a meal plan you'll quit in two weeks.",
      "Weekly check-ins and direct support keep you accountable between sessions so consistency stops being the hard part."
    ],
    closing: "Invest in yourself. The results will follow."
  },
  services: {
    title: "Simple coaching options. Real results.",
    description:
      "Whether you're training in-person in Richmond or fully online, every option is built around the same goal: fat loss, lean muscle gain, and a process you can actually stick to.",
    categories: [
      {
        name: "Coaching Options",
        plans: [
          {
            name: "Foundation",
            idealFor: "Build consistency and start seeing results",
            badge: "",
            featured: false,
            results: [
              "Develop strong fat loss and muscle-building habits",
              "Improve confidence and motivation",
              "Build a sustainable routine around your schedule",
              "Make consistent, measurable progress"
            ],
            inclusions: [
              "1x personal training session per week",
              "Structured fat loss & muscle gain program",
              "Weekly check-ins and habit tracking: steps, sleep, water",
              "Basic support for accountability and consistency",
              "Coaching app access"
            ]
          },
          {
            name: "Transformation",
            idealFor: "Faster fat loss and lean muscle with full support",
            badge: "Most Popular",
            featured: true,
            results: [
              "Faster fat loss and lean muscle results",
              "Higher accountability and motivation",
              "Noticeable physique changes you can see and feel",
              "Stay locked in with regular guidance"
            ],
            inclusions: [
              "2x personal training sessions per week",
              "Progressively updated training program",
              "Weekly check-ins and direct messaging support: Mon–Fri",
              "Technique feedback and habit coaching system",
              "Coaching app access"
            ]
          },
          {
            name: "Elite",
            idealFor: "The fastest path to fat loss and lean muscle gain",
            badge: "",
            featured: false,
            results: [
              "Fastest rate of fat loss and muscle gain possible",
              "Highest level of accountability and motivation",
              "Full lifestyle and performance optimisation",
              "Everything dialled in for you with no guesswork"
            ],
            inclusions: [
              "3x personal training sessions per week",
              "Fully customised training and progression system",
              "Priority check-ins and unlimited support",
              "Weekly program and lifestyle optimisation",
              "Coaching app access"
            ]
          }
        ]
      },
      {
        name: "Nutrition Coaching Add-On",
        plans: [
          {
            name: "Nutrition Coaching Add-On",
            idealFor: "Align your nutrition with your fat loss and muscle gain goals",
            badge: "",
            featured: false,
            results: [
              "Personalised calorie and macro targets",
              "Practical food guidance that fits your lifestyle",
              "Better recovery and body composition"
            ],
            inclusions: [
              "Tailored calorie and macro targets",
              "Meal structure guidance",
              "Weekly nutrition check-in and adjustments",
              "Accountability support"
            ]
          }
        ]
      }
    ]
  },
  testimonials: {
    title: "Clients stay because the process works.",
    description:
      "The best transformations come from consistency, clear expectations, and coaching that keeps standards high.",
    items: [
      {
        quote:
          "Training with Jazzay gave me structure I had never had before. I dropped body fat, got noticeably stronger, and stayed consistent because the plan fit around work.",
        name: "Placeholder Review",
        result: "Busy professional, Richmond"
      },
      {
        quote:
          "The accountability was the biggest difference. Every session had purpose, the coaching felt premium, and I started feeling more confident in and out of the gym within weeks.",
        name: "Placeholder Review",
        result: "Transformation client"
      },
      {
        quote:
          "Upper Notch Coaching made fat loss feel simple. I knew exactly what to do, my nutrition improved, and I finally saw real changes in how I looked and performed.",
        name: "Placeholder Review",
        result: "Transformation client"
      }
    ]
  },
  faq: {
    title: "Clear answers before you book.",
    description:
      "Fat loss and muscle gain coaching should feel simple from the start. Here are the questions people ask before booking their free call.",
    items: [
      {
        question: "What happens on the free call?",
        answer:
          "It's a free 30-minute phone call. We talk through your goals, where you're at right now, what's worked and what hasn't, and figure out the right plan for you. No pressure. No obligation. Just clarity."
      },
      {
        question: "Is this for fat loss, muscle gain, or both?",
        answer:
          "Both. Coaching is built around your primary goal — whether that's losing fat, building lean muscle, or improving overall body composition. Most clients are working toward both at once."
      },
      {
        question: "What if my schedule is busy or inconsistent?",
        answer:
          "That is exactly who this is built for. Training is structured around your week so the plan is realistic and easy to stick to. Most clients are busy professionals who couldn't make a generic program work."
      },
      {
        question: "Will I get nutrition support as well?",
        answer:
          "Yes. Nutrition is a major part of fat loss and muscle gain results. Coaching includes practical nutrition guidance, and there is also a dedicated nutrition coaching add-on for more personalised support."
      }
    ]
  },
  leadForm: {
    title: "Not ready to book yet? Drop your details.",
    description:
      "Fill in the form

cat > components/sections/hero-section.tsx << 'EOF'
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/ui/site-header";
import { siteContent } from "@/lib/site-content";
export function HeroSection() {
  return (
    <section id="top" className="relative pb-16 pt-4 sm:pb-20">
      <div className="absolute inset-0 -z-10 bg-grid bg-[size:42px_42px] opacity-[0.12]" />
      <div className="absolute left-1/2 top-20 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-white/25 blur-3xl" />
      <SiteHeader />
      <div className="container-shell grid gap-10 pt-14 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-20">
        <div className="rounded-[2rem] border border-white/80 bg-white/95 p-5 text-slate-950 shadow-[0_24px_70px_rgba(3,55,104,0.18)] backdrop-blur sm:p-8">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-accent">
            {siteContent.brand.eyebrow}
          </p>
          <h1 className="max-w-4xl text-6xl uppercase leading-[0.88] text-slate-950 sm:text-7xl lg:text-8xl">
            {siteContent.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-slate-700 sm:text-xl">
            {siteContent.hero.subheading}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            
              href={siteContent.brand.consultationLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-accent bg-accent px-6 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-canvas shadow-[0_14px_35px_rgba(255,210,63,0.35)] transition hover:-translate-y-0.5 hover:bg-[#ffe26f]"
            >
              {siteContent.brand.consultationLabel}
            </a>
          </div>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Free 30-min call · No obligation
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {siteContent.hero.highlights.map((item) => (
              <div key={item} className="rounded-3xl border border-sky-200 bg-sky-50 p-4">
                <p className="text-sm font-semibold leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[2.4rem] border border-white/80 bg-white/90 p-5 text-canvas shadow-[0_24px_70px_rgba(3,55,104,0.18)] sm:p-8">
          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cta/45 blur-2xl" />
          <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-accent/55 blur-2xl" />
          <div className="relative mx-auto max-w-[430px] rounded-[2rem] border border-black/10 bg-white/80 p-5 shadow-2xl backdrop-blur sm:p-8">
            <div className="mx-auto flex max-w-[340px] justify-center rounded-[1.75rem] border border-black/10 bg-white/95 px-6 py-5 shadow-[0_18px_35px_rgba(15,23,42,0.16)]">
              <img
                src="/upper-notch-logo-badge.png"
                alt="Upper Notch Coaching logo"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
          <div className="relative mt-5 grid gap-3 sm:grid-cols-3">
            {[
              ["Look", "Better"],
              ["Feel", "Stronger"],
              ["Perform", "Higher"]
            ].map(([title, label]) => (
              <div key={title} className="rounded-2xl border border-sky-200 bg-white/95 p-4 text-slate-950 shadow-[0_16px_34px_rgba(3,55,104,0.14)]">
                <p className="text-xl font-black uppercase tracking-[0.08em] text-accent">{title}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
