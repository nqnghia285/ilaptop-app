import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PurchaseCreateWithoutCustomerInput } from "../inputs/PurchaseCreateWithoutCustomerInput";
import { PurchaseWhereUniqueInput } from "../inputs/PurchaseWhereUniqueInput";

@TypeGraphQL.InputType("PurchaseCreateOrConnectWithoutCustomerInput", {
  isAbstract: true
})
export class PurchaseCreateOrConnectWithoutCustomerInput {
  @TypeGraphQL.Field(_type => PurchaseWhereUniqueInput, {
    nullable: false
  })
  where!: PurchaseWhereUniqueInput;

  @TypeGraphQL.Field(_type => PurchaseCreateWithoutCustomerInput, {
    nullable: false
  })
  create!: PurchaseCreateWithoutCustomerInput;
}
