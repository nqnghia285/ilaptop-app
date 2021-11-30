import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PassageOrderByWithAggregationInput } from "../../../inputs/PassageOrderByWithAggregationInput";
import { PassageScalarWhereWithAggregatesInput } from "../../../inputs/PassageScalarWhereWithAggregatesInput";
import { PassageWhereInput } from "../../../inputs/PassageWhereInput";
import { PassageScalarFieldEnum } from "../../../../enums/PassageScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPassageArgs {
  @TypeGraphQL.Field(_type => PassageWhereInput, {
    nullable: true
  })
  where?: PassageWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PassageOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PassageOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PassageScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "header" | "content" | "postId">;

  @TypeGraphQL.Field(_type => PassageScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PassageScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
