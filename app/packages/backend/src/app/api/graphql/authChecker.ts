import { AuthChecker } from "type-graphql";

import { GoogleDriveCloneContext, RoleEnum } from "./context";

export const customAuthChecker: AuthChecker<GoogleDriveCloneContext> = ({ context }, roles) => {
  if (!context.user) {
    return false;
  }

  const { role } = context.user;

  if (roles.includes(RoleEnum.ADMIN) && role !== RoleEnum.ADMIN) {
    return false;
  }

  if (roles.includes(RoleEnum.DEV) && role !== RoleEnum.DEV) {
    return false;
  }

  if (roles.includes(RoleEnum.USER) && role !== RoleEnum.USER) {
    return false;
  }

  return true;
};
