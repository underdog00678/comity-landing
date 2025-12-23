export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-40 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl" />

        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 pt-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold text-white">
              C
            </div>
            <span className="text-base font-semibold tracking-tight">
              Commitly
            </span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a className="hover:text-slate-900" href="#difference">
              Why it matters
            </a>
            <a className="hover:text-slate-900" href="#pricing">
              Pricing
            </a>
            <a className="hover:text-slate-900" href="#faq">
              FAQ
            </a>
          </nav>
        </header>

        <main className="mx-auto max-w-6xl px-6 pb-20 pt-16">
          <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/80 px-3 py-1 text-xs font-medium text-emerald-800 shadow-sm">
                Offline-first calm planning for macOS
              </div>
              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                A calm workspace for turning scattered ideas into steady
                progress.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Commitly blends planning, focus, and gentle structure so you can
                ship what matters without the noise. Everything stays on your
                Mac, ready even when you are offline.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {[
                  "Plan in minutes with guided weekly and daily flows.",
                  "Keep context close with notes, tasks, and decisions in one place.",
                  "Stay private with offline-first storage and local search.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100">
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-3.5 w-3.5 text-emerald-700"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 5.296a1 1 0 0 1 0 1.414l-7.5 7.5a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L8.5 12.086l6.793-6.79a1 1 0 0 1 1.411 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="/early-access"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Join Early Access — $15
                </a>
                <a
                  href="#pricing"
                  className="text-sm font-semibold text-slate-700 hover:text-slate-900"
                >
                  See what&apos;s included
                </a>
              </div>
              <p className="mt-3 text-xs text-slate-500">
                One-time $15. Updates included until v1.0.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-xl shadow-slate-200/60 backdrop-blur">
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Daily clarity
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                    A gentle home for your day.
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Start each morning with a short prompt, then map the day
                    into doable blocks. Commitly helps you keep momentum without
                    overplanning.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span>Today</span>
                    <span>Offline</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    <li>Focus sprint: prototype review</li>
                    <li>Draft product update</li>
                    <li>Collect 3 customer notes</li>
                  </ul>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  Sync-free by default, ready anytime.
                </div>
              </div>
            </div>
          </section>

          <section className="mt-24">
            <div className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Why Commitly exists
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-slate-900">
                  Planning should lower your stress, not add to it.
                </h2>
              </div>
              <p className="text-base leading-relaxed text-slate-600">
                Commitly was built for people who care about craft and want a
                quiet, dependable space to think. It reduces the friction of
                capture and keeps your plan close so you can move with
                confidence.
              </p>
            </div>
          </section>

          <section className="mt-24" id="difference">
            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                What makes it different
              </p>
              <h2 className="text-3xl font-semibold text-slate-900">
                Designed for focus, built for clarity.
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Offline-first by default",
                  body: "Your plans stay available even without a connection. Sync comes later, but you never wait on it.",
                },
                {
                  title: "Guided weekly rhythms",
                  body: "Gentle prompts help you review wins, set direction, and plan the next few days without heavy tooling.",
                },
                {
                  title: "Intentional daily view",
                  body: "A focused layout surfaces the next best action, supporting deep work without endless lists.",
                },
                {
                  title: "Private and local",
                  body: "Everything lives on your Mac. Commitly prioritizes privacy, speed, and predictable performance.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-24">
            <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  What you can do today
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-slate-900">
                  Make progress in minutes.
                </h2>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <ul className="space-y-4 text-sm text-slate-700">
                  <li>Capture new ideas and tag them to the right project.</li>
                  <li>Turn a long list into a focused daily plan.</li>
                  <li>Track what moved forward and what needs a reset.</li>
                  <li>Hold your weekly review and set calm priorities.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-24">
            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Who it is for
              </p>
              <h2 className="text-3xl font-semibold text-slate-900">
                Built for people who value clarity.
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Independent builders",
                  body: "Keep product, planning, and personal goals aligned without juggling too many tools.",
                },
                {
                  title: "Creative leads",
                  body: "Track multiple projects with a calm, visual structure that respects your time.",
                },
                {
                  title: "Small teams",
                  body: "Coordinate priorities locally before you share work outward.",
                },
              ].map((persona) => (
                <div
                  key={persona.title}
                  className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {persona.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {persona.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-24" id="pricing">
            <div className="rounded-3xl border border-emerald-200/70 bg-white p-10 shadow-lg shadow-emerald-100">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
                    Early Access
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                    $15 one-time, updates included.
                  </h2>
                  <p className="mt-3 text-sm text-slate-600">
                    Your purchase includes all updates until v1.0 and priority
                    access to feature previews.
                  </p>
                </div>
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-5 text-center">
                  <p className="text-sm font-semibold text-emerald-800">
                    Pay once. Keep it.
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-slate-900">
                    $15
                  </p>
                  <a
                    href="/early-access"
                    className="mt-4 inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white"
                  >
                    Join Early Access
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-24">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Platform and availability
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-slate-900">
                  macOS first, offline-first always.
                </h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-slate-600">
                <p>
                  Commitly launches on macOS to keep the experience fast and
                  native. Everything lives locally, so you can focus without
                  delays or network dependency.
                </p>
                <p>
                  Windows and web are on the roadmap after the macOS foundation
                  is solid.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-24">
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    What is coming next
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold text-slate-900">
                    Future-ready, clearly labeled.
                  </h2>
                </div>
                <span className="hidden rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500 md:inline-flex">
                  Future
                </span>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: "Tray mode",
                    body: "Stay close to your plan without opening the full app.",
                  },
                  {
                    title: "Sync",
                    body: "Opt-in sync for multiple devices with full control.",
                  },
                  {
                    title: "Teams",
                    body: "Lightweight collaboration for shared goals.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <p className="text-sm font-semibold text-slate-900">
                      {item.title}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-24" id="faq">
            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                FAQ
              </p>
              <h2 className="text-3xl font-semibold text-slate-900">
                Answers before you ask.
              </h2>
            </div>
            <div className="mt-10 grid gap-4">
              {[
                {
                  q: "What does offline-first mean in practice?",
                  a: "Your data lives locally on your Mac. The app works without the internet and stays fast at all times.",
                },
                {
                  q: "Is the $15 price recurring?",
                  a: "No. Early Access is a one-time $15 payment and includes updates until v1.0.",
                },
                {
                  q: "Do I get updates after I join?",
                  a: "Yes. Early Access members receive every update through v1.0 at no extra cost.",
                },
                {
                  q: "When will sync be available?",
                  a: "Sync is planned for a future release after the macOS foundation is solid. It will be opt-in.",
                },
                {
                  q: "Do you offer refunds?",
                  a: "If Commitly is not a fit, reach out within 14 days and we will make it right.",
                },
                {
                  q: "How do I get support?",
                  a: "Email the team and we will respond within one business day.",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-slate-200 bg-white px-6 py-4"
                >
                  <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-24">
            <div className="rounded-3xl border border-slate-200 bg-slate-900 px-10 py-12 text-white shadow-xl">
              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <h2 className="text-3xl font-semibold">
                    Ready to plan with calm?
                  </h2>
                  <p className="mt-3 text-sm text-slate-200">
                    Join Early Access today and help shape Commitly as it grows.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
                  <a
                    href="/early-access"
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900"
                  >
                    Join Early Access — $15
                  </a>
                  <span className="text-xs text-slate-300">
                    We&apos;ll email you your early access link.
                  </span>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="mx-auto max-w-6xl px-6 pb-12 pt-4 text-sm text-slate-500">
          <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 md:flex-row md:items-center md:justify-between">
            <span>Commitly. Calm planning, offline-first.</span>
            <span>Contact: Jeremy.john.underwood007@gmail.com</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
