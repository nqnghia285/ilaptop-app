import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedOneWithoutPassagesInput } from "../inputs/PostCreateNestedOneWithoutPassagesInput";

@TypeGraphQL.InputType("PassageCreateInput", {
  isAbstract: true
})
export class PassageCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  header!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutPassagesInput, {
    nullable: false
  })
  Post!: PostCreateNestedOneWithoutPassagesInput;
}
