import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PassageUpdateInput } from "../../../inputs/PassageUpdateInput";
import { PassageWhereUniqueInput } from "../../../inputs/PassageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdatePassageArgs {
  @TypeGraphQL.Field(_type => PassageUpdateInput, {
    nullable: false
  })
  data!: PassageUpdateInput;

  @TypeGraphQL.Field(_type => PassageWhereUniqueInput, {
    nullable: false
  })
  where!: PassageWhereUniqueInput;
}
