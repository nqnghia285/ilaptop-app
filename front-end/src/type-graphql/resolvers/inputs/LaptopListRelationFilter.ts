import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaptopWhereInput } from "../inputs/LaptopWhereInput";

@TypeGraphQL.InputType("LaptopListRelationFilter", {
  isAbstract: true
})
export class LaptopListRelationFilter {
  @TypeGraphQL.Field(_type => LaptopWhereInput, {
    nullable: true
  })
  every?: LaptopWhereInput | undefined;

  @TypeGraphQL.Field(_type => LaptopWhereInput, {
    nullable: true
  })
  some?: LaptopWhereInput | undefined;

  @TypeGraphQL.Field(_type => LaptopWhereInput, {
    nullable: true
  })
  none?: LaptopWhereInput | undefined;
}
