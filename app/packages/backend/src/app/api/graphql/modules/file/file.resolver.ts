import { FileUpload, GraphQLUpload } from "graphql-upload";
// import { GraphQLUpload } from "graphql-upload/GraphQLUpload";
// import { FileUpload } from "graphql-upload/FileUpload";
import { Arg, Mutation, Resolver } from "type-graphql";

@Resolver()
export class FileResolver {
  @Mutation(() => Boolean)
  async singleFileUpload(@Arg("file", () => GraphQLUpload) fileUpload: FileUpload) {
    const { createReadStream, filename } = fileUpload;
    //TODO: TRAVIS's JOB!

    console.log(filename);

    return false;
  }
}
