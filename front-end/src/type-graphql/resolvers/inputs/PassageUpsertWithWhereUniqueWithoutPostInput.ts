import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PassageCreateWithoutPostInput } from "../inputs/PassageCreateWithoutPostInput";
import { PassageUpdateWithoutPostInput } from "../inputs/PassageUpdateWithoutPostInput";
import { PassageWhereUniqueInput } from "../inputs/PassageWhereUniqueInput";

@TypeGraphQL.InputType("PassageUpsertWithWhereUniqueWithoutPostInput", {
  isAbstract: true
})
export class PassageUpsertWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => PassageWhereUniqueInput, {
    nullable: false
  })
  where!: PassageWhereUniqueInput;

  @TypeGraphQL.Field(_type => PassageUpdateWithoutPostInput, {
    nullable: false
  })
  update!: PassageUpdateWithoutPostInput;

  @TypeGraphQL.Field(_type => PassageCreateWithoutPostInput, {
    nullable: false
  })
  create!: PassageCreateWithoutPostInput;
}
