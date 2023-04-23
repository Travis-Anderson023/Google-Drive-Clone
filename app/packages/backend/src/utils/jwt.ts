import { ExpressContextFunctionArgument } from "@apollo/server/express4";
import { environmentConfig } from "@app/shared-utils";
import * as jwt from "jsonwebtoken";

type JwtTokenParams = {
  userId: string;
};

export const createJwtToken = ({ userId }: JwtTokenParams) => {
  return jwt.sign({ userId }, environmentConfig.backend.JWT_PRIVATE_KEY, {
    //TODO
    // algorithm: "RS256",
    expiresIn: "1h",
  });
};

export const extractJwtFromReq = (req: ExpressContextFunctionArgument["req"]) => {
  const authString = req.headers.authorization;
  if (!authString) {
    return undefined;
  }
  return authString.replace("Bearer ", "");
};

export const decodeJwtToken = (token: string): JwtTokenParams | undefined => {
  try {
    return jwt.verify(token, environmentConfig.backend.JWT_PRIVATE_KEY) as JwtTokenParams;
  } catch (e) {
    return undefined;
  }
};
