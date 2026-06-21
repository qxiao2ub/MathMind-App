import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from "react";
import { User, Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Profile {
  id: string;
  user_id: string;
  display_name: string | null;
  year_level: string | null;
  last_studied_topic: string | null;
  avatar_url: string | null;
  bio: string | null;
  created_at: string;
  updated_at: string;
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  profile: Profile | null;
  loading: boolean;
  yearLevel: string;
  signUp: (email: string, password: string, displayName: string, yearLevel: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  updateProfile: (updates: Partial<Profile>) => Promise<void>;
  refreshProfile: () => Promise<void>;
  updateLastStudiedTopic: (topicId: string) => Promise<void>;
  switchYearLevel: (newYear: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const YEAR_LEVEL_KEY = "mathmind_year_level";

function getStoredYearLevel(): string {
  return localStorage.getItem(YEAR_LEVEL_KEY) || "year-9";
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [yearLevel, setYearLevel] = useState<string>(getStoredYearLevel());

  const fetchProfile = async (userId: string) => {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("user_id", userId)
      .maybeSingle();

    if (error) {
      console.error("Error fetching profile:", error);
      return null;
    }
    return data as Profile | null;
  };

  // Sync yearLevel when profile loads or changes
  const syncYearLevel = useCallback((p: Profile | null) => {
    const level = p?.year_level || getStoredYearLevel();
    setYearLevel(level);
    localStorage.setItem(YEAR_LEVEL_KEY, level);
  }, []);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, currentSession) => {
        setSession(currentSession);
        setUser(currentSession?.user ?? null);

        if (currentSession?.user) {
          setTimeout(async () => {
            const profileData = await fetchProfile(currentSession.user.id);
            setProfile(profileData);
            syncYearLevel(profileData);
          }, 0);
        } else {
          setProfile(null);
        }
        setLoading(false);
      }
    );

    supabase.auth.getSession().then(({ data: { session: existingSession } }) => {
      setSession(existingSession);
      setUser(existingSession?.user ?? null);

      if (existingSession?.user) {
        fetchProfile(existingSession.user.id).then((p) => {
          setProfile(p);
          syncYearLevel(p);
        });
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [syncYearLevel]);

  const signUp = async (email: string, password: string, displayName: string, yearLevelVal: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: window.location.origin,
        data: { display_name: displayName },
      },
    });

    if (error) throw error;

    if (data.user) {
      const { error: profileError } = await supabase
        .from("profiles")
        .update({ year_level: yearLevelVal, display_name: displayName })
        .eq("user_id", data.user.id);

      if (profileError) console.error("Error updating profile:", profileError);
    }
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    setProfile(null);
  };

  const updateProfile = async (updates: Partial<Profile>) => {
    if (!user) return;

    const { data, error } = await supabase
      .from("profiles")
      .update(updates)
      .eq("user_id", user.id)
      .select()
      .single();

    if (error) throw error;
    const updated = data as Profile;
    setProfile(updated);
    syncYearLevel(updated);
  };

  const refreshProfile = async () => {
    if (!user) return;
    const p = await fetchProfile(user.id);
    setProfile(p);
    syncYearLevel(p);
  };

  const switchYearLevel = async (newYear: string) => {
    // Update localStorage immediately for instant UI response
    localStorage.setItem(YEAR_LEVEL_KEY, newYear);
    setYearLevel(newYear);

    if (user) {
      try {
        await updateProfile({ year_level: newYear } as Partial<Profile>);
      } catch (e) {
        console.error("Error persisting year level:", e);
        toast.error("Failed to save year level. Please try again.");
      }
    }

    // Dispatch event so any non-context listeners can react
    window.dispatchEvent(new CustomEvent("year-level-changed", { detail: newYear }));
  };

  const updateLastStudiedTopic = async (topicId: string) => {
    if (!user) {
      localStorage.setItem("lastStudiedTopic", topicId);
      return;
    }
    try {
      await updateProfile({ last_studied_topic: topicId } as Partial<Profile>);
    } catch (error) {
      console.error("Error updating last studied topic:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        profile,
        loading,
        yearLevel,
        signUp,
        signIn,
        signOut,
        updateProfile,
        refreshProfile,
        updateLastStudiedTopic,
        switchYearLevel,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
