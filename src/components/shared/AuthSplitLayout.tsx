import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, Target, Trophy, GraduationCap } from "lucide-react";
import { MathMindLogo } from "@/components/MathMindLogo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

interface AuthSplitLayoutProps {
  children: ReactNode;
  /** Optional back link (e.g. "/login"). Defaults to "/" (home). */
  backTo?: string;
  backLabel?: string;
  /** Headline shown on the brand panel (desktop only). */
  brandTitle?: string;
  /** Subhead shown on the brand panel (desktop only). */
  brandSubtitle?: string;
}

const benefits = [
  {
    icon: GraduationCap,
    title: "Victorian Curriculum",
    description: "Year 9–10 and VCE Units 1 & 2, exam-aligned.",
  },
  {
    icon: Sparkles,
    title: "AI tutor on demand",
    description: "Step-by-step help in plain language, 24/7.",
  },
  {
    icon: Target,
    title: "Targeted practice",
    description: "Adaptive questions that fix your weak topics.",
  },
  {
    icon: Trophy,
    title: "Track your progress",
    description: "Streaks, mastery and quiz history in one place.",
  },
];

export function AuthSplitLayout({
  children,
  backTo = "/",
  backLabel = "Back to Home",
  brandTitle = "Master maths with an AI tutor built for Victorian students.",
  brandSubtitle = "Structured lessons, smart practice and instant help — all in one place.",
}: AuthSplitLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Brand panel — desktop only */}
        <aside className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background border-r border-border p-10 xl:p-12">
          {/* Decorative blobs */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex items-center gap-2.5">
            <MathMindLogo size="md" />
            <span className="font-display text-xl font-bold text-foreground">MathMind</span>
          </div>

          <div className="relative z-10 max-w-md">
            <h2 className="font-display text-3xl xl:text-4xl font-bold leading-tight text-foreground">
              {brandTitle}
            </h2>
            <p className="mt-3 text-base text-muted-foreground">{brandSubtitle}</p>

            <ul className="mt-8 space-y-4">
              {benefits.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex items-start gap-3">
                  <span className="shrink-0 w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground text-sm">{title}</p>
                    <p className="text-sm text-muted-foreground">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <p className="relative z-10 text-xs text-muted-foreground">
            © {new Date().getFullYear()} MathMind · Made for Australian students
          </p>
        </aside>

        {/* Form panel */}
        <main className="relative flex flex-col bg-background">
          {/* Top bar with back link + theme toggle */}
          <div className="flex items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
            <Link
              to={backTo}
              className={cn(
                "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors",
                "min-h-[40px] -ml-1 px-2 rounded-lg hover:bg-muted/60"
              )}
            >
              <ArrowLeft className="w-4 h-4" />
              {backLabel}
            </Link>
            <ThemeToggle size="sm" />
          </div>

          {/* Mobile-only branding */}
          <div className="lg:hidden flex flex-col items-center text-center px-4 mt-6">
            <div className="flex items-center gap-2">
              <MathMindLogo size="md" />
              <span className="font-display text-xl font-bold">MathMind</span>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
            <div className="w-full max-w-md">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
}
