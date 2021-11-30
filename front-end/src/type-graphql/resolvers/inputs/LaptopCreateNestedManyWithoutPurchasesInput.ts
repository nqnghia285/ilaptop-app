import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaptopCreateOrConnectWithoutPurchasesInput } from "../inputs/LaptopCreateOrConnectWithoutPurchasesInput";
import { LaptopCreateWithoutPurchasesInput } from "../inputs/LaptopCreateWithoutPurchasesInput";
import { LaptopWhereUniqueInput } from "../inputs/LaptopWhereUniqueInput";

@TypeGraphQL.InputType("LaptopCreateNestedManyWithoutPurchasesInput", {
  isAbstract: true
})
export class LaptopCreateNestedManyWithoutPurchasesInput {
  @TypeGraphQL.Field(_type => [LaptopCreateWithoutPurchasesInput], {
    nullable: true
  })
  create?: LaptopCreateWithoutPurchasesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaptopCreateOrConnectWithoutPurchasesInput], {
    nullable: true
  })
  connectOrCreate?: LaptopCreateOrConnectWithoutPurchasesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaptopWhereUniqueInput], {
    nullable: true
  })
  connect?: LaptopWhereUniqueInput[] | undefined;
}
