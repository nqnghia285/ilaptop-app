import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateWithoutCommentInput } from "../inputs/CommentUpdateWithoutCommentInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateWithWhereUniqueWithoutCommentInput", {
  isAbstract: true
})
export class CommentUpdateWithWhereUniqueWithoutCommentInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutCommentInput, {
    nullable: false
  })
  data!: CommentUpdateWithoutCommentInput;
}
