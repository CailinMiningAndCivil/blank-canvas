DROP POLICY IF EXISTS "Anyone can upload haul truck evidence" ON storage.objects;

CREATE POLICY "Restricted uploads to haul-truck-applications"
ON storage.objects
FOR INSERT
TO anon, authenticated
WITH CHECK (
  bucket_id = 'haul-truck-applications'
  AND lower(storage.extension(name)) = ANY (ARRAY['pdf','doc','docx','jpg','jpeg','png'])
);