import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutPurchasesInput } from "../inputs/CustomerCreateOrConnectWithoutPurchasesInput";
import { CustomerCreateWithoutPurchasesInput } from "../inputs/CustomerCreateWithoutPurchasesInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCreateNestedOneWithoutPurchasesInput", {
  isAbstract: true
})
export class CustomerCreateNestedOneWithoutPurchasesInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutPurchasesInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutPurchasesInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutPurchasesInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutPurchasesInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput | undefined;
}
