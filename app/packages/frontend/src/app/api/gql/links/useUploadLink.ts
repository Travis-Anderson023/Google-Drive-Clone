import { useMemo } from "react";

import { environmentConfig } from "@app/shared-utils";
import { createUploadLink } from "apollo-upload-client";

import { ApolloLinkConfigVar } from "../../../reactiveVar/apolloLinkConfigVar";

//Todo: Batch query
//Todo set up persistedQueryLink on the backend As it is set up preemptively here
export const useUploadLink = (token: ApolloLinkConfigVar["token"]) => {
  return useMemo(() => {
    return createUploadLink({
      uri: environmentConfig.backend.BACKEND_ENDPOINT as string,
      preserveHeaderCase: true,
      headers: {
        Authorization: `Bearer ${token ? token : ""}`,
        "Apollo-Require-Preflight": "true",
      },
    });
  }, [token]);
};
