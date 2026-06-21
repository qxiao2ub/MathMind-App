import { SEO } from "@/components/SEO";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, LayoutDashboard, ArrowLeft, Compass } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { MathMindLogo } from "@/components/MathMindLogo";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function NotFound() {
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const primaryHref = user ? "/dashboard" : "/";
  const PrimaryIcon = user ? LayoutDashboard : Home;
  const primaryLabel = user ? "Back to Dashboard" : "Back to Home";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO title="Page not found — MathMind" description="The page you're looking for doesn't exist." noindex />
      {/* Top bar */}

      <header className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <Link to="/" className="flex items-center gap-2">
          <MathMindLogo size="sm" />
          <span className="font-display text-base font-bold">MathMind</span>
        </Link>
        <ThemeToggle size="sm" />
      </header>

      {/* Body */}
      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-lg text-center">
          {/* Decorative number */}
          <div className="relative mx-auto w-fit mb-6">
            <span className="font-display text-7xl sm:text-8xl font-extrabold text-gradient leading-none">
              404
            </span>
            <span className="absolute -top-3 -right-6 inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-primary/10 text-primary border border-primary/20">
              <Compass className="w-5 h-5" />
            </span>
          </div>

          <h1 className="font-display text-2xl sm:text-3xl font-bold">
            We can't find that page
          </h1>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            The page{" "}
            <code className="px-1.5 py-0.5 rounded-md bg-muted text-foreground/80 text-xs">
              {location.pathname}
            </code>{" "}
            doesn't exist or has been moved.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:justify-center">
            <Link
              to={primaryHref}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors min-h-[48px]"
            >
              <PrimaryIcon className="w-4 h-4" />
              {primaryLabel}
            </Link>
            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-border bg-card text-foreground font-semibold hover:bg-muted/60 transition-colors min-h-[48px]"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>

          {!user && (
            <p className="mt-6 text-sm text-muted-foreground">
              Have an account?{" "}
              <Link to="/login" className="text-primary font-semibold hover:underline">
                Sign in
              </Link>
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
