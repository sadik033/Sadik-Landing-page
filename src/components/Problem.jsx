export default function Problem() {
  const tasks = [
    "Editing",
    "Thumbnails",
    "Titles",
    "Optimization",
    "Uploading",
    "Shorts",
  ];

  return (
    <section
      id="problem"
      className="border-b border-slate-200/70 bg-white"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          {/* Left */}
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              The YouTube workload
            </p>

            <h2 className="max-w-xl text-4xl font-bold leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-[54px]">
              You have better things to do than manage YouTube.
            </h2>
          </div>

          {/* Right */}
          <div className="max-w-xl lg:ml-auto">
            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              Recording your video is only one part of the job. The work that
              comes after it can quickly turn YouTube into another task on your
              already busy schedule.
            </p>

            {/* Tasks */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {tasks.map((task) => (
                <span
                  key={task}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-600"
                >
                  {task}
                </span>
              ))}
            </div>

            <div className="mt-9 border-l-2 border-slate-950 pl-5">
              <p className="text-base font-semibold leading-7 tracking-[-0.015em] text-slate-950 sm:text-lg">
                Your expertise should be the focus — not everything around
                publishing it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}