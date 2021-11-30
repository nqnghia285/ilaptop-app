import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DiscountAvgOrderByAggregateInput } from "../inputs/DiscountAvgOrderByAggregateInput";
import { DiscountCountOrderByAggregateInput } from "../inputs/DiscountCountOrderByAggregateInput";
import { DiscountMaxOrderByAggregateInput } from "../inputs/DiscountMaxOrderByAggregateInput";
import { DiscountMinOrderByAggregateInput } from "../inputs/DiscountMinOrderByAggregateInput";
import { DiscountSumOrderByAggregateInput } from "../inputs/DiscountSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("DiscountOrderByWithAggregationInput", {
  isAbstract: true
})
export class DiscountOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  value?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => DiscountCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: DiscountCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DiscountAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: DiscountAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DiscountMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: DiscountMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DiscountMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: DiscountMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DiscountSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: DiscountSumOrderByAggregateInput | undefined;
}
