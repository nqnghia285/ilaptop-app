import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaptopCreateOrConnectWithoutPurchasesInput } from "../inputs/LaptopCreateOrConnectWithoutPurchasesInput";
import { LaptopCreateWithoutPurchasesInput } from "../inputs/LaptopCreateWithoutPurchasesInput";
import { LaptopScalarWhereInput } from "../inputs/LaptopScalarWhereInput";
import { LaptopUpdateManyWithWhereWithoutPurchasesInput } from "../inputs/LaptopUpdateManyWithWhereWithoutPurchasesInput";
import { LaptopUpdateWithWhereUniqueWithoutPurchasesInput } from "../inputs/LaptopUpdateWithWhereUniqueWithoutPurchasesInput";
import { LaptopUpsertWithWhereUniqueWithoutPurchasesInput } from "../inputs/LaptopUpsertWithWhereUniqueWithoutPurchasesInput";
import { LaptopWhereUniqueInput } from "../inputs/LaptopWhereUniqueInput";

@TypeGraphQL.InputType("LaptopUpdateManyWithoutPurchasesInput", {
  isAbstract: true
})
export class LaptopUpdateManyWithoutPurchasesInput {
  @TypeGraphQL.Field(_type => [LaptopCreateWithoutPurchasesInput], {
    nullable: true
  })
  create?: LaptopCreateWithoutPurchasesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaptopCreateOrConnectWithoutPurchasesInput], {
    nullable: true
  })
  connectOrCreate?: LaptopCreateOrConnectWithoutPurchasesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaptopUpsertWithWhereUniqueWithoutPurchasesInput], {
    nullable: true
  })
  upsert?: LaptopUpsertWithWhereUniqueWithoutPurchasesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [LaptopUpdateWithWhereUniqueWithoutPurchasesInput], {
    nullable: true
  })
  update?: LaptopUpdateWithWhereUniqueWithoutPurchasesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaptopUpdateManyWithWhereWithoutPurchasesInput], {
    nullable: true
  })
  updateMany?: LaptopUpdateManyWithWhereWithoutPurchasesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaptopScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LaptopScalarWhereInput[] | undefined;
}
