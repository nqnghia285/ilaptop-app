import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DiscountOrderByWithAggregationInput } from "../../../inputs/DiscountOrderByWithAggregationInput";
import { DiscountScalarWhereWithAggregatesInput } from "../../../inputs/DiscountScalarWhereWithAggregatesInput";
import { DiscountWhereInput } from "../../../inputs/DiscountWhereInput";
import { DiscountScalarFieldEnum } from "../../../../enums/DiscountScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDiscountArgs {
  @TypeGraphQL.Field(_type => DiscountWhereInput, {
    nullable: true
  })
  where?: DiscountWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DiscountOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: DiscountOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [DiscountScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "value" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => DiscountScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: DiscountScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
