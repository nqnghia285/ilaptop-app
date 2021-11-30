import * as TypeGraphQL from "type-graphql";

export enum PassageScalarFieldEnum {
  id = "id",
  header = "header",
  content = "content",
  postId = "postId"
}
TypeGraphQL.registerEnumType(PassageScalarFieldEnum, {
  name: "PassageScalarFieldEnum",
  description: undefined,
});
