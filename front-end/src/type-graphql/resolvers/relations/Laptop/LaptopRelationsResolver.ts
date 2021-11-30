import * as TypeGraphQL from "type-graphql";
import { Comment } from "../../../models/Comment";
import { Discount } from "../../../models/Discount";
import { Laptop } from "../../../models/Laptop";
import { Post } from "../../../models/Post";
import { PriceMap } from "../../../models/PriceMap";
import { Purchase } from "../../../models/Purchase";
import { LaptopCommentsArgs } from "./args/LaptopCommentsArgs";
import { LaptopPostsArgs } from "./args/LaptopPostsArgs";
import { LaptopPurchasesArgs } from "./args/LaptopPurchasesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Laptop)
export class LaptopRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => PriceMap, {
    nullable: true
  })
  async priceMap(@TypeGraphQL.Root() laptop: Laptop, @TypeGraphQL.Ctx() ctx: any): Promise<PriceMap | null> {
    return getPrismaFromContext(ctx).laptop.findUnique({
      where: {
        id: laptop.id,
      },
    }).priceMap({});
  }

  @TypeGraphQL.FieldResolver(_type => Discount, {
    nullable: true
  })
  async discount(@TypeGraphQL.Root() laptop: Laptop, @TypeGraphQL.Ctx() ctx: any): Promise<Discount | null> {
    return getPrismaFromContext(ctx).laptop.findUnique({
      where: {
        id: laptop.id,
      },
    }).discount({});
  }

  @TypeGraphQL.FieldResolver(_type => [Purchase], {
    nullable: false
  })
  async purchases(@TypeGraphQL.Root() laptop: Laptop, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: LaptopPurchasesArgs): Promise<Purchase[]> {
    return getPrismaFromContext(ctx).laptop.findUnique({
      where: {
        id: laptop.id,
      },
    }).purchases(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false
  })
  async posts(@TypeGraphQL.Root() laptop: Laptop, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: LaptopPostsArgs): Promise<Post[]> {
    return getPrismaFromContext(ctx).laptop.findUnique({
      where: {
        id: laptop.id,
      },
    }).posts(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Comment], {
    nullable: false
  })
  async comments(@TypeGraphQL.Root() laptop: Laptop, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: LaptopCommentsArgs): Promise<Comment[]> {
    return getPrismaFromContext(ctx).laptop.findUnique({
      where: {
        id: laptop.id,
      },
    }).comments(args);
  }
}
