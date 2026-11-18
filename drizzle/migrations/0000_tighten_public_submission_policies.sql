DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.contact_submissions;
CREATE POLICY "Anyone can submit contact form" ON public.contact_submissions FOR INSERT TO anon, authenticated
WITH CHECK (length(name) BETWEEN 1 AND 200 AND length(email) BETWEEN 3 AND 255 AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' AND (phone IS NULL OR length(phone) <= 40) AND (message IS NULL OR length(message) <= 10000) AND read = false);

DROP POLICY IF EXISTS "Anyone can submit discovery call form" ON public.discovery_call_submissions;
CREATE POLICY "Anyone can submit discovery call form" ON public.discovery_call_submissions FOR INSERT TO anon, authenticated
WITH CHECK (length(full_name) BETWEEN 1 AND 200 AND length(email) BETWEEN 3 AND 255 AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' AND length(phone) BETWEEN 1 AND 40);

DROP POLICY IF EXISTS "Anyone can submit refresher training request" ON public.refresher_training_requests;
CREATE POLICY "Anyone can submit refresher training request" ON public.refresher_training_requests FOR INSERT TO anon, authenticated
WITH CHECK (length(full_name) BETWEEN 1 AND 200 AND length(email) BETWEEN 3 AND 255 AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' AND length(phone) BETWEEN 1 AND 40 AND length(machine) BETWEEN 1 AND 200 AND (notes IS NULL OR length(notes) <= 5000) AND acknowledged = false);

DROP POLICY IF EXISTS "Anyone can submit returning student form" ON public.returning_student_submissions;
CREATE POLICY "Anyone can submit returning student form" ON public.returning_student_submissions FOR INSERT TO anon, authenticated
WITH CHECK (length(full_name) BETWEEN 1 AND 200 AND length(email) BETWEEN 3 AND 255 AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' AND (selected_machine IS NULL OR length(selected_machine) <= 200));

DROP POLICY IF EXISTS "Anyone can submit an application" ON public.haul_truck_applications;
CREATE POLICY "Anyone can submit an application" ON public.haul_truck_applications FOR INSERT TO anon, authenticated
WITH CHECK (length(full_name) BETWEEN 1 AND 200 AND length(email) BETWEEN 3 AND 255 AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' AND length(phone) BETWEEN 1 AND 40 AND (experience_details IS NULL OR length(experience_details) <= 10000) AND (machines_operated IS NULL OR length(machines_operated) <= 2000) AND (previous_employer IS NULL OR length(previous_employer) <= 500) AND (postcode IS NULL OR length(postcode) <= 20) AND (source IS NULL OR length(source) <= 100) AND (evidence_file_path IS NULL OR evidence_file_path LIKE 'evidence/%') AND (hr_licence_file_path IS NULL OR hr_licence_file_path LIKE 'hr-licence/%'));

DROP POLICY IF EXISTS "No public delete on haul truck evidence" ON storage.objects;
DROP POLICY IF EXISTS "No public update on haul truck evidence" ON storage.objects;
DROP POLICY IF EXISTS "No public read on haul truck evidence" ON storage.objects;
DROP POLICY IF EXISTS "Restricted uploads to haul-truck-applications" ON storage.objects;
CREATE POLICY "Restricted uploads to haul-truck-applications" ON storage.objects FOR INSERT TO anon, authenticated
WITH CHECK (bucket_id = 'haul-truck-applications' AND (storage.foldername(name))[1] IN ('evidence','hr-licence') AND array_length(storage.foldername(name),1) = 1 AND lower(storage.extension(name)) = ANY (ARRAY['pdf','doc','docx','jpg','jpeg','png']));