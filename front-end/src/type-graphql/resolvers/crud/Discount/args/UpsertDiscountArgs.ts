import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DiscountCreateInput } from "../../../inputs/DiscountCreateInput";
import { DiscountUpdateInput } from "../../../inputs/DiscountUpdateInput";
import { DiscountWhereUniqueInput } from "../../../inputs/DiscountWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertDiscountArgs {
  @TypeGraphQL.Field(_type => DiscountWhereUniqueInput, {
    nullable: false
  })
  where!: DiscountWhereUniqueInput;

  @TypeGraphQL.Field(_type => DiscountCreateInput, {
    nullable: false
  })
  create!: DiscountCreateInput;

  @TypeGraphQL.Field(_type => DiscountUpdateInput, {
    nullable: false
  })
  update!: DiscountUpdateInput;
}
