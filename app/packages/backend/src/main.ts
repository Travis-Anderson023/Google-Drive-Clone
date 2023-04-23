import "reflect-metadata";
import { environmentConfig } from "@app/shared-utils";

import { startGraphQLServer } from "./app/api/graphql";
import { emitSchema } from "./app/api/graphql/schema";
import { initConnection } from "./app/db/dataSource";

const generateSchemaAndExit = false;

const handleSchemaGeneration = async () => {
  if (environmentConfig.backend.EMIT_GQL_SCHEMA || generateSchemaAndExit) {
    //eslint-disable-next-line no-console
    //console.log("Generating schema...");
    const schemaPath = await emitSchema();
    // TODO:
    //exec(`yarn nx format --files ${schemaPath}`);

    //console.log("Schema written to:", schemaPath);
  }
};

const main = async () => {
  await handleSchemaGeneration();
  if (generateSchemaAndExit) {
    return;
  }
  await initConnection();
  await startGraphQLServer();
};

// eslint-disable-next-line no-console
void main();
