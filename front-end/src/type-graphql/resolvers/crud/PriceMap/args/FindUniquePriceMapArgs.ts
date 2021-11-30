import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PriceMapWhereUniqueInput } from "../../../inputs/PriceMapWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePriceMapArgs {
  @TypeGraphQL.Field(_type => PriceMapWhereUniqueInput, {
    nullable: false
  })
  where!: PriceMapWhereUniqueInput;
}
