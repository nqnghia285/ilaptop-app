import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateNestedOneWithoutPurchasesInput } from "../inputs/CustomerCreateNestedOneWithoutPurchasesInput";
import { LaptopCreateNestedManyWithoutPurchasesInput } from "../inputs/LaptopCreateNestedManyWithoutPurchasesInput";

@TypeGraphQL.InputType("PurchaseCreateInput", {
  isAbstract: true
})
export class PurchaseCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateNestedOneWithoutPurchasesInput, {
    nullable: false
  })
  customer!: CustomerCreateNestedOneWithoutPurchasesInput;

  @TypeGraphQL.Field(_type => LaptopCreateNestedManyWithoutPurchasesInput, {
    nullable: true
  })
  laptops?: LaptopCreateNestedManyWithoutPurchasesInput | undefined;
}
