import { Query, Resolver } from "type-graphql";
import { Book } from "../../../db/entities/book.entity";

@Resolver(Book)
export class BookResolver {
    @Query(()=>[Book])
    public async getAllBooks(){
        return [{id:'fd12s3a',title:'John',author:'Smith'}]
    }
}