import { HttpLink } from "@apollo/client";
import { environmentConfig } from "@app/shared-utils";

export const unAuthenticatedLink = new HttpLink({ uri: environmentConfig.backend.BACKEND_ENDPOINT });
