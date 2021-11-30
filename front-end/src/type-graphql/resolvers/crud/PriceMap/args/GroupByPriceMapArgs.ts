import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PriceMapOrderByWithAggregationInput } from "../../../inputs/PriceMapOrderByWithAggregationInput";
import { PriceMapScalarWhereWithAggregatesInput } from "../../../inputs/PriceMapScalarWhereWithAggregatesInput";
import { PriceMapWhereInput } from "../../../inputs/PriceMapWhereInput";
import { PriceMapScalarFieldEnum } from "../../../../enums/PriceMapScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPriceMapArgs {
  @TypeGraphQL.Field(_type => PriceMapWhereInput, {
    nullable: true
  })
  where?: PriceMapWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PriceMapOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PriceMapOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PriceMapScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "price" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => PriceMapScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PriceMapScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
