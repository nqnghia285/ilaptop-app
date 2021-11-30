import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateDiscountArgs } from "./args/AggregateDiscountArgs";
import { Discount } from "../../../models/Discount";
import { AggregateDiscount } from "../../outputs/AggregateDiscount";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Discount)
export class AggregateDiscountResolver {
  @TypeGraphQL.Query(_returns => AggregateDiscount, {
    nullable: false
  })
  async aggregateDiscount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDiscountArgs): Promise<AggregateDiscount> {
    return getPrismaFromContext(ctx).discount.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
