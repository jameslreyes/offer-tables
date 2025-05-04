import { AppConfig } from "@_types/app";
import { getEnvironment, getEnvVar } from "@utils/env";

export const config: AppConfig = {
  app: {
    port: parseInt(getEnvVar('PORT')),
    env: getEnvironment()
  },

  supabase: {
    url: getEnvVar('SUPABASE_URL'),
    serviceRoleKey: getEnvVar('SUPABASE_SERVICE_ROLE_KEY')
  },
};