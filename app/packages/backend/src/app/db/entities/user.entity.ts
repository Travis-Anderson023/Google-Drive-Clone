import { getModelForClass, prop } from "@typegoose/typegoose";
import { ID, Field, ObjectType } from "type-graphql";

@ObjectType()
export class User {
  @Field(() => ID)
  // @prop({type:()=>String})
  _id: string;

  @Field(() => String)
  @prop({ required: true, index: { unique: true }, type: () => String })
  name: string;

  @Field(() => String)
  @prop({ type: () => String, required: true })
  password: string;

  @Field(() => String, { nullable: true })
  @prop({ type: () => String })
  role: string;
}

export const UserModel = getModelForClass(User);
