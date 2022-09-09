import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabaseUrl = 'https://ljgeixztpzcldgicupdn.supabase.co';

export const supabase = createClient(supabaseUrl, import.meta.env.VITE_SUPABASE_KEY as string);
