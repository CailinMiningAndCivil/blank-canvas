-- Students: one ongoing record per person
CREATE TABLE public.students (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ghl_contact_id text UNIQUE,
  full_name text NOT NULL,
  email text,
  phone text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.students TO service_role;
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
CREATE POLICY "No public access to students"
  ON public.students AS RESTRICTIVE FOR ALL
  TO anon, authenticated USING (false) WITH CHECK (false);

-- Trainers: name list only, no logins
CREATE TABLE public.trainers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.trainers TO service_role;
ALTER TABLE public.trainers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "No public access to trainers"
  ON public.trainers AS RESTRICTIVE FOR ALL
  TO anon, authenticated USING (false) WITH CHECK (false);

-- Logbook entries: one per training session
CREATE TABLE public.logbook_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  session_date date NOT NULL DEFAULT (now() AT TIME ZONE 'Australia/Perth')::date,
  session_type text NOT NULL,
  machine text,
  hours numeric(5,2),
  notes text,
  competency text,
  status text NOT NULL DEFAULT 'pending',
  sign_token text NOT NULL UNIQUE DEFAULT encode(gen_random_bytes(24), 'hex'),
  token_expires_at timestamptz NOT NULL DEFAULT now() + interval '90 days',
  trainer_id uuid REFERENCES public.trainers(id) ON DELETE SET NULL,
  trainer_name text,
  trainer_signature_path text,
  signed_at timestamptz,
  signed_ip text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT logbook_entries_status_check
    CHECK (status IN ('pending','signed','voided')),
  CONSTRAINT logbook_entries_signed_fields_check
    CHECK (status <> 'signed' OR (trainer_name IS NOT NULL AND signed_at IS NOT NULL))
);

CREATE INDEX logbook_entries_student_id_idx ON public.logbook_entries (student_id, session_date DESC);
CREATE INDEX logbook_entries_status_idx ON public.logbook_entries (status);

GRANT ALL ON public.logbook_entries TO service_role;
ALTER TABLE public.logbook_entries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "No public access to logbook entries"
  ON public.logbook_entries AS RESTRICTIVE FOR ALL
  TO anon, authenticated USING (false) WITH CHECK (false);

-- updated_at maintenance
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_students_updated_at
  BEFORE UPDATE ON public.students
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_trainers_updated_at
  BEFORE UPDATE ON public.trainers
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_logbook_entries_updated_at
  BEFORE UPDATE ON public.logbook_entries
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();