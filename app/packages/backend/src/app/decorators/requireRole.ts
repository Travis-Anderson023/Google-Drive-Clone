import { Authorized } from "type-graphql";
import { MethodAndPropDecorator } from "type-graphql/dist/decorators/types";

import { RoleEnum } from "../api/graphql/context";

export const RequiredRole = Authorized as (role: RoleEnum) => MethodAndPropDecorator;
