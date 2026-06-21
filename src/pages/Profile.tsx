import { SEO } from "@/components/SEO";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Trophy,
  Clock,
  Target,
  BookOpen,
  ChevronRight,
  Flame,
  Camera,
  Trash2,
  RefreshCw,
  Check,
  MessageSquare,
  Sun,
  Moon,
  Sparkles,
  Save,
  Loader2,
  LogOut,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { uploadAvatar, deleteAvatar } from "@/lib/profileApi";
import { getUserStreak } from "@/lib/streakApi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { GamificationPanel } from "@/components/gamification/GamificationPanel";
import { AchievementGrid } from "@/components/gamification/AchievementGrid";
import { useGamification } from "@/hooks/useGamification";

const yearLevelOptions = [
  { value: "year-9", label: "Year 9", emoji: "📗" },
  { value: "year-10", label: "Year 10", emoji: "📘" },
  { value: "year-11-general", label: "Year 11 General", emoji: "📙" },
  { value: "year-11-methods", label: "Year 11 Methods", emoji: "📕" },
  { value: "year-11-specialist", label: "Year 11 Specialist", emoji: "📓" },
];

interface Stats {
  lessonsCompleted: number;
  avgQuizScore: number;
  currentStreak: number;
  longestStreak: number;
  practiceAnswered: number;
  chatSessions: number;
}

