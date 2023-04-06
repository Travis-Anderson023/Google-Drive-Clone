import { Field, ID, InputType } from "type-graphql";
import { User } from "../../../db/entities/user.entity";

@InputType()
export class FindUserByIdInput {
    @Field(()=>ID)
    id:string
}

@InputType()
export class CreateUserInput implements Partial<User> {
    @Field(()=>String)
    name:string
    
    @Field(()=>String)
    password?: string;
}