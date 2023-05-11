import { useMemo } from "react";

import { from } from "@apollo/client";

import { useApolloLinkConfig } from "../../../reactiveVar/apolloLinkConfigVar";

import { unAuthenticatedLink } from "./unAuthenticatedLink";
// import { useAuthenticatedHttpLink } from "./useAuthenticatedLink";
import { useUploadLink } from "./useUploadLink";

export const useApolloLinks = () => {
  const [{ token }] = useApolloLinkConfig();
  // const authLink = useAuthenticatedHttpLink(token);
  const uploadAuthTerminatingLink = useUploadLink(token);

  return useMemo(() => {
    const terminatingLink = token ? uploadAuthTerminatingLink : unAuthenticatedLink;
    //TODO: fix this shiz
    //@ts-expect-error
    return from([terminatingLink]);
  }, [token, uploadAuthTerminatingLink]);
};
