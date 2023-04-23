import { Field, ID, InputType } from "type-graphql";

import { User } from "../../../db/entities/user.entity";

// @InputType()
// export class FindUserByIdInput implements Partial<User>{
//     @Field(() => ID)
//     id: string
// }

@InputType()
export class CreateUserInput implements Partial<User> {
  @Field(() => String)
  name: string;

  @Field(() => String)
  password?: string;
}

@InputType()
export class LoginUserInput implements Partial<User> {
  @Field(() => String)
  name: string;

  @Field(() => String)
  password?: string;
}
