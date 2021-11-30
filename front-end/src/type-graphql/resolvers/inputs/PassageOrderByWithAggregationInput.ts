import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PassageAvgOrderByAggregateInput } from "../inputs/PassageAvgOrderByAggregateInput";
import { PassageCountOrderByAggregateInput } from "../inputs/PassageCountOrderByAggregateInput";
import { PassageMaxOrderByAggregateInput } from "../inputs/PassageMaxOrderByAggregateInput";
import { PassageMinOrderByAggregateInput } from "../inputs/PassageMinOrderByAggregateInput";
import { PassageSumOrderByAggregateInput } from "../inputs/PassageSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PassageOrderByWithAggregationInput", {
  isAbstract: true
})
export class PassageOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  header?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  postId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PassageCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PassageCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PassageAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PassageAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PassageMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PassageMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PassageMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PassageMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PassageSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PassageSumOrderByAggregateInput | undefined;
}
