import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutPurchasesInput } from "../inputs/CustomerCreateWithoutPurchasesInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCreateOrConnectWithoutPurchasesInput", {
  isAbstract: true
})
export class CustomerCreateOrConnectWithoutPurchasesInput {
  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutPurchasesInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutPurchasesInput;
}
