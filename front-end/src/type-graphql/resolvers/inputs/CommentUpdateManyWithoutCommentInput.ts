import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyCommentInputEnvelope } from "../inputs/CommentCreateManyCommentInputEnvelope";
import { CommentCreateOrConnectWithoutCommentInput } from "../inputs/CommentCreateOrConnectWithoutCommentInput";
import { CommentCreateWithoutCommentInput } from "../inputs/CommentCreateWithoutCommentInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutCommentInput } from "../inputs/CommentUpdateManyWithWhereWithoutCommentInput";
import { CommentUpdateWithWhereUniqueWithoutCommentInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutCommentInput";
import { CommentUpsertWithWhereUniqueWithoutCommentInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutCommentInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateManyWithoutCommentInput", {
  isAbstract: true
})
export class CommentUpdateManyWithoutCommentInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutCommentInput], {
    nullable: true
  })
  create?: CommentCreateWithoutCommentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutCommentInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutCommentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutCommentInput], {
    nullable: true
  })
  upsert?: CommentUpsertWithWhereUniqueWithoutCommentInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyCommentInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyCommentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  set?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  delete?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutCommentInput], {
    nullable: true
  })
  update?: CommentUpdateWithWhereUniqueWithoutCommentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutCommentInput], {
    nullable: true
  })
  updateMany?: CommentUpdateManyWithWhereWithoutCommentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentScalarWhereInput[] | undefined;
}
