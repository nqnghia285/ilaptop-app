import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutCommentInput } from "../inputs/CommentCreateWithoutCommentInput";
import { CommentUpdateWithoutCommentInput } from "../inputs/CommentUpdateWithoutCommentInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpsertWithWhereUniqueWithoutCommentInput", {
  isAbstract: true
})
export class CommentUpsertWithWhereUniqueWithoutCommentInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutCommentInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutCommentInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutCommentInput, {
    nullable: false
  })
  create!: CommentCreateWithoutCommentInput;
}
