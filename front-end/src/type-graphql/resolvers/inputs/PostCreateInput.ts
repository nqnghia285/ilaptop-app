import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LaptopCreateNestedManyWithoutPostsInput } from "../inputs/LaptopCreateNestedManyWithoutPostsInput";
import { PassageCreateNestedManyWithoutPostInput } from "../inputs/PassageCreateNestedManyWithoutPostInput";
import { UserCreateNestedOneWithoutPostInput } from "../inputs/UserCreateNestedOneWithoutPostInput";

@TypeGraphQL.InputType("PostCreateInput", {
  isAbstract: true
})
export class PostCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => PassageCreateNestedManyWithoutPostInput, {
    nullable: true
  })
  passages?: PassageCreateNestedManyWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => LaptopCreateNestedManyWithoutPostsInput, {
    nullable: true
  })
  laptops?: LaptopCreateNestedManyWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPostInput, {
    nullable: false
  })
  author!: UserCreateNestedOneWithoutPostInput;
}
