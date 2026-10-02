
import { useEffect, useState } from "react";

const testimonials = [
  {
    image: "/images/testimonials/review-1.png",
    alt: "Fiverr client review",
  },
  {
    image: "/images/testimonials/review-2.png",
    alt: "Fiverr client review",
  },
  {
    image: "/images/testimonials/review-3.png",
    alt: "Fiverr client review",
  },
  {
    image: "/images/testimonials/review-4.png",
    alt: "Fiverr client review",
  },
  {
    image: "/images/testimonials/review-5.png",
    alt: "Fiverr client review",
  },
  {
    image: "/images/testimonials/review-6.png",
    alt: "Fiverr client review",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const total = testimonials.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  // Auto slide
  useEffect(() => {
    if (total <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);

    return () => clearInterval(timer);
  }, [total]);

  return (
    <section className="border-b border-slate-200/70 bg-[#fafafa]">
      <div className="mx-auto max-w-5xl px-5 py-24 text-center sm:px-8 lg:py-32">
        {/* Heading */}
        <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
          Client feedback
        </p>

        <h2 className="text-4xl font-bold tracking-[-0.05em] text-slate-950 sm:text-5xl">
          What clients say.
        </h2>

        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-slate-500">
          Real feedback from previous client projects.
        </p>

        {/* Carousel */}
        <div className="relative mx-auto mt-12 max-w-3xl">
          {/* Review viewport */}
          <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            {/* Track */}
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                width: `${total * 100}%`,
                transform: `translateX(-${current * (100 / total)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.image}
                  className="shrink-0 p-3 sm:p-5"
                  style={{
                    width: `${100 / total}%`,
                  }}
                >
                  <div className="overflow-hidden rounded-[16px] bg-slate-50">
                    <img
                      src={testimonial.image}
                      alt={testimonial.alt}
                      loading={index === 0 ? "eager" : "lazy"}
                      className="mx-auto block h-auto max-h-[500px] w-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Previous Arrow */}
          {total > 1 && (
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous review"
              className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-200 hover:scale-105 hover:bg-slate-950 hover:text-white sm:-left-5"
            >
              <span className="text-lg leading-none">←</span>
            </button>
          )}

          {/* Next Arrow */}
          {total > 1 && (
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next review"
              className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-200 hover:scale-105 hover:bg-slate-950 hover:text-white sm:-right-5"
            >
              <span className="text-lg leading-none">→</span>
            </button>
          )}
        </div>

        {/* Dots */}
        {total > 1 && (
          <div className="mt-7 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Show review ${index + 1}`}
                onClick={() => setCurrent(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-7 bg-slate-950"
                    : "w-1.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        )}

        <p className="mt-6 text-xs text-slate-400">
          Reviews shown from previous freelance client work.
        </p>
      </div>
    </section>
  );
}

