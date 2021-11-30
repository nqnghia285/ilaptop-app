import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostUpdateWithoutLaptopsInput } from "../inputs/PostUpdateWithoutLaptopsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateWithWhereUniqueWithoutLaptopsInput", {
  isAbstract: true
})
export class PostUpdateWithWhereUniqueWithoutLaptopsInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUpdateWithoutLaptopsInput, {
    nullable: false
  })
  data!: PostUpdateWithoutLaptopsInput;
}
