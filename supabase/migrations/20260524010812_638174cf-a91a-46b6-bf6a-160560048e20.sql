
DROP POLICY IF EXISTS "Public read community images by path" ON storage.objects;
-- Public bucket: direct URLs still work; removing SELECT policy prevents enumeration via list().
