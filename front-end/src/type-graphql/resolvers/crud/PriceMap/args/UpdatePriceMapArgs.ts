import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PriceMapUpdateInput } from "../../../inputs/PriceMapUpdateInput";
import { PriceMapWhereUniqueInput } from "../../../inputs/PriceMapWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdatePriceMapArgs {
  @TypeGraphQL.Field(_type => PriceMapUpdateInput, {
    nullable: false
  })
  data!: PriceMapUpdateInput;

  @TypeGraphQL.Field(_type => PriceMapWhereUniqueInput, {
    nullable: false
  })
  where!: PriceMapWhereUniqueInput;
}
