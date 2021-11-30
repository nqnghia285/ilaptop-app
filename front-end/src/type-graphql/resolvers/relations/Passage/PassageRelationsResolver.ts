import * as TypeGraphQL from "type-graphql";
import { Passage } from "../../../models/Passage";
import { Post } from "../../../models/Post";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Passage)
export class PassageRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Post, {
    nullable: false
  })
  async Post(@TypeGraphQL.Root() passage: Passage, @TypeGraphQL.Ctx() ctx: any): Promise<Post> {
    return getPrismaFromContext(ctx).passage.findUnique({
      where: {
        id: passage.id,
      },
    }).Post({});
  }
}
