import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PriceMapCreateManyInput } from "../../../inputs/PriceMapCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPriceMapArgs {
  @TypeGraphQL.Field(_type => [PriceMapCreateManyInput], {
    nullable: false
  })
  data!: PriceMapCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
