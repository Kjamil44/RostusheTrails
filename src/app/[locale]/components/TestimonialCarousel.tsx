"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Flag from "react-world-flags";

type Item = { name: string; text: string; country?: string }; // ISO 3166-1 alpha-2 (e.g. "MK", "RS")

export default function TestimonialsCarousel({ items }: { items: Item[] }) {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollByAmount = (dir: "left" | "right") => {
    const el = scroller.current;
    if (!el) return;
    const amt = Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: dir === "left" ? -amt : amt, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Gradient edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent rounded-l-2xl" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent rounded-r-2xl" />

      {/* Controls */}
      <button
        aria-label="Previous testimonials"
        onClick={() => scrollByAmount("left")}
        className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 rounded-full shadow bg-white hover:bg-gray-50 p-2"
      >
        <ChevronLeft className="w-6 h-6 text-green-700" />
      </button>
      <button
        aria-label="Next testimonials"
        onClick={() => scrollByAmount("right")}
        className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 rounded-full shadow bg-white hover:bg-gray-50 p-2"
      >
        <ChevronRight className="w-6 h-6 text-green-700" />
      </button>

      {/* Track */}
      <div
        ref={scroller}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-1 pb-4"
      >
        {items.map((it, idx) => (
          <article
            key={idx}
            className="
              relative snap-start 
              rounded-2xl shadow-lg border border-green-100
              p-8
              min-w-[80%] sm:min-w-[440px] lg:min-w-[500px]
              h-[300px] sm:h-[340px] lg:h-[380px]
              flex flex-col
              bg-gradient-to-br from-green-50 via-white to-white
              transition hover:shadow-xl hover:-translate-y-1
            "
          >
            {/* Decorative quotes */}
            <Quote className="absolute top-4 left-4 w-6 h-6 text-green-300" />
            <Quote className="absolute bottom-4 right-4 w-6 h-6 text-green-300 rotate-180" />

            {/* Scrollable text box */}
            <div
              className="
                text-gray-900 leading-relaxed text-base md:text-lg font-medium
                overflow-y-auto pr-2 grow relative z-10
                [scrollbar-width:thin]
                [scrollbar-color:#9ca3af_#f3f4f6]
                [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-track]:bg-gray-100
                [&::-webkit-scrollbar-thumb]:bg-gray-400
                [&::-webkit-scrollbar-thumb]:rounded-full
                [&::-webkit-scrollbar-thumb:hover]:bg-gray-500
              "
            >
              {it.text}
            </div>

            {/* Footer with flag + name */}
            <div className="mt-5 text-sm md:text-base text-gray-700 font-semibold shrink-0 relative z-10 flex items-center gap-2">
              {it.country && (
                <span className="w-6 h-6 rounded-full ring-2 ring-green-200 overflow-hidden shadow-sm">
                  <Flag
                    code={it.country.toUpperCase()}
                    className="w-full h-full"
                    style={{ objectFit: "cover" }}
                    alt={it.country}
                  />
                </span>
              )}
              <span>— {it.name}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
