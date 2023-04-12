import { ID, Field, ObjectType } from "type-graphql"
import {getModelForClass, prop} from "@typegoose/typegoose"
import { File } from "./file.entity"

const nullable = true
@ObjectType()
export class User {
    @Field(()=>ID)
    @prop({type:()=>String})
    id:string

    @Field(()=>String)
    @prop({type:()=>String})
    name:string

    @Field(()=>String)
    @prop({type:()=>String})
    password:string

    @Field(()=>File,{nullable})
    @prop({type:()=>File})
    file:File
}

export const UserModel = getModelForClass(User)