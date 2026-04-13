import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const fallbackPassword = "uppernotch";

async function unlockLeadTracker(formData: FormData) {
  "use server";

  const password = String(formData.get("password") ?? "");
  const expectedPassword = process.env.LEAD_TRACKER_PASSWORD ?? fallbackPassword;

  if (password !== expectedPassword) {
    redirect("/lead-tracker/login?error=1");
  }

  const cookieStore = await cookies();
  cookieStore.set("upper-notch-lead-tracker", "unlocked", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12
  });

  redirect("/lead-tracker");
}

export default async function LeadTrackerLoginPage({
  searchParams
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;

  return (
    <main className="min-h-screen px-5 py-10 text-white">
      <section className="mx-auto flex min-h-[80vh] max-w-xl items-center">
        <div className="w-full rounded-[2rem] border border-white/30 bg-slate-900/75 p-7 shadow-[0_30px_90px_rgba(3,55,104,0.3)] backdrop-blur sm:p-9">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-yellow-300">Upper Notch Admin</p>
          <h1 className="mt-4 text-4xl font-semibold uppercase leading-none text-white sm:text-5xl">Lead tracker login</h1>
          <p className="mt-4 text-base leading-7 text-slate-200">
            This keeps client enquiries private. Enter your lead tracker password to continue.
          </p>

          <form action={unlockLeadTracker} className="mt-8 space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.18em] text-yellow-300">Password</span>
              <input
                name="password"
                type="password"
                required
                className="w-full rounded-2xl border border-white/35 bg-white/95 px-5 py-4 text-base text-slate-950 outline-none transition placeholder:text-slate-500 focus:border-pink-400/80 focus:ring-2 focus:ring-pink-400/25"
                placeholder="Enter password"
              />
            </label>

            {params.error ? (
              <p className="rounded-2xl border border-rose-300/30 bg-rose-500/15 px-4 py-3 text-sm text-rose-100">
                Wrong password. Try again.
              </p>
            ) : null}

            <button className="inline-flex w-full items-center justify-center rounded-full bg-pink-500 px-6 py-3.5 text-base font-black uppercase tracking-[0.16em] text-white shadow-[0_18px_40px_rgba(236,72,153,0.35)] transition hover:bg-pink-400">
              Unlock tracker
            </button>
          </form>

          <p className="mt-5 text-sm leading-6 text-slate-300">
            Default password is uppernotch unless you set LEAD_TRACKER_PASSWORD in Vercel.
          </p>
        </div>
      </section>
    </main>
  );
}
