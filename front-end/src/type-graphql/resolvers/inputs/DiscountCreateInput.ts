import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaptopCreateNestedManyWithoutDiscountInput } from "../inputs/LaptopCreateNestedManyWithoutDiscountInput";

@TypeGraphQL.InputType("DiscountCreateInput", {
  isAbstract: true
})
export class DiscountCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  value?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => LaptopCreateNestedManyWithoutDiscountInput, {
    nullable: true
  })
  laptops?: LaptopCreateNestedManyWithoutDiscountInput | undefined;
}
