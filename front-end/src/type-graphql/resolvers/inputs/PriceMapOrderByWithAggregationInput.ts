import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PriceMapAvgOrderByAggregateInput } from "../inputs/PriceMapAvgOrderByAggregateInput";
import { PriceMapCountOrderByAggregateInput } from "../inputs/PriceMapCountOrderByAggregateInput";
import { PriceMapMaxOrderByAggregateInput } from "../inputs/PriceMapMaxOrderByAggregateInput";
import { PriceMapMinOrderByAggregateInput } from "../inputs/PriceMapMinOrderByAggregateInput";
import { PriceMapSumOrderByAggregateInput } from "../inputs/PriceMapSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PriceMapOrderByWithAggregationInput", {
  isAbstract: true
})
export class PriceMapOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  price?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PriceMapCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PriceMapCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PriceMapAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PriceMapAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PriceMapMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PriceMapMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PriceMapMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PriceMapMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PriceMapSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PriceMapSumOrderByAggregateInput | undefined;
}
