import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PassageOrderByWithRelationInput } from "../../../inputs/PassageOrderByWithRelationInput";
import { PassageWhereInput } from "../../../inputs/PassageWhereInput";
import { PassageWhereUniqueInput } from "../../../inputs/PassageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePassageArgs {
  @TypeGraphQL.Field(_type => PassageWhereInput, {
    nullable: true
  })
  where?: PassageWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PassageOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PassageOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PassageWhereUniqueInput, {
    nullable: true
  })
  cursor?: PassageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
