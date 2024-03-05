import { createClient } from "@refinedev/supabase";

const SUPABASE_URL = "https://ltbyrwuddlyjvqeydggf.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0Ynlyd3VkZGx5anZxZXlkZ2dmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0MjEzOTksImV4cCI6MjAyNDk5NzM5OX0.si8K_K1SGHzumM5bqk7_G565BrKv5TXE1gGgQAwT4VM";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: "public", // this can be overridden by passing `meta.schema` to data hooks.
  },
  auth: {
    persistSession: true,
  },
});
