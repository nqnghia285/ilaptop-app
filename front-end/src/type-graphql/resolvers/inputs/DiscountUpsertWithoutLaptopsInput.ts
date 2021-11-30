import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DiscountCreateWithoutLaptopsInput } from "../inputs/DiscountCreateWithoutLaptopsInput";
import { DiscountUpdateWithoutLaptopsInput } from "../inputs/DiscountUpdateWithoutLaptopsInput";

@TypeGraphQL.InputType("DiscountUpsertWithoutLaptopsInput", {
  isAbstract: true
})
export class DiscountUpsertWithoutLaptopsInput {
  @TypeGraphQL.Field(_type => DiscountUpdateWithoutLaptopsInput, {
    nullable: false
  })
  update!: DiscountUpdateWithoutLaptopsInput;

  @TypeGraphQL.Field(_type => DiscountCreateWithoutLaptopsInput, {
    nullable: false
  })
  create!: DiscountCreateWithoutLaptopsInput;
}
