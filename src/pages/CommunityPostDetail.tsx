import { SEO } from "@/components/SEO";
import { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart, Bookmark, MessageCircle, Loader2, CheckCircle2, XCircle, Lock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import {
  fetchSinglePost,
  fetchCommentsByPost,
  addComment,
  togglePostLike,
  toggleCommentLike,
  toggleBookmark,
  markPostSolved,
  markPostUnsolved,
  setAcceptedAnswer,
  getUserPostLikes,
  getUserBookmarks,
  getUserCommentLikes,
  CommunityPost,
  CommunityComment,
} from "@/lib/communityApi";
import { CommunityStatusBadge } from "@/components/community/CommunityStatusBadge";
import { CommunityCommentItem } from "@/components/community/CommunityCommentItem";
import { CommunityReplyForm } from "@/components/community/CommunityReplyForm";
import { formatDistanceToNow } from "date-fns";

export default function CommunityPostDetail() {
  const { postId } = useParams();
  const { user, profile } = useAuth();
  const [post, setPost] = useState<CommunityPost | null>(null);
  const [comments, setComments] = useState<CommunityComment[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likedCommentIds, setLikedCommentIds] = useState<Set<string>>(new Set());
  const [replyingTo, setReplyingTo] = useState<string | null>(null);

  const load = useCallback(async () => {
    if (!postId) return;
    setLoading(true);
    try {
      const [p, c] = await Promise.all([fetchSinglePost(postId), fetchCommentsByPost(postId)]);
      setPost(p);
      setComments(c);
      if (user) {
        const [likes, bms] = await Promise.all([
          getUserPostLikes(user.id, [postId]),
          getUserBookmarks(user.id, [postId]),
        ]);
        setIsLiked(likes.has(postId));
        setIsBookmarked(bms.has(postId));
        if (c.length > 0) {
          const cLikes = await getUserCommentLikes(
            user.id,
            c.map((x) => x.id),
          );
          setLikedCommentIds(cLikes);
        }
      }
    } catch {
      toast.error("Failed to load post");
    } finally {
      setLoading(false);
    }
  }, [postId, user]);

  useEffect(() => {
    load();
  }, [load]);

  /* ── Loading ── */
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-3">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <p className="text-sm text-muted-foreground">Loading post…</p>
      </div>
    );
  }

  /* ── Not found ── */
  if (!post) {
    return (
      <div className="text-center py-16 max-w-md mx-auto px-4">
        <p className="text-4xl mb-4">🔍</p>
        <h2 className="font-display text-xl sm:text-2xl font-bold mb-2">Post not found</h2>
        <p className="text-muted-foreground text-sm mb-5">
          This question may have been removed or the link is invalid.
        </p>
        <Link
          to="/community"
          className="inline-flex items-center gap-1.5 text-primary hover:underline font-semibold text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Community
        </Link>
      </div>
    );
  }

  const isPostAuthor = user?.id === post.author_id;
  const isSolved = post.is_solved;
  const topLevelComments = comments.filter((c) => !c.parent_comment_id);
  const getReplies = (id: string) => comments.filter((c) => c.parent_comment_id === id);
  const timeAgo = formatDistanceToNow(new Date(post.created_at), { addSuffix: true });

  const handleLike = async () => {
    if (!user) return;
    const liked = await togglePostLike(post.id, user.id);
    setIsLiked(liked);
    setPost((p) => (p ? { ...p, likes_count: p.likes_count + (liked ? 1 : -1) } : p));
  };

  const handleBookmark = async () => {
    if (!user) return;
    const bm = await toggleBookmark(post.id, user.id);
    setIsBookmarked(bm);
    setPost((p) => (p ? { ...p, bookmarks_count: p.bookmarks_count + (bm ? 1 : -1) } : p));
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard");
    } catch {
      toast.error("Could not copy link");
    }
  };

  const handleCommentLike = async (commentId: string) => {
    if (!user) return;
    const liked = await toggleCommentLike(commentId, user.id);
    setLikedCommentIds((prev) => {
      const n = new Set(prev);
      liked ? n.add(commentId) : n.delete(commentId);
      return n;
    });
    setComments((prev) =>
      prev.map((c) => (c.id === commentId ? { ...c, likes_count: c.likes_count + (liked ? 1 : -1) } : c)),
    );
  };

  const handleAddComment = async (content: string, parentId?: string) => {
    if (!user) return;
    const comment = await addComment({
      post_id: post.id,
      author_id: user.id,
      author_name: profile?.display_name || "Student",
      content,
      parent_comment_id: parentId,
    });
    setComments((prev) => [...prev, comment]);
    setPost((p) => (p ? { ...p, comments_count: p.comments_count + 1 } : p));
    setReplyingTo(null);
    toast.success(parentId ? "Reply added" : "Comment added");
  };

  const handleAccept = async (commentId: string) => {
    await setAcceptedAnswer(post.id, commentId);
    toast.success("Accepted answer set — post marked as solved");
    load();
  };

  const handleSolve = async () => {
    await markPostSolved(post.id);
    toast.success("Post marked as solved");
    load();
  };

  const handleReopen = async () => {
    await markPostUnsolved(post.id);
    toast.success("Post reopened");
    load();
  };

  return (
    <div className="max-w-2xl mx-auto space-y-4 sm:space-y-5 pb-8">
      <SEO title={`${post.title || "Community Question"} — MathMind`} description={post.question_text?.slice(0, 160) || "Community maths question on MathMind."}  noindex />
      {/* ── Back nav ── */}
      <Link
        to="/community"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors animate-slide-up min-h-[40px] -ml-1 px-1 rounded-lg hover:bg-muted/40 font-medium"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Community
      </Link>

      {/* ── Post card ── */}
      <div className="card-learning animate-slide-up">
        {/* Author row */}
        <div className="flex items-start justify-between gap-3 mb-3 sm:mb-4">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground shrink-0">
              {post.author_name.charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-sm sm:text-base leading-tight truncate">{post.author_name}</p>
              <p className="text-xs text-muted-foreground">{timeAgo}</p>
            </div>
          </div>
          <CommunityStatusBadge status={post.status_label} />
        </div>

        {/* Question text */}
        {post.question_text && (
          <p className="mb-3 sm:mb-4 whitespace-pre-wrap text-sm sm:text-base leading-relaxed">{post.question_text}</p>
        )}

        {/* Image */}
        {post.image_url && (
          <div className="mb-3 sm:mb-4 rounded-xl overflow-hidden border border-border bg-muted">
            <img src={post.image_url} alt="Math question" className="w-full object-contain max-h-80 sm:max-h-96" />
          </div>
        )}

        {/* Accepted answer banner */}
        {post.accepted_comment_id && (
          <div className="flex items-center gap-2 p-3 rounded-xl bg-success/10 border border-success/30 text-sm mb-3 sm:mb-4">
            <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
            <span className="font-medium">This question has an accepted answer</span>
          </div>
        )}

        {/* Action bar */}
        <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-border/60">
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Like */}
            <button
              onClick={handleLike}
              className={`flex items-center gap-1.5 text-xs sm:text-sm px-2.5 py-1.5 rounded-lg transition-colors font-medium
                ${
                  isLiked
                    ? "text-destructive bg-destructive/10 hover:bg-destructive/20"
                    : "text-muted-foreground hover:text-destructive hover:bg-destructive/8"
                }`}
            >
              <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isLiked ? "fill-current" : ""}`} />
              <span className="tabular-nums">{post.likes_count}</span>
            </button>

            {/* Comments */}
            <span className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground px-2 py-1.5">
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="tabular-nums">{post.comments_count}</span>
            </span>

            {/* Bookmark */}
            <button
              onClick={handleBookmark}
              className={`flex items-center gap-1.5 text-xs sm:text-sm px-2.5 py-1.5 rounded-lg transition-colors font-medium
                ${
                  isBookmarked
                    ? "text-primary bg-primary/10 hover:bg-primary/20"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/8"
                }`}
            >
              <Bookmark className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isBookmarked ? "fill-current" : ""}`} />
            </button>

            {/* Share */}
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground hover:text-foreground px-2.5 py-1.5 rounded-lg transition-colors"
            >
              <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>

          {/* Author controls */}
          {isPostAuthor && (
            <div className="flex gap-1.5 sm:gap-2">
              {isSolved ? (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleReopen}
                  className="gap-1 text-xs h-7 sm:h-8 px-2.5 sm:px-3"
                >
                  <XCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span className="hidden sm:inline">Reopen</span>
                </Button>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSolve}
                  className="gap-1 text-xs h-7 sm:h-8 px-2.5 sm:px-3"
                >
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span className="hidden sm:inline">Mark Solved</span>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── Comments section ── */}
      <div className="space-y-3 sm:space-y-4 animate-slide-up">
        {/* Section header */}
        <div className="flex items-center gap-2">
          <h2 className="font-display text-base sm:text-lg font-bold">Comments</h2>
          <span className="text-xs sm:text-sm font-semibold bg-muted text-muted-foreground px-2 py-0.5 rounded-full tabular-nums">
            {comments.length}
          </span>
        </div>

        {/* Closed notice */}
        {isSolved && (
          <div className="flex items-center gap-2 p-3 rounded-xl bg-muted/60 border border-border/60 text-xs sm:text-sm text-muted-foreground">
            <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            This question has been solved. New comments are closed.
          </div>
        )}

        {/* Reply form */}
        {!isSolved && (
          <CommunityReplyForm onSubmit={(content) => handleAddComment(content)} placeholder="Write a comment…" />
        )}

        {/* Comment list */}
        <div className="space-y-2 sm:space-y-3">
          {topLevelComments.map((comment) => (
            <div key={comment.id}>
              <CommunityCommentItem
                comment={comment}
                isLiked={likedCommentIds.has(comment.id)}
                isAuthor={user?.id === comment.author_id}
                isPostAuthor={isPostAuthor}
                isSolved={isSolved}
                onLike={() => handleCommentLike(comment.id)}
                onReply={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                onAccept={handleAccept}
                replies={getReplies(comment.id)}
                likedCommentIds={likedCommentIds}
                userId={user?.id}
                onReplyLike={handleCommentLike}
              />
              {replyingTo === comment.id && !isSolved && (
                <div className="mt-2 ml-6 sm:ml-8 pl-3 sm:pl-4 border-l-2 border-primary/20">
                  <CommunityReplyForm
                    onSubmit={(content) => handleAddComment(content, comment.id)}
                    placeholder={`Reply to ${comment.author_name}…`}
                  />
                </div>
              )}
            </div>
          ))}

          {topLevelComments.length === 0 && (
            <div className="text-center py-10 sm:py-12">
              <p className="text-2xl mb-2">💬</p>
              <p className="text-sm font-semibold text-muted-foreground mb-1">No comments yet</p>
              <p className="text-xs text-muted-foreground/70">Be the first to help with this question!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
