import { useMemo } from "react";

import { from, HttpLink } from "@apollo/client";
import { createPersistedQueryLink } from "@apollo/client/link/persisted-queries";
import { environmentConfig } from "@app/shared-utils";
import { sha256 } from "crypto-hash";

import { ApolloLinkConfigVar } from "../../../reactiveVar/apolloLinkConfigVar";

const persistedQueryLink = createPersistedQueryLink({ sha256 });

//Todo: Batch query
//Todo set up persistedQueryLink on the backend As it is set up preemptively here
export const useAuthenticatedHttpLink = (token: ApolloLinkConfigVar["token"]) => {
  return useMemo(() => {
    return from([
      persistedQueryLink,
      new HttpLink({
        uri: environmentConfig.backend.BACKEND_ENDPOINT as string,
        preserveHeaderCase: true,
        headers: {
          Authorization: `Bearer ${token ? token : ""}`,
        },
      }),
    ]);
  }, [token]);
};
