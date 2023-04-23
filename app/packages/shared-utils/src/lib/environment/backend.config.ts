import * as env from "env-var";
export const backendConfig = {
  EMIT_GQL_SCHEMA: env.get("EMIT_GQL_SCHEMA").default("false").asBool(),
  PORT: env.get("PORT").default(5555).asPortNumber(),
  MONGOOSE_URL: env.get("MONGOOSE_URL").asUrlString(),
  DB_NAME: env.get("MONGOOSE_DB_NAME").default("APP_DB").asString(),
  JWT_PRIVATE_KEY: env.get("JWT_PRIVATE_KEY").default("sshh").asString(),
} as const;