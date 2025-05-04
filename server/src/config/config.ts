import { AppConfig } from "@_types/app";
import { getEnvironment, getEnvVar } from "@utils/env";

export const config: AppConfig = {
  app: {
    port: parseInt(getEnvVar('PORT')),
    env: getEnvironment()
  }
};