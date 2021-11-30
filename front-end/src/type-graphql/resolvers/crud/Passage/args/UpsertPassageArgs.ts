import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PassageCreateInput } from "../../../inputs/PassageCreateInput";
import { PassageUpdateInput } from "../../../inputs/PassageUpdateInput";
import { PassageWhereUniqueInput } from "../../../inputs/PassageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertPassageArgs {
  @TypeGraphQL.Field(_type => PassageWhereUniqueInput, {
    nullable: false
  })
  where!: PassageWhereUniqueInput;

  @TypeGraphQL.Field(_type => PassageCreateInput, {
    nullable: false
  })
  create!: PassageCreateInput;

  @TypeGraphQL.Field(_type => PassageUpdateInput, {
    nullable: false
  })
  update!: PassageUpdateInput;
}
