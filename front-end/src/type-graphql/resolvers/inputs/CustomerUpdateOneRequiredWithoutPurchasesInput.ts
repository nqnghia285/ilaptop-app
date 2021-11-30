import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutPurchasesInput } from "../inputs/CustomerCreateOrConnectWithoutPurchasesInput";
import { CustomerCreateWithoutPurchasesInput } from "../inputs/CustomerCreateWithoutPurchasesInput";
import { CustomerUpdateWithoutPurchasesInput } from "../inputs/CustomerUpdateWithoutPurchasesInput";
import { CustomerUpsertWithoutPurchasesInput } from "../inputs/CustomerUpsertWithoutPurchasesInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerUpdateOneRequiredWithoutPurchasesInput", {
  isAbstract: true
})
export class CustomerUpdateOneRequiredWithoutPurchasesInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutPurchasesInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutPurchasesInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutPurchasesInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutPurchasesInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpsertWithoutPurchasesInput, {
    nullable: true
  })
  upsert?: CustomerUpsertWithoutPurchasesInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutPurchasesInput, {
    nullable: true
  })
  update?: CustomerUpdateWithoutPurchasesInput | undefined;
}
