import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("PriceMapScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class PriceMapScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PriceMapScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PriceMapScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PriceMapScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PriceMapScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PriceMapScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PriceMapScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  price?: FloatWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
