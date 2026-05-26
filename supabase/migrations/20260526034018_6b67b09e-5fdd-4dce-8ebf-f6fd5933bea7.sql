
-- Restrict RPL documents storage SELECT to service_role only
DROP POLICY IF EXISTS "Service role can read RPL documents" ON storage.objects;
CREATE POLICY "Service role can read RPL documents"
ON storage.objects FOR SELECT
TO service_role
USING (bucket_id = 'rpl-documents');

-- Add explicit restrictive policies blocking public/auth SELECT on PII tables.
-- Service role bypasses RLS, so admin/backend access still works.
CREATE POLICY "No public read of contact submissions"
ON public.contact_submissions AS RESTRICTIVE
FOR SELECT TO anon, authenticated
USING (false);

CREATE POLICY "No public read of discovery call submissions"
ON public.discovery_call_submissions AS RESTRICTIVE
FOR SELECT TO anon, authenticated
USING (false);

CREATE POLICY "No public read of returning student submissions"
ON public.returning_student_submissions AS RESTRICTIVE
FOR SELECT TO anon, authenticated
USING (false);
