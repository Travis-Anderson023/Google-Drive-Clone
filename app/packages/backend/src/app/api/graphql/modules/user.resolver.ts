import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";

import { createJwtToken } from "../../../../utils/jwt";
import { User, UserModel } from "../../../db/entities/user.entity";
import { RequiredRole } from "../../../decorators/requireRole";
import { GoogleDriveCloneContext, RoleEnum } from "../context";

import { CreateUserInput, LoginUserInput } from "./user.input";

@Resolver(User)
export class UserResolver {
  @RequiredRole(RoleEnum.ADMIN)
  @Query(() => [User])
  public async getAllUsers() {
    return UserModel.find().exec();
  }
  // @Query(()=>User)
  // public async findUserById(@Arg('input') input: FindUserByIdInput){
  //   return UserModel.findById(input.id).exec()
  // }
  @RequiredRole(RoleEnum.ADMIN)
  @Query(() => User)
  public async getUser(@Ctx() ctx: GoogleDriveCloneContext) {
    const { user } = ctx;
    if (!user) {
      throw new Error("You are not logged in");
    }
    return await user;
  }

  @Mutation(() => String)
  public async loginUser(@Arg("input") input: LoginUserInput) {
    //TODO hash password
    const user = await UserModel.findOne(input);
    if (!user) {
      return new Error("User not found");
    }
    return createJwtToken({ userId: user._id });
  }

  @Mutation(() => User)
  public async createUser(@Arg("input") input: CreateUserInput) {
    //TODO hash password
    return UserModel.create(input);
  }
}
