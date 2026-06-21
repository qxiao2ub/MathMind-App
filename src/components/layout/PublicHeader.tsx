import { Link, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { MathMindLogo } from "@/components/MathMindLogo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { useState } from "react";

export function PublicHeader() {
  const { user, loading, signOut, profile } = useAuth();
  const navigate = useNavigate();
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await signOut();
      toast.success("Logged out successfully");
      navigate("/");

    } catch {
      toast.error("Failed to log out");
    } finally {
      setLoggingOut(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 h-16">
        <Link to="/" className="flex items-center gap-3">
          <MathMindLogo size="sm" />
          <span className="font-display text-lg font-bold text-foreground">MathMind</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle size="sm" />
          {loading ? (
            <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
          ) : user ? (
            <>
              <span className="text-sm text-muted-foreground hidden sm:inline truncate max-w-[160px]">
                {profile?.display_name || user.email}
              </span>
              <Link
                to="/dashboard"
                className="btn-primary text-sm !py-2 !px-4"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                disabled={loggingOut}
                aria-label="Log out"
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn-primary text-sm !py-2 !px-4"
              >
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
