import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PassageCreateInput } from "../../../inputs/PassageCreateInput";

@TypeGraphQL.ArgsType()
export class CreatePassageArgs {
  @TypeGraphQL.Field(_type => PassageCreateInput, {
    nullable: false
  })
  data!: PassageCreateInput;
}
