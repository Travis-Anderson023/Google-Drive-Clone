import { printSchemaWithDirectives } from "@graphql-tools/utils";
import { lexicographicSortSchema } from "graphql";
import { NonEmptyArray, ResolverData, buildSchema } from "type-graphql";

import { registerEnums } from "./enums/enums";
import * as ResolversObj from "./modules";
//import { outputFile } from "type-graphql/dist/helpers/filesystem";

const Resolvers = Object.values(ResolversObj);

const containerResolver = ({ context }: ResolverData<any>) => context.conatiner;

type BuildSchemaOptions = {
  attachContainer?: boolean;
};

export const buildGoogleDriveCloneSchema = async (options?: BuildSchemaOptions) => {
  const attachContainer = options?.attachContainer ?? false;
  registerEnums();

  return await buildSchema({
    resolvers: Resolvers as NonEmptyArray<(typeof Resolvers)[0]>,
    dateScalarMode: "isoDate",
    container: attachContainer ? containerResolver : undefined,
    validate: { forbidUnknownValues: false },
  });
};

export const emitSchema = async (
  outputPath = "./packages/backend/src/app/api/graphql/generated/schema.graphql",
) => {
  const schema = await buildGoogleDriveCloneSchema();
  const schemaFileContent = printSchemaWithDirectives(lexicographicSortSchema(schema));
  // await outputFile(outputPath, schemaFileContent)
  return outputPath;
};
