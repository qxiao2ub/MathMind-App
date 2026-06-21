import { useState, useRef } from "react";
import { X, Upload, Loader2, AlertCircle } from "lucide-react";
import { MathKeyboard } from "@/components/math/MathKeyboard";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { createCommunityPost, uploadCommunityImage, validateMathImage } from "@/lib/communityApi";

interface CreateCommunityPostModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreated: () => void;
}

export function CreateCommunityPostModal({ open, onOpenChange, onCreated }: CreateCommunityPostModalProps) {
  const { user, profile } = useAuth();
  const [text, setText] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [validating, setValidating] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error("Only image files are allowed");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image must be under 5 MB");
      return;
    }
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
    setValidationError(null);
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
    setValidationError(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  const handleSubmit = async () => {
    const trimmed = text.trim();
    if (!trimmed && !imageFile) {
      toast.error("Please provide a question (text or image)");
      return;
    }
    if (!user) return;

    setSubmitting(true);
    setValidationError(null);

    try {
      let imageUrl: string | undefined;
      let validationStatus = "skipped";
      let validationReason: string | undefined;

      if (imageFile) {
        // Upload
        imageUrl = await uploadCommunityImage(imageFile, user.id);

        // Validate
        setValidating(true);
        const result = await validateMathImage(imageUrl);
        setValidating(false);

        if (!result.approved) {
          setValidationError(result.reason || "The uploaded image does not appear to contain a math question or math-related content.");
          setSubmitting(false);
          return;
        }
        validationStatus = "approved";
        validationReason = result.reason;
      }

      await createCommunityPost({
        author_id: user.id,
        author_name: profile?.display_name || "Student",
        question_text: trimmed || undefined,
        image_url: imageUrl,
        image_validation_status: validationStatus,
        image_validation_reason: validationReason,
      });

      toast.success("Question posted!");
      setText("");
      removeImage();
      onOpenChange(false);
      onCreated();
    } catch (err: any) {
      console.error(err);
      toast.error("Failed to create post");
    } finally {
      setSubmitting(false);
      setValidating(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display">Ask a Math Question</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 pt-2">
          <textarea
            className="w-full min-h-[120px] p-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-sm"
            placeholder="Describe your math question here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={2000}
          />
          <MathKeyboard onInsert={(sym) => setText((prev) => prev + sym)} />

          {imagePreview ? (
            <div className="relative rounded-xl overflow-hidden border bg-muted">
              <img src={imagePreview} alt="Preview" className="w-full max-h-64 object-contain" />
              <button
                onClick={removeImage}
                className="absolute top-2 right-2 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => fileRef.current?.click()}
              className="w-full p-6 rounded-xl border-2 border-dashed border-border hover:border-primary/50 transition-colors flex flex-col items-center gap-2 text-muted-foreground"
            >
              <Upload className="w-6 h-6" />
              <span className="text-sm">Upload an image of your math question</span>
              <span className="text-xs">PNG, JPG — max 5 MB</span>
            </button>
          )}

          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />

          {validationError && (
            <div className="flex items-start gap-2 p-3 rounded-xl bg-destructive/10 border border-destructive/20 text-sm">
              <AlertCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
              <span className="text-destructive">{validationError}</span>
            </div>
          )}

          <p className="text-xs text-muted-foreground">
            Provide at least a question text or an image. Images will be checked to ensure they contain math content.
          </p>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => onOpenChange(false)} disabled={submitting}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} disabled={submitting || (!text.trim() && !imageFile)}>
              {validating ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Validating…</>
              ) : submitting ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Posting…</>
              ) : (
                "Post Question"
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
