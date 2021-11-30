import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PassageWhereInput } from "../inputs/PassageWhereInput";

@TypeGraphQL.InputType("PassageListRelationFilter", {
  isAbstract: true
})
export class PassageListRelationFilter {
  @TypeGraphQL.Field(_type => PassageWhereInput, {
    nullable: true
  })
  every?: PassageWhereInput | undefined;

  @TypeGraphQL.Field(_type => PassageWhereInput, {
    nullable: true
  })
  some?: PassageWhereInput | undefined;

  @TypeGraphQL.Field(_type => PassageWhereInput, {
    nullable: true
  })
  none?: PassageWhereInput | undefined;
}
