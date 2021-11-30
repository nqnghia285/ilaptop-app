import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePassageArgs } from "./args/AggregatePassageArgs";
import { Passage } from "../../../models/Passage";
import { AggregatePassage } from "../../outputs/AggregatePassage";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Passage)
export class AggregatePassageResolver {
  @TypeGraphQL.Query(_returns => AggregatePassage, {
    nullable: false
  })
  async aggregatePassage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePassageArgs): Promise<AggregatePassage> {
    return getPrismaFromContext(ctx).passage.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
