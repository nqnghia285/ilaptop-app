import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateWithoutCustomerInput } from "../inputs/PersonCreateWithoutCustomerInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType("PersonCreateOrConnectWithoutCustomerInput", {
  isAbstract: true
})
export class PersonCreateOrConnectWithoutCustomerInput {
  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: false
  })
  where!: PersonWhereUniqueInput;

  @TypeGraphQL.Field(_type => PersonCreateWithoutCustomerInput, {
    nullable: false
  })
  create!: PersonCreateWithoutCustomerInput;
}
