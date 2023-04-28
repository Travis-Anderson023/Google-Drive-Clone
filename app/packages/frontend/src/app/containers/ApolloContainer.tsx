import { PropsWithChildren, useMemo } from "react";

import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from "@apollo/client";

import { useApolloLinks } from "../api/gql/links/useApolloLinks";

const cache = new InMemoryCache();
const createApolloClient = (link: ApolloLink) => {
  return new ApolloClient({
    defaultOptions: {
      query: {
        errorPolicy: "all",
      },
      mutate: {
        errorPolicy: "all",
      },
    },
    cache,
    link,
  });
};
const ApolloContainer = ({ children }: PropsWithChildren) => {
  const apolloLinks = useApolloLinks();
  const client = useMemo(() => createApolloClient(apolloLinks), [apolloLinks]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloContainer;
