import { Environment } from '@/types/app';
import dotenv from 'dotenv';
dotenv.config();

const baseRequiredEnv = [
  'PORT',
  'NODE_ENV',
];

const requiredEnvVars = [
  ...baseRequiredEnv,
];

function getEnvVar(envVar: string): string {
  return process.env[envVar] || '';
};

function getEnvironment(): Environment {
  return getEnvVar('NODE_ENV') as Environment;
};

function isConfigValid(requiredEnvVars: string[]): boolean {
  const missingEnvVars = requiredEnvVars.filter((envVar => !getEnvVar(envVar)));

  if (missingEnvVars.length > 0) {
    console.error(`Missing required config environment variables:\n${missingEnvVars.join("\n")}`);
    return false;
  };

  console.success(`Successfully validated config environment variables`);
  return true;
};

export {
  requiredEnvVars,
  getEnvVar,
  getEnvironment,
  isConfigValid
};