import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PassageScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class PassageScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PassageScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PassageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PassageScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PassageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PassageScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PassageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  header?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  content?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  postId?: IntWithAggregatesFilter | undefined;
}
