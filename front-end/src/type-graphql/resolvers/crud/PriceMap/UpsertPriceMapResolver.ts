import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertPriceMapArgs } from "./args/UpsertPriceMapArgs";
import { PriceMap } from "../../../models/PriceMap";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PriceMap)
export class UpsertPriceMapResolver {
  @TypeGraphQL.Mutation(_returns => PriceMap, {
    nullable: false
  })
  async upsertPriceMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertPriceMapArgs): Promise<PriceMap> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).priceMap.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
