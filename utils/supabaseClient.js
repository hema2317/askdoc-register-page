import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nlfvwbjpeywcessqyqac.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sZnZ3YmpwZXl3Y2Vzc3F5cWFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4NTczNjQsImV4cCI6MjA2MTQzMzM2NH0.zL84P7bK7qHxJt8MtkTPkqNe4U_K512ZgtpPvD9PoRI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
