CREATE TABLE public.discovery_call_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  has_flights_or_visa BOOLEAN NOT NULL,
  is_english_fluent BOOLEAN NOT NULL,
  qualified BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.discovery_call_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit discovery call form"
  ON public.discovery_call_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);
