import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PassageCreateManyInput } from "../../../inputs/PassageCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPassageArgs {
  @TypeGraphQL.Field(_type => [PassageCreateManyInput], {
    nullable: false
  })
  data!: PassageCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
