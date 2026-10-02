import { useState } from "react";

const faqs = [
  {
    question: "Do I need to change how I record my videos?",
    answer:
      "No. You can continue recording in the way that works for you. You send the raw footage and any important context, and the production work is handled from there.",
  },
  {
    question: "What do you handle?",
    answer:
      "Depending on your needs, the service can include video editing, thumbnail design, YouTube optimization, uploading and publishing, and Shorts or other content repurposing.",
  },
  {
    question: "Who is this service for?",
    answer:
      "The service is primarily designed for software engineers, IT professionals, tech experts and other creators who have valuable expertise but don't want YouTube to become another full-time responsibility.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing is customized based on factors such as content volume, video length, editing requirements, thumbnails, Shorts and the level of support required.",
  },
  {
    question: "Can I use only some of the services?",
    answer:
      "Yes. The workflow can be built around what you actually need. If you only need editing and thumbnails, for example, there is no reason to pay for services you don't require.",
  },
  {
    question: "How do we get started?",
    answer:
      "Share your YouTube channel and tell us what you're currently creating and where you need help. We'll discuss the workflow that makes sense for your channel.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="border-b border-slate-200/70 bg-[#fafafa]">
      <div className="mx-auto max-w-4xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="text-center">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            FAQ
          </p>

          <h2 className="text-4xl font-bold tracking-[-0.05em] text-slate-950 sm:text-5xl">
            Questions, answered.
          </h2>
        </div>

        <div className="mt-14 divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-slate-900 sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] pb-6 opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pr-12 text-sm leading-7 text-slate-500">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}