import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutLaptopsInput } from "../inputs/PostCreateOrConnectWithoutLaptopsInput";
import { PostCreateWithoutLaptopsInput } from "../inputs/PostCreateWithoutLaptopsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateNestedManyWithoutLaptopsInput", {
  isAbstract: true
})
export class PostCreateNestedManyWithoutLaptopsInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutLaptopsInput], {
    nullable: true
  })
  create?: PostCreateWithoutLaptopsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutLaptopsInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutLaptopsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;
}
