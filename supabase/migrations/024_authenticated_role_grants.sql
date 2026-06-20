-- Ensure authenticated Supabase clients have table privileges for RLS-protected tables.
-- The RLS policies already restrict row access; these grants allow auth-enabled
-- connections to evaluate those policies instead of failing with 42501.

GRANT SELECT, INSERT, UPDATE, DELETE ON public.profiles TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.contacts TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.tags TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.contact_tags TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.custom_fields TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.contact_custom_values TO authenticated;
