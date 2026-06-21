import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "MathMind helped me jump from a C to an A in just one term. The step-by-step explanations finally made algebra click.",
    name: "Sarah M.",
    detail: "Year 10 Student",
  },
  {
    quote: "The AI tutor is like having a patient teacher available 24/7. I can ask the same question five times and it never gets frustrated!",
    name: "James T.",
    detail: "Year 9 Student",
  },
  {
    quote: "My daughter's confidence in maths has completely turned around since she started using MathMind. Highly recommend for any parent.",
    name: "Rachel P.",
    detail: "Parent",
  },
  {
    quote: "The quizzes give instant feedback which keeps me motivated. I actually look forward to maths practice now.",
    name: "Liam K.",
    detail: "Year 10 Student",
  },
];

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % testimonials.length),
    []
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length),
    []
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  const t = testimonials[index];

  return (
    <div
      className="relative max-w-2xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-label="Testimonials"
    >
      <div className="card-learning p-8 md:p-10 text-center min-h-[220px] flex flex-col justify-center">
        <Quote className="w-8 h-8 mx-auto mb-4 text-primary/40" />
        <p className="text-foreground text-lg md:text-xl leading-relaxed mb-6 font-medium italic">
          "{t.quote}"
        </p>
        <div>
          <p className="font-display font-bold text-foreground">{t.name}</p>
          <p className="text-sm text-muted-foreground">{t.detail}</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prev}
          className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5 text-muted-foreground" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-primary w-6"
                  : "bg-border hover:bg-muted-foreground/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
}
