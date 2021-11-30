import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PriceMapCreateWithoutLaptopsInput } from "../inputs/PriceMapCreateWithoutLaptopsInput";
import { PriceMapUpdateWithoutLaptopsInput } from "../inputs/PriceMapUpdateWithoutLaptopsInput";

@TypeGraphQL.InputType("PriceMapUpsertWithoutLaptopsInput", {
  isAbstract: true
})
export class PriceMapUpsertWithoutLaptopsInput {
  @TypeGraphQL.Field(_type => PriceMapUpdateWithoutLaptopsInput, {
    nullable: false
  })
  update!: PriceMapUpdateWithoutLaptopsInput;

  @TypeGraphQL.Field(_type => PriceMapCreateWithoutLaptopsInput, {
    nullable: false
  })
  create!: PriceMapCreateWithoutLaptopsInput;
}
