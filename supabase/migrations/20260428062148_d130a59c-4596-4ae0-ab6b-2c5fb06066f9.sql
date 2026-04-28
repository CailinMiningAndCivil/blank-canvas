CREATE TABLE public.returning_student_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  matched BOOLEAN NOT NULL DEFAULT false,
  selected_machine TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.returning_student_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit returning student form"
ON public.returning_student_submissions
FOR INSERT
TO public
WITH CHECK (true);