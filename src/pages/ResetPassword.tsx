import { SEO } from "@/components/SEO";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Lock, Eye, EyeOff, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { AuthSplitLayout } from "@/components/shared/AuthSplitLayout";
import { toast } from "sonner";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") {
        setIsValid(true);
        setChecking(false);
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setTimeout(() => {
        setChecking((prev) => {
          if (prev) {
            if (session) {
              setIsValid(true);
            } else {
              setIsValid(false);
            }
            return false;
          }
          return prev;
        });
      }, 2000);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      toast.success("Password updated successfully");
      await supabase.auth.signOut();
      navigate("/login");
    } catch (error: any) {
      toast.error(error.message || "Failed to update password");
    } finally {
      setIsLoading(false);
    }
  };

  if (checking) {
    return (
      <AuthSplitLayout backTo="/login" backLabel="Back to Login">
        <SEO title="Reset password — MathMind" description="Verifying your password reset link." noindex />
        <div className="text-center space-y-4 py-10">
          <span className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin inline-block" />
          <p className="text-muted-foreground">Verifying reset link...</p>
        </div>
      </AuthSplitLayout>
    );
  }

  if (isValid === false) {
    return (
      <AuthSplitLayout backTo="/login" backLabel="Back to Login">
        <SEO title="Reset password — MathMind" description="This password reset link is invalid or expired." noindex />
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto">
            <Lock className="w-8 h-8 text-destructive" />
          </div>
          <h2 className="font-display text-xl font-bold text-foreground">Invalid or Expired Link</h2>
          <p className="text-muted-foreground text-sm">
            This password reset link is no longer valid. Please request a new one.
          </p>
          <Link to="/forgot-password" className="btn-primary inline-flex items-center gap-2">
            Request New Link
          </Link>
          <div>
            <Link to="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Back to Login
            </Link>
          </div>
        </div>
      </AuthSplitLayout>
    );
  }

  return (
    <AuthSplitLayout
      backTo="/login"
      backLabel="Back to Login"
      brandTitle="Set a new password."
      brandSubtitle="Choose something strong — at least 8 characters."
    >
      <SEO title="Reset password — MathMind" description="Set a new password for your MathMind account." noindex />
      <div className="animate-slide-up">
        <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm">
          <h1 className="font-display text-2xl font-bold text-center mb-5 text-foreground">
            New Password
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1.5 text-foreground">New Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 sm:pl-11 pr-11 py-2.5 sm:py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-foreground placeholder:text-muted-foreground/60"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground min-h-[36px] min-w-[36px] flex items-center justify-center"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Must be at least 8 characters</p>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1.5 text-foreground">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 sm:pl-11 pr-4 py-2.5 sm:py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-foreground placeholder:text-muted-foreground/60"
                  required
                  minLength={8}
                />
                {confirmPassword && password === confirmPassword && (
                  <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-success" />
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full flex items-center justify-center gap-2 min-h-[48px]"
            >
              {isLoading ? (
                <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              ) : (
                "Update Password"
              )}
            </button>
          </form>
        </div>
      </div>
    </AuthSplitLayout>
  );
}
