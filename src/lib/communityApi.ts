import { supabase } from "@/integrations/supabase/client";

// ---- Types ----
export interface CommunityPost {
  id: string;
  author_id: string;
  author_name: string;
  title: string | null;
  question_text: string | null;
  image_url: string | null;
  image_validation_status: string;
  image_validation_reason: string | null;
  is_solved: boolean;
  accepted_comment_id: string | null;
  status_label: string;
  likes_count: number;
  bookmarks_count: number;
  comments_count: number;
  created_at: string;
  updated_at: string;
}

export interface CommunityComment {
  id: string;
  post_id: string;
  author_id: string;
  author_name: string;
  parent_comment_id: string | null;
  content: string;
  is_accepted_answer: boolean;
  likes_count: number;
  created_at: string;
  updated_at: string;
}

// ---- Posts ----
export async function fetchCommunityPosts(filter: "latest" | "unsolved" | "solved" | "bookmarks" = "latest", userId?: string) {
  let query = supabase
    .from("community_posts")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(50);

  if (filter === "unsolved") query = query.eq("status_label", "open");
  if (filter === "solved") query = query.eq("status_label", "solved");

  if (filter === "bookmarks" && userId) {
    const { data: bm } = await supabase
      .from("community_bookmarks")
      .select("post_id")
      .eq("user_id", userId);
    const ids = (bm || []).map((b: any) => b.post_id);
    if (ids.length === 0) return [];
    query = query.in("id", ids);
  }

  const { data, error } = await query;
  if (error) throw error;
  return (data || []) as CommunityPost[];
}

export async function fetchSinglePost(postId: string) {
  const { data, error } = await supabase
    .from("community_posts")
    .select("*")
    .eq("id", postId)
    .single();
  if (error) throw error;
  return data as CommunityPost;
}

export async function fetchMyPosts(userId: string) {
  const { data, error } = await supabase
    .from("community_posts")
    .select("*")
    .eq("author_id", userId)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data || []) as CommunityPost[];
}

export async function createCommunityPost(post: {
  author_id: string;
  author_name: string;
  question_text?: string;
  image_url?: string;
  image_validation_status?: string;
  image_validation_reason?: string;
}) {
  const { data, error } = await supabase
    .from("community_posts")
    .insert({
      author_id: post.author_id,
      author_name: post.author_name,
      question_text: post.question_text || null,
      image_url: post.image_url || null,
      image_validation_status: post.image_validation_status || "skipped",
      image_validation_reason: post.image_validation_reason || null,
    })
    .select()
    .single();
  if (error) throw error;
  return data as CommunityPost;
}

// ---- Comments ----
export async function fetchCommentsByPost(postId: string) {
  const { data, error } = await supabase
    .from("community_comments")
    .select("*")
    .eq("post_id", postId)
    .order("created_at", { ascending: true });
  if (error) throw error;
  return (data || []) as CommunityComment[];
}

export async function addComment(comment: {
  post_id: string;
  author_id: string;
  author_name: string;
  content: string;
  parent_comment_id?: string;
}) {
  const { data, error } = await supabase
    .from("community_comments")
    .insert({
      post_id: comment.post_id,
      author_id: comment.author_id,
      author_name: comment.author_name,
      content: comment.content,
      parent_comment_id: comment.parent_comment_id || null,
    })
    .select()
    .single();
  if (error) throw error;

  // Increment comments_count
  const { data: post } = await supabase
    .from("community_posts")
    .select("comments_count")
    .eq("id", comment.post_id)
    .single();
  if (post) {
    await supabase
      .from("community_posts")
      .update({ comments_count: (post as any).comments_count + 1 })
      .eq("id", comment.post_id);
  }

  return data as CommunityComment;
}

// ---- Likes ----
export async function togglePostLike(postId: string, userId: string) {
  const { data: existing } = await supabase
    .from("community_post_likes")
    .select("id")
    .eq("post_id", postId)
    .eq("user_id", userId)
    .maybeSingle();

  if (existing) {
    await supabase.from("community_post_likes").delete().eq("id", existing.id);
    // Decrement
    const { data: post } = await supabase.from("community_posts").select("likes_count").eq("id", postId).single();
    if (post) await supabase.from("community_posts").update({ likes_count: Math.max(0, (post as any).likes_count - 1) }).eq("id", postId);
    return false;
  } else {
    await supabase.from("community_post_likes").insert({ post_id: postId, user_id: userId });
    const { data: post } = await supabase.from("community_posts").select("likes_count").eq("id", postId).single();
    if (post) await supabase.from("community_posts").update({ likes_count: (post as any).likes_count + 1 }).eq("id", postId);
    return true;
  }
}

