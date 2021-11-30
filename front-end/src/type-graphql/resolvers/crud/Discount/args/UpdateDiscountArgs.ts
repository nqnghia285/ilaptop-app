import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DiscountUpdateInput } from "../../../inputs/DiscountUpdateInput";
import { DiscountWhereUniqueInput } from "../../../inputs/DiscountWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateDiscountArgs {
  @TypeGraphQL.Field(_type => DiscountUpdateInput, {
    nullable: false
  })
  data!: DiscountUpdateInput;

  @TypeGraphQL.Field(_type => DiscountWhereUniqueInput, {
    nullable: false
  })
  where!: DiscountWhereUniqueInput;
}
