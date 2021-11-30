import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaptopWhereInput } from "../inputs/LaptopWhereInput";

@TypeGraphQL.InputType("LaptopRelationFilter", {
  isAbstract: true
})
export class LaptopRelationFilter {
  @TypeGraphQL.Field(_type => LaptopWhereInput, {
    nullable: true
  })
  is?: LaptopWhereInput | undefined;

  @TypeGraphQL.Field(_type => LaptopWhereInput, {
    nullable: true
  })
  isNot?: LaptopWhereInput | undefined;
}
