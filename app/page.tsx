```tsx
const features = [
  {
    title: "AI Captions",
    description: "Create engaging captions for Instagram, Facebook and more in seconds.",
    icon: "✦",
  },
  {
    title: "Pinterest",
    description: "Generate Pinterest titles, descriptions and keywords designed for discovery.",
    icon: "◈",
  },
  {
    title: "Threads",
    description: "Turn your ideas into natural, engaging Threads posts with the right tone.",
    icon: "◌",
  },
  {
    title: "Blog Content",
    description: "Transform simple ideas into structured blog posts your audience wants to read.",
    icon: "▤",
  },
  {
    title: "Video Scripts",
    description: "Create short-form video scripts for Reels, TikTok and YouTube Shorts.",
    icon: "▶",
  },
  {
    title: "Hashtags",
    description: "Generate relevant hashtag ideas to help your content reach the right audience.",
    icon: "#",
  },
];

const steps = [
  {
    number: "01",
    title: "Enter your idea",
    description: "Tell ContentFlow what you want to create.",
  },
  {
    number: "02",
    title: "Choose a platform",
    description: "Select Instagram, Pinterest, Threads, Blog or another format.",
  },
  {
    number: "03",
    title: "Generate",
    description: "Let AI turn your idea into ready-to-use content.",
  },
  {
    number: "04",
    title: "Edit & save",
    description: "Make it yours, save it and come back whenever you need it.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#faf9f7] text-[#171717]">
      {/* Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#171717] text-sm font-bold text-white">
            C
          </div>
          <span className="text-xl font-semibold tracking-tight">
            ContentFlow
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex">
          <a href="#features" className="transition hover:text-black">
            Features
          </a>
          <a href="#how-it-works" className="transition hover:text-black">
            How it works
          </a>
          <a href="#pricing" className="transition hover:text-black">
            Pricing
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/login"
            className="hidden text-sm font-medium text-zinc-700 transition hover:text-black sm:block"
          >
            Log in
          </a>

          <a
            href="/signup"
            className="rounded-full bg-[#171717] px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#2d2d2d]"
          >
            Start Creating
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="absolute left-1/2 top-0 -z-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-200/30 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-sm text-zinc-600 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            Your ideas. Your content. One workspace.
          </div>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Create better content
            <span className="block text-[#d62929]">with AI — in seconds.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl">
            Generate social posts, Pinterest content, blog ideas, video
            scripts and more from one simple workspace.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/signup"
              className="rounded-full bg-[#171717] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:bg-[#2d2d2d]"
            >
              Start Creating →
            </a>

            <a
              href="#how-it-works"
              className="rounded-full border border-zinc-300 bg-white px-7 py-3.5 text-sm font-semibold text-zinc-800 transition hover:-translate-y-1 hover:border-zinc-400"
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative z-10 mx-auto mt-16 max-w-5xl">
          <div className="rounded-3xl border border-zinc-200 bg-white p-2 shadow-2xl shadow-zinc-900/10">
            <div className="overflow-hidden rounded-2xl border border-zinc-100 bg-[#f7f7f6]">
              {/* Fake browser bar */}
              <div className="flex items-center gap-2 border-b border-zinc-200 bg-white px-5 py-4">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                <div className="mx-auto hidden h-7 w-1/2 rounded-lg bg-zinc-100 sm:block" />
              </div>

              <div className="grid min-h-[390px] md:grid-cols-[190px_1fr]">
                {/* Sidebar */}
                <aside className="hidden border-r border-zinc-200 bg-white p-5 md:block">
                  <div className="mb-8 text-sm font-semibold">
                    ContentFlow
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="rounded-xl bg-zinc-100 px-3 py-2 font-medium">
                      Dashboard
                    </div>
                    <div className="px-3 py-2 text-zinc-500">Projects</div>
                    <div className="px-3 py-2 text-zinc-500">Generate</div>
                    <div className="px-3 py-2 text-zinc-500">History</div>
                  </div>
                </aside>

                {/* Dashboard */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                        Workspace
                      </p>
                      <h3 className="mt-1 text-2xl font-semibold">
                        Create something great.
                      </h3>
                    </div>

                    <div className="hidden rounded-full bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 sm:block">
                      AI Ready
                    </div>
                  </div>

                  <div className="mt-7 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                      <div className="text-2xl">✦</div>
                      <p className="mt-4 text-sm font-semibold">Instagram</p>
                      <p className="mt-1 text-xs text-zinc-500">
                        Create a caption
                      </p>
                    </div>

                    <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                      <div className="text-2xl">◈</div>
                      <p className="mt-4 text-sm font-semibold">Pinterest</p>
                      <p className="mt-1 text-xs text-zinc-500">
                        Generate a pin
                      </p>
                    </div>

                    <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                      <div className="text-2xl">▶</div>
                      <p className="mt-4 text-sm font-semibold">Video</p>
                      <p className="mt-1 text-xs text-zinc-500">
                        Write a script
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-zinc-200 bg-white p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-zinc-400">Recent idea</p>
                        <p className="mt-1 text-sm font-medium">
                          New skincare product launch
                        </p>
                      </div>
                      <span className="rounded-full bg-[#171717] px-4 py-2 text-xs font-medium text-white">
                        Generate
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform strip */}
      <section className="border-y border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 py-7 text-sm font-medium text-zinc-400 lg:px-8">
          <span>INSTAGRAM</span>
          <span>PINTEREST</span>
          <span>THREADS</span>
          <span>YOUTUBE</span>
          <span>FACEBOOK</span>
          <span>BLOGS</span>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d62929]">
            Everything in one place
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            From one idea to
            <span className="block text-zinc-400">content everywhere.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-600">
            Stop jumping between different tools. ContentFlow helps you turn
            one idea into content made for the platforms you actually use.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-3xl border border-zinc-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-900/5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-100 text-lg transition group-hover:bg-[#d62929] group-hover:text-white">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold">{feature.title}</h3>

              <p className="mt-3 leading-7 text-zinc-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="bg-[#171717] px-6 py-24 text-white lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
              Simple workflow
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Your idea in.
              <br />
              Content out.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="border-t border-white/15 pt-6"
              >
                <span className="text-sm font-medium text-red-400">
                  {step.number}
                </span>

                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d62929]">
            Pricing
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Start free. Grow when you&apos;re ready.
          </h2>

          <p className="mt-5 text-lg text-zinc-600">
            Explore ContentFlow without a credit card and upgrade when you
            need more.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-200 bg-white p-7">
            <p className="font-semibold">Free</p>
            <p className="mt-5 text-4xl font-semibold">$0</p>
            <p className="mt-2 text-sm text-zinc-500">Forever</p>

            <ul className="mt-7 space-y-3 text-sm text-zinc-600">
              <li>✓ 5 generations / month</li>
              <li>✓ Core content tools</li>
              <li>✓ Save your work</li>
            </ul>

            <a
              href="/signup"
              className="mt-8 block rounded-full border border-zinc-300 px-5 py-3 text-center text-sm font-semibold transition hover:bg-zinc-50"
            >
              Start Free
            </a>
          </div>

          <div className="relative rounded-3xl border-2 border-[#d62929] bg-white p-7 shadow-xl shadow-red-900/5">
            <span className="absolute right-5 top-5 rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-[#d62929]">
              Popular
            </span>

            <p className="font-semibold">Pro</p>
            <p className="mt-5 text-4xl font-semibold">$9</p>
            <p className="mt-2 text-sm text-zinc-500">per month</p>

            <ul className="mt-7 space-y-3 text-sm text-zinc-600">
              <li>✓ 100 generations / month</li>
              <li>✓ All content formats</li>
              <li>✓ Generation history</li>
            </ul>

            <a
              href="/signup"
              className="mt-8 block rounded-full bg-[#171717] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#2d2d2d]"
            >
              Get Pro
            </a>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-7">
            <p className="font-semibold">Business</p>
            <p className="mt-5 text-4xl font-semibold">$19</p>
            <p className="mt-2 text-sm text-zinc-500">per month</p>

            <ul className="mt-7 space-y-3 text-sm text-zinc-600">
              <li>✓ 500 generations / month</li>
              <li>✓ Advanced workflows</li>
              <li>✓ More workspace capacity</li>
            </ul>

            <a
              href="/signup"
              className="mt-8 block rounded-full border border-zinc-300 px-5 py-3 text-center text-sm font-semibold transition hover:bg-zinc-50"
            >
              Choose Business
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#d62929] px-6 py-16 text-center text-white sm:px-12 lg:py-20">
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Your next great piece of content starts with an idea.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-red-100">
            Bring your ideas to ContentFlow and turn them into content in
            seconds.
          </p>

          <a
            href="/signup"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#171717] transition hover:-translate-y-1 hover:bg-zinc-100"
          >
            Start Creating →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex items-center gap-2 font-medium text-zinc-800">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#171717] text-xs font-bold text-white">
              C
            </div>
            ContentFlow
          </div>

          <p>AI-powered content creation, simplified.</p>

          <p>© 2026 ContentFlow</p>
        </div>
      </footer>
    </main>
  );
}
```