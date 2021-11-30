import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutLaptopsInput } from "../inputs/PostCreateWithoutLaptopsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateOrConnectWithoutLaptopsInput", {
  isAbstract: true
})
export class PostCreateOrConnectWithoutLaptopsInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutLaptopsInput, {
    nullable: false
  })
  create!: PostCreateWithoutLaptopsInput;
}
