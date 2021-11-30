import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PriceMapCreateInput } from "../../../inputs/PriceMapCreateInput";

@TypeGraphQL.ArgsType()
export class CreatePriceMapArgs {
  @TypeGraphQL.Field(_type => PriceMapCreateInput, {
    nullable: false
  })
  data!: PriceMapCreateInput;
}
