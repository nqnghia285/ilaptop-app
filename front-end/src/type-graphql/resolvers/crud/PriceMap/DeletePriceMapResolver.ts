import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeletePriceMapArgs } from "./args/DeletePriceMapArgs";
import { PriceMap } from "../../../models/PriceMap";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PriceMap)
export class DeletePriceMapResolver {
  @TypeGraphQL.Mutation(_returns => PriceMap, {
    nullable: true
  })
  async deletePriceMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeletePriceMapArgs): Promise<PriceMap | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).priceMap.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
