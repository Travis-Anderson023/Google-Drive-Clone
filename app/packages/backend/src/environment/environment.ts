import * as env from "env-var";

export const environment = {
  EMIT_GQL_SCHEMA: env.get("EMIT_GQL_SCHEMA").default("false").asBool(),
  PORT: env.get('PORT').default(5555).asPortNumber(),
  MONGOOSE_URL: env.get('MONGOOSE_URL').asUrlString(),
  DB_NAME: env.get('MONGOOSE_DB_NAME').default('APP_DB').asString(),
}