import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DiscountCreateManyInput } from "../../../inputs/DiscountCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyDiscountArgs {
  @TypeGraphQL.Field(_type => [DiscountCreateManyInput], {
    nullable: false
  })
  data!: DiscountCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
