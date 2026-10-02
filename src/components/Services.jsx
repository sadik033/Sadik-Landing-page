const services = [
  {
    number: "01",
    title: "Video Editing",
    description:
      "Turn your raw footage into polished, engaging YouTube videos without spending hours in the timeline.",
  },
  {
    number: "02",
    title: "Thumbnail Design",
    description:
      "Clean, professional thumbnails designed around the topic, story and audience of each video.",
  },
  {
    number: "03",
    title: "YouTube Optimization",
    description:
      "Titles, descriptions, metadata and publishing details handled with the video's topic and audience in mind.",
  },
  {
    number: "04",
    title: "Upload & Publishing",
    description:
      "We take care of the operational work of getting your finished video uploaded and ready to publish.",
  },
  {
    number: "05",
    title: "Shorts & Repurposing",
    description:
      "Turn useful moments from your long-form content into short-form videos when it makes sense for your channel.",
  },
  {
    number: "06",
    title: "Content Support",
    description:
      "Practical support around your YouTube workflow so you can spend less time managing the process.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-b border-slate-200/70 bg-[#fafafa]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            What we handle
          </p>

          <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-[58px]">
            Everything after
            <span className="text-slate-400"> “Record.”</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            From raw footage to a finished YouTube video, the work around your
            content is taken care of.
          </p>
        </div>

        {/* Service Grid */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-[28px] border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group bg-white p-7 transition-colors duration-300 hover:bg-slate-50 sm:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-semibold text-slate-300">
                  {service.number}
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-sm text-slate-400 transition-all duration-300 group-hover:border-slate-950 group-hover:bg-slate-950 group-hover:text-white">
                  ↗
                </span>
              </div>

              <h3 className="mt-12 text-lg font-semibold tracking-[-0.025em] text-slate-950">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}