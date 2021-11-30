import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateOrConnectWithoutCustomerInput } from "../inputs/PersonCreateOrConnectWithoutCustomerInput";
import { PersonCreateWithoutCustomerInput } from "../inputs/PersonCreateWithoutCustomerInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType("PersonCreateNestedOneWithoutCustomerInput", {
  isAbstract: true
})
export class PersonCreateNestedOneWithoutCustomerInput {
  @TypeGraphQL.Field(_type => PersonCreateWithoutCustomerInput, {
    nullable: true
  })
  create?: PersonCreateWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => PersonCreateOrConnectWithoutCustomerInput, {
    nullable: true
  })
  connectOrCreate?: PersonCreateOrConnectWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: true
  })
  connect?: PersonWhereUniqueInput | undefined;
}
