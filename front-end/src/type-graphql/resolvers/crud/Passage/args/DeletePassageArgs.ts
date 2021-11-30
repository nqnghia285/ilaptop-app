import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PassageWhereUniqueInput } from "../../../inputs/PassageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeletePassageArgs {
  @TypeGraphQL.Field(_type => PassageWhereUniqueInput, {
    nullable: false
  })
  where!: PassageWhereUniqueInput;
}
