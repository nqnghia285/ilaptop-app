import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PriceMapCreateWithoutLaptopsInput } from "../inputs/PriceMapCreateWithoutLaptopsInput";
import { PriceMapWhereUniqueInput } from "../inputs/PriceMapWhereUniqueInput";

@TypeGraphQL.InputType("PriceMapCreateOrConnectWithoutLaptopsInput", {
  isAbstract: true
})
export class PriceMapCreateOrConnectWithoutLaptopsInput {
  @TypeGraphQL.Field(_type => PriceMapWhereUniqueInput, {
    nullable: false
  })
  where!: PriceMapWhereUniqueInput;

  @TypeGraphQL.Field(_type => PriceMapCreateWithoutLaptopsInput, {
    nullable: false
  })
  create!: PriceMapCreateWithoutLaptopsInput;
}
