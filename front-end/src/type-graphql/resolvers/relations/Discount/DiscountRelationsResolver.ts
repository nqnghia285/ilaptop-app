import * as TypeGraphQL from "type-graphql";
import { Discount } from "../../../models/Discount";
import { Laptop } from "../../../models/Laptop";
import { DiscountLaptopsArgs } from "./args/DiscountLaptopsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Discount)
export class DiscountRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Laptop], {
    nullable: false
  })
  async laptops(@TypeGraphQL.Root() discount: Discount, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DiscountLaptopsArgs): Promise<Laptop[]> {
    return getPrismaFromContext(ctx).discount.findUnique({
      where: {
        id: discount.id,
      },
    }).laptops(args);
  }
}
