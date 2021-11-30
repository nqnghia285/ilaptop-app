import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DiscountCreateWithoutLaptopsInput } from "../inputs/DiscountCreateWithoutLaptopsInput";
import { DiscountWhereUniqueInput } from "../inputs/DiscountWhereUniqueInput";

@TypeGraphQL.InputType("DiscountCreateOrConnectWithoutLaptopsInput", {
  isAbstract: true
})
export class DiscountCreateOrConnectWithoutLaptopsInput {
  @TypeGraphQL.Field(_type => DiscountWhereUniqueInput, {
    nullable: false
  })
  where!: DiscountWhereUniqueInput;

  @TypeGraphQL.Field(_type => DiscountCreateWithoutLaptopsInput, {
    nullable: false
  })
  create!: DiscountCreateWithoutLaptopsInput;
}
