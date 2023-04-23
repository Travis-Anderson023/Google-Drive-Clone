import * as env from "env-var";

import { backendConfig } from "./backend.config";
import frontendConfig from "./frontend.config";

const environmentConfig = {
  backend: backendConfig,
  frontend: frontendConfig,
} as const;

export default environmentConfig;
