import * as env from 'env-var';
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildGoogleDriveCloneSchema } from './schema';

const PORT = env.get('PORT').default(5555).asPortNumber();

export const startGraphQLServer = async () => {
  const schema = await buildGoogleDriveCloneSchema({ attachContainer: true })
  const server = new ApolloServer({schema})
  const { url } = await startStandaloneServer(server, { listen: { port: PORT } })
  console.log(`Server ready at ${url}`)
}

