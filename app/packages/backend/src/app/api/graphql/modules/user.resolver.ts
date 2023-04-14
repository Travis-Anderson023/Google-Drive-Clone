import { Arg, Mutation, Query, Resolver } from "type-graphql";

import { User, UserModel } from "../../../db/entities/user.entity";

import { CreateUserInput } from "./user.input";

@Resolver(User)
export class UserResolver {
  @Query(() => [User])
  public async getAllUsers() {
    const temp = await UserModel.find().exec();
    return [...(await UserModel.find().exec())];
  }
  // @Query(()=>User)
  // public async findUserById(@Arg('input') input: FindUserByIdInput){
  //   return UserModel.findById(input.id).exec()
  // }

  @Mutation(() => User)
  public async createUser(@Arg("input") input: CreateUserInput) {
    return UserModel.create(input);
  }
}
