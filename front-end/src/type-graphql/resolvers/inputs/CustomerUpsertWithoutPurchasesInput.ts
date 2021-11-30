import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutPurchasesInput } from "../inputs/CustomerCreateWithoutPurchasesInput";
import { CustomerUpdateWithoutPurchasesInput } from "../inputs/CustomerUpdateWithoutPurchasesInput";

@TypeGraphQL.InputType("CustomerUpsertWithoutPurchasesInput", {
  isAbstract: true
})
export class CustomerUpsertWithoutPurchasesInput {
  @TypeGraphQL.Field(_type => CustomerUpdateWithoutPurchasesInput, {
    nullable: false
  })
  update!: CustomerUpdateWithoutPurchasesInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutPurchasesInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutPurchasesInput;
}