export async function toggleCommentLike(commentId: string, userId: string) {
  const { data: existing } = await supabase
    .from("community_comment_likes")
    .select("id")
    .eq("comment_id", commentId)
    .eq("user_id", userId)
    .maybeSingle();

  if (existing) {
    await supabase.from("community_comment_likes").delete().eq("id", existing.id);
    const { data: c } = await supabase.from("community_comments").select("likes_count").eq("id", commentId).single();
    if (c) await supabase.from("community_comments").update({ likes_count: Math.max(0, (c as any).likes_count - 1) }).eq("id", commentId);
    return false;
  } else {
    await supabase.from("community_comment_likes").insert({ comment_id: commentId, user_id: userId });
    const { data: c } = await supabase.from("community_comments").select("likes_count").eq("id", commentId).single();
    if (c) await supabase.from("community_comments").update({ likes_count: (c as any).likes_count + 1 }).eq("id", commentId);
    return true;
  }
}

// ---- Bookmarks ----
export async function toggleBookmark(postId: string, userId: string) {
  const { data: existing } = await supabase
    .from("community_bookmarks")
    .select("id")
    .eq("post_id", postId)
    .eq("user_id", userId)
    .maybeSingle();

  if (existing) {
    await supabase.from("community_bookmarks").delete().eq("id", existing.id);
    const { data: post } = await supabase.from("community_posts").select("bookmarks_count").eq("id", postId).single();
    if (post) await supabase.from("community_posts").update({ bookmarks_count: Math.max(0, (post as any).bookmarks_count - 1) }).eq("id", postId);
    return false;
  } else {
    await supabase.from("community_bookmarks").insert({ post_id: postId, user_id: userId });
    const { data: post } = await supabase.from("community_posts").select("bookmarks_count").eq("id", postId).single();
    if (post) await supabase.from("community_posts").update({ bookmarks_count: (post as any).bookmarks_count + 1 }).eq("id", postId);
    return true;
  }
}

// ---- Post status ----
export async function markPostSolved(postId: string) {
  await supabase
    .from("community_posts")
    .update({ is_solved: true, status_label: "solved" })
    .eq("id", postId);
}

export async function markPostUnsolved(postId: string) {
  await supabase
    .from("community_posts")
    .update({ is_solved: false, status_label: "open", accepted_comment_id: null })
    .eq("id", postId);
  // Unmark any accepted answer
  await supabase
    .from("community_comments")
    .update({ is_accepted_answer: false })
    .eq("post_id", postId);
}

export async function setAcceptedAnswer(postId: string, commentId: string) {
  // Unmark previous
  await supabase
    .from("community_comments")
    .update({ is_accepted_answer: false })
    .eq("post_id", postId);
  // Mark new
  await supabase
    .from("community_comments")
    .update({ is_accepted_answer: true })
    .eq("id", commentId);
  // Update post
  await supabase
    .from("community_posts")
    .update({ accepted_comment_id: commentId, is_solved: true, status_label: "solved" })
    .eq("id", postId);
}

// ---- User likes/bookmarks check ----
export async function getUserPostLikes(userId: string, postIds: string[]) {
  if (postIds.length === 0) return new Set<string>();
  const { data } = await supabase
    .from("community_post_likes")
    .select("post_id")
    .eq("user_id", userId)
    .in("post_id", postIds);
  return new Set((data || []).map((d: any) => d.post_id));
}

export async function getUserBookmarks(userId: string, postIds: string[]) {
  if (postIds.length === 0) return new Set<string>();
  const { data } = await supabase
    .from("community_bookmarks")
    .select("post_id")
    .eq("user_id", userId)
    .in("post_id", postIds);
  return new Set((data || []).map((d: any) => d.post_id));
}

export async function getUserCommentLikes(userId: string, commentIds: string[]) {
  if (commentIds.length === 0) return new Set<string>();
  const { data } = await supabase
    .from("community_comment_likes")
    .select("comment_id")
    .eq("user_id", userId)
    .in("comment_id", commentIds);
  return new Set((data || []).map((d: any) => d.comment_id));
}

// ---- Image upload ----
export async function uploadCommunityImage(file: File, userId: string) {
  const ext = file.name.split(".").pop();
  const path = `${userId}/${Date.now()}.${ext}`;
  const { error } = await supabase.storage.from("community-images").upload(path, file);
  if (error) throw error;
  const { data } = supabase.storage.from("community-images").getPublicUrl(path);
  return data.publicUrl;
}

// ---- Validate math image ----
export async function validateMathImage(imageUrl: string): Promise<{ approved: boolean; reason: string }> {
  const { data, error } = await supabase.functions.invoke("validate-math-image", {
    body: { imageUrl },
  });
  if (error) return { approved: true, reason: "Validation unavailable" };
  return data as { approved: boolean; reason: string };
}
