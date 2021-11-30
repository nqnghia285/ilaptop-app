import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaptopCreateWithoutPurchasesInput } from "../inputs/LaptopCreateWithoutPurchasesInput";
import { LaptopUpdateWithoutPurchasesInput } from "../inputs/LaptopUpdateWithoutPurchasesInput";
import { LaptopWhereUniqueInput } from "../inputs/LaptopWhereUniqueInput";

@TypeGraphQL.InputType("LaptopUpsertWithWhereUniqueWithoutPurchasesInput", {
  isAbstract: true
})
export class LaptopUpsertWithWhereUniqueWithoutPurchasesInput {
  @TypeGraphQL.Field(_type => LaptopWhereUniqueInput, {
    nullable: false
  })
  where!: LaptopWhereUniqueInput;

  @TypeGraphQL.Field(_type => LaptopUpdateWithoutPurchasesInput, {
    nullable: false
  })
  update!: LaptopUpdateWithoutPurchasesInput;

  @TypeGraphQL.Field(_type => LaptopCreateWithoutPurchasesInput, {
    nullable: false
  })
  create!: LaptopCreateWithoutPurchasesInput;
}
