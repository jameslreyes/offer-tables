export type Environment = 'development' | 'staging' | 'production'

export interface AppConfig {
  app: {
    port: number;
    env: Environment;
  },

  supabase: {
    url: string;
    serviceRoleKey: string;
  }
}