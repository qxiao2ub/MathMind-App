
-- Storage bucket for community images
INSERT INTO storage.buckets (id, name, public) VALUES ('community-images', 'community-images', true);

-- Community posts table
CREATE TABLE public.community_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  author_id UUID NOT NULL,
  author_name TEXT NOT NULL DEFAULT 'Anonymous',
  title TEXT,
  question_text TEXT,
  image_url TEXT,
  image_validation_status TEXT NOT NULL DEFAULT 'skipped' CHECK (image_validation_status IN ('approved', 'rejected', 'skipped')),
  image_validation_reason TEXT,
  is_solved BOOLEAN NOT NULL DEFAULT false,
  accepted_comment_id UUID,
  status_label TEXT NOT NULL DEFAULT 'open' CHECK (status_label IN ('open', 'solved', 'no_solution_yet')),
  likes_count INTEGER NOT NULL DEFAULT 0,
  bookmarks_count INTEGER NOT NULL DEFAULT 0,
  comments_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT question_not_empty CHECK (question_text IS NOT NULL OR image_url IS NOT NULL)
);

-- Community comments table
CREATE TABLE public.community_comments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID NOT NULL REFERENCES public.community_posts(id) ON DELETE CASCADE,
  author_id UUID NOT NULL,
  author_name TEXT NOT NULL DEFAULT 'Anonymous',
  parent_comment_id UUID REFERENCES public.community_comments(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  is_accepted_answer BOOLEAN NOT NULL DEFAULT false,
  likes_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Post likes
CREATE TABLE public.community_post_likes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID NOT NULL REFERENCES public.community_posts(id) ON DELETE CASCADE,
  user_id UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(post_id, user_id)
);

-- Comment likes
CREATE TABLE public.community_comment_likes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  comment_id UUID NOT NULL REFERENCES public.community_comments(id) ON DELETE CASCADE,
  user_id UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(comment_id, user_id)
);

-- Bookmarks
CREATE TABLE public.community_bookmarks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID NOT NULL REFERENCES public.community_posts(id) ON DELETE CASCADE,
  user_id UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(post_id, user_id)
);

-- Indexes
CREATE INDEX idx_community_posts_author ON public.community_posts(author_id);
CREATE INDEX idx_community_posts_created ON public.community_posts(created_at DESC);
CREATE INDEX idx_community_posts_status ON public.community_posts(status_label);
CREATE INDEX idx_community_comments_post ON public.community_comments(post_id);
CREATE INDEX idx_community_comments_parent ON public.community_comments(parent_comment_id);
CREATE INDEX idx_community_post_likes_user ON public.community_post_likes(user_id);
CREATE INDEX idx_community_comment_likes_user ON public.community_comment_likes(user_id);
CREATE INDEX idx_community_bookmarks_user ON public.community_bookmarks(user_id);

-- RLS
ALTER TABLE public.community_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_post_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_comment_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_bookmarks ENABLE ROW LEVEL SECURITY;

-- Posts: anyone authenticated can read, authors can insert/update their own
CREATE POLICY "Anyone can read posts" ON public.community_posts FOR SELECT TO authenticated USING (true);
CREATE POLICY "Users can create posts" ON public.community_posts FOR INSERT TO authenticated WITH CHECK (auth.uid() = author_id);
CREATE POLICY "Authors can update own posts" ON public.community_posts FOR UPDATE TO authenticated USING (auth.uid() = author_id);

-- Comments: anyone authenticated can read, users can insert
CREATE POLICY "Anyone can read comments" ON public.community_comments FOR SELECT TO authenticated USING (true);
CREATE POLICY "Users can create comments" ON public.community_comments FOR INSERT TO authenticated WITH CHECK (auth.uid() = author_id);
CREATE POLICY "Authors can update own comments" ON public.community_comments FOR UPDATE TO authenticated USING (auth.uid() = author_id);

-- Post likes
CREATE POLICY "Anyone can read post likes" ON public.community_post_likes FOR SELECT TO authenticated USING (true);
CREATE POLICY "Users can insert own likes" ON public.community_post_likes FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete own likes" ON public.community_post_likes FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- Comment likes
CREATE POLICY "Anyone can read comment likes" ON public.community_comment_likes FOR SELECT TO authenticated USING (true);
CREATE POLICY "Users can insert own comment likes" ON public.community_comment_likes FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete own comment likes" ON public.community_comment_likes FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- Bookmarks
CREATE POLICY "Anyone can read bookmarks" ON public.community_bookmarks FOR SELECT TO authenticated USING (true);
CREATE POLICY "Users can insert own bookmarks" ON public.community_bookmarks FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete own bookmarks" ON public.community_bookmarks FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- Storage policies for community-images bucket
CREATE POLICY "Authenticated users can upload community images" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'community-images');
CREATE POLICY "Anyone can view community images" ON storage.objects FOR SELECT TO authenticated USING (bucket_id = 'community-images');

-- Trigger for updated_at on posts
CREATE TRIGGER update_community_posts_updated_at BEFORE UPDATE ON public.community_posts FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Trigger for updated_at on comments
CREATE TRIGGER update_community_comments_updated_at BEFORE UPDATE ON public.community_comments FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
