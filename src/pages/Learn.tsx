import { SEO } from "@/components/SEO";
import { curriculum } from "@/data/curriculum";
import { YearCard } from "@/components/learn/YearCard";

export default function Learn() {
  return (
    <div className="space-y-5 sm:space-y-6">
      <SEO
        title="Learn Maths — Year 9, 10 and VCE | MathMind"
        description="Browse structured maths lessons aligned to the Victorian Curriculum. Choose your year level and start learning."
      />

      {/* Header */}
      <div className="animate-slide-up">
        <h1 className="font-display text-2xl sm:text-3xl font-bold mb-1">Learn</h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          Explore your curriculum and start learning
        </p>
      </div>

      {/* Year cards */}
      <div className="space-y-3 sm:space-y-4 animate-slide-up">
        {curriculum.map((year) => (
          <YearCard key={year.id} year={year} />
        ))}
      </div>

      {/* Info card */}
      <div className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-accent/20 border border-accent/30 animate-slide-up">
        <span className="text-xl shrink-0 mt-0.5">🎯</span>
        <div className="min-w-0">
          <p className="font-semibold text-sm mb-0.5">Victorian Curriculum Aligned</p>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Years 9–10 and VCE Units 1–4 (including Year 12 General). Complete topics at your own pace and test your understanding with quizzes.
          </p>
        </div>
      </div>
    </div>
  );
}
