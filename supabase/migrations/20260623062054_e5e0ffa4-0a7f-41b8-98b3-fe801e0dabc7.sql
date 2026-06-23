CREATE TABLE public.refresher_training_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  machine TEXT NOT NULL,
  notes TEXT,
  acknowledged BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.refresher_training_requests TO anon, authenticated;
GRANT ALL ON public.refresher_training_requests TO service_role;

ALTER TABLE public.refresher_training_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit refresher training request"
  ON public.refresher_training_requests
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "No public read of refresher training requests"
  ON public.refresher_training_requests
  AS RESTRICTIVE
  FOR SELECT
  TO anon, authenticated
  USING (false);