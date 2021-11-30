import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutPassagesInput } from "../inputs/PostCreateOrConnectWithoutPassagesInput";
import { PostCreateWithoutPassagesInput } from "../inputs/PostCreateWithoutPassagesInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateNestedOneWithoutPassagesInput", {
  isAbstract: true
})
export class PostCreateNestedOneWithoutPassagesInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutPassagesInput, {
    nullable: true
  })
  create?: PostCreateWithoutPassagesInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutPassagesInput, {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutPassagesInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  connect?: PostWhereUniqueInput | undefined;
}
