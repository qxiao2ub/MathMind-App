import { SEO } from "@/components/SEO";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Eye, MessageCircle, Heart, Bookmark, Loader2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { fetchMyPosts, CommunityPost } from "@/lib/communityApi";
import { CommunityStatusBadge } from "@/components/community/CommunityStatusBadge";
import { formatDistanceToNow } from "date-fns";

export default function MyQuestions() {
  const { user } = useAuth();
  const [posts, setPosts] = useState<CommunityPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    fetchMyPosts(user.id).then(setPosts).finally(() => setLoading(false));
  }, [user]);

  const solvedCount = posts.filter((p) => p.is_solved).length;
  const unsolvedCount = posts.filter((p) => !p.is_solved).length;
  const totalComments = posts.reduce((s, p) => s + p.comments_count, 0);

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <SEO title="My Questions | MathMind" description="View and manage your community questions and bookmarks." noindex />
      <Link
        to="/profile"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-slide-up"
      >
        <ArrowLeft className="w-5 h-5" /> Back to Profile
      </Link>

      <div className="animate-slide-up">
        <h1 className="font-display text-3xl font-bold mb-1">My Questions</h1>
        <p className="text-muted-foreground text-sm">All your community math questions</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 animate-slide-up">
        {[
          { label: "Total", value: posts.length },
          { label: "Solved", value: solvedCount },
          { label: "Unsolved", value: unsolvedCount },
          { label: "Comments", value: totalComments },
        ].map((s) => (
          <div key={s.label} className="card-learning text-center">
            <p className="text-2xl font-bold">{s.value}</p>
            <p className="text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          <p className="font-semibold mb-1">No questions yet</p>
          <p className="text-sm">
            Head to{" "}
            <Link to="/community" className="text-primary hover:underline">
              Community
            </Link>{" "}
            to ask your first question!
          </p>
        </div>
      ) : (
        <div className="space-y-3 animate-slide-up">
          {posts.map((post) => {
            const timeAgo = formatDistanceToNow(new Date(post.created_at), { addSuffix: true });
            return (
              <Link
                key={post.id}
                to={`/community/${post.id}`}
                className="card-learning block hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <p className="text-sm font-medium line-clamp-2 flex-1">
                    {post.question_text || "Image question"}
                  </p>
                  <CommunityStatusBadge status={post.status_label} />
                </div>

                {post.image_url && (
                  <div className="mb-2 rounded-lg overflow-hidden border bg-muted h-16 w-24">
                    <img src={post.image_url} alt="" className="w-full h-full object-cover" />
                  </div>
                )}

                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{timeAgo}</span>
                  <span className="flex items-center gap-1"><Heart className="w-3 h-3" /> {post.likes_count}</span>
                  <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3" /> {post.comments_count}</span>
                  <span className="flex items-center gap-1"><Bookmark className="w-3 h-3" /> {post.bookmarks_count}</span>
                  <span className="ml-auto flex items-center gap-1 text-primary"><Eye className="w-3 h-3" /> View</span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
