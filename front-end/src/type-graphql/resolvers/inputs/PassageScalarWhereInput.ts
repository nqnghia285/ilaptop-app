import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PassageScalarWhereInput", {
  isAbstract: true
})
export class PassageScalarWhereInput {
  @TypeGraphQL.Field(_type => [PassageScalarWhereInput], {
    nullable: true
  })
  AND?: PassageScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PassageScalarWhereInput], {
    nullable: true
  })
  OR?: PassageScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PassageScalarWhereInput], {
    nullable: true
  })
  NOT?: PassageScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  postId?: IntFilter | undefined;
}
