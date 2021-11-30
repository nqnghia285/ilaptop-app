import * as TypeGraphQL from "type-graphql";
import { Customer } from "../../../models/Customer";
import { Laptop } from "../../../models/Laptop";
import { Purchase } from "../../../models/Purchase";
import { PurchaseLaptopsArgs } from "./args/PurchaseLaptopsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Purchase)
export class PurchaseRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Customer, {
    nullable: false
  })
  async customer(@TypeGraphQL.Root() purchase: Purchase, @TypeGraphQL.Ctx() ctx: any): Promise<Customer> {
    return getPrismaFromContext(ctx).purchase.findUnique({
      where: {
        id: purchase.id,
      },
    }).customer({});
  }

  @TypeGraphQL.FieldResolver(_type => [Laptop], {
    nullable: false
  })
  async laptops(@TypeGraphQL.Root() purchase: Purchase, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PurchaseLaptopsArgs): Promise<Laptop[]> {
    return getPrismaFromContext(ctx).purchase.findUnique({
      where: {
        id: purchase.id,
      },
    }).laptops(args);
  }
}
