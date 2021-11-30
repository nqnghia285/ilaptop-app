import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyLaptopInputEnvelope } from "../inputs/CommentCreateManyLaptopInputEnvelope";
import { CommentCreateOrConnectWithoutLaptopInput } from "../inputs/CommentCreateOrConnectWithoutLaptopInput";
import { CommentCreateWithoutLaptopInput } from "../inputs/CommentCreateWithoutLaptopInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutLaptopInput } from "../inputs/CommentUpdateManyWithWhereWithoutLaptopInput";
import { CommentUpdateWithWhereUniqueWithoutLaptopInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutLaptopInput";
import { CommentUpsertWithWhereUniqueWithoutLaptopInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutLaptopInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateManyWithoutLaptopInput", {
  isAbstract: true
})
export class CommentUpdateManyWithoutLaptopInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutLaptopInput], {
    nullable: true
  })
  create?: CommentCreateWithoutLaptopInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutLaptopInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutLaptopInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutLaptopInput], {
    nullable: true
  })
  upsert?: CommentUpsertWithWhereUniqueWithoutLaptopInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyLaptopInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyLaptopInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutLaptopInput], {
    nullable: true
  })
  update?: CommentUpdateWithWhereUniqueWithoutLaptopInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutLaptopInput], {
    nullable: true
  })
  updateMany?: CommentUpdateManyWithWhereWithoutLaptopInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentScalarWhereInput[] | undefined;
}
