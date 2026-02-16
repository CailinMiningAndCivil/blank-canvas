
-- Create a function that calls the notify-submission edge function via pg_net
CREATE OR REPLACE FUNCTION public.notify_new_submission()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  payload jsonb;
  edge_function_url text;
  service_role_key text;
BEGIN
  payload := jsonb_build_object(
    'record', jsonb_build_object(
      'id', NEW.id,
      'name', NEW.name,
      'email', NEW.email,
      'phone', NEW.phone,
      'message', NEW.message,
      'created_at', NEW.created_at
    )
  );

  edge_function_url := 'https://bdzqcibwljdtfhvfhrol.supabase.co/functions/v1/notify-submission';
  
  SELECT decrypted_secret INTO service_role_key
  FROM vault.decrypted_secrets
  WHERE name = 'SUPABASE_SERVICE_ROLE_KEY'
  LIMIT 1;

  PERFORM net.http_post(
    url := edge_function_url,
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || service_role_key
    ),
    body := payload
  );

  RETURN NEW;
END;
$$;

-- Create trigger on contact_submissions
CREATE TRIGGER on_new_contact_submission
  AFTER INSERT ON public.contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_new_submission();
