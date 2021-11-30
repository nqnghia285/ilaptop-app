import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PriceMapUpdateManyMutationInput } from "../../../inputs/PriceMapUpdateManyMutationInput";
import { PriceMapWhereInput } from "../../../inputs/PriceMapWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPriceMapArgs {
  @TypeGraphQL.Field(_type => PriceMapUpdateManyMutationInput, {
    nullable: false
  })
  data!: PriceMapUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PriceMapWhereInput, {
    nullable: true
  })
  where?: PriceMapWhereInput | undefined;
}
