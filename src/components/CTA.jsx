export default function CTA() {
  return (
    <section id="contact" className="bg-slate-950">
      <div className="mx-auto max-w-5xl px-5 py-28 text-center sm:px-8 lg:py-36">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
          Your next video
        </p>

        <h2 className="mx-auto mt-6 max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.06em] text-white sm:text-6xl lg:text-[76px]">
          Ready to get YouTube off your plate?
        </h2>

        <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
          Focus on creating. Leave the YouTube workload to someone else.
        </p>

        <div className="mt-10">
          <a
            href="mailto:sadikwork03@gmail.com"
            className="inline-flex h-13 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-xl"
          >
            Let's Work Together
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <p className="mt-6 text-xs text-slate-600">
          Just shoot. Send. We handle the rest.
        </p>
      </div>
    </section>
  );
}