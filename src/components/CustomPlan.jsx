export default function CustomPlan() {
  return (
    <section className="border-b border-slate-200/70 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="overflow-hidden rounded-[32px] bg-slate-950">
          <div className="grid gap-12 px-7 py-12 sm:px-10 sm:py-14 lg:grid-cols-[1fr_auto] lg:items-end lg:px-14 lg:py-16">
            <div className="max-w-2xl">
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Custom plans
              </p>

              <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.05em] text-white sm:text-5xl lg:text-[58px]">
                Built around
                <span className="text-slate-500"> your channel.</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
                Every creator has a different content style, publishing
                frequency and production workload. Your plan is built around
                what you actually need.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Tell Us About Your Channel
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}