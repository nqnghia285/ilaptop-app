import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("DiscountScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class DiscountScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [DiscountScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: DiscountScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DiscountScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: DiscountScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DiscountScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: DiscountScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  value?: FloatWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
