import { Environment } from '@/types/app';
import dotenv from 'dotenv';
dotenv.config();

export function getEnvVar(envVar: string): string {
  return process.env[envVar] || '';
};

export function getEnvironment(): Environment {
  return getEnvVar('NODE_ENV') as Environment;
};