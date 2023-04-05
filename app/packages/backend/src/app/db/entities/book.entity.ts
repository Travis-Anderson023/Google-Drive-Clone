import { ID, Field, ObjectType } from "type-graphql"

@ObjectType()
export class Book{
    @Field(()=>ID)
    id:string
    @Field(()=>String)
    author:string
    @Field(()=>String)
    title:string
}