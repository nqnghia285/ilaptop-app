import * as TypeGraphQL from "type-graphql";
import { Customer } from "../../../models/Customer";
import { Person } from "../../../models/Person";
import { Purchase } from "../../../models/Purchase";
import { CustomerPurchasesArgs } from "./args/CustomerPurchasesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Customer)
export class CustomerRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Person, {
    nullable: false
  })
  async profile(@TypeGraphQL.Root() customer: Customer, @TypeGraphQL.Ctx() ctx: any): Promise<Person> {
    return getPrismaFromContext(ctx).customer.findUnique({
      where: {
        id: customer.id,
      },
    }).profile({});
  }

  @TypeGraphQL.FieldResolver(_type => [Purchase], {
    nullable: false
  })
  async purchases(@TypeGraphQL.Root() customer: Customer, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CustomerPurchasesArgs): Promise<Purchase[]> {
    return getPrismaFromContext(ctx).customer.findUnique({
      where: {
        id: customer.id,
      },
    }).purchases(args);
  }
}
