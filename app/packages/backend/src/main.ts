import "reflect-metadata";
import {startGraphQLServer} from './app/api/graphql';
import { emitSchema } from "./app/api/graphql/schema";
import { initConnection } from "./app/db/dataSource";
import { environment } from "./environment/environment";


const generateSchemaAndExit = false

const handleSchemaGeneration = async () => {
  if (environment.EMIT_GQL_SCHEMA || generateSchemaAndExit) {
    console.log("Generating schema...");
    const schemaPath = await emitSchema();
    // TODO:
    //exec(`yarn nx format --files ${schemaPath}`);
    console.log("Schema written to:", schemaPath);
  }
};


const main = async () => {
    await handleSchemaGeneration()
    if(generateSchemaAndExit){
      return
    }
    await initConnection();
    await startGraphQLServer();
}

void main().catch(err=>console.log(err))