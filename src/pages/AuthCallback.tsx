import { SEO } from "@/components/SEO";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    // Handle the OAuth callback - Supabase client auto-detects the token from the URL
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate("/dashboard", { replace: true });
      } else {
        navigate("/login", { replace: true });
      }
    });
  }, [navigate]);

  return (
    <>
      <SEO title="Signing in — MathMind" description="Completing sign-in via Google." noindex />
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <span className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin inline-block" />
          <p className="text-muted-foreground">Signing you in...</p>
        </div>
      </div>
    </>
  );
}
