import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaptopCreateManyPriceMapInputEnvelope } from "../inputs/LaptopCreateManyPriceMapInputEnvelope";
import { LaptopCreateOrConnectWithoutPriceMapInput } from "../inputs/LaptopCreateOrConnectWithoutPriceMapInput";
import { LaptopCreateWithoutPriceMapInput } from "../inputs/LaptopCreateWithoutPriceMapInput";
import { LaptopScalarWhereInput } from "../inputs/LaptopScalarWhereInput";
import { LaptopUpdateManyWithWhereWithoutPriceMapInput } from "../inputs/LaptopUpdateManyWithWhereWithoutPriceMapInput";
import { LaptopUpdateWithWhereUniqueWithoutPriceMapInput } from "../inputs/LaptopUpdateWithWhereUniqueWithoutPriceMapInput";
import { LaptopUpsertWithWhereUniqueWithoutPriceMapInput } from "../inputs/LaptopUpsertWithWhereUniqueWithoutPriceMapInput";
import { LaptopWhereUniqueInput } from "../inputs/LaptopWhereUniqueInput";

@TypeGraphQL.InputType("LaptopUpdateManyWithoutPriceMapInput", {
  isAbstract: true
})
export class LaptopUpdateManyWithoutPriceMapInput {
  @TypeGraphQL.Field(_type => [LaptopCreateWithoutPriceMapInput], {
    nullable: true
  })
  create?: LaptopCreateWithoutPriceMapInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaptopCreateOrConnectWithoutPriceMapInput], {
    nullable: true
  })
  connectOrCreate?: LaptopCreateOrConnectWithoutPriceMapInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaptopUpsertWithWhereUniqueWithoutPriceMapInput], {
    nullable: true
  })
  upsert?: LaptopUpsertWithWhereUniqueWithoutPriceMapInput[] | undefined;

  @TypeGraphQL.Field(_type => LaptopCreateManyPriceMapInputEnvelope, {
    nullable: true
  })
  createMany?: LaptopCreateManyPriceMapInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [LaptopUpdateWithWhereUniqueWithoutPriceMapInput], {
    nullable: true
  })
  update?: LaptopUpdateWithWhereUniqueWithoutPriceMapInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaptopUpdateManyWithWhereWithoutPriceMapInput], {
    nullable: true
  })
  updateMany?: LaptopUpdateManyWithWhereWithoutPriceMapInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaptopScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LaptopScalarWhereInput[] | undefined;
}
