import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaptopCreateNestedManyWithoutPurchasesInput } from "../inputs/LaptopCreateNestedManyWithoutPurchasesInput";

@TypeGraphQL.InputType("PurchaseCreateWithoutCustomerInput", {
  isAbstract: true
})
export class PurchaseCreateWithoutCustomerInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => LaptopCreateNestedManyWithoutPurchasesInput, {
    nullable: true
  })
  laptops?: LaptopCreateNestedManyWithoutPurchasesInput | undefined;
}
