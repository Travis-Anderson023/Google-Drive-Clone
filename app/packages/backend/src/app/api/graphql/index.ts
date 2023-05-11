import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// eslint-disable-next-line import/no-unresolved
import { environmentConfig } from "@app/shared-utils";

import createContextBuilder from "./context";
import { buildGoogleDriveCloneSchema } from "./schema";

export const startGraphQLServer = async () => {
  const schema = await buildGoogleDriveCloneSchema({ attachContainer: true });
  const server = new ApolloServer({
    gateway: undefined,
    typeDefs: undefined,
    schema,
    csrfPrevention: true,
    // cors: {
    //   origin: ["*"],
    // },
  });
  const { url } = await startStandaloneServer(server, {
    listen: { port: environmentConfig.backend.PORT },
    context: createContextBuilder,
  });
  //eslint-disable-next-line no-console
  console.log(`Server ready at ${url}`);
};
