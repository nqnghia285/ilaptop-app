import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentAvgOrderByAggregateInput } from "../inputs/CommentAvgOrderByAggregateInput";
import { CommentCountOrderByAggregateInput } from "../inputs/CommentCountOrderByAggregateInput";
import { CommentMaxOrderByAggregateInput } from "../inputs/CommentMaxOrderByAggregateInput";
import { CommentMinOrderByAggregateInput } from "../inputs/CommentMinOrderByAggregateInput";
import { CommentSumOrderByAggregateInput } from "../inputs/CommentSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CommentOrderByWithAggregationInput", {
  isAbstract: true
})
export class CommentOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rank?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  authorId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isStaff?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  laptopId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  commentId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CommentCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CommentCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommentAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CommentAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommentMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CommentMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommentMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CommentMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommentSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CommentSumOrderByAggregateInput | undefined;
}
