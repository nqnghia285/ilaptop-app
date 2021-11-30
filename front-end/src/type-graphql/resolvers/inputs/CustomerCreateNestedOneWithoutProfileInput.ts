import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutProfileInput } from "../inputs/CustomerCreateOrConnectWithoutProfileInput";
import { CustomerCreateWithoutProfileInput } from "../inputs/CustomerCreateWithoutProfileInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCreateNestedOneWithoutProfileInput", {
  isAbstract: true
})
export class CustomerCreateNestedOneWithoutProfileInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutProfileInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutProfileInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutProfileInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutProfileInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput | undefined;
}
