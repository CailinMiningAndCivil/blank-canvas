
CREATE TABLE public.haul_truck_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  previous_experience BOOLEAN NOT NULL,
  experience_details TEXT,
  evidence_file_path TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
GRANT INSERT ON public.haul_truck_applications TO anon, authenticated;
GRANT ALL ON public.haul_truck_applications TO service_role;
ALTER TABLE public.haul_truck_applications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit an application"
  ON public.haul_truck_applications FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can upload haul truck evidence"
  ON storage.objects FOR INSERT
  TO anon, authenticated
  WITH CHECK (bucket_id = 'haul-truck-applications');
