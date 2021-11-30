import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyCommentInput } from "../inputs/CommentCreateManyCommentInput";

@TypeGraphQL.InputType("CommentCreateManyCommentInputEnvelope", {
  isAbstract: true
})
export class CommentCreateManyCommentInputEnvelope {
  @TypeGraphQL.Field(_type => [CommentCreateManyCommentInput], {
    nullable: false
  })
  data!: CommentCreateManyCommentInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