export default function Profile() {
  const { user, profile, yearLevel, switchYearLevel, updateProfile, refreshProfile, signOut } = useAuth();
  const navigate = useNavigate();
  const [signingOut, setSigningOut] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { badges } = useGamification();

  // Form state
  const [displayName, setDisplayName] = useState(profile?.display_name || "");
  const [bio, setBio] = useState((profile as any)?.bio || "");
  const [selectedYear, setSelectedYear] = useState(yearLevel);
  const [saving, setSaving] = useState(false);

  // Avatar state
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Stats
  const [stats, setStats] = useState<Stats | null>(null);
  const [loadingStats, setLoadingStats] = useState(true);

  // Year switch dialog
  const [showYearSwitch, setShowYearSwitch] = useState(false);
  const [pendingYear, setPendingYear] = useState<string | null>(null);
  const [switching, setSwitching] = useState(false);

  // Sync form state with profile
  useEffect(() => {
    if (profile) {
      setDisplayName(profile.display_name || "");
      setBio((profile as any)?.bio || "");
      setSelectedYear(profile.year_level || "year-9");
    }
  }, [profile]);

  // Fetch stats
  useEffect(() => {
    if (!user) return;
    const fetchStats = async () => {
      setLoadingStats(true);
      try {
        const [lessonsRes, quizRes, streak, practiceRes, chatRes] = await Promise.all([
          supabase.from("user_progress").select("id", { count: "exact", head: true }).eq("user_id", user.id).eq("completed", true),
          supabase.from("quiz_attempts").select("percentage").eq("user_id", user.id),
          getUserStreak(user.id),
          supabase.from("practice_attempts").select("id", { count: "exact", head: true }).eq("user_id", user.id),
          supabase.from("ai_chat_sessions").select("id", { count: "exact", head: true }).eq("user_id", user.id),
        ]);

        const avgScore = quizRes.data && quizRes.data.length > 0
          ? Math.round(quizRes.data.reduce((sum, r) => sum + r.percentage, 0) / quizRes.data.length)
          : 0;

        setStats({
          lessonsCompleted: lessonsRes.count || 0,
          avgQuizScore: avgScore,
          currentStreak: streak.current_streak,
          longestStreak: streak.longest_streak,
          practiceAnswered: practiceRes.count || 0,
          chatSessions: chatRes.count || 0,
        });
      } catch (e) {
        console.error("Failed to fetch stats:", e);
      } finally {
        setLoadingStats(false);
      }
    };
    fetchStats();
  }, [user]);

  const handleSaveProfile = async () => {
    if (!user) return;
    setSaving(true);
    try {
      await updateProfile({
        display_name: displayName.trim() || null,
        bio: bio.trim() || null,
      } as any);
      if (selectedYear !== yearLevel) {
        await switchYearLevel(selectedYear);
      }
      toast.success("Profile updated!");
    } catch (e) {
      toast.error("Failed to save profile");
    } finally {
      setSaving(false);
    }
  };

  const handleAvatarSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image must be under 5MB");
      return;
    }
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      toast.error("Only JPEG, PNG, and WebP images are allowed");
      return;
    }
    setAvatarFile(file);
    setAvatarPreview(URL.createObjectURL(file));
  };

  const handleAvatarUpload = async () => {
    if (!user || !avatarFile) return;
    setUploadingAvatar(true);
    try {
      const url = await uploadAvatar(user.id, avatarFile);
      await updateProfile({ avatar_url: url } as any);
      await refreshProfile();
      setAvatarFile(null);
      setAvatarPreview(null);
      toast.success("Avatar updated!");
    } catch (e) {
      toast.error("Failed to upload avatar");
    } finally {
      setUploadingAvatar(false);
    }
  };

  const handleAvatarRemove = async () => {
    if (!user) return;
    setUploadingAvatar(true);
    try {
      await deleteAvatar(user.id);
      await updateProfile({ avatar_url: null } as any);
      await refreshProfile();
      toast.success("Avatar removed");
    } catch (e) {
      toast.error("Failed to remove avatar");
    } finally {
      setUploadingAvatar(false);
    }
  };

  const handleYearSwitch = async () => {
    if (!pendingYear || pendingYear === yearLevel) return;
    setSwitching(true);
    try {
      await switchYearLevel(pendingYear);
      toast.success(`Switched to ${yearLevelOptions.find(y => y.value === pendingYear)?.label}`);
      setShowYearSwitch(false);
      setPendingYear(null);
    } catch {
      toast.error("Failed to switch year level");
    } finally {
      setSwitching(false);
    }
  };

  const currentYearLabel = yearLevelOptions.find(y => y.value === yearLevel)?.label || "Year 9";
  const currentYearEmoji = yearLevelOptions.find(y => y.value === yearLevel)?.emoji || "📗";
  const avatarUrl = avatarPreview || profile?.avatar_url;
  const initials = (profile?.display_name || user?.email || "S").charAt(0).toUpperCase();

  const statCards = [
    { label: "Lessons Completed", value: stats?.lessonsCompleted ?? 0, icon: BookOpen },
    { label: "Avg Quiz Score", value: stats ? `${stats.avgQuizScore}%` : "0%", icon: Target },
    { label: "Current Streak", value: stats ? `${stats.currentStreak} days` : "0 days", icon: Flame },
    { label: "Longest Streak", value: stats ? `${stats.longestStreak} days` : "0 days", icon: Trophy },
    { label: "Practice Questions", value: stats?.practiceAnswered ?? 0, icon: Clock },
    { label: "AI Sessions", value: stats?.chatSessions ?? 0, icon: Sparkles },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 sm:space-y-8">
      <SEO title="Profile | MathMind" description="Manage your MathMind account, avatar, year level and preferences." noindex />
      {/* Profile Header Card */}
      <div className="card-learning animate-slide-up">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
          {/* Avatar */}
          <div className="relative group shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-border bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              {avatarUrl ? (
                <img src={avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
              ) : (
                <span className="text-2xl sm:text-3xl font-bold text-primary">{initials}</span>
              )}
            </div>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md hover:scale-110 transition-transform"
              aria-label="Change photo"
            >
              <Camera className="w-4 h-4" />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              className="hidden"
              onChange={handleAvatarSelect}
            />
          </div>

          <div className="text-center sm:text-left flex-1 min-w-0">
            <h1 className="font-display text-xl sm:text-2xl font-bold truncate">
              {profile?.display_name || "Student"}
            </h1>
            <p className="text-muted-foreground text-sm">
              {currentYearEmoji} {currentYearLabel} Student
            </p>
            {user?.email && (
              <p className="text-xs text-muted-foreground mt-1 truncate">{user.email}</p>
            )}
          </div>
        </div>

        {/* Avatar actions */}
        {(avatarFile || profile?.avatar_url) && (
          <div className="flex gap-2 mt-4 justify-center sm:justify-start">
            {avatarFile && (
              <Button size="sm" onClick={handleAvatarUpload} disabled={uploadingAvatar}>
                {uploadingAvatar ? <Loader2 className="w-4 h-4 animate-spin mr-1" /> : null}
                Upload
              </Button>
            )}
            {profile?.avatar_url && !avatarFile && (
              <Button size="sm" variant="outline" onClick={handleAvatarRemove} disabled={uploadingAvatar}>
                <Trash2 className="w-3 h-3 mr-1" /> Remove photo
              </Button>
            )}
            {avatarFile && (
              <Button size="sm" variant="ghost" onClick={() => { setAvatarFile(null); setAvatarPreview(null); }}>
                Cancel
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Gamification panel */}
      <GamificationPanel />

      {/* Achievements */}
      <div className="card-learning animate-slide-up">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="font-display text-lg font-bold sm:text-xl">Achievements</h2>
            <p className="text-sm text-muted-foreground">
              {badges.length} of {/* total */} badges unlocked
            </p>
          </div>
        </div>
        <AchievementGrid unlocked={badges} />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 animate-slide-up">
        {statCards.map((stat) => (
          <div key={stat.label} className="stat-card">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
            </div>
            {loadingStats ? (
              <Skeleton className="h-7 w-16 mb-1" />
            ) : (
              <p className="text-xl sm:text-2xl font-bold">{stat.value}</p>
            )}
            <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Edit Profile Form */}
      <div className="card-learning animate-slide-up space-y-4">
        <h2 className="font-display text-lg font-bold">Edit Profile</h2>

        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium mb-1 block">Display Name</label>
            <Input
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value.slice(0, 40))}
              placeholder="Your name"
              maxLength={40}
            />
            <p className="text-xs text-muted-foreground mt-1">{displayName.length}/40</p>
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">Bio</label>
            <Textarea
              value={bio}
              onChange={(e) => setBio(e.target.value.slice(0, 160))}
              placeholder="Tell us about yourself..."
              maxLength={160}
              rows={3}
            />
            <p className="text-xs text-muted-foreground mt-1">{bio.length}/160</p>
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">Year Level</label>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {yearLevelOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.emoji} {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button onClick={handleSaveProfile} disabled={saving} className="w-full sm:w-auto">
          {saving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Save className="w-4 h-4 mr-2" />}
          Save Changes
        </Button>
      </div>

      {/* Appearance */}
      <div className="card-learning animate-slide-up">
        <h2 className="font-display text-lg font-bold mb-4">Appearance</h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              {theme === "dark" ? <Moon className="w-5 h-5 text-primary" /> : <Sun className="w-5 h-5 text-primary" />}
            </div>
            <div>
              <p className="font-semibold">{theme === "dark" ? "Dark Mode" : "Light Mode"}</p>
              <p className="text-sm text-muted-foreground">
                {theme === "dark" ? "🌙 Easier on the eyes" : "🌞 Classic bright theme"}
              </p>
            </div>
          </div>
          <button
            onClick={toggleTheme}
            className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${
              theme === "dark" ? "bg-primary" : "bg-muted"
            }`}
            aria-label="Toggle dark mode"
          >
            <span className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 flex items-center justify-center text-xs ${
              theme === "dark" ? "translate-x-7" : "translate-x-1"
            }`}>
              {theme === "dark" ? "🌙" : "🌞"}
            </span>
          </button>
        </div>
      </div>

      {/* Year Level Switch (quick action) */}
      <button
        onClick={() => { setPendingYear(null); setShowYearSwitch(true); }}
        className="w-full card-learning animate-slide-up flex items-center justify-between hover:border-primary/50 transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
            <RefreshCw className="w-5 h-5 text-primary" />
          </div>
          <div className="text-left">
            <p className="font-semibold">Switch Year Level</p>
            <p className="text-sm text-muted-foreground">Currently: {currentYearLabel}</p>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-muted-foreground" />
      </button>

      {/* Year Switch Dialog */}
      <Dialog open={showYearSwitch} onOpenChange={setShowYearSwitch}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display">Switch Year Level</DialogTitle>
            <DialogDescription>
              Switching year level will change your dashboard and content.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2 py-4">
            {yearLevelOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setPendingYear(opt.value)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl border-2 transition-all ${
                  (pendingYear ?? yearLevel) === opt.value
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/40"
                }`}
              >
                <span className="text-xl">{opt.emoji}</span>
                <span className="font-medium flex-1 text-left">{opt.label}</span>
                {yearLevel === opt.value && !pendingYear && (
                  <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">Current</span>
                )}
                {pendingYear === opt.value && pendingYear !== yearLevel && (
                  <Check className="w-5 h-5 text-primary" />
                )}
              </button>
            ))}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowYearSwitch(false)}>Cancel</Button>
            <Button
              onClick={handleYearSwitch}
              disabled={!pendingYear || pendingYear === yearLevel || switching}
            >
              {switching ? "Switching…" : "Confirm Switch"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* My Questions */}
      <Link
        to="/profile/my-questions"
        className="w-full card-learning animate-slide-up flex items-center justify-between hover:border-primary/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-primary" />
          </div>
          <div className="text-left">
            <p className="font-semibold">My Questions</p>
            <p className="text-sm text-muted-foreground">View your community posts</p>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-muted-foreground" />
      </Link>

      {/* Sign Out */}
      <div className="mt-6 pt-6 border-t border-border/50">
        <button
          onClick={async () => {
            setSigningOut(true);
            try {
              await signOut();
              toast.success("Signed out successfully");
              navigate("/");
            } catch {
              toast.error("Failed to sign out");
            } finally {
              setSigningOut(false);
            }
          }}
          disabled={signingOut}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-destructive bg-destructive/10 hover:bg-destructive/20 transition-all disabled:opacity-50"
        >
          {signingOut ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <LogOut className="w-5 h-5" />
          )}
          {signingOut ? "Signing out…" : "Sign Out"}
        </button>
      </div>
    </div>
  );
}
