import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PriceMapOrderByWithRelationInput } from "../../../inputs/PriceMapOrderByWithRelationInput";
import { PriceMapWhereInput } from "../../../inputs/PriceMapWhereInput";
import { PriceMapWhereUniqueInput } from "../../../inputs/PriceMapWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePriceMapArgs {
  @TypeGraphQL.Field(_type => PriceMapWhereInput, {
    nullable: true
  })
  where?: PriceMapWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PriceMapOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PriceMapOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PriceMapWhereUniqueInput, {
    nullable: true
  })
  cursor?: PriceMapWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
