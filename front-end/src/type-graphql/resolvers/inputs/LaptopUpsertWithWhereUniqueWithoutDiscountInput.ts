import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaptopCreateWithoutDiscountInput } from "../inputs/LaptopCreateWithoutDiscountInput";
import { LaptopUpdateWithoutDiscountInput } from "../inputs/LaptopUpdateWithoutDiscountInput";
import { LaptopWhereUniqueInput } from "../inputs/LaptopWhereUniqueInput";

@TypeGraphQL.InputType("LaptopUpsertWithWhereUniqueWithoutDiscountInput", {
  isAbstract: true
})
export class LaptopUpsertWithWhereUniqueWithoutDiscountInput {
  @TypeGraphQL.Field(_type => LaptopWhereUniqueInput, {
    nullable: false
  })
  where!: LaptopWhereUniqueInput;

  @TypeGraphQL.Field(_type => LaptopUpdateWithoutDiscountInput, {
    nullable: false
  })
  update!: LaptopUpdateWithoutDiscountInput;

  @TypeGraphQL.Field(_type => LaptopCreateWithoutDiscountInput, {
    nullable: false
  })
  create!: LaptopCreateWithoutDiscountInput;
}
