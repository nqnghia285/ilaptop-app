import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateWithoutCustomerInput } from "../inputs/PersonCreateWithoutCustomerInput";
import { PersonUpdateWithoutCustomerInput } from "../inputs/PersonUpdateWithoutCustomerInput";

@TypeGraphQL.InputType("PersonUpsertWithoutCustomerInput", {
  isAbstract: true
})
export class PersonUpsertWithoutCustomerInput {
  @TypeGraphQL.Field(_type => PersonUpdateWithoutCustomerInput, {
    nullable: false
  })
  update!: PersonUpdateWithoutCustomerInput;

  @TypeGraphQL.Field(_type => PersonCreateWithoutCustomerInput, {
    nullable: false
  })
  create!: PersonCreateWithoutCustomerInput;
}
