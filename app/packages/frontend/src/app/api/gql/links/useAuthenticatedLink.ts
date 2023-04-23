import { useMemo } from "react";

import { from, HttpLink } from "@apollo/client";
import { createPersistedQueryLink } from "@apollo/client/link/persisted-queries";
import { sha256 } from "crypto-hash";


const persistedQueryLink = createPersistedQueryLink({ sha256 });

//Todo: Batch query
//Todo set up persistedQueryLink on the backend As it is set up preemptively here
export const useAuthenticatedHttpLink = () => {
  return useMemo(() => {
    return from([
      persistedQueryLink,
      new HttpLink({
        uri: environment.BACKEND_ENDPOINT + "/api",
        preserveHeaderCase: true,
        headers: {
          Authorization: `Bearer ${token ? token : ""}`,
        },
      }),
      ]);
    }, [token]);
};
