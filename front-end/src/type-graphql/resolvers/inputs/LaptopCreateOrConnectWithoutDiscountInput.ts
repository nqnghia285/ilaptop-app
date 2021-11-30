import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaptopCreateWithoutDiscountInput } from "../inputs/LaptopCreateWithoutDiscountInput";
import { LaptopWhereUniqueInput } from "../inputs/LaptopWhereUniqueInput";

@TypeGraphQL.InputType("LaptopCreateOrConnectWithoutDiscountInput", {
  isAbstract: true
})
export class LaptopCreateOrConnectWithoutDiscountInput {
  @TypeGraphQL.Field(_type => LaptopWhereUniqueInput, {
    nullable: false
  })
  where!: LaptopWhereUniqueInput;

  @TypeGraphQL.Field(_type => LaptopCreateWithoutDiscountInput, {
    nullable: false
  })
  create!: LaptopCreateWithoutDiscountInput;
}
