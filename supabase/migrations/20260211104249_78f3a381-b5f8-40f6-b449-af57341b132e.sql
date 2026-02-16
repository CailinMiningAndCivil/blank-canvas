
-- Create storage bucket for RPL document uploads
INSERT INTO storage.buckets (id, name, public) VALUES ('rpl-documents', 'rpl-documents', false);

-- Allow anonymous uploads (since users aren't authenticated)
CREATE POLICY "Anyone can upload RPL documents"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'rpl-documents');

-- Allow service role to read documents (for admin access)
CREATE POLICY "Service role can read RPL documents"
ON storage.objects
FOR SELECT
USING (bucket_id = 'rpl-documents');
