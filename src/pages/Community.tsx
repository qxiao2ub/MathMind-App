import { SEO } from "@/components/SEO";
import { useState, useEffect, useCallback } from "react";
import { Plus, Loader2, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import {
  fetchCommunityPosts,
  togglePostLike,
  toggleBookmark,
  getUserPostLikes,
  getUserBookmarks,
  CommunityPost,
} from "@/lib/communityApi";
import { CommunityPostCard } from "@/components/community/CommunityPostCard";
import { CreateCommunityPostModal } from "@/components/community/CreateCommunityPostModal";

const TABS = [
  { key: "latest", label: "Latest", emoji: "🕐" },
  { key: "unsolved", label: "Unsolved", emoji: "❓" },
  { key: "solved", label: "Solved", emoji: "✅" },
  { key: "bookmarks", label: "My Bookmarks", emoji: "🔖" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

export default function Community() {
  const { user } = useAuth();
  const [posts, setPosts] = useState<CommunityPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<TabKey>("latest");
  const [search, setSearch] = useState("");
  const [showCreate, setShowCreate] = useState(false);
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchCommunityPosts(tab, user?.id);
      setPosts(data);
      if (user && data.length > 0) {
        const ids = data.map((p) => p.id);
        const [likes, bms] = await Promise.all([getUserPostLikes(user.id, ids), getUserBookmarks(user.id, ids)]);
        setLikedIds(likes);
        setBookmarkedIds(bms);
      }
    } catch {
      toast.error("Failed to load posts");
    } finally {
      setLoading(false);
    }
  }, [tab, user]);

  useEffect(() => {
    load();
  }, [load]);

  const handleLike = async (postId: string) => {
    if (!user) return;
    const liked = await togglePostLike(postId, user.id);
    setLikedIds((prev) => {
      const n = new Set(prev);
      liked ? n.add(postId) : n.delete(postId);
      return n;
    });
    setPosts((prev) =>
      prev.map((p) => (p.id === postId ? { ...p, likes_count: p.likes_count + (liked ? 1 : -1) } : p)),
    );
  };

  const handleBookmark = async (postId: string) => {
    if (!user) return;
    const bookmarked = await toggleBookmark(postId, user.id);
    setBookmarkedIds((prev) => {
      const n = new Set(prev);
      bookmarked ? n.add(postId) : n.delete(postId);
      return n;
    });
    setPosts((prev) =>
      prev.map((p) => (p.id === postId ? { ...p, bookmarks_count: p.bookmarks_count + (bookmarked ? 1 : -1) } : p)),
    );
  };

  const filtered = search.trim()
    ? posts.filter(
        (p) =>
          p.question_text?.toLowerCase().includes(search.toLowerCase()) ||
          p.author_name.toLowerCase().includes(search.toLowerCase()),
      )
    : posts;

  return (
    <div className="max-w-2xl mx-auto space-y-4 sm:space-y-5 pb-8">
      <SEO
        title="Community Forum — Ask Maths Questions | MathMind"
        description="Ask, answer and discuss maths problems with other Australian students. AI-validated answers and a supportive student community."
      />

      {/* ── Header ── */}
      <div className="flex items-start justify-between gap-4 animate-slide-up pt-1">
        <div>
          <p className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-widest mb-0.5">Forum</p>
          <h1 className="font-display text-2xl sm:text-3xl font-bold leading-tight">Community</h1>
          <p className="text-muted-foreground text-xs sm:text-sm mt-1">
            Ask math questions, help others, and learn together
          </p>
        </div>
        <Button
          onClick={() => setShowCreate(true)}
          className="gap-1.5 shrink-0 h-9 sm:h-10 px-3 sm:px-4 text-xs sm:text-sm font-semibold"
        >
          <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span className="hidden xs:inline">Ask</span> Question
        </Button>
      </div>

      {/* ── Search ── */}
      <div className="relative animate-slide-up">
        <Search className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground pointer-events-none" />
        <input
          type="text"
          placeholder="Search questions or authors…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 sm:pl-12 pr-10 py-2.5 sm:py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm placeholder:text-muted-foreground/60"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1 rounded-md transition-colors"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* ── Tabs ── */}
      <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-0.5 animate-slide-up scrollbar-none">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`
              inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 whitespace-nowrap shrink-0
              ${
                tab === t.key
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-muted/40"
              }
            `}
          >
            <span className="text-sm leading-none">{t.emoji}</span>
            {t.label}
          </button>
        ))}
      </div>

      {/* ── Search result label ── */}
      {search.trim() && !loading && (
        <p className="text-xs sm:text-sm text-muted-foreground animate-slide-up">
          {filtered.length > 0
            ? `${filtered.length} result${filtered.length !== 1 ? "s" : ""} for "${search}"`
            : `No results for "${search}"`}
        </p>
      )}

      {/* ── Posts ── */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-16 gap-3 animate-slide-up">
          <Loader2 className="w-7 h-7 sm:w-8 sm:h-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">Loading questions…</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-14 sm:py-16 animate-slide-up">
          <p className="text-3xl sm:text-4xl mb-3">🤔</p>
          <p className="text-base sm:text-lg font-semibold mb-1">
            {search.trim() ? "No results found" : "No questions yet"}
          </p>
          <p className="text-sm text-muted-foreground mb-5">
            {search.trim() ? "Try a different search term" : "Be the first to ask a math question!"}
          </p>
          {!search.trim() && (
            <Button onClick={() => setShowCreate(true)} size="sm" className="gap-1.5">
              <Plus className="w-3.5 h-3.5" /> Ask a Question
            </Button>
          )}
        </div>
      ) : (
        <div className="space-y-3 sm:space-y-4">
          {filtered.map((post, i) => (
            <div key={post.id} className="animate-slide-up" style={{ animationDelay: `${Math.min(i * 40, 200)}ms` }}>
              <CommunityPostCard
                post={post}
                isLiked={likedIds.has(post.id)}
                isBookmarked={bookmarkedIds.has(post.id)}
                onLike={() => handleLike(post.id)}
                onBookmark={() => handleBookmark(post.id)}
              />
            </div>
          ))}
        </div>
      )}

      <CreateCommunityPostModal open={showCreate} onOpenChange={setShowCreate} onCreated={load} />
    </div>
  );
}
