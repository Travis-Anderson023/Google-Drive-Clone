import { ID, Field, ObjectType } from "type-graphql"
import {getModelForClass, prop} from "@typegoose/typegoose"


@ObjectType()
export class File{
    @Field(()=>ID)
    @prop({type:()=>String})
    id:string
    @Field(()=>String)
    @prop({type:()=>String})
    name:string
}

export const FileModel = getModelForClass(File)