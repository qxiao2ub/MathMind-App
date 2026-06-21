import { SEO } from "@/components/SEO";
import { BookOpen, Target, Shield, ChevronRight, Sparkles, TrendingUp, CheckCircle2, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import { ProgressCard } from "@/components/dashboard/ProgressCard";
import { RecentTopics } from "@/components/dashboard/RecentTopics";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { WeeklyStreak } from "@/components/dashboard/WeeklyStreak";
import { GamificationPanel } from "@/components/gamification/GamificationPanel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { curriculum } from "@/data/curriculum";
import { getCategoryCompletionPercent, isChapterMastered, getYearCompletionPercent } from "@/data/topicLessons";
import { useAuth } from "@/contexts/AuthContext";
import { useState, useEffect, useMemo } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { getUserStreak } from "@/lib/streakApi";

function getYearIds(yearLevel: string | null | undefined): string[] {
  switch (yearLevel) {
    case "year-11-general":
      return ["year-11-general"];
    case "year-11-methods":
      return ["year-11-methods"];
    case "year-11-specialist":
      return ["year-11-specialist"];
    case "year-10":
      return ["year-10"];
    case "year-9":
    default:
      return ["year-9"];
  }
}

export default function Dashboard() {
  const { profile, yearLevel, user, loading } = useAuth();
  const [, forceUpdate] = useState(0);
  const isMobile = useIsMobile();
  const [currentStreak, setCurrentStreak] = useState(0);
  const [skeletonTimedOut, setSkeletonTimedOut] = useState(false);

  const displayName = profile?.display_name || "Student";

  useEffect(() => {
    const handler = () => forceUpdate((n) => n + 1);
    window.addEventListener("storage", handler);
    window.addEventListener("lesson-complete", handler);
    return () => {
      window.removeEventListener("storage", handler);
      window.removeEventListener("lesson-complete", handler);
    };
  }, []);

  useEffect(() => {
    if (!user) return;
    getUserStreak(user.id).then((s) => setCurrentStreak(s.current_streak)).catch(() => {});
  }, [user]);

  // Safety net: never hang on the skeleton forever if profile fetch is
  // slow or fails. After 1.5s render the dashboard with fallbacks.
  useEffect(() => {
    if (profile || !user) return;
    const t = setTimeout(() => setSkeletonTimedOut(true), 1500);
    return () => clearTimeout(t);
  }, [profile, user]);

  const yearIds = useMemo(() => getYearIds(yearLevel), [yearLevel]);
  const matchedYears = useMemo(() => curriculum.filter((year) => yearIds.includes(year.id)), [yearIds]);
  const allCategories = useMemo(() => matchedYears.flatMap((year) => year.categories), [matchedYears]);

  const yearProgress = matchedYears.length > 0 ? getYearCompletionPercent(allCategories) : 0;
  const masteredChapters = allCategories.filter((category) => isChapterMastered(category.id, category.topics)).length;
  const totalChapters = allCategories.length;
  const remainingChapters = Math.max(0, totalChapters - masteredChapters);
  const yearLabel = matchedYears[0]?.name || "Year 9";
  const nextChapter = allCategories.find((category) => !isChapterMastered(category.id, category.topics));

  const greeting = (() => {
    const h = new Date().getHours();
    if (h < 12) return "Good morning";
    if (h < 18) return "Good afternoon";
    return "Good evening";
  })();

  // Show skeleton only briefly while auth/profile is resolving.
  // ProtectedRoute already redirects unauthenticated users, so we only
  // need to handle the post-login profile-loading window.
  if (loading || (user && !profile && !skeletonTimedOut)) {
    return (
      <div className="min-h-screen pb-24 lg:pb-8">
        <div className="space-y-5 sm:space-y-6">
          <div className="h-44 rounded-3xl bg-muted/40 animate-pulse" />
          <div className="grid grid-cols-2 gap-3 lg:gap-4">
            {[...Array(4)].map((_, i) => (
              <ProgressCard key={i} title="" value={0} maxValue={1} subtitle="" icon={null} loading />
            ))}
          </div>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen pb-24 lg:pb-8">
      <SEO title="Dashboard | MathMind" description="Your maths learning dashboard: progress, streaks, recent topics and recommended next steps." noindex />
      <div className="space-y-5 sm:space-y-6 lg:space-y-8">

        {/* Today's Focus Hero */}
        <section className="relative overflow-hidden rounded-3xl border border-border ring-1 ring-border/40 bg-gradient-to-br from-primary/8 via-background to-muted/40 p-4 sm:p-6 lg:p-8 shadow-sm animate-slide-up">
          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/10 blur-3xl opacity-60 sm:opacity-100" />
          <div className="absolute -bottom-20 left-12 h-48 w-48 rounded-full bg-primary/5 blur-3xl opacity-60 sm:opacity-100" />

          <div className="relative z-10 grid gap-6 lg:grid-cols-3 lg:items-center">
            {/* Greeting + progress */}
            <div className="lg:col-span-2 space-y-4">
              <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Today's focus
              </div>
              <h1 className="font-display text-xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                {greeting}, <span className="text-gradient">{displayName}</span>
              </h1>

              <div className="rounded-2xl border border-border/70 bg-background/80 p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
                      <BookOpen className="h-3.5 w-3.5" />
                      {yearLabel}
                    </span>
                    <span className="text-xs text-muted-foreground">Overall progress</span>
                  </div>
                  <span className="font-display text-lg font-bold tabular-nums">{yearProgress}%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-700"
                    style={{ width: `${yearProgress}%` }}
                  />
                </div>
              </div>

              {/* Mobile streak strip */}
              <div className="lg:hidden flex items-center justify-between gap-2 rounded-2xl border border-border/70 bg-background/80 px-3 py-2.5">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Flame className="h-4 w-4 text-orange-500" />
                  {currentStreak} day streak
                </div>
                {currentStreak > 0 && (
                  <span className="text-xs text-muted-foreground">Keep it up! 🔥</span>
                )}
              </div>

              {nextChapter && (
                <div className="flex flex-col gap-3 rounded-2xl border border-border/70 bg-background/80 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-xl">
                      {nextChapter.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                        Recommended next chapter
                      </p>
                      <h2 className="mt-0.5 font-display text-base font-bold sm:text-lg truncate max-w-[200px] sm:max-w-none">{nextChapter.name}</h2>
                    </div>
                  </div>
                  <Link
                    to="/learn"
                    className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-primary px-5 text-sm font-bold text-primary-foreground transition hover:opacity-90 active:scale-[0.98] whitespace-nowrap"
                  >
                    Continue Learning
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              )}
            </div>

            {/* Side stat: streak — desktop only */}
            <div className="hidden lg:block rounded-2xl border border-border/70 bg-background/80 p-4 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Current streak</p>
                  <p className="mt-1 font-display text-3xl font-bold tabular-nums">{currentStreak}<span className="text-base font-normal text-muted-foreground ml-1">days</span></p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10">
                  <Flame className="h-6 w-6 text-orange-500" />
                </div>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                {currentStreak > 0 ? "Keep going — study today to extend it." : "Complete a lesson today to start your streak."}
              </p>
            </div>
          </div>
        </section>

        {/* Gamification */}
        <GamificationPanel />

        {/* Compact stats: 2 on mobile, 4 on desktop */}
        <section className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          <ProgressCard
            title={`${yearLabel} Progress`}
            value={yearProgress}
            maxValue={100}
            subtitle={`${yearProgress}% complete`}
            icon={<TrendingUp className="h-5 w-5 text-primary" />}
          />
          <ProgressCard
            title="Chapters Mastered"
            value={masteredChapters}
            maxValue={totalChapters || 1}
            subtitle={`${remainingChapters} remaining`}
            icon={<Shield className="h-5 w-5 text-primary" />}
          />
          <div className="hidden sm:block">
            <ProgressCard
              title="Quiz Score"
              value={85}
              maxValue={100}
              subtitle="Average score"
              icon={<Target className="h-5 w-5 text-primary" />}
            />
          </div>
          <div className="hidden sm:block">
            <ProgressCard
              title="Weekly Streak"
              value={currentStreak}
              maxValue={Math.max(7, currentStreak)}
              subtitle="Day streak this week"
              icon={<Flame className="h-5 w-5 text-primary" />}
            />
          </div>
        </section>

        {/* Chapter Progress — collapsible */}
        <section>
          <Accordion
            type="single"
            collapsible
            defaultValue={isMobile ? undefined : "chapters"}
            className="rounded-3xl border border-border bg-card shadow-sm"
          >
            <AccordionItem value="chapters" className="border-b-0">
              <AccordionTrigger className="px-4 py-3 sm:py-4 hover:no-underline">
                <span className="font-display text-base font-bold sm:text-lg text-left">
                  Chapter Progress — {masteredChapters}/{totalChapters} mastered
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-3 sm:px-5 lg:px-6 pb-4 sm:pb-5">
                {allCategories.length > 0 ? (
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
                    {allCategories.map((category) => {
                      const progress = getCategoryCompletionPercent(category.topics);
                      const mastered = isChapterMastered(category.id, category.topics);
                      return (
                        <Link
                          to="/learn"
                          key={category.id}
                          className="group cursor-pointer rounded-2xl border border-border bg-background p-4 transition hover:border-primary/30 hover:shadow-sm focus-ring"
                        >
                          <div className="mb-4 flex items-start justify-between gap-3">
                            <div className="flex min-w-0 items-center gap-3">
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-muted text-lg">
                                {category.icon}
                              </div>
                              <div className="min-w-0">
                                <h3 className="truncate text-sm font-bold">{category.name}</h3>
                                <p className="mt-0.5 text-xs text-muted-foreground">
                                  {mastered ? "Mastered" : "In progress"}
                                </p>
                              </div>
                            </div>
                            {mastered ? (
                              <div className="flex items-center gap-1 rounded-full bg-success/10 px-2 py-1 text-xs font-bold text-success">
                                <CheckCircle2 className="h-3.5 w-3.5" />
                                Done
                              </div>
                            ) : (
                              <span className="rounded-full bg-muted px-2 py-1 text-xs font-bold tabular-nums text-foreground/80">
                                {progress}%
                              </span>
                            )}
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-muted">
                            <div
                              className={`h-full rounded-full transition-[width] duration-700 ease-out ${
                                mastered ? "bg-success" : "bg-primary"
                              }`}
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-8 text-center">
                    <BookOpen className="mx-auto h-10 w-10 text-muted-foreground" />
                    <h3 className="mt-3 font-display text-lg font-bold">No chapters available</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Your curriculum has not been loaded yet.</p>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Lower Content: QuickActions first on mobile, right rail on desktop */}
        <section className="flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:gap-6">
          <aside className="order-1 lg:order-2 lg:col-span-1">
            <div className="lg:sticky lg:top-6">
              <QuickActions />
            </div>
          </aside>
          <div className="order-2 lg:order-1 space-y-4 lg:col-span-2">
            <RecentTopics />
            <WeeklyStreak />
          </div>
        </section>
      </div>
    </div>
  );
}
