import { useMemo } from "react";

import { from } from "@apollo/client";

import { useApolloLinkConfig } from "../../../reactiveVar/apolloLinkConfigVar";

import { unAuthenticatedLink } from "./unAuthenticatedLink";
import { useAuthenticatedHttpLink } from "./useAuthenticatedLink";

export const useApolloLinks = () => {
  const [{ token }] = useApolloLinkConfig();
  const authLink = useAuthenticatedHttpLink(token);

  return useMemo(() => {
    const terminatingLink = token ? authLink : unAuthenticatedLink;
    return from([terminatingLink]);
  }, [authLink, token]);
};
