import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PurchaseUpdateWithoutCustomerInput } from "../inputs/PurchaseUpdateWithoutCustomerInput";
import { PurchaseWhereUniqueInput } from "../inputs/PurchaseWhereUniqueInput";

@TypeGraphQL.InputType("PurchaseUpdateWithWhereUniqueWithoutCustomerInput", {
  isAbstract: true
})
export class PurchaseUpdateWithWhereUniqueWithoutCustomerInput {
  @TypeGraphQL.Field(_type => PurchaseWhereUniqueInput, {
    nullable: false
  })
  where!: PurchaseWhereUniqueInput;

  @TypeGraphQL.Field(_type => PurchaseUpdateWithoutCustomerInput, {
    nullable: false
  })
  data!: PurchaseUpdateWithoutCustomerInput;
}
