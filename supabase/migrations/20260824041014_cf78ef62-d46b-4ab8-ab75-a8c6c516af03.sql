ALTER TABLE public.haul_truck_applications
  ADD COLUMN IF NOT EXISTS pre_existing_injuries boolean,
  ADD COLUMN IF NOT EXISTS under_100kg boolean,
  ADD COLUMN IF NOT EXISTS paid_employment_experience boolean,
  ADD COLUMN IF NOT EXISTS previous_employer text;