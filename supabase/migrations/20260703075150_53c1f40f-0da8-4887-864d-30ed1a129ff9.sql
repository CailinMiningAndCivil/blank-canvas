
DROP POLICY IF EXISTS "Public can read signature errors" ON public.signature_extraction_errors;
REVOKE SELECT ON public.signature_extraction_errors FROM anon, authenticated;
CREATE POLICY "No public read of signature errors"
  ON public.signature_extraction_errors AS RESTRICTIVE
  FOR SELECT TO anon, authenticated USING (false);
