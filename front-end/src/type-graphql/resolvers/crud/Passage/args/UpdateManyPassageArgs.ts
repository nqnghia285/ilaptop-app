import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PassageUpdateManyMutationInput } from "../../../inputs/PassageUpdateManyMutationInput";
import { PassageWhereInput } from "../../../inputs/PassageWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPassageArgs {
  @TypeGraphQL.Field(_type => PassageUpdateManyMutationInput, {
    nullable: false
  })
  data!: PassageUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PassageWhereInput, {
    nullable: true
  })
  where?: PassageWhereInput | undefined;
}
