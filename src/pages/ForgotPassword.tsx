import { SEO } from "@/components/SEO";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { AuthSplitLayout } from "@/components/shared/AuthSplitLayout";
import { toast } from "sonner";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      if (error) throw error;
      setSent(true);
      toast.success("Password reset email sent");
    } catch (error: any) {
      toast.error(error.message || "Failed to send reset email");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthSplitLayout
      backTo="/login"
      backLabel="Back to Login"
      brandTitle="Forgot your password? It happens."
      brandSubtitle="Enter your email and we'll send you a secure link to set a new one."
    >
      <SEO title="Forgot password — MathMind" description="Reset your MathMind account password with a secure email link." noindex />

      <div className="animate-slide-up">
        <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm">
          {sent ? (
            <div className="text-center space-y-4 py-2">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-display text-xl font-bold text-foreground">Check your email</h2>
              <p className="text-muted-foreground text-sm">
                We sent a password reset link to{" "}
                <strong className="text-foreground">{email}</strong>. Click the link in the email to
                reset your password.
              </p>
              <Link to="/login" className="btn-primary inline-flex items-center gap-2 mt-2">
                Back to Login
              </Link>
            </div>
          ) : (
            <>
              <h1 className="font-display text-2xl font-bold text-center text-foreground">
                Forgot Password?
              </h1>
              <p className="text-muted-foreground text-sm text-center mt-1.5 mb-6">
                Enter your email and we will send you a reset link.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-1.5 text-foreground">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full pl-10 sm:pl-11 pr-4 py-2.5 sm:py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-foreground placeholder:text-muted-foreground/60"
                      required
                    />
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
                    "Send Reset Link"
                  )}
                </button>
              </form>
              <p className="text-center text-sm text-muted-foreground mt-5">
                Remembered it?{" "}
                <Link to="/login" className="text-primary font-semibold hover:underline">
                  Sign in
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </AuthSplitLayout>
  );
}
