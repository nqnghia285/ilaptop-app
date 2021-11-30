import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PurchaseCreateManyCustomerInputEnvelope } from "../inputs/PurchaseCreateManyCustomerInputEnvelope";
import { PurchaseCreateOrConnectWithoutCustomerInput } from "../inputs/PurchaseCreateOrConnectWithoutCustomerInput";
import { PurchaseCreateWithoutCustomerInput } from "../inputs/PurchaseCreateWithoutCustomerInput";
import { PurchaseWhereUniqueInput } from "../inputs/PurchaseWhereUniqueInput";

@TypeGraphQL.InputType("PurchaseCreateNestedManyWithoutCustomerInput", {
  isAbstract: true
})
export class PurchaseCreateNestedManyWithoutCustomerInput {
  @TypeGraphQL.Field(_type => [PurchaseCreateWithoutCustomerInput], {
    nullable: true
  })
  create?: PurchaseCreateWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [PurchaseCreateOrConnectWithoutCustomerInput], {
    nullable: true
  })
  connectOrCreate?: PurchaseCreateOrConnectWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => PurchaseCreateManyCustomerInputEnvelope, {
    nullable: true
  })
  createMany?: PurchaseCreateManyCustomerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PurchaseWhereUniqueInput], {
    nullable: true
  })
  connect?: PurchaseWhereUniqueInput[] | undefined;
}
