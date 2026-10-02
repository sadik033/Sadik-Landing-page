export default function Footer() {
  return (
    <footer className="bg-slate-950">
      <div className="mx-auto max-w-7xl border-t border-slate-800 px-5 py-8 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-base font-extrabold tracking-[-0.04em] text-white">
              SADIK
            </p>

            <p className="mt-1 text-xs text-slate-500">
              YouTube management for tech professionals.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-slate-500">
            <a
              href="#services"
              className="transition-colors hover:text-white"
            >
              What We Do
            </a>

            <a
              href="#how-it-works"
              className="transition-colors hover:text-white"
            >
              How It Works
            </a>

            <a
              href="#services"
              className="transition-colors hover:text-white"
            >
              Why This
            </a>

            <a
              href="#contact"
              className="transition-colors hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-slate-800 pt-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SADIK. All rights reserved.</p>

          <p>You create. We handle the YouTube workload.</p>
        </div>
      </div>
    </footer>
  );
}