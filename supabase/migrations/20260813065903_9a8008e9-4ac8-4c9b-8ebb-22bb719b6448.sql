ALTER TABLE public.students
  ADD COLUMN IF NOT EXISTS logbook_token text NOT NULL DEFAULT encode(extensions.gen_random_bytes(24), 'hex');

CREATE UNIQUE INDEX IF NOT EXISTS students_logbook_token_key ON public.students (logbook_token);

CREATE TABLE IF NOT EXISTS public.student_logbook_errors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid REFERENCES public.students(id) ON DELETE CASCADE,
  ghl_contact_id text,
  error text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT ALL ON public.student_logbook_errors TO service_role;

ALTER TABLE public.student_logbook_errors ENABLE ROW LEVEL SECURITY;

CREATE POLICY "No public access to student logbook errors"
  ON public.student_logbook_errors
  AS RESTRICTIVE
  FOR ALL
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);