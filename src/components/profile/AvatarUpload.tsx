import { useState, useRef } from "react";
import { Camera, Trash2, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function AvatarUpload() {
  const { user, profile, updateProfile } = useAuth();
  const [uploading, setUploading] = useState(false);
  const [removing, setRemoving] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const avatarUrl = profile?.avatar_url;
  const initials = (profile?.display_name || "S").charAt(0).toUpperCase();

  const getPublicUrl = (path: string) => {
    const { data } = supabase.storage.from("avatars").getPublicUrl(path);
    return data.publicUrl;
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file.");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      toast.error("Image must be under 2 MB.");
      return;
    }

    setUploading(true);
    try {
      const ext = file.name.split(".").pop();
      const path = `${user.id}/avatar.${ext}`;

      // Remove old file if exists (ignore errors)
      await supabase.storage.from("avatars").remove([path]);

      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(path, file, { upsert: true });

      if (uploadError) throw uploadError;

      const publicUrl = getPublicUrl(path);
      await updateProfile({ avatar_url: publicUrl } as any);
      toast.success("Profile picture updated!");
    } catch (err: any) {
      console.error(err);
      toast.error("Failed to upload image.");
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleRemove = async () => {
    if (!user || !avatarUrl) return;
    setRemoving(true);
    try {
      // Extract path from URL
      const parts = avatarUrl.split("/avatars/");
      if (parts[1]) {
        await supabase.storage.from("avatars").remove([parts[1]]);
      }
      await updateProfile({ avatar_url: null } as any);
      toast.success("Profile picture removed.");
    } catch (err: any) {
      console.error(err);
      toast.error("Failed to remove image.");
    } finally {
      setRemoving(false);
    }
  };

  return (
    <div className="relative group">
      <Avatar className="w-20 h-20 rounded-2xl">
        {avatarUrl ? (
          <AvatarImage src={avatarUrl} alt="Profile" className="object-cover rounded-2xl" />
        ) : null}
        <AvatarFallback className="w-20 h-20 rounded-2xl gradient-primary text-primary-foreground text-2xl font-bold">
          {initials}
        </AvatarFallback>
      </Avatar>

      {/* Overlay buttons */}
      <div className="absolute inset-0 rounded-2xl bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1">
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className="p-1.5 rounded-full bg-background/80 hover:bg-background transition-colors"
          aria-label="Upload photo"
        >
          {uploading ? (
            <Loader2 className="w-4 h-4 animate-spin text-foreground" />
          ) : (
            <Camera className="w-4 h-4 text-foreground" />
          )}
        </button>
        {avatarUrl && (
          <button
            onClick={handleRemove}
            disabled={removing}
            className="p-1.5 rounded-full bg-background/80 hover:bg-destructive/80 transition-colors"
            aria-label="Remove photo"
          >
            {removing ? (
              <Loader2 className="w-4 h-4 animate-spin text-foreground" />
            ) : (
              <Trash2 className="w-4 h-4 text-destructive" />
            )}
          </button>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleUpload}
      />
    </div>
  );
}
