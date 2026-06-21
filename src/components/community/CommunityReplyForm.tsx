import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Send } from "lucide-react";
import { MathKeyboard } from "@/components/math/MathKeyboard";

interface CommunityReplyFormProps {
  onSubmit: (content: string) => Promise<void>;
  placeholder?: string;
  disabled?: boolean;
}

export function CommunityReplyForm({ onSubmit, placeholder = "Write a comment...", disabled }: CommunityReplyFormProps) {
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    const trimmed = content.trim();
    if (!trimmed) return;
    setSubmitting(true);
    try {
      await onSubmit(trimmed);
      setContent("");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <textarea
          className="flex-1 min-h-[60px] p-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-sm"
          placeholder={placeholder}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          disabled={disabled || submitting}
          maxLength={2000}
        />
        <Button
          size="icon"
          onClick={handleSubmit}
          disabled={disabled || submitting || !content.trim()}
          className="self-end"
        >
          {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        </Button>
      </div>
      {!disabled && (
        <MathKeyboard onInsert={(text) => setContent((prev) => prev + text)} />
      )}
    </div>
  );
}
