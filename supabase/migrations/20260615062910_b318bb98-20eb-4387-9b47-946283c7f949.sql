ALTER TABLE public.haul_truck_applications
  ADD COLUMN IF NOT EXISTS postcode text,
  ADD COLUMN IF NOT EXISTS machines_operated text,
  ADD COLUMN IF NOT EXISTS has_hr_licence boolean,
  ADD COLUMN IF NOT EXISTS hr_licence_file_path text,
  ADD COLUMN IF NOT EXISTS qualified boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS source text;