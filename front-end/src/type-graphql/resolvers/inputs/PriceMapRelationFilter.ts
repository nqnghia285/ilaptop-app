import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PriceMapWhereInput } from "../inputs/PriceMapWhereInput";

@TypeGraphQL.InputType("PriceMapRelationFilter", {
  isAbstract: true
})
export class PriceMapRelationFilter {
  @TypeGraphQL.Field(_type => PriceMapWhereInput, {
    nullable: true
  })
  is?: PriceMapWhereInput | undefined;

  @TypeGraphQL.Field(_type => PriceMapWhereInput, {
    nullable: true
  })
  isNot?: PriceMapWhereInput | undefined;
}
