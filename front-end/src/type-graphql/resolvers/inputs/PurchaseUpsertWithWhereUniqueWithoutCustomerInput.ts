import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PurchaseCreateWithoutCustomerInput } from "../inputs/PurchaseCreateWithoutCustomerInput";
import { PurchaseUpdateWithoutCustomerInput } from "../inputs/PurchaseUpdateWithoutCustomerInput";
import { PurchaseWhereUniqueInput } from "../inputs/PurchaseWhereUniqueInput";

@TypeGraphQL.InputType("PurchaseUpsertWithWhereUniqueWithoutCustomerInput", {
  isAbstract: true
})
export class PurchaseUpsertWithWhereUniqueWithoutCustomerInput {
  @TypeGraphQL.Field(_type => PurchaseWhereUniqueInput, {
    nullable: false
  })
  where!: PurchaseWhereUniqueInput;

  @TypeGraphQL.Field(_type => PurchaseUpdateWithoutCustomerInput, {
    nullable: false
  })
  update!: PurchaseUpdateWithoutCustomerInput;

  @TypeGraphQL.Field(_type => PurchaseCreateWithoutCustomerInput, {
    nullable: false
  })
  create!: PurchaseCreateWithoutCustomerInput;
}
