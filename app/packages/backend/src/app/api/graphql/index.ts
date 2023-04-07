import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildGoogleDriveCloneSchema } from './schema';
import {environment} from "../../../environment/environment";


export const startGraphQLServer = async () => {
  const schema = await buildGoogleDriveCloneSchema({ attachContainer: true })
  const server = new ApolloServer({schema})
  const { url } = await startStandaloneServer(server, { listen: { port: environment.PORT } })
  console.log(`Server ready at ${url}`)
}

