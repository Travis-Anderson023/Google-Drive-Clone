import { PropsWithChildren } from "react";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  uri: "http://localhost:5555",
});
const ApolloContainer = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloContainer;
