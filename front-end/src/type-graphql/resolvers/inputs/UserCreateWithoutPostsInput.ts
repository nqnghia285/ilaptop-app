import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateNestedOneWithoutUserInput } from "../inputs/PersonCreateNestedOneWithoutUserInput";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType("UserCreateWithoutPostsInput", {
  isAbstract: true
})
export class UserCreateWithoutPostsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  role?: "ADMIN" | "STAFF" | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => PersonCreateNestedOneWithoutUserInput, {
    nullable: false
  })
  profile!: PersonCreateNestedOneWithoutUserInput;
}
