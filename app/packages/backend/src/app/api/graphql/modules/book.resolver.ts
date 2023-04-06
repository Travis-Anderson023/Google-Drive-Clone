import { Query, Resolver } from "type-graphql";
import { Book } from "../../../db/entities/book.entity";


@Resolver(Book)
export class BookResolver {

  /**
    * Just randomly generates a book
  **/
    private get book(){
      const book = new Book();
      book.author = "smith"
      book.title = "john"
      book.id = 'fd12s3a'
      return book
    }

    @Query(()=>[Book])
    public async getAllBooks(){
        return [this.book,this.book,this.book,this.book]
    }
}