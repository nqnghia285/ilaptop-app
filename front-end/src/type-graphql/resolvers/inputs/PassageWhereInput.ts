import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PassageWhereInput", {
  isAbstract: true
})
export class PassageWhereInput {
  @TypeGraphQL.Field(_type => [PassageWhereInput], {
    nullable: true
  })
  AND?: PassageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PassageWhereInput], {
    nullable: true
  })
  OR?: PassageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PassageWhereInput], {
    nullable: true
  })
  NOT?: PassageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  header?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  content?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PostRelationFilter, {
    nullable: true
  })
  Post?: PostRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  postId?: IntFilter | undefined;
}
