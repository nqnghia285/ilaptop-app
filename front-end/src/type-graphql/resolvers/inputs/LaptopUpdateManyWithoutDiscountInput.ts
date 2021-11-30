import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaptopCreateManyDiscountInputEnvelope } from "../inputs/LaptopCreateManyDiscountInputEnvelope";
import { LaptopCreateOrConnectWithoutDiscountInput } from "../inputs/LaptopCreateOrConnectWithoutDiscountInput";
import { LaptopCreateWithoutDiscountInput } from "../inputs/LaptopCreateWithoutDiscountInput";
import { LaptopScalarWhereInput } from "../inputs/LaptopScalarWhereInput";
import { LaptopUpdateManyWithWhereWithoutDiscountInput } from "../inputs/LaptopUpdateManyWithWhereWithoutDiscountInput";
import { LaptopUpdateWithWhereUniqueWithoutDiscountInput } from "../inputs/LaptopUpdateWithWhereUniqueWithoutDiscountInput";
import { LaptopUpsertWithWhereUniqueWithoutDiscountInput } from "../inputs/LaptopUpsertWithWhereUniqueWithoutDiscountInput";
import { LaptopWhereUniqueInput } from "../inputs/LaptopWhereUniqueInput";

@TypeGraphQL.InputType("LaptopUpdateManyWithoutDiscountInput", {
  isAbstract: true
})
export class LaptopUpdateManyWithoutDiscountInput {
  @TypeGraphQL.Field(_type => [LaptopCreateWithoutDiscountInput], {
    nullable: true
  })
  create?: LaptopCreateWithoutDiscountInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaptopCreateOrConnectWithoutDiscountInput], {
    nullable: true
  })
  connectOrCreate?: LaptopCreateOrConnectWithoutDiscountInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaptopUpsertWithWhereUniqueWithoutDiscountInput], {
    nullable: true
  })
  upsert?: LaptopUpsertWithWhereUniqueWithoutDiscountInput[] | undefined;

  @TypeGraphQL.Field(_type => LaptopCreateManyDiscountInputEnvelope, {
    nullable: true
  })
  createMany?: LaptopCreateManyDiscountInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LaptopWhereUniqueInput], {
    nullable: true
  })
  connect?: LaptopWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaptopWhereUniqueInput], {
    nullable: true
  })
  set?: LaptopWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaptopWhereUniqueInput], {
    nullable: true
  })
  disconnect?: LaptopWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaptopWhereUniqueInput], {
    nullable: true
  })
  delete?: LaptopWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaptopUpdateWithWhereUniqueWithoutDiscountInput], {
    nullable: true
  })
  update?: LaptopUpdateWithWhereUniqueWithoutDiscountInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaptopUpdateManyWithWhereWithoutDiscountInput], {
    nullable: true
  })
  updateMany?: LaptopUpdateManyWithWhereWithoutDiscountInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaptopScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LaptopScalarWhereInput[] | undefined;
}
