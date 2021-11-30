import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutPassagesInput } from "../inputs/PostCreateWithoutPassagesInput";
import { PostUpdateWithoutPassagesInput } from "../inputs/PostUpdateWithoutPassagesInput";

@TypeGraphQL.InputType("PostUpsertWithoutPassagesInput", {
  isAbstract: true
})
export class PostUpsertWithoutPassagesInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutPassagesInput, {
    nullable: false
  })
  update!: PostUpdateWithoutPassagesInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutPassagesInput, {
    nullable: false
  })
  create!: PostCreateWithoutPassagesInput;
}
