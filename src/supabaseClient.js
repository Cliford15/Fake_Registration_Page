import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ylgxowebdmgaxiklphlc.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsZ3hvd2ViZG1nYXhpa2xwaGxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzOTE4MDksImV4cCI6MjA4ODk2NzgwOX0.5Zfy8F2WdE1S6Pt7lktKN0AiQH2GmtwbY7OOHCCnBz8"

export const supabase = createClient(supabaseUrl, supabaseKey)