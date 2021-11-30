import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PassageCreateWithoutPostInput } from "../inputs/PassageCreateWithoutPostInput";
import { PassageWhereUniqueInput } from "../inputs/PassageWhereUniqueInput";

@TypeGraphQL.InputType("PassageCreateOrConnectWithoutPostInput", {
  isAbstract: true
})
export class PassageCreateOrConnectWithoutPostInput {
  @TypeGraphQL.Field(_type => PassageWhereUniqueInput, {
    nullable: false
  })
  where!: PassageWhereUniqueInput;

  @TypeGraphQL.Field(_type => PassageCreateWithoutPostInput, {
    nullable: false
  })
  create!: PassageCreateWithoutPostInput;
}
