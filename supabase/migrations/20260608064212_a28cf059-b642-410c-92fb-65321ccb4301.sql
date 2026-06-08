CREATE POLICY "No public read on haul truck applications" ON public.haul_truck_applications AS RESTRICTIVE FOR SELECT TO anon, authenticated USING (false);
CREATE POLICY "No public update on haul truck applications" ON public.haul_truck_applications AS RESTRICTIVE FOR UPDATE TO anon, authenticated USING (false);
CREATE POLICY "No public delete on haul truck applications" ON public.haul_truck_applications AS RESTRICTIVE FOR DELETE TO anon, authenticated USING (false);
CREATE POLICY "No public read on haul truck evidence" ON storage.objects FOR SELECT TO anon, authenticated USING (bucket_id = 'haul-truck-applications' AND false);
CREATE POLICY "No public update on haul truck evidence" ON storage.objects FOR UPDATE TO anon, authenticated USING (bucket_id = 'haul-truck-applications' AND false);
CREATE POLICY "No public delete on haul truck evidence" ON storage.objects FOR DELETE TO anon, authenticated USING (bucket_id = 'haul-truck-applications' AND false);