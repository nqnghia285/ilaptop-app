import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaptopUpdateWithoutDiscountInput } from "../inputs/LaptopUpdateWithoutDiscountInput";
import { LaptopWhereUniqueInput } from "../inputs/LaptopWhereUniqueInput";

@TypeGraphQL.InputType("LaptopUpdateWithWhereUniqueWithoutDiscountInput", {
  isAbstract: true
})
export class LaptopUpdateWithWhereUniqueWithoutDiscountInput {
  @TypeGraphQL.Field(_type => LaptopWhereUniqueInput, {
    nullable: false
  })
  where!: LaptopWhereUniqueInput;

  @TypeGraphQL.Field(_type => LaptopUpdateWithoutDiscountInput, {
    nullable: false
  })
  data!: LaptopUpdateWithoutDiscountInput;
}
