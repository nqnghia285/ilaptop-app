import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutLaptopsInput } from "../inputs/PostCreateWithoutLaptopsInput";
import { PostUpdateWithoutLaptopsInput } from "../inputs/PostUpdateWithoutLaptopsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpsertWithWhereUniqueWithoutLaptopsInput", {
  isAbstract: true
})
export class PostUpsertWithWhereUniqueWithoutLaptopsInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUpdateWithoutLaptopsInput, {
    nullable: false
  })
  update!: PostUpdateWithoutLaptopsInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutLaptopsInput, {
    nullable: false
  })
  create!: PostCreateWithoutLaptopsInput;
}
