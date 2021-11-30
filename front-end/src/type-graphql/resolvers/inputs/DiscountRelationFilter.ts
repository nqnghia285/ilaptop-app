import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DiscountWhereInput } from "../inputs/DiscountWhereInput";

@TypeGraphQL.InputType("DiscountRelationFilter", {
  isAbstract: true
})
export class DiscountRelationFilter {
  @TypeGraphQL.Field(_type => DiscountWhereInput, {
    nullable: true
  })
  is?: DiscountWhereInput | undefined;

  @TypeGraphQL.Field(_type => DiscountWhereInput, {
    nullable: true
  })
  isNot?: DiscountWhereInput | undefined;
}
