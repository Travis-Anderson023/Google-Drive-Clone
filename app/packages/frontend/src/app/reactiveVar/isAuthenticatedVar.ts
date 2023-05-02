import { makeVar, useReactiveVar } from "@apollo/client";

export const isAuthenticatedVar = makeVar<boolean>(false);

export const useIsAuthenticated = () => useReactiveVar(isAuthenticatedVar);
