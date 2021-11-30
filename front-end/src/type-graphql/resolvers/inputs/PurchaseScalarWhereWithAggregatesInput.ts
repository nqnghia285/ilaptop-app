import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PurchaseScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class PurchaseScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PurchaseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PurchaseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PurchaseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PurchaseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PurchaseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PurchaseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  customerId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
