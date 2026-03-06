-- Allow updating lead status from admin page
CREATE POLICY "Anyone can update leads" ON public.leads
  FOR UPDATE TO anon, authenticated
  USING (true)
  WITH CHECK (true);