import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PriceMapCreateInput } from "../../../inputs/PriceMapCreateInput";
import { PriceMapUpdateInput } from "../../../inputs/PriceMapUpdateInput";
import { PriceMapWhereUniqueInput } from "../../../inputs/PriceMapWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertPriceMapArgs {
  @TypeGraphQL.Field(_type => PriceMapWhereUniqueInput, {
    nullable: false
  })
  where!: PriceMapWhereUniqueInput;

  @TypeGraphQL.Field(_type => PriceMapCreateInput, {
    nullable: false
  })
  create!: PriceMapCreateInput;

  @TypeGraphQL.Field(_type => PriceMapUpdateInput, {
    nullable: false
  })
  update!: PriceMapUpdateInput;
}
