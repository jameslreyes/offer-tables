import setupCustomLogging from "@config/logger.config";
import { requiredEnvVars, getEnvironment, isConfigValid } from "@utils/env.utils";
setupCustomLogging(getEnvironment() === 'development')
import app from "./app";
import { config } from "@config/app.config";

function serve() {
  if (!isConfigValid(requiredEnvVars)) process.exit(1);

  app.listen(config.app.port, () => {
    console.info(`Server is running on port [${config.app.port}]`)
  });
};

serve();