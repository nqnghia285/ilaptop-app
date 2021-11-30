import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PassageCreateManyPostInputEnvelope } from "../inputs/PassageCreateManyPostInputEnvelope";
import { PassageCreateOrConnectWithoutPostInput } from "../inputs/PassageCreateOrConnectWithoutPostInput";
import { PassageCreateWithoutPostInput } from "../inputs/PassageCreateWithoutPostInput";
import { PassageScalarWhereInput } from "../inputs/PassageScalarWhereInput";
import { PassageUpdateManyWithWhereWithoutPostInput } from "../inputs/PassageUpdateManyWithWhereWithoutPostInput";
import { PassageUpdateWithWhereUniqueWithoutPostInput } from "../inputs/PassageUpdateWithWhereUniqueWithoutPostInput";
import { PassageUpsertWithWhereUniqueWithoutPostInput } from "../inputs/PassageUpsertWithWhereUniqueWithoutPostInput";
import { PassageWhereUniqueInput } from "../inputs/PassageWhereUniqueInput";

@TypeGraphQL.InputType("PassageUpdateManyWithoutPostInput", {
  isAbstract: true
})
export class PassageUpdateManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [PassageCreateWithoutPostInput], {
    nullable: true
  })
  create?: PassageCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PassageCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: PassageCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PassageUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  upsert?: PassageUpsertWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => PassageCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: PassageCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PassageWhereUniqueInput], {
    nullable: true
  })
  connect?: PassageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PassageWhereUniqueInput], {
    nullable: true
  })
  set?: PassageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PassageWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PassageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PassageWhereUniqueInput], {
    nullable: true
  })
  delete?: PassageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PassageUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  update?: PassageUpdateWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PassageUpdateManyWithWhereWithoutPostInput], {
    nullable: true
  })
  updateMany?: PassageUpdateManyWithWhereWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PassageScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PassageScalarWhereInput[] | undefined;
}
