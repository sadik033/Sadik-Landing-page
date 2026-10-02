const steps = [
  {
    number: "01",
    title: "Shoot",
    description:
      "Record your content the way you normally do. No complicated production setup required.",
  },
  {
    number: "02",
    title: "Send",
    description:
      "Send the raw footage along with any important context, references or instructions.",
  },
  {
    number: "03",
    title: "We Handle It",
    description:
      "Editing, thumbnail design, optimization and publishing are taken care of.",
  },
  {
    number: "04",
    title: "You Approve",
    description:
      "Review the finished content, share feedback and request revisions if needed.",
  },
  {
    number: "05",
    title: "Published",
    description:
      "Once approved, your video is ready to go live without you managing the entire process.",
  },
];

export default function Workflow() {
  return (
    <section
      id="how-it-works"
      className="border-b border-slate-200/70 bg-white"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left */}
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              How it works
            </p>

            <h2 className="max-w-lg text-4xl font-bold leading-[1.05] tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-[58px]">
              Shoot.
              <br />
              Send.
              <br />
              <span className="text-slate-400">Done.</span>
            </h2>

            <p className="mt-7 max-w-md text-base leading-8 text-slate-600">
              A simple workflow designed to take the repetitive YouTube work
              off your plate.
            </p>
          </div>

          {/* Steps */}
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group grid gap-5 py-8 sm:grid-cols-[64px_1fr] sm:py-10"
              >
                <span className="text-xs font-semibold text-slate-300">
                  {step.number}
                </span>

                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-16 rounded-2xl bg-slate-950 px-6 py-7 sm:px-8">
          <p className="text-center text-sm font-medium leading-6 text-white sm:text-base">
            You focus on creating. The YouTube workload stays with us.
          </p>
        </div>
      </div>
    </section>
  );
}