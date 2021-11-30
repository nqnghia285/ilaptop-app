import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DiscountUpdateManyMutationInput } from "../../../inputs/DiscountUpdateManyMutationInput";
import { DiscountWhereInput } from "../../../inputs/DiscountWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDiscountArgs {
  @TypeGraphQL.Field(_type => DiscountUpdateManyMutationInput, {
    nullable: false
  })
  data!: DiscountUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => DiscountWhereInput, {
    nullable: true
  })
  where?: DiscountWhereInput | undefined;
}
