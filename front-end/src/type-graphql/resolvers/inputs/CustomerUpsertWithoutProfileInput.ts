import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutProfileInput } from "../inputs/CustomerCreateWithoutProfileInput";
import { CustomerUpdateWithoutProfileInput } from "../inputs/CustomerUpdateWithoutProfileInput";

@TypeGraphQL.InputType("CustomerUpsertWithoutProfileInput", {
  isAbstract: true
})
export class CustomerUpsertWithoutProfileInput {
  @TypeGraphQL.Field(_type => CustomerUpdateWithoutProfileInput, {
    nullable: false
  })
  update!: CustomerUpdateWithoutProfileInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutProfileInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutProfileInput;
}
