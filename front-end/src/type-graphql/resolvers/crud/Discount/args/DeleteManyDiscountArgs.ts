import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DiscountWhereInput } from "../../../inputs/DiscountWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDiscountArgs {
  @TypeGraphQL.Field(_type => DiscountWhereInput, {
    nullable: true
  })
  where?: DiscountWhereInput | undefined;
}
