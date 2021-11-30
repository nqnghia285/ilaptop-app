import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PassageWhereInput } from "../../../inputs/PassageWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPassageArgs {
  @TypeGraphQL.Field(_type => PassageWhereInput, {
    nullable: true
  })
  where?: PassageWhereInput | undefined;
}
