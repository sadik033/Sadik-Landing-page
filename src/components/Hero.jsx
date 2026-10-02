export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-slate-200/70"
    >
      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-24">
        {/* Left Content */}
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600">
              YouTube Management for Tech Professionals
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="max-w-3xl text-[clamp(3rem,7vw,5.8rem)] font-extrabold leading-[0.96] tracking-[-0.065em] text-slate-950">
            YouTube shouldn't feel like a{" "}
            <span className="text-[#C2413B] decoration-[#C2413B]/30 underline decoration-[3px] underline-offset-8">Second job.</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-[17px] leading-8 text-slate-600 sm:text-[18px]">
            Focus on your work, expertise and content. Leave the editing,
            thumbnails, optimization and publishing to us.
          </p>

          {/* Core Promise */}
          <div className="mt-8">
            <p className="text-base font-semibold tracking-[-0.02em] text-slate-950 sm:text-lg">
              Just shoot. Send. We handle the rest.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
            >
              Get Started
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="#how-it-works"
              className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50"
            >
              How It Works
            </a>
          </div>

          {/* Small Trust Line */}
          <p className="mt-6 text-xs font-medium text-slate-400">
            YouTube made easy for software engineers and tech creators
          </p>
        </div>

        {/* Right Visual */}
        <div className="relative mx-auto w-full max-w-[500px] lg:ml-auto">
          {/* Background decoration */}
          <div className="absolute -inset-10 -z-10 rounded-full bg-slate-100 blur-3xl" />

          {/* Main Card */}
          <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.10)]">
            {/* Card Header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                  Your YouTube Workflow
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  From footage to published
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-white">
                S
              </div>
            </div>

            {/* Workflow */}
            <div className="p-6">
              <WorkflowItem
                number="01"
                title="Shoot"
                description="Create the content you know best."
                active
              />

              <Connector />

              <WorkflowItem
                number="02"
                title="Send"
                description="Share your raw footage and context."
              />

              <Connector />

              <WorkflowItem
                number="03"
                title="We handle it"
                description="Edit, design, optimize and prepare."
              />

              <Connector />

              <WorkflowItem
                number="04"
                title="Published"
                description="Your content goes live, ready to perform."
                complete
              />
            </div>

            {/* Bottom message */}
            <div className="border-t border-slate-100 bg-slate-50 px-6 py-5">
              <p className="text-sm font-medium text-slate-700">
                Your expertise stays yours.
              </p>
              <p className="mt-1 text-sm text-slate-400">
                The YouTube workload doesn't have to.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowItem({
  number,
  title,
  description,
  active = false,
  complete = false,
}) {
  return (
    <div className="flex items-center gap-4">
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold ${
          complete
            ? "border-slate-950 bg-slate-950 text-white"
            : active
              ? "border-slate-950 bg-slate-950 text-white"
              : "border-slate-200 bg-white text-slate-500"
        }`}
      >
        {complete ? "✓" : number}
      </div>

      <div>
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <p className="mt-0.5 text-xs leading-5 text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="ml-[21px] h-7 border-l border-dashed border-slate-200" />
  );
}