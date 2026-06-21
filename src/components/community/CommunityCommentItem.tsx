import { useState } from "react";
import { Heart, CheckCircle2, Reply } from "lucide-react";
import { CommunityComment } from "@/lib/communityApi";
import { formatDistanceToNow } from "date-fns";

interface CommunityCommentItemProps {
  comment: CommunityComment;
  isLiked: boolean;
  isAuthor: boolean;
  isPostAuthor: boolean;
  isSolved: boolean;
  onLike: () => void;
  onReply: (commentId: string) => void;
  onAccept: (commentId: string) => void;
  replies: CommunityComment[];
  likedCommentIds: Set<string>;
  userId?: string;
  onReplyLike: (commentId: string) => void;
}

export function CommunityCommentItem({
  comment,
  isLiked,
  isPostAuthor,
  isSolved,
  onLike,
  onReply,
  onAccept,
  replies,
  likedCommentIds,
  onReplyLike,
}: CommunityCommentItemProps) {
  const timeAgo = formatDistanceToNow(new Date(comment.created_at), { addSuffix: true });

  return (
    <div className={`rounded-xl p-4 ${comment.is_accepted_answer ? "bg-success/10 border-2 border-success/30" : "bg-card border"}`}>
      {comment.is_accepted_answer && (
        <div className="flex items-center gap-1 text-success-foreground text-xs font-semibold mb-2">
          <CheckCircle2 className="w-3.5 h-3.5" /> Accepted Answer
        </div>
      )}

      <div className="flex items-center gap-2 mb-2">
        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
          {comment.author_name.charAt(0).toUpperCase()}
        </div>
        <span className="text-sm font-semibold">{comment.author_name}</span>
        <span className="text-xs text-muted-foreground">{timeAgo}</span>
      </div>

      <p className="text-sm mb-3 whitespace-pre-wrap">{comment.content}</p>

      <div className="flex items-center gap-3">
        <button
          onClick={onLike}
          className={`flex items-center gap-1 text-xs transition-colors ${isLiked ? "text-destructive" : "text-muted-foreground hover:text-destructive"}`}
        >
          <Heart className={`w-3.5 h-3.5 ${isLiked ? "fill-current" : ""}`} />
          {comment.likes_count}
        </button>

        {!isSolved && (
          <button
            onClick={() => onReply(comment.id)}
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <Reply className="w-3.5 h-3.5" /> Reply
          </button>
        )}

        {isPostAuthor && !comment.is_accepted_answer && !isSolved && (
          <button
            onClick={() => onAccept(comment.id)}
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-success-foreground transition-colors ml-auto"
          >
            <CheckCircle2 className="w-3.5 h-3.5" /> Accept Answer
          </button>
        )}
      </div>

      {/* Nested replies */}
      {replies.length > 0 && (
        <div className="mt-3 ml-4 pl-4 border-l-2 border-border space-y-3">
          {replies.map((reply) => {
            const replyTime = formatDistanceToNow(new Date(reply.created_at), { addSuffix: true });
            const replyLiked = likedCommentIds.has(reply.id);
            return (
              <div key={reply.id} className="py-2">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
                    {reply.author_name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-xs font-semibold">{reply.author_name}</span>
                  <span className="text-[10px] text-muted-foreground">{replyTime}</span>
                </div>
                <p className="text-xs whitespace-pre-wrap mb-1">{reply.content}</p>
                <button
                  onClick={() => onReplyLike(reply.id)}
                  className={`flex items-center gap-1 text-[10px] transition-colors ${replyLiked ? "text-destructive" : "text-muted-foreground hover:text-destructive"}`}
                >
                  <Heart className={`w-3 h-3 ${replyLiked ? "fill-current" : ""}`} />
                  {reply.likes_count}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
