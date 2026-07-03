
CREATE TABLE public.signature_extraction_errors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  contact_id TEXT NOT NULL,
  name TEXT,
  email TEXT,
  error TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX ON public.signature_extraction_errors (created_at DESC);
GRANT SELECT ON public.signature_extraction_errors TO anon, authenticated;
GRANT ALL ON public.signature_extraction_errors TO service_role;
ALTER TABLE public.signature_extraction_errors ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read signature errors"
  ON public.signature_extraction_errors FOR SELECT
  USING (true);
