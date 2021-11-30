import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DiscountWhereUniqueInput } from "../../../inputs/DiscountWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueDiscountArgs {
  @TypeGraphQL.Field(_type => DiscountWhereUniqueInput, {
    nullable: false
  })
  where!: DiscountWhereUniqueInput;
}
