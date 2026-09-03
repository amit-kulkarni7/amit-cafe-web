import { createClient, SupabaseClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client for administrative database operations.
 * Uses SUPABASE_SECRET_KEY to bypass Row Level Security server-side.
 * 
 * NEVER import this file into client components or expose keys to the browser.
 */
export function getSupabaseServerClient(): SupabaseClient | null {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl || !supabaseSecretKey) {
    return null;
  }

  return createClient(supabaseUrl, supabaseSecretKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });
}
