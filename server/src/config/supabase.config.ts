import { createClient } from "@supabase/supabase-js";
import { config } from "./app.config";

const supabaseClient = createClient(config.supabase.url, config.supabase.serviceRoleKey);
export default supabaseClient;