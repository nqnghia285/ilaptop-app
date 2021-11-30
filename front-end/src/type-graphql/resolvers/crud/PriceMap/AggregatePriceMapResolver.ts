import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePriceMapArgs } from "./args/AggregatePriceMapArgs";
import { PriceMap } from "../../../models/PriceMap";
import { AggregatePriceMap } from "../../outputs/AggregatePriceMap";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PriceMap)
export class AggregatePriceMapResolver {
  @TypeGraphQL.Query(_returns => AggregatePriceMap, {
    nullable: false
  })
  async aggregatePriceMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePriceMapArgs): Promise<AggregatePriceMap> {
    return getPrismaFromContext(ctx).priceMap.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
