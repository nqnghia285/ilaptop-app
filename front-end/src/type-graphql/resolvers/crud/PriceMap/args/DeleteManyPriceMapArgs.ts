import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PriceMapWhereInput } from "../../../inputs/PriceMapWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPriceMapArgs {
  @TypeGraphQL.Field(_type => PriceMapWhereInput, {
    nullable: true
  })
  where?: PriceMapWhereInput | undefined;
}
