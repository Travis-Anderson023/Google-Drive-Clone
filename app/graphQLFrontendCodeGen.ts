import type { CodegenConfig } from "@graphql-codegen/cli";
import * as env from "env-var";

const config: CodegenConfig = {
  overwrite: true,
  watch: true,
  schema: env.get("BACKEND_ENDPOINT").default("http://localhost:5555").asString(),
  documents: "packages/frontend/src/app/api/**/*.graphql",
  generates: {
    "./packages/frontend/src/app/api/gql/generated/schema.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-apollo-client-helpers",
        "typescript-react-apollo",
        "named-operations-object",
      ],
    },
  },
};

export default config;