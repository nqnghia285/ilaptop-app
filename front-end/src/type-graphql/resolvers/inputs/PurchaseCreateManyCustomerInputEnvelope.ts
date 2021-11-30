import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PurchaseCreateManyCustomerInput } from "../inputs/PurchaseCreateManyCustomerInput";

@TypeGraphQL.InputType("PurchaseCreateManyCustomerInputEnvelope", {
  isAbstract: true
})
export class PurchaseCreateManyCustomerInputEnvelope {
  @TypeGraphQL.Field(_type => [PurchaseCreateManyCustomerInput], {
    nullable: false
  })
  data!: PurchaseCreateManyCustomerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
