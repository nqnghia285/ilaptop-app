import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyCommentInputEnvelope } from "../inputs/CommentCreateManyCommentInputEnvelope";
import { CommentCreateOrConnectWithoutCommentInput } from "../inputs/CommentCreateOrConnectWithoutCommentInput";
import { CommentCreateWithoutCommentInput } from "../inputs/CommentCreateWithoutCommentInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateNestedManyWithoutCommentInput", {
  isAbstract: true
})
export class CommentCreateNestedManyWithoutCommentInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutCommentInput], {
    nullable: true
  })
  create?: CommentCreateWithoutCommentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutCommentInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutCommentInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyCommentInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyCommentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;
}
