const audiences = [
  {
    title: "Software Engineers",
    description:
      "Share what you build, learn and know without turning content production into another full-time task.",
  },
  {
    title: "IT Professionals",
    description:
      "Turn your technical expertise into useful content while keeping your focus on your actual work.",
  },
  {
    title: "Tech Experts",
    description:
      "Build your presence around your knowledge while someone else handles the production workload.",
  },
];

export default function Audience() {
  return (
    <section className="border-b border-slate-200/70 bg-[#fafafa]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="max-w-3xl">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            Who it's for
          </p>

          <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-[58px]">
            Built for people with
            <span className="text-slate-400"> something worth saying.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {audiences.map((audience, index) => (
            <article
              key={audience.title}
              className="rounded-[24px] border border-slate-200 bg-white p-7 sm:p-8"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-white">
                0{index + 1}
              </div>

              <h3 className="mt-10 text-xl font-semibold tracking-[-0.03em] text-slate-950">
                {audience.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                {audience.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm font-medium text-slate-400">
          You bring the expertise. The production workload gets handled.
        </p>
      </div>
    </section>
  );
}