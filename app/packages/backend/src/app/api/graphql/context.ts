import { ExpressContextFunctionArgument } from "@apollo/server/express4";

import { decodeJwtToken, extractJwtFromReq } from "../../../utils/jwt";
import { UserModel, User } from "../../db/entities/user.entity";

export enum RoleEnum {
  USER = "USER",
  DEV = "DEV",
  ADMIN = "ADMIN",
}

export type GoogleDriveCloneContext = {
  user: User | undefined;
};

const createContextBuilder = async ({
  req,
  res,
}: ExpressContextFunctionArgument): Promise<GoogleDriveCloneContext> => {
  const jwtToken = extractJwtFromReq(req);

  if (!jwtToken) {
    return {
      user: undefined,
    };
  }

  const decodedToken = decodeJwtToken(jwtToken);
  if (!decodedToken) {
    return {
      user: undefined,
    };
  }
  const user = await UserModel.findById(decodedToken.userId)
    .exec()
    .catch((e) => {
      console.log(e);
      return undefined;
    });

  return {
    //@ts-expect-error
    user,
  };
};

export default createContextBuilder;
