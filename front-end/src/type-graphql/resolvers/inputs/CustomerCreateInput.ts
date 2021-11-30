import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateNestedOneWithoutCustomerInput } from "../inputs/PersonCreateNestedOneWithoutCustomerInput";
import { PurchaseCreateNestedManyWithoutCustomerInput } from "../inputs/PurchaseCreateNestedManyWithoutCustomerInput";

@TypeGraphQL.InputType("CustomerCreateInput", {
  isAbstract: true
})
export class CustomerCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => PersonCreateNestedOneWithoutCustomerInput, {
    nullable: false
  })
  profile!: PersonCreateNestedOneWithoutCustomerInput;

  @TypeGraphQL.Field(_type => PurchaseCreateNestedManyWithoutCustomerInput, {
    nullable: true
  })
  purchases?: PurchaseCreateNestedManyWithoutCustomerInput | undefined;
}
