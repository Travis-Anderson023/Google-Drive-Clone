import { makeVar, useReactiveVar } from "@apollo/client";

export type ApolloLinkConfigVar = {
  token?: string;
};

const apolloLinkConfigVar = makeVar<ApolloLinkConfigVar>({
  token: localStorage.getItem("token")! ?? undefined,
});

export const useApolloLinkConfig = () => {
  const apolloLinkConfig = useReactiveVar(apolloLinkConfigVar);
  return [apolloLinkConfig, apolloLinkConfigVar] as const;
};
