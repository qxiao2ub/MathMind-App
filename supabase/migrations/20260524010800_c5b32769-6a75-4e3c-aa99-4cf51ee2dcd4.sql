
-- 1. Tighten SELECT policies on likes/bookmarks to owner-only
DROP POLICY IF EXISTS "Anyone can read bookmarks" ON public.community_bookmarks;
DROP POLICY IF EXISTS "Anyone can read post likes" ON public.community_post_likes;
DROP POLICY IF EXISTS "Anyone can read comment likes" ON public.community_comment_likes;

CREATE POLICY "Users read own bookmarks"
  ON public.community_bookmarks FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users read own post likes"
  ON public.community_post_likes FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users read own comment likes"
  ON public.community_comment_likes FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

-- 2. community-images bucket: scope writes to owner folder, disable broad listing
DROP POLICY IF EXISTS "Anyone can upload community images" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can view community images" ON storage.objects;
DROP POLICY IF EXISTS "Community images are publicly accessible" ON storage.objects;
DROP POLICY IF EXISTS "Users can upload community images" ON storage.objects;
DROP POLICY IF EXISTS "Users can update own community images" ON storage.objects;
DROP POLICY IF EXISTS "Users can delete own community images" ON storage.objects;

-- Public can read individual files (bucket is public; no listing policy => no enumeration)
CREATE POLICY "Public read community images by path"
  ON storage.objects FOR SELECT TO anon, authenticated
  USING (bucket_id = 'community-images');

CREATE POLICY "Users upload own community images"
  ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (
    bucket_id = 'community-images'
    AND auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Users update own community images"
  ON storage.objects FOR UPDATE TO authenticated
  USING (
    bucket_id = 'community-images'
    AND auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Users delete own community images"
  ON storage.objects FOR DELETE TO authenticated
  USING (
    bucket_id = 'community-images'
    AND auth.uid()::text = (storage.foldername(name))[1]
  );

-- 3. Fix mutable search_path on calc_level
CREATE OR REPLACE FUNCTION public.calc_level(_xp integer)
RETURNS integer
LANGUAGE sql
IMMUTABLE
SET search_path = public
AS $$
  SELECT GREATEST(1, FLOOR(SQRT(GREATEST(_xp,0)::numeric / 50))::int + 1)
$$;

-- 4. Revoke EXECUTE from anon on SECURITY DEFINER functions that require auth
REVOKE EXECUTE ON FUNCTION public.award_xp(integer, text, integer, jsonb, text) FROM anon, public;
REVOKE EXECUTE ON FUNCTION public.get_leaderboard(text, integer) FROM anon, public;
REVOKE EXECUTE ON FUNCTION public.update_user_streak(uuid) FROM anon, public;
REVOKE EXECUTE ON FUNCTION public.is_own_profile(uuid) FROM anon, public;

GRANT EXECUTE ON FUNCTION public.award_xp(integer, text, integer, jsonb, text) TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_leaderboard(text, integer) TO authenticated;
GRANT EXECUTE ON FUNCTION public.update_user_streak(uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.is_own_profile(uuid) TO authenticated;
