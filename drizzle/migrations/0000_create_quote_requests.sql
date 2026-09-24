CREATE TABLE public.quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
  email text NOT NULL CHECK (char_length(email) BETWEEN 5 AND 254),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 7 AND 30),
  preferred_contact text NOT NULL CHECK (preferred_contact IN ('whatsapp', 'phone', 'email')),
  service text NOT NULL CHECK (char_length(service) BETWEEN 2 AND 120),
  message text NOT NULL DEFAULT '' CHECK (char_length(message) <= 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.quote_requests TO anon, authenticated;
GRANT ALL ON public.quote_requests TO service_role;

ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit quote requests"
ON public.quote_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE INDEX quote_requests_created_at_idx ON public.quote_requests (created_at DESC);