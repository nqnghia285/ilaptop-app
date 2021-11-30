import * as TypeGraphQL from "type-graphql";
import { Laptop } from "../../../models/Laptop";
import { PriceMap } from "../../../models/PriceMap";
import { PriceMapLaptopsArgs } from "./args/PriceMapLaptopsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PriceMap)
export class PriceMapRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Laptop], {
    nullable: false
  })
  async laptops(@TypeGraphQL.Root() priceMap: PriceMap, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PriceMapLaptopsArgs): Promise<Laptop[]> {
    return getPrismaFromContext(ctx).priceMap.findUnique({
      where: {
        id: priceMap.id,
      },
    }).laptops(args);
  }
}
