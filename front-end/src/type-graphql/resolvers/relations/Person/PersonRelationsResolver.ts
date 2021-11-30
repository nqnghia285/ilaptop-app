import * as TypeGraphQL from "type-graphql";
import { Comment } from "../../../models/Comment";
import { Customer } from "../../../models/Customer";
import { Person } from "../../../models/Person";
import { User } from "../../../models/User";
import { PersonCommentsArgs } from "./args/PersonCommentsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Person)
export class PersonRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async user(@TypeGraphQL.Root() person: Person, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).person.findUnique({
      where: {
        id: person.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Customer, {
    nullable: true
  })
  async customer(@TypeGraphQL.Root() person: Person, @TypeGraphQL.Ctx() ctx: any): Promise<Customer | null> {
    return getPrismaFromContext(ctx).person.findUnique({
      where: {
        id: person.id,
      },
    }).customer({});
  }

  @TypeGraphQL.FieldResolver(_type => [Comment], {
    nullable: false
  })
  async comments(@TypeGraphQL.Root() person: Person, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PersonCommentsArgs): Promise<Comment[]> {
    return getPrismaFromContext(ctx).person.findUnique({
      where: {
        id: person.id,
      },
    }).comments(args);
  }
}
