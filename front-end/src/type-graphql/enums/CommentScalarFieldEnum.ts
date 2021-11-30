import * as TypeGraphQL from "type-graphql";

export enum CommentScalarFieldEnum {
  id = "id",
  rank = "rank",
  content = "content",
  authorId = "authorId",
  isStaff = "isStaff",
  laptopId = "laptopId",
  commentId = "commentId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(CommentScalarFieldEnum, {
  name: "CommentScalarFieldEnum",
  description: undefined,
});
