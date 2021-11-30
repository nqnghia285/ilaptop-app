import * as TypeGraphQL from "type-graphql";
import { Laptop } from "../../../models/Laptop";
import { Passage } from "../../../models/Passage";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
import { PostLaptopsArgs } from "./args/PostLaptopsArgs";
import { PostPassagesArgs } from "./args/PostPassagesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Post)
export class PostRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Passage], {
    nullable: false
  })
  async passages(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PostPassagesArgs): Promise<Passage[]> {
    return getPrismaFromContext(ctx).post.findUnique({
      where: {
        id: post.id,
      },
    }).passages(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Laptop], {
    nullable: false
  })
  async laptops(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PostLaptopsArgs): Promise<Laptop[]> {
    return getPrismaFromContext(ctx).post.findUnique({
      where: {
        id: post.id,
      },
    }).laptops(args);
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async author(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).post.findUnique({
      where: {
        id: post.id,
      },
    }).author({});
  }
}
