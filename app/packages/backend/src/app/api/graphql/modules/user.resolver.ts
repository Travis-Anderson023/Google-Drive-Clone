import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User, UserModel } from "../../../db/entities/user.entity";
import { CreateUserInput, FindUserByIdInput } from "./user.input";


@Resolver(User)
export class UserResolver {

    // @Query(()=>[User])
    // public async getAllUsers(){
    //     return [this.user,this.user,this.user,this.user]
    // }
    @Query(()=>User)
    public async findUserById(@Arg('input') input: FindUserByIdInput){
      return UserModel.findById(input.id).exec()
    }
    
    @Mutation(()=>User)
    public async createUser(@Arg('input') input:CreateUserInput){
      const user = await UserModel.create(input)
      return {...user, id:user._id}
    }
}