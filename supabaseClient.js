// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://ydqgiddszcpuwmokvxdw.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkcWdpZGRzemNwdXdtb2t2eGR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NTgwNzQsImV4cCI6MjA2MjAzNDA3NH0.bdBVI8NsRkOhFmLzCLJxF-iiDD5CM4H6vQkIjxsl2u0'
)