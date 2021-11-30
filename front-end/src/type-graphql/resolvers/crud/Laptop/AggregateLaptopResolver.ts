import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateLaptopArgs } from "./args/AggregateLaptopArgs";
import { Laptop } from "../../../models/Laptop";
import { AggregateLaptop } from "../../outputs/AggregateLaptop";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Laptop)
export class AggregateLaptopResolver {
  @TypeGraphQL.Query(_returns => AggregateLaptop, {
    nullable: false
  })
  async aggregateLaptop(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLaptopArgs): Promise<AggregateLaptop> {
    return getPrismaFromContext(ctx).laptop.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
