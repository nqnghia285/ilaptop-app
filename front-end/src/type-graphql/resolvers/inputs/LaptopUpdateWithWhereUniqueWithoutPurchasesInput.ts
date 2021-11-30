import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaptopUpdateWithoutPurchasesInput } from "../inputs/LaptopUpdateWithoutPurchasesInput";
import { LaptopWhereUniqueInput } from "../inputs/LaptopWhereUniqueInput";

@TypeGraphQL.InputType("LaptopUpdateWithWhereUniqueWithoutPurchasesInput", {
  isAbstract: true
})
export class LaptopUpdateWithWhereUniqueWithoutPurchasesInput {
  @TypeGraphQL.Field(_type => LaptopWhereUniqueInput, {
    nullable: false
  })
  where!: LaptopWhereUniqueInput;

  @TypeGraphQL.Field(_type => LaptopUpdateWithoutPurchasesInput, {
    nullable: false
  })
  data!: LaptopUpdateWithoutPurchasesInput;
}
