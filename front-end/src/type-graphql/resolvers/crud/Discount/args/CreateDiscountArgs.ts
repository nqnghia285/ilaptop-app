import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DiscountCreateInput } from "../../../inputs/DiscountCreateInput";

@TypeGraphQL.ArgsType()
export class CreateDiscountArgs {
  @TypeGraphQL.Field(_type => DiscountCreateInput, {
    nullable: false
  })
  data!: DiscountCreateInput;
}
