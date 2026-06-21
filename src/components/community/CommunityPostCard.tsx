import { Heart, MessageCircle, Bookmark, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { CommunityPost } from "@/lib/communityApi";
import { CommunityStatusBadge } from "./CommunityStatusBadge";
import { formatDistanceToNow } from "date-fns";

interface CommunityPostCardProps {
  post: CommunityPost;
  isLiked?: boolean;
  isBookmarked?: boolean;
  onLike?: () => void;
  onBookmark?: () => void;
}

export function CommunityPostCard({ post, isLiked, isBookmarked, onLike, onBookmark }: CommunityPostCardProps) {
  const timeAgo = formatDistanceToNow(new Date(post.created_at), { addSuffix: true });

  return (
    <div className="card-learning animate-slide-up">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
            {post.author_name.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-sm font-semibold">{post.author_name}</p>
            <p className="text-xs text-muted-foreground">{timeAgo}</p>
          </div>
        </div>
        <CommunityStatusBadge status={post.status_label} />
      </div>

      {post.question_text && (
        <p className="text-sm mb-3 line-clamp-3">{post.question_text}</p>
      )}

      {post.image_url && (
        <div className="mb-3 rounded-xl overflow-hidden border bg-muted">
          <img
            src={post.image_url}
            alt="Math question"
            className="w-full max-h-48 object-contain"
            loading="lazy"
          />
        </div>
      )}

      <div className="flex items-center justify-between pt-2 border-t">
        <div className="flex items-center gap-4">
          <button
            onClick={(e) => { e.preventDefault(); onLike?.(); }}
            className={`flex items-center gap-1 text-sm transition-colors ${isLiked ? "text-destructive" : "text-muted-foreground hover:text-destructive"}`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
            {post.likes_count}
          </button>
          <span className="flex items-center gap-1 text-sm text-muted-foreground">
            <MessageCircle className="w-4 h-4" />
            {post.comments_count}
          </span>
          <button
            onClick={(e) => { e.preventDefault(); onBookmark?.(); }}
            className={`flex items-center gap-1 text-sm transition-colors ${isBookmarked ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`} />
          </button>
        </div>
        <Link
          to={`/community/${post.id}`}
          className="flex items-center gap-1 text-sm text-primary hover:underline font-medium"
        >
          <Eye className="w-4 h-4" /> View
        </Link>
      </div>
    </div>
  );
}
