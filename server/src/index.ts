import setupCustomLogging from "./config/logger";
import { getEnvironment } from "./utils/env";
setupCustomLogging(getEnvironment() === 'development')
import app from "./app";
import { config } from "./config/config";

function serve() {
  app.listen(config.app.port, () => {
    console.info(`Server is running at port [${config.app.port}]`)
  });
};

serve();